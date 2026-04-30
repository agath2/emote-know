import { useFACS } from './hooks/useFACS';
import { EmotionSelector } from './components/EmotionSelector';
import { FaceViewer } from './components/FaceViewer';
import { AUCard } from './components/AUCard';
import emotionData from './data/emotion-facs.json';
import auData from './data/au-facs.json';
import type { AUData, EmotionData } from './types';

const typedAUData = auData as Record<string, AUData>;
const typedEmotionData = emotionData as Record<string, EmotionData>;

export default function App() {
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
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">

      {/* Header */}
      <header className="py-8 text-center border-b border-stone-200">
        <h1 className="text-3xl font-bold tracking-tight">FACS Explorer</h1>
        <p className="text-stone-500 mt-1 text-sm">
          Facial Action Coding System — Ekman & Friesen (1978)
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-10">

        {/* Emotion selector */}
        <EmotionSelector
          selectedEmotion={selectedEmotion}
          onSelectEmotion={selectEmotion}
        />

        {/* Face + AU cards */}
        <div className="flex gap-8 items-start justify-center">

          {/* Left AU cards */}
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

          {/* Face viewer */}
          <FaceViewer
            activeRegions={activeRegions}
            focusedRegion={focusedRegion}
            onRegionClick={clickRegion}
          />

          {/* Right AU cards */}
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

        {/* Emotion description panel */}
        {currentEmotion && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold capitalize mb-2">{currentEmotion.label}</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-3">
              {currentEmotion.description}
            </p>
            <div className="text-xs text-stone-400 italic border-t border-stone-100 pt-3">
              <span className="font-semibold not-italic text-stone-500">Appraisal: </span>
              {currentEmotion.appraisal}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!selectedEmotion && (
          <p className="text-center text-stone-400 text-sm">
            Select an emotion above to explore its action units.
          </p>
        )}

      </main>

      <footer className="text-center text-xs text-stone-400 py-6 border-t border-stone-100">
        Face image: Ekman & Friesen (2003). <em>Unmasking the Face.</em> Malor Books.
      </footer>
    </div>
  );
}
