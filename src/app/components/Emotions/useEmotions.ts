// src/app/components/Emotions/useEmotions.ts
import { useEffect, useState } from 'react';
import { EmotionKey } from './emotions.data';

export const useEmotions = () => {
  const [emotions, setEmotions] = useState<Record<string, EmotionKey>>({});

  useEffect(() => {
    const saved = localStorage.getItem('emotions');
    if (saved) setEmotions(JSON.parse(saved));
  }, []);

  const saveEmotion = (date: string, emotion: EmotionKey) => {
    const updated = { ...emotions, [date]: emotion };
    setEmotions(updated);
    localStorage.setItem('emotions', JSON.stringify(updated));
  };

  const getMonthlyStats = (year: number, month: number) => {
    const counts: Record<EmotionKey, number> = {
    sleepy: 0,
    down: 0,
    irritated: 0,
    energy: 0,
  };

  Object.entries(emotions).forEach(([date, emotion]) => {
    const d = new Date(date);
    if (d.getFullYear() === year && d.getMonth() === month) {
    counts[emotion]++;
    }
  });

  let dominant: EmotionKey | null = null;
  let max = 0;


  (Object.keys(counts) as EmotionKey[]).forEach(k => {
    if (counts[k] > max) {
      max = counts[k];
      dominant = k;
    }
  });

  return { counts, dominant };
  };
  
return { emotions, saveEmotion, getMonthlyStats };
};
