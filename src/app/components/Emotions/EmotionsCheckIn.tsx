// src/ui/emotions/EmotionCheckIn.tsx
import { EMOTIONS, EmotionKey } from './emotions.data';
import { useEmotions } from './useEmotions';

export const EmotionCheckIn = () => {
  const { saveEmotion } = useEmotions();
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        ¿Cómo te sientes hoy?
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(EMOTIONS).map(([key, emotion]) => (
          <button
            key={key}
            onClick={() => saveEmotion(today, key as EmotionKey)}
            className={`p-4 rounded-xl text-white flex flex-col items-center ${emotion.color}`}
          >
            <span className="text-3xl">{emotion.emoji}</span>
            <span className="text-sm">{emotion.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
