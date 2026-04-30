import { SVGOverlay } from './SVGOverlay';
import type { Region } from '../types/index';

// TODO: replace with your actual cropped face image import
// import faceImage from '../assets/face.png';

interface FaceViewerProps {
  activeRegions: Region[];
  focusedRegion: Region | null;
  onRegionClick: (region: Region) => void;
}

export function FaceViewer({ activeRegions, focusedRegion, onRegionClick }: FaceViewerProps) {
  return (
    <div className="relative w-[300px] h-[350px] mx-auto select-none">
      {/* Face image — swap src when you have the asset */}
      <img
        src="/face.png"
        alt="Facial expression reference"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        draggable={false}
      />

      {/* SVG hotspot overlay */}
      <SVGOverlay
        activeRegions={activeRegions}
        focusedRegion={focusedRegion}
        onRegionClick={onRegionClick}
      />
    </div>
  );
}
