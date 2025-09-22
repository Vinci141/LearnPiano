import { Difficulty, LessonsByDifficulty, Note } from './types';

const C4: Note = { sargam: 'Sa', western: 'C4', hindi: 'सा' };
const Cs4: Note = { sargam: 're', western: 'C#4', hindi: 'रे♭' };
const D4: Note = { sargam: 'Re', western: 'D4', hindi: 'रे' };
const Ds4: Note = { sargam: 'ga', western: 'D#4', hindi: 'ग♭' };
const E4: Note = { sargam: 'Ga', western: 'E4', hindi: 'ग' };
const F4: Note = { sargam: 'Ma', western: 'F4', hindi: 'म' };
const Fs4: Note = { sargam: 'ma', western: 'F#4', hindi: 'म तीव्र' };
const G4: Note = { sargam: 'Pa', western: 'G4', hindi: 'प' };
const Gs4: Note = { sargam: 'dha', western: 'G#4', hindi: 'ध♭' };
const A4: Note = { sargam: 'Dha', western: 'A4', hindi: 'ध' };
const As4: Note = { sargam: 'ni', western: 'A#4', hindi: 'नि♭' };
const B4: Note = { sargam: 'Ni', western: 'B4', hindi: 'नि' };
const C5: Note = { sargam: 'Sa\'', western: 'C5', hindi: 'सां' };

export const LESSONS: LessonsByDifficulty = {
  [Difficulty.BEGINNER]: [
    {
      id: 'b1',
      name: 'Bilawal Aaroha (Ascending)',
      description: 'The basic ascending scale in Indian music, similar to C Major.',
      notes: [C4, D4, E4, F4, G4, A4, B4, C5],
    },
    {
      id: 'b2',
      name: 'Bilawal Avaroha (Descending)',
      description: 'The basic descending scale in Indian music.',
      notes: [C5, B4, A4, G4, F4, E4, D4, C4],
    },
    {
      id: 'b3',
      name: 'Simple Melody',
      description: 'Practice a simple, recognizable tune using Sargam notes.',
      notes: [E4, D4, C4, D4, E4, E4, E4, D4, D4, D4, E4, G4, G4],
    },
  ],
  [Difficulty.INTERMEDIATE]: [
    {
      id: 'i1',
      name: 'Alankar 1',
      description: 'A simple melodic pattern to practice finger movement.',
      notes: [C4, D4, E4, D4, E4, F4, E4, F4, G4, F4, G4, A4, G4, A4, B4, A4, B4, C5],
    },
     {
      id: 'i2',
      name: 'Twinkle Twinkle',
      description: 'A familiar tune to practice with Sargam notes.',
      notes: [C4, C4, G4, G4, A4, A4, G4, F4, F4, E4, E4, D4, D4, C4],
    },
  ],
  [Difficulty.ADVANCED]: [
    {
      id: 'a1',
      name: 'Bhairav Scale',
      description: 'A morning raga scale with flat Re (re) and Dha (dha).',
      notes: [C4, Cs4, E4, F4, G4, Gs4, B4, C5, B4, Gs4, G4, F4, E4, Cs4, C4],
    },
     {
      id: 'a2',
      name: 'Fast Pattern',
      description: 'A quicker pattern to test your speed and accuracy.',
      notes: [C4, E4, G4, C5, B4, G4, E4, C4, D4, F4, A4, C5, B4, A4, F4, D4],
    },
    {
      id: 'a3',
      name: 'Raga Yaman Scale',
      description: 'An evening raga using a sharp Ma (ma). Practice ascending & descending.',
      notes: [C4, D4, E4, Fs4, G4, A4, B4, C5, C5, B4, A4, G4, Fs4, E4, D4, C4],
    },
    {
      id: 'a4',
      name: 'Raga Todi Scale',
      description: 'A morning raga with komal (flat) re, ga, dha and tivra (sharp) ma.',
      notes: [C4, Cs4, Ds4, Fs4, G4, Gs4, B4, C5, C5, B4, Gs4, G4, Fs4, Ds4, Cs4, C4],
    },
  ],
};

export const PIANO_KEYS_CONFIG = [
  { note: 'C4', keyboard: 'a', type: 'white' },
  { note: 'C#4', keyboard: 'w', type: 'black' },
  { note: 'D4', keyboard: 's', type: 'white' },
  { note: 'D#4', keyboard: 'e', type: 'black' },
  { note: 'E4', keyboard: 'd', type: 'white' },
  { note: 'F4', keyboard: 'f', type: 'white' },
  { note: 'F#4', keyboard: 't', type: 'black' },
  { note: 'G4', keyboard: 'g', type: 'white' },
  { note: 'G#4', keyboard: 'y', type: 'black' },
  { note: 'A4', keyboard: 'h', type: 'white' },
  { note: 'A#4', keyboard: 'u', type: 'black' },
  { note: 'B4', keyboard: 'j', type: 'white' },
  { note: 'C5', keyboard: 'k', type: 'white' },
];