let audioContext: AudioContext;
let mainGainNode: GainNode;

const noteFrequencies: { [key:string]: number } = {
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63,
  'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00,
  'A#4': 466.16, 'B4': 493.88, 'C5': 523.25
};

const initAudio = () => {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            mainGainNode = audioContext.createGain();
            mainGainNode.connect(audioContext.destination);
            setVolume(0.5); // Default volume
        } catch (e) {
            console.error("Web Audio API is not supported in this browser");
        }
    }
};

export const playNote = (note: string, duration = 0.5) => {
    initAudio();
    if (!audioContext || !mainGainNode || !noteFrequencies[note]) return;
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(noteFrequencies[note], audioContext.currentTime);

    const envelope = audioContext.createGain();
    const now = audioContext.currentTime;

    envelope.connect(mainGainNode);
    envelope.gain.setValueAtTime(0, now);
    envelope.gain.linearRampToValueAtTime(0.7, now + 0.01); // attack
    envelope.gain.linearRampToValueAtTime(0, now + duration); // decay/release

    oscillator.connect(envelope);
    oscillator.start(now);
    oscillator.stop(now + duration);
};

export const setVolume = (volume: number) => {
    initAudio();
    if (mainGainNode) {
        mainGainNode.gain.setValueAtTime(volume, audioContext!.currentTime);
    }
};
