
import React from 'react';
import { Lesson } from '../types';

interface LessonDisplayProps {
  lesson: Lesson;
  currentNoteIndex: number;
}

const LessonDisplay: React.FC<LessonDisplayProps> = ({ lesson, currentNoteIndex }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-900 bg-opacity-40 rounded-lg border border-gray-700 mb-6">
       <h3 className="text-2xl font-bold text-white mb-1 text-center">{lesson.name}</h3>
       <p className="text-center text-gray-400 mb-4">{lesson.description}</p>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {lesson.notes.map((note, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-20 h-24 rounded-lg shadow-md transition-all duration-300 ease-in-out transform ${
              index === currentNoteIndex
                ? 'bg-yellow-500 scale-110 border-2 border-yellow-300'
                : 'bg-gray-700 border border-gray-600'
            }`}
          >
            <span className="text-3xl font-bold font-hindi text-white">
              {note.hindi}
            </span>
            <span className="text-lg font-semibold text-gray-200">{note.sargam}</span>
            <span className="text-xs text-gray-400">{note.western}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonDisplay;
