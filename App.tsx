import React, { useState, useEffect, useCallback } from 'react';
import { Difficulty, Lesson } from './types';
import { LESSONS } from './constants';
import DifficultySelector from './components/DifficultySelector';
import LessonDisplay from './components/LessonDisplay';
import Piano from './components/Piano';
import { playNote, setVolume } from './audio';
import VolumeSlider from './components/VolumeSlider';
import ArrowLeftIcon from './components/icons/ArrowLeftIcon';

const App: React.FC = () => {
    const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
    const [volume, setAppVolume] = useState(0.5);
    const [isPlayingLesson, setIsPlayingLesson] = useState(false);

    useEffect(() => {
        const storedVolume = localStorage.getItem('riyaz-piano-volume');
        if (storedVolume) {
            const parsedVolume = parseFloat(storedVolume);
            setAppVolume(parsedVolume);
            setVolume(parsedVolume);
        }
    }, []);

    const handleVolumeChange = (newVolume: number) => {
        setAppVolume(newVolume);
        setVolume(newVolume);
        localStorage.setItem('riyaz-piano-volume', newVolume.toString());
    };
    
    const handleDifficultySelect = (selectedDifficulty: Difficulty) => {
        setDifficulty(selectedDifficulty);
        setSelectedLesson(null);
        setCurrentNoteIndex(0);
    };

    const handleLessonSelect = (lesson: Lesson) => {
        setSelectedLesson(lesson);
        setCurrentNoteIndex(0);
        setIsPlayingLesson(false);
    };

    const handleKeyPress = (note: string) => {
        playNote(note);
        if (selectedLesson && !isPlayingLesson) {
            const correctNote = selectedLesson.notes[currentNoteIndex];
            if (note === correctNote.western) {
                if (currentNoteIndex < selectedLesson.notes.length - 1) {
                    setCurrentNoteIndex(currentNoteIndex + 1);
                } else {
                    // Lesson complete
                    alert("Congratulations! You completed the lesson.");
                    setCurrentNoteIndex(0);
                }
            } else {
                // Wrong note, reset progress
                setCurrentNoteIndex(0); 
            }
        }
    };
    
    const resetProgress = () => {
        setCurrentNoteIndex(0);
        setIsPlayingLesson(false);
    };

    const playLesson = useCallback(() => {
      if (!selectedLesson) return;
      
      setIsPlayingLesson(true);
      setCurrentNoteIndex(0);

      selectedLesson.notes.forEach((note, index) => {
        setTimeout(() => {
            setCurrentNoteIndex(index);
            playNote(note.western, 0.4);
            if (index === selectedLesson.notes.length - 1) {
              setTimeout(() => {
                setIsPlayingLesson(false);
                setCurrentNoteIndex(0);
              }, 500);
            }
        }, index * 500);
      });
    }, [selectedLesson]);
    
    const highlightedKey = selectedLesson 
      ? selectedLesson.notes[currentNoteIndex]?.western 
      : null;
    
    const practiceHighlightKey = !isPlayingLesson && selectedLesson 
      ? selectedLesson.notes[currentNoteIndex]?.western 
      : null;

    if (!difficulty) {
        return (
          <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <DifficultySelector onSelect={handleDifficultySelect} />
          </div>
        );
    }
    
    const lessonsForDifficulty = LESSONS[difficulty];

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
          <header className="w-full max-w-6xl mx-auto flex justify-between items-center p-4">
              <h1 className="text-3xl font-bold">Riyaz Piano</h1>
              <div className="flex items-center gap-4">
                <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
                <button 
                  onClick={() => setDifficulty(null)} 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                  aria-label="Back to difficulty selection"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  Back
                </button>
              </div>
          </header>

          <main className="w-full max-w-6xl mx-auto flex flex-col items-center">
            <div className="mb-6">
              <h2 className="text-2xl mb-4 text-center">Select a lesson for <span className="font-bold text-yellow-400">{difficulty}</span></h2>
              <div className="flex flex-wrap justify-center gap-2">
                {lessonsForDifficulty.map(lesson => (
                  <button key={lesson.id} onClick={() => handleLessonSelect(lesson)} className={`px-4 py-2 rounded-lg transition ${selectedLesson?.id === lesson.id ? 'bg-yellow-500 text-gray-900 font-bold' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    {lesson.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedLesson && (
              <>
                <LessonDisplay lesson={selectedLesson} currentNoteIndex={currentNoteIndex} />
                <div className="flex gap-4 my-4">
                    <button onClick={playLesson} disabled={isPlayingLesson} className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-500 disabled:bg-gray-500 transition">
                      {isPlayingLesson ? 'Playing...' : 'Play Lesson'}
                    </button>
                    <button onClick={resetProgress} className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition">
                      Reset
                    </button>
                </div>
              </>
            )}

            <div className="mt-8">
              <Piano onKeyPress={handleKeyPress} highlightedKey={isPlayingLesson ? highlightedKey : practiceHighlightKey} />
            </div>
          </main>
        </div>
    );
};

export default App;
