
import React, { useState, useEffect, useCallback } from 'react';
import PianoKey from './PianoKey';
import { PIANO_KEYS_CONFIG } from '../constants';

interface PianoProps {
  onKeyPress: (note: string) => void;
  highlightedKey: string | null;
}

const Piano: React.FC<PianoProps> = ({ onKeyPress, highlightedKey }) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if(event.repeat) return;
    const keyConfig = PIANO_KEYS_CONFIG.find(k => k.keyboard === event.key);
    if (keyConfig) {
      onKeyPress(keyConfig.note);
      setPressedKeys(prev => new Set(prev).add(keyConfig.note));
    }
  }, [onKeyPress]);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    const keyConfig = PIANO_KEYS_CONFIG.find(k => k.keyboard === event.key);
    if (keyConfig) {
       setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(keyConfig.note);
        return newSet;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className="flex justify-center p-4 bg-gray-900 rounded-lg shadow-2xl">
      {PIANO_KEYS_CONFIG.map(({ note, keyboard, type }) => (
        <PianoKey
          key={note}
          note={note}
          keyboardKey={keyboard}
          type={type}
          isHighlighted={highlightedKey === note}
          isPressed={pressedKeys.has(note)}
          onKeyPress={onKeyPress}
        />
      ))}
    </div>
  );
};

export default Piano;
