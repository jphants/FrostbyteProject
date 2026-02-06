import React from 'react';
import { Card, Typography } from './ui';
import { Recipe } from '../data/recipes';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const { language } = useLanguage();

  // Mapping static ids to Unsplash images for now
  const imageMap: Record<string, string> = {
    'sangrecita-puree': 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&q=80&w=400',
    'liver-lentils': 'https://images.unsplash.com/photo-1522598312049-70ccda16fe43?auto=format&fit=crop&q=80&w=400',
  };

  return (
    <Card onClick={onClick} className="flex gap-4 p-3 mb-4 overflow-hidden items-center">
      <div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={imageMap[recipe.id]}
          alt={recipe.title[language]}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <Typography.H2 className="text-lg mb-1 truncate">
          {recipe.title[language]}
        </Typography.H2>
        <Typography.P className="text-sm line-clamp-2 text-gray-500">
          {recipe.description[language]}
        </Typography.P>
      </div>
    </Card>
  );
};
