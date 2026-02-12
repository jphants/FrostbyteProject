// src/ui/emotions/emotions.data.ts

export type Emotion = {
  label: string;
  emoji: string;
  color: string; // tailwind class
  hex: string;   // color real
};

export const EMOTIONS: Record<string, Emotion> = {
  sleepy: {
    label: 'Somnoliento',
    emoji: '😴',
    color: 'bg-purple-500',
    hex: '#A855F7',
  },
  down: {
    label: 'Desanimado',
    emoji: '😞',
    color: 'bg-blue-500',
    hex: '#3B82F6',
  },
  irritated: {
    label: 'Irritado',
    emoji: '😡',
    color: 'bg-red-500',
    hex: '#EF4444',
  },
  energy: {
    label: 'Con energía',
    emoji: '⚡',
    color: 'bg-yellow-400',
    hex: '#FACC15',
  },
};

export type EmotionKey = keyof typeof EMOTIONS;
