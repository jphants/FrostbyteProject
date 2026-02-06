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

  return { emotions, saveEmotion };
};
