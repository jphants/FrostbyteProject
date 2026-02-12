// src/ui/emotions/EmotionsContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { EmotionKey } from './emotions.data';

type EmotionsContextType = {
  emotions: Record<string, EmotionKey>;
  saveEmotion: (date: string, emotion: EmotionKey) => void;
  getMonthlyStats: (year: number, month: number) => {
    counts: Record<EmotionKey, number>;
    dominant: EmotionKey | null;
  };
};

const EmotionsContext = createContext<EmotionsContextType | null>(null);

export const EmotionsProvider = ({ children }: { children: ReactNode }) => {
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

  return (
    <EmotionsContext.Provider value={{ emotions, saveEmotion, getMonthlyStats }}>
      {children}
    </EmotionsContext.Provider>
  );
};

export const useEmotionsContext = () => {
  const ctx = useContext(EmotionsContext);
  if (!ctx) throw new Error('useEmotionsContext must be used inside EmotionsProvider');
  return ctx;
};
