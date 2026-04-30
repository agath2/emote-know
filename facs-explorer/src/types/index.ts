export interface AUData {
  fac_name: string;
  muscular_basis: string[];
  region: Region;
}

export interface EmotionData {
  label: string;
  aus: number[];
  description: string;
  appraisal: string;
}

export type Region =
  | 'brow_inner'
  | 'brow_outer'
  | 'upper_lid'
  | 'cheek'
  | 'nose'
  | 'upper_lip'
  | 'lip_corner'
  | 'lower_lip'
  | 'jaw';

export type EmotionKey = 'joy' | 'sadness' | 'fear' | 'anger' | 'disgust' | 'surprise';

export interface AUCardProps {
  auNumber: number;
  auData: AUData;
  isActive: boolean;
  isFocused: boolean;
  onClick: (auNumber: number) => void;
}

export interface SVGOverlayProps {
  activeRegions: Region[];
  focusedRegion: Region | null;
  onRegionClick: (region: Region) => void;
}

export interface EmotionSelectorProps {
  selectedEmotion: EmotionKey | null;
  onSelectEmotion: (emotion: EmotionKey) => void;
}
