
import React from 'react';
import { Difficulty } from '../types';
import MusicNoteIcon from './icons/MusicNoteIcon';

interface DifficultySelectorProps {
  onSelect: (difficulty: Difficulty) => void;
}

const difficultyOptions = [
  { level: Difficulty.BEGINNER, color: 'from-green-400 to-blue-500', description: 'Start with the basics. Learn simple scales and notes.' },
  { level: Difficulty.INTERMEDIATE, color: 'from-yellow-400 to-orange-500', description: 'Practice melodic patterns and simple tunes.' },
  { level: Difficulty.ADVANCED, color: 'from-red-500 to-purple-600', description: 'Challenge yourself with complex ragas and faster patterns.' },
];


const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-2">Welcome to Riyaz Piano</h2>
      <p className="text-lg text-gray-300 mb-12">Select your skill level to begin your musical journey.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {difficultyOptions.map(({level, color, description}) => (
           <button
            key={level}
            onClick={() => onSelect(level)}
            className={`group relative p-8 rounded-xl bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 shadow-lg text-white transform hover:-translate-y-2 transition-transform duration-300 ease-in-out overflow-hidden`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} transition-all duration-300 transform scale-x-0 group-hover:scale-x-100`}></div>
            <MusicNoteIcon className="w-16 h-16 mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors duration-300"/>
            <h3 className="text-2xl font-semibold mb-2">{level}</h3>
            <p className="text-gray-400 font-light">{description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
