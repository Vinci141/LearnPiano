import React from 'react';
import VolumeIcon from './icons/VolumeIcon';

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({ volume, onVolumeChange }) => {
  return (
    <div className="flex items-center gap-2">
      <VolumeIcon volume={volume} className="w-6 h-6 text-white" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
        className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
      />
    </div>
  );
};

export default VolumeSlider;
