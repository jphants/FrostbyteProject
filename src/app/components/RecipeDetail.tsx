import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Recipe } from '../data/recipes';
import { Button, Typography, Card } from './ui';
import { ChevronLeft, Clock, Zap, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export const RecipeDetail = ({ recipe, onBack }: RecipeDetailProps) => {
  const { language, t } = useLanguage();

  const imageMap: Record<string, string> = {
    'sangrecita-puree': 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&q=80&w=800',
    'liver-lentils': 'https://images.unsplash.com/photo-1522598312049-70ccda16fe43?auto=format&fit=crop&q=80&w=800',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full bg-white pb-10"
    >
      <div className="relative h-64 overflow-hidden -mx-4 -mt-4">
        <ImageWithFallback
          src={imageMap[recipe.id]}
          alt={recipe.title[language]}
          className="w-full h-full object-cover"
        />
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="px-1 pt-6">
        <div className="flex justify-between items-start mb-4">
          <Typography.H1 className="flex-1">{recipe.title[language]}</Typography.H1>
          <div className="bg-[#A3ECE6]/30 px-3 py-1 rounded-full flex items-center gap-1">
            <Zap className="w-4 h-4 text-teal-600 fill-teal-600" />
            <span className="text-xs font-bold text-teal-800">Hierro ++</span>
          </div>
        </div>

        <Card className="bg-[#ED5C66]/5 border-none mb-6 p-4 flex gap-3">
          <Info className="w-5 h-5 text-[#ED5C66] flex-shrink-0 mt-0.5" />
          <div>
            <Typography.Small className="font-bold text-[#ED5C66] block mb-1">
              {t.ironBenefit}
            </Typography.Small>
            <Typography.P className="text-sm">
              {recipe.ironBenefit[language]}
            </Typography.P>
          </div>
        </Card>

        <section className="mb-8">
          <Typography.H2 className="mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#ED5C66] rounded-full" />
            {t.ingredients}
          </Typography.H2>
          <ul className="space-y-3">
            {recipe.ingredients[language].map((ing, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-[#A3ECE6]" />
                {ing}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <Typography.H2 className="mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#ED5C66] rounded-full" />
            {t.preparation}
          </Typography.H2>
          <div className="space-y-4">
            {recipe.steps[language].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 font-bold text-[#ED5C66]">
                  {i + 1}
                </div>
                <Typography.P className="text-gray-700 pt-1">
                  {step}
                </Typography.P>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-gray-50 rounded-3xl p-6">
          <Typography.H2 className="text-base mb-3">{t.alternatives}</Typography.H2>
          <ul className="space-y-2 list-disc pl-4 text-sm text-gray-600">
            {recipe.alternatives[language].map((alt, i) => (
              <li key={i}>{alt}</li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};
