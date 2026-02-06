export const EMOTIONS = {
  happy: { label: 'Feliz', color: 'bg-green-400', emoji: '😊' },
  calm: { label: 'Tranquilo', color: 'bg-blue-400', emoji: '😌' },
  sad: { label: 'Triste', color: 'bg-gray-400', emoji: '😢' },
  anxious: { label: 'Ansioso', color: 'bg-yellow-400', emoji: '😟' },
  angry: { label: 'Enojado', color: 'bg-red-400', emoji: '😡' },
};

export type EmotionKey = keyof typeof EMOTIONS;
