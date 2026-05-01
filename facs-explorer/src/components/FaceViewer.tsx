import { SVGOverlay } from './SVGOverlay';
import type { Region, EmotionKey } from '../types/index';

interface FaceViewerProps {
  selectedEmotion: EmotionKey | null;
  activeRegions: Region[];
  focusedRegion: Region | null;
  onRegionClick: (region: Region) => void;
}

export function FaceViewer({ selectedEmotion, activeRegions, focusedRegion, onRegionClick }: FaceViewerProps) {
  const imageSrc = selectedEmotion
    ? `/faces/${selectedEmotion}.jpg`
    : `/faces/joy.jpg`; // fallback before any emotion is selected

  return (
    <div className="relative w-[300px] h-[350px] mx-auto select-none">
      <img
        key={imageSrc} // forces re-render on emotion change
        src={imageSrc}
        alt={selectedEmotion ?? 'neutral face'}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        draggable={false}
      />
      <SVGOverlay
        activeRegions={activeRegions}
        focusedRegion={focusedRegion}
        onRegionClick={onRegionClick}
      />
    </div>
  );
}
