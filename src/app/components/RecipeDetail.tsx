import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import type { Recipe } from '../data/recipes';
import { Typography, Card } from './ui';
import {
  ChevronLeft,
  Zap,
  Info,
  Coffee,
  Utensils,
  Moon,
  Apple,
  GlassWater,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

/* ================= TYPES ================= */

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'drink';

type DayPlan = {
  date: string;
  meals: Record<
    MealType,
    {
      title: string;
      recipeId?: string;
      ironPercentage?: number;
    }
  >;
};

/* ================= DATA ================= */

export const weeklyPlan: DayPlan[] = [
  {
    date: 'Sábado 14 de febrero',
    meals: {
      breakfast: {
        title: 'Tortilla de quinua',
        recipeId: 'tortilla-quinua',
        ironPercentage: 0.76,
      },
      lunch: {
        title: 'Hígado con lentejas',
        recipeId: 'liver-lentils',
        ironPercentage: 1.50,
      },
      dinner: {
        title: 'Espagueti con hígado',
        recipeId: 'espagueti-salsa-roja-higado',
        ironPercentage: 1.20,
      },
      snack: {
        title: 'Puré de sangrecita',
        recipeId: 'sangrecita-puree',
      },
      drink: {
        title: 'Jugo de beterraga',
      },
    },
  },
  {
    date: 'Domingo 15 de febrero',
    meals: {
      breakfast: {
        title: 'Tortilla de quinua',
        recipeId: 'tortilla-quinua',
        ironPercentage: 0.76,
      },
      lunch: {
        title: 'Hígado con lentejas',
        recipeId: 'liver-lentils',
        ironPercentage: 1.50,
      },
      dinner: {
        title: 'Espagueti con hígado',
        recipeId: 'espagueti-salsa-roja-higado',
        ironPercentage: 1.20,
      },
      snack: {
        title: 'Puré de sangrecita',
        recipeId: 'sangrecita-puree',
      },
      drink: {
        title: 'Jugo de beterraga',
      },
    },
  },
];

/* ================= ICONS ================= */

const mealIcons = {
  breakfast: Coffee,
  lunch: Utensils,
  dinner: Moon,
  snack: Apple,
  drink: GlassWater,
};

const mealLabels = {
  breakfast: 'Desayuno',
  lunch: 'Almuerzo',
  dinner: 'Cena',
  snack: 'Aperitivo',
  drink: 'Bebida',
};

/* ================= PROPS ================= */

interface RecipeDetailProps {
  recipe: Recipe | null;
  onBack: () => void;
  onSelectRecipe: (recipeId: string) => void;
}

/* ================= COMPONENT ================= */

export const RecipeDetail = ({
  recipe,
  onBack,
  onSelectRecipe,
}: RecipeDetailProps) => {
  const { language } = useLanguage();

  const imageMap: Record<string, string> = {
    'sangrecita-puree':
      'https://cdn0.recetasgratis.net/es/posts/2/0/1/sangrecita_de_pollo_10102_paso_2_600.jpg',
    'liver-lentils':
      'https://img-global.cpcdn.com/recipes/837f560c3c3cf9e9/1200x630cq80/photo.jpg',
    'espagueti-salsa-roja-higado':
      'https://i.ytimg.com/vi/3bVtWvR3Kc0/maxresdefault.jpg',
    'tortilla-quinua':
      'https://okdiario.com/img/2018/07/30/receta-de-tortilla-de-quinoa.jpg',
    'ravioli-remolacha-salsa-roja':
      'https://img-global.cpcdn.com/recipes/578b6bd416ccc695/680x781f0.5_0.5599_1.0q80/ravioles-de-remolacha-foto-principal.jpg',
    'pan-harina-garbanzo':
      'https://i.pinimg.com/736x/31/0a/3b/310a3b74896894f51763f235f54571fe.jpg',
  };

  /* ================= PLAN SEMANAL ================= */

  if (!recipe) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 pb-10"
      >
        {/* HEADER */}
        <header className="mb-6">
          <Typography.Small className="font-bold text-[#ED5C66]">
            AnemiaGuard
          </Typography.Small>
          <Typography.H1>Plan semanal de hierro</Typography.H1>
          <Typography.H2>Recomendamos incluir al menos un plato de estos al día y no mas de 3 platos</Typography.H2>
        </header>

        {/* DAYS */}
        <div className="space-y-5">
          {weeklyPlan.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-5 shadow-md border-l-4 border-[#ED5C66]">
                <Typography.H2 className="mb-4 text-lg">
                  {day.date}
                </Typography.H2>
                
                <div className="space-y-3">
                  {Object.entries(day.meals).map(([type, meal]) => {
                    const Icon = mealIcons[type as MealType];

                    return (
                      <button
                        key={type}
                        onClick={() =>
                          meal.recipeId && onSelectRecipe(meal.recipeId)
                        }
                        className="flex w-full justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-xl p-3 transition"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-[#ED5C66]" />
                          <div className="text-left">
                            <p className="font-semibold text-sm">
                              {mealLabels[type as MealType]}
                            </p>
                            <p className="text-xs text-gray-600">
                              {meal.title}
                            </p>
                          </div>
                        </div>

                        {meal.ironPercentage && (
                          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                            {meal.ironPercentage}$
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  /* ================= DETAIL ================= */

  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col h-full bg-gray-50 pb-12"
  >
    {/* ================= HERO ================= */}
    <div className="relative h-72 overflow-hidden -mx-4 -mt-4">
      <ImageWithFallback
        src={imageMap[recipe.id]}
        alt={recipe.title[language]}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Back */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 w-11 h-11 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* Badge hierro */}
      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-xl flex items-center gap-2 shadow-md">
        <Zap className="w-4 h-4 text-teal-600 fill-teal-600" />
        <span className="text-xs font-bold text-teal-800">
          Alto en hierro
        </span>
      </div>
    </div>

    {/* ================= CONTENT ================= */}
    <div className="px-4 pt-6 space-y-6">

      {/* TITLE */}
      <div>
        <Typography.H1 className="leading-tight">
          {recipe.title[language]}
        </Typography.H1>
      </div>

      {/* BENEFIT */}
      <Card className="bg-[#ED5C66]/10 border border-[#ED5C66]/20 p-5 rounded-2xl shadow-sm">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#ED5C66]/20 flex items-center justify-center">
            <Info className="w-5 h-5 text-[#ED5C66]" />
          </div>

          <div>
            <Typography.Small className="font-bold text-[#ED5C66]">
              Beneficio nutricional
            </Typography.Small>

            <Typography.P className="text-sm mt-1">
              {recipe.ironBenefit[language]}
            </Typography.P>
          </div>
        </div>
      </Card>

      {/* INGREDIENTS */}
      <div>
        <Typography.H2 className="mb-3">
          Ingredientes
        </Typography.H2>

        <Card className="p-5 rounded-2xl shadow-sm border">
          <ul className="space-y-4">
            {recipe.ingredients[language].map((ing, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 mt-0.5 rounded-full bg-[#A3ECE6] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-700" />
                </div>

                <span className="text-gray-700 text-sm leading-relaxed">
                  {ing}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* STEPS */}
      <div>
        <Typography.H2 className="mb-3">
          Preparación
        </Typography.H2>

        <Card className="p-5 rounded-2xl shadow-sm border">
          <ol className="space-y-5">
            {recipe.steps[language].map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#ED5C66] text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Card>
      </div>

    </div>
  </motion.div>
);

};
