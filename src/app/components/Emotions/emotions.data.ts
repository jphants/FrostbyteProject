export const EMOTIONS = {
sleepy: { label: 'Somnoliento', color: 'bg-purple-600', emoji: '😴' },
down: { label: 'Desanimado', color: 'bg-blue-600', emoji: '😞' },
irritated: { label: 'Irritado', color: 'bg-red-600', emoji: '😡' },
energy: { label: 'Con energía', color: 'bg-green-500', emoji: '⚡' },
};

export type EmotionKey = keyof typeof EMOTIONS;
