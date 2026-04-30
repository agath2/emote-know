import type { EmotionSelectorProps, EmotionKey } from '../types/index';

const EMOTIONS: { key: EmotionKey; emoji: string }[] = [
  { key: 'joy',      emoji: '😄' },
  { key: 'sadness',  emoji: '😢' },
  { key: 'fear',     emoji: '😨' },
  { key: 'anger',    emoji: '😠' },
  { key: 'disgust',  emoji: '🤢' },
  { key: 'surprise', emoji: '😲' },
];

export function EmotionSelector({ selectedEmotion, onSelectEmotion }: EmotionSelectorProps) {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {EMOTIONS.map(({ key, emoji }) => (
        <button
          key={key}
          onClick={() => onSelectEmotion(key)}
          className={`
            px-4 py-2 rounded-full capitalize font-medium transition-all
            ${selectedEmotion === key
              ? 'bg-stone-800 text-white scale-105'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}
          `}
        >
          {emoji} {key}
        </button>
      ))}
    </div>
  );
}
