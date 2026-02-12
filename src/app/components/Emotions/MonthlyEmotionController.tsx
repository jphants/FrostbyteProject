// MonthlyEmotionGauge.tsx
import { EMOTIONS, EmotionKey } from './emotions.data';
import { useEmotionsContext } from './EmotionContext';

const ORDER: EmotionKey[] = ['down', 'irritated', 'sleepy', 'energy'];

export const MonthlyEmotionGauge = () => {
  const { getMonthlyStats } = useEmotionsContext();
  const now = new Date();

  const { counts, dominant } = getMonthlyStats(now.getFullYear(), now.getMonth());

  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;

  let cumulative = 0;

  const segments = ORDER.map((key) => {
    const value = counts[key];
    const percent = value / total;
    const start = cumulative;
    cumulative += percent;
    return { key, value, percent, start, emotion: EMOTIONS[key] };
  });

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h3 className="text-lg font-bold mb-4">Controlador emocional mensual</h3>

      <svg width="260" height="160" viewBox="0 0 260 160">
        {/* background semicircle */}
        <path
          d="M 20 140 A 110 110 0 0 1 240 140"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="22"
        />

        {segments.map((seg, i) => {
          const startAngle = Math.PI * (1 + seg.start);
          const endAngle = startAngle + Math.PI * seg.percent;

          const r = 110;
          const cx = 130;
          const cy = 140;

          const x1 = cx + r * Math.cos(startAngle);
          const y1 = cy + r * Math.sin(startAngle);
          const x2 = cx + r * Math.cos(endAngle);
          const y2 = cy + r * Math.sin(endAngle);

          const largeArc = seg.percent > 0.5 ? 1 : 0;

          return (
            <path
              key={seg.key}
              d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
              fill="none"
              stroke={seg.emotion.hex}
              strokeWidth="22"
              strokeLinecap="round"
            />
          );
        })}

        {/* needle */}
        {(() => {
          const domIndex = ORDER.indexOf(dominant as EmotionKey);
          const angle = Math.PI * (1 + (domIndex + 0.5) / ORDER.length);
          const r = 80;
          const cx = 130;
          const cy = 140;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);

          return (
            <>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="#111"
                strokeWidth="4"
              />
              <circle cx={cx} cy={cy} r="6" fill="#111" />
            </>
          );
        })()}
      </svg>

      {/* porcentajes */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {segments.map((seg) => (
          <div key={seg.key} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: seg.emotion.hex }}
            />
            <span className="text-sm font-medium">{seg.emotion.label}</span>
            <span className="text-xs text-gray-600 ml-auto">
              {Math.round(seg.percent * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
