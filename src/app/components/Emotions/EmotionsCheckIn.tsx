// src/ui/emotions/EmotionCheckIn.tsx
import { EMOTIONS, EmotionKey } from './emotions.data';
import { useEmotionsContext } from './EmotionContext';

const EMOTION_ORDER: EmotionKey[] = ['down', 'sleepy', 'irritated', 'energy'];

export const EmotionCheckIn = () => {
  const { saveEmotion } = useEmotionsContext();
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-3 text-center">
        ¿Cómo te sentiste hoy?
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {EMOTION_ORDER.map((key) => {
          const emotion = EMOTIONS[key];
          return (
            <button
              key={key}
              onClick={() => saveEmotion(today, key)}
              className={`p-5 rounded-2xl text-white flex flex-col items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 ${emotion.color}`}
            >
              <span className="text-4xl">{emotion.emoji}</span>
              <span className="text-sm font-bold mt-1">{emotion.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
