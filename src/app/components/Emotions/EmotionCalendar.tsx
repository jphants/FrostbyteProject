// src/ui/emotions/EmotionCalendar.tsx
import { EMOTIONS } from './emotions.data';
import { useEmotions } from './useEmotions';

export const EmotionCalendar = () => {
  const { emotions } = useEmotions();
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Estado emocional del mes
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const emotionKey = emotions[dateKey];
          const emotion = emotionKey ? EMOTIONS[emotionKey] : null;

          return (
            <div
              key={day}
              className={`h-10 flex items-center justify-center rounded-md text-white
                ${emotion ? emotion.color : 'bg-gray-100 text-gray-400'}`}
            >
              {emotion ? emotion.emoji : day}
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Leyenda</h3>
        <div className="flex flex-wrap gap-3">
          {Object.values(EMOTIONS).map(e => (
            <div key={e.label} className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded ${e.color}`}></span>
              <span className="text-sm">{e.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
