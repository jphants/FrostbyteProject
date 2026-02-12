// src/ui/emotions/MonthlyEmotionGauge.tsx
import { EMOTIONS, EmotionKey } from './emotions.data';
import { useEmotionsContext } from './EmotionContext';


const EMOTION_ORDER: EmotionKey[] = ['down', 'sleepy', 'irritated', 'energy'];

export const MonthlyEmotionGauge = () => {
  const { getMonthlyStats } = useEmotionsContext();
  const now = new Date();

  const { counts, dominant } = getMonthlyStats(
    now.getFullYear(),
    now.getMonth()
  );

  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;

  const percentages = EMOTION_ORDER.map(key => ({
    key,
    percent: Math.round((counts[key] / total) * 100),
    ...EMOTIONS[key],
  }));

  const dominantIndex = dominant
    ? EMOTION_ORDER.indexOf(dominant)
    : 0;

  const angle = (dominantIndex / (EMOTION_ORDER.length - 1)) * 180;

  return (
    <div className="p-6 rounded-2xl shadow-xl mb-6 bg-white border-2 border-gray-200">
      <h3 className="text-center text-lg font-extrabold mb-4">
        Controlador emocional mensual
      </h3>

      {/* Velocímetro */}
      <div className="relative w-full max-w-md mx-auto h-52">
        {/* Arco */}
        <div className="absolute inset-0 flex">
          {percentages.map((e) => (
            <div
              key={e.key}
              className={`${e.color} flex-1 flex flex-col justify-end items-center text-white text-xs font-bold`}
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 80% 0, 20% 0)',
              }}
            >
              <span className="mb-1 text-lg">{e.emoji}</span>
              <span className="mb-2">{e.percent}%</span>
            </div>
          ))}
        </div>

        {/* Aguja */}
        <div
          className="absolute bottom-0 left-1/2 w-1 h-40 bg-black origin-bottom transition-transform duration-700"
          style={{
            transform: `rotate(${angle - 90}deg)`,
          }}
        />

        {/* Centro */}
        <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-black rounded-full transform -translate-x-1/2" />
      </div>

      {/* Leyenda */}
      <div className="grid grid-cols-2 gap-3 mt-6 text-sm font-semibold">
        {percentages.map(e => (
          <div key={e.key} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${e.color}`} />
            <span>{e.label} — {e.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
