import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import type { Recipe } from '../data/recipes';
import { Typography, Card, Button } from './ui';
import { ChevronLeft, Zap, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// ================== TYPES ==================
type IronFood = {
  name: string;
  amount: string;
  ironMg: number;
  dailyPercentage: number;

  recipes: {
    id: string;
    label: string;
  }[];

  alternatives: {
    name: string;
    amount: string;
    dailyPercentage: number;
    recipeId?: string;
  }[];
};

// ================== DATA ==================
export const ironFoods: IronFood[] = [
  {
    name: 'Hígado de res',
    amount: '100 g',
    ironMg: 6.5,
    dailyPercentage: 45,
    recipes: [
      { id: 'liver-lentils', label: 'Hígado con lentejas' },
      { id: 'liver-onions', label: 'Hígado encebollado' },
    ],
    alternatives: [
      {
        name: 'Sangrecita',
        amount: '100 g',
        dailyPercentage: 40,
        recipeId: 'sangrecita-puree',
      },
    ],
  },
  {
    name: 'Sangrecita',
    amount: '100 g',
    ironMg: 6.0,
    dailyPercentage: 40,
    recipes: [
      { id: 'sangrecita-puree', label: 'Puré de sangrecita' },
      { id: 'sangrecita-rice', label: 'Sangrecita con arroz' },
    ],
    alternatives: [],
  },
  {
    name: 'Lentejas',
    amount: '1 taza',
    ironMg: 3.3,
    dailyPercentage: 30,
    recipes: [
      { id: 'lentils-stew', label: 'Guiso de lentejas' },
      { id: 'lentils-veggies', label: 'Lentejas con verduras' },
    ],
    alternatives: [],
  },
  {
    name: 'Espinaca',
    amount: '1 taza',
    ironMg: 3.6,
    dailyPercentage: 28,
    recipes: [
      { id: 'spinach-omelette', label: 'Tortilla de espinaca' },
      { id: 'spinach-soup', label: 'Sopa de espinaca' },
    ],
    alternatives: [],
  },
  {
    name: 'Hígado de pollo',
    amount: '100 g',
    ironMg: 5.0,
    dailyPercentage: 38,
    recipes: [
      { id: 'chicken-liver-garlic', label: 'Hígado de pollo al ajo' },
      { id: 'chicken-liver-rice', label: 'Hígado con arroz' },
    ],
    alternatives: [],
  },
  {
    name: 'Quinua',
    amount: '1 taza',
    ironMg: 2.8,
    dailyPercentage: 25,
    recipes: [
      { id: 'quinoa-salad', label: 'Ensalada de quinua' },
      { id: 'quinoa-stew', label: 'Guiso de quinua' },
    ],
    alternatives: [],
  },
];

// ================== PROPS ==================
interface RecipeDetailProps {
  recipe: Recipe | null;
  onBack: () => void;
  onSelectRecipe: (recipeId: string) => void;
}

// ================== COMPONENT ==================
export const RecipeDetail = ({ recipe, onBack, onSelectRecipe }: RecipeDetailProps) => {
  const { language } = useLanguage();

  const imageMap: Record<string, string> = {
    'sangrecita-puree': '',
    'liver-lentils': '',
  };

  // 🧲 Modo lista de alimentos
  if (!recipe) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4">
          <Typography.H2 className="mb-4">Alimentos ricos en hierro</Typography.H2>
          <div className="space-y-6">
            {ironFoods.map((food, i) => (
              <Card key={i} className="p-5 border border-[#ED5C66]/20">
                <p className="font-bold text-lg">{food.name}</p>
                <p className="text-sm text-gray-600 mb-2">{food.amount} · {food.dailyPercentage}%</p>
                <div className="space-y-2">
                  {food.recipes.map((r, k) => (
                    <Button key={k} onClick={() => onSelectRecipe(r.id)} className="w-full bg-[#ED5C66] text-white rounded-xl py-2 text-sm font-bold">{r.label}</Button>
                  ))}
                </div>
              </Card>
            ))}
          </div>

      </motion.div>
    );
  }
  console.log('Selected recipe:', recipe);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full bg-white pb-10"
    >

      {/* ================== HEADER RECETA ================== */}
      {recipe && (
        <>
          <div className="relative h-64 overflow-hidden -mx-4 -mt-4">
            <ImageWithFallback
              src={imageMap[recipe.id]}
              alt={recipe.title[language]}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onBack}
              className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          <div className="px-1 pt-6">
            <div className="flex justify-between items-start mb-4">
              <Typography.H1>{recipe.title[language]}</Typography.H1>
              <div className="bg-[#A3ECE6]/30 px-3 py-1 rounded-full flex items-center gap-1">
                <Zap className="w-4 h-4 text-teal-600 fill-teal-600" />
                <span className="text-xs font-bold text-teal-800">Hierro ++</span>
              </div>
            </div>

            <Card className="bg-[#ED5C66]/5 border-none mb-6 p-4 flex gap-3">
              <Info className="w-5 h-5 text-[#ED5C66]" />
              <Typography.P className="text-sm">
                {recipe.ironBenefit[language]}
              </Typography.P>
            </Card>

            <Typography.H2 className="mb-3">Ingredientes</Typography.H2>
            <ul className="space-y-3">
              {recipe.ingredients[language].map((ing, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-[#A3ECE6]" />
                  {ing}
                </li>
              ))}
            </ul>

            <Typography.H2 className="mb-3">Instrucciones</Typography.H2>
            <ol className="list-decimal list-inside">
              {recipe.steps[language].map((step, i) => (
                <li key={i} className="text-gray-700 mb-2">{step}</li>
              ))}
            </ol>
          </div>
        </>
      )}

      {/* ================== IRON FOODS ================== */}

    </motion.div>
  );
};
