
import React from 'react';

interface PianoKeyProps {
  note: string;
  keyboardKey: string;
  type: 'white' | 'black';
  isHighlighted: boolean;
  isPressed: boolean;
  onKeyPress: (note: string) => void;
}

const PianoKey: React.FC<PianoKeyProps> = ({ note, keyboardKey, type, isHighlighted, isPressed, onKeyPress }) => {
  const baseClasses = 'relative border-2 rounded-b-md flex items-end justify-center transition-all duration-100';
  
  const whiteKeyClasses = `h-48 w-16 bg-white border-gray-300 text-gray-800 ${isPressed ? 'bg-gray-200 transform translate-y-1' : ''} ${isHighlighted ? '!bg-yellow-300 shadow-lg shadow-yellow-400/50' : ''}`;
  
  const blackKeyClasses = `h-28 w-10 bg-gray-800 border-gray-900 text-white z-10 -ml-5 -mr-5 ${isPressed ? 'bg-gray-700 h-28' : ''} ${isHighlighted ? '!bg-yellow-500 shadow-lg shadow-yellow-500/50' : ''}`;

  return (
    <div
      onMouseDown={() => onKeyPress(note)}
      className={`${baseClasses} ${type === 'white' ? whiteKeyClasses : blackKeyClasses}`}
    >
        <span className="font-bold text-sm uppercase">{keyboardKey}</span>
    </div>
  );
};

export default PianoKey;
