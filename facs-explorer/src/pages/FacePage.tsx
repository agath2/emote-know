import { useFACS } from '../hooks/useFACS';
import { EmotionSelector } from '../components/EmotionSelector';
import { FaceViewer } from '../components/FaceViewer';
import { AUCard } from '../components/AUCard';
import emotionData from '../data/emotion-facs.json';
import auData from '../data/au-facs.json';
import type { AUData, EmotionData } from '../types';

const typedAUData = auData as Record<string, AUData>;
const typedEmotionData = emotionData as Record<string, EmotionData>;

export function FacePage() {
  const {
    selectedEmotion,
    activeAUs,
    activeRegions,
    focusedRegion,
    focusedAUs,
    selectEmotion,
    clickRegion,
  } = useFACS();

  const currentEmotion = selectedEmotion ? typedEmotionData[selectedEmotion] : null;

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-10">
      <EmotionSelector
        selectedEmotion={selectedEmotion}
        onSelectEmotion={selectEmotion}
      />
      <div className="flex gap-8 items-start justify-center">
        <div className="flex flex-col gap-3 w-52">
          {activeAUs.slice(0, Math.ceil(activeAUs.length / 2)).map((au) => (
            <AUCard
              key={au}
              auNumber={au}
              auData={typedAUData[String(au)]}
              isActive={true}
              isFocused={focusedAUs.includes(au)}
              onClick={() => {
                const region = typedAUData[String(au)]?.region;
                if (region) clickRegion(region);
              }}
            />
          ))}
        </div>
        <FaceViewer
          selectedEmotion={selectedEmotion}
          activeRegions={activeRegions}
          focusedRegion={focusedRegion}
          onRegionClick={clickRegion}
        />
        <div className="flex flex-col gap-3 w-52">
          {activeAUs.slice(Math.ceil(activeAUs.length / 2)).map((au) => (
            <AUCard
              key={au}
              auNumber={au}
              auData={typedAUData[String(au)]}
              isActive={true}
              isFocused={focusedAUs.includes(au)}
              onClick={() => {
                const region = typedAUData[String(au)]?.region;
                if (region) clickRegion(region);
              }}
            />
          ))}
        </div>
      </div>
      {currentEmotion && (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold capitalize mb-2">{currentEmotion.label}</h2>
          <p className="text-stone-600 text-sm leading-relaxed mb-3">{currentEmotion.description}</p>
          <div className="text-xs text-stone-400 italic border-t border-stone-100 pt-3">
            <span className="font-semibold not-italic text-stone-500">Appraisal: </span>
            {currentEmotion.appraisal}
          </div>
        </div>
      )}
      {!selectedEmotion && (
        <p className="text-center text-stone-400 text-md">
          Hi there! Select an emotion above to explore its action units.
        </p>
      )}
    </main>
  );
}