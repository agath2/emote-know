import { useState, useMemo } from 'react';
import emotionData from '../data/emotion-facs.json';
import auData from '../data/au-facs.json';
import type { EmotionKey, Region } from '../types/index';

export function useFACS() {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionKey | null>(null);
  const [focusedRegion, setFocusedRegion] = useState<Region | null>(null);

  // AUs active for the selected emotion
  const activeAUs = useMemo<number[]>(() => {
    if (!selectedEmotion) return [];
    return (emotionData as Record<string, { aus: number[] }>)[selectedEmotion]?.aus ?? [];
  }, [selectedEmotion]);

  // Regions that have at least one active AU
  const activeRegions = useMemo<Region[]>(() => {
    const regions = activeAUs.map(
      (au) => (auData as Record<string, { region: Region }>)[String(au)]?.region
    );
    return [...new Set(regions.filter(Boolean))];
  }, [activeAUs]);

  // AUs belonging to the currently focused region
  const focusedAUs = useMemo<number[]>(() => {
    if (!focusedRegion) return [];
    return activeAUs.filter(
      (au) => (auData as Record<string, { region: Region }>)[String(au)]?.region === focusedRegion
    );
  }, [focusedRegion, activeAUs]);

  function selectEmotion(emotion: EmotionKey) {
    setSelectedEmotion(emotion);
    setFocusedRegion(null);
  }

  function clickRegion(region: Region) {
    // Toggle focus: clicking the same region twice deselects it
    setFocusedRegion((prev) => (prev === region ? null : region));
  }

  return {
    selectedEmotion,
    activeAUs,
    activeRegions,
    focusedRegion,
    focusedAUs,
    selectEmotion,
    clickRegion,
  };
}
