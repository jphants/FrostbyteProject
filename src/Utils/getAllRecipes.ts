// src/utils/getAllRecipes.ts

import { recipes, Recipe } from '../app/data/recipes';
import { ironFoods } from '../app/data/ironFoods';

export const getAllRecipes = (): Recipe[] => {
  const allRecipes: Recipe[] = [...recipes];

  ironFoods.forEach((food) => {
    // ➕ Añadir recetas principales del alimento
    food.recipes.forEach((rec) => {
      if (!allRecipes.find(r => r.id === rec.id)) {
        allRecipes.push({
          id: rec.id,
          title: { es: rec.label, en: rec.label },
          description: {
            es: `${rec.label} es una receta rica en hierro y muy nutritiva.`,
            en: `${rec.label} is a high-iron, nutritious recipe.`,
          },
          ingredients: { es: [], en: [] },
          steps: { es: [], en: [] },
          ironBenefit: {
            es: `${rec.label} contribuye a mejorar los niveles de hierro en el organismo.`,
            en: `${rec.label} helps improve iron levels in the body.`,
          },
          alternatives: { es: [], en: [] },
          image: rec.id,
        });
      }
    });

    // ➕ Añadir recetas desde alternativas
    food.alternatives.forEach((alt) => {
      if (alt.recipeId && !allRecipes.find(r => r.id === alt.recipeId)) {
        allRecipes.push({
          id: alt.recipeId,
          title: { es: alt.name, en: alt.name },
          description: {
            es: `${alt.name} es una alternativa rica en hierro.`,
            en: `${alt.name} is a high-iron alternative.`,
          },
          ingredients: { es: [], en: [] },
          steps: { es: [], en: [] },
          ironBenefit: {
            es: `${alt.name} ayuda a prevenir la anemia por deficiencia de hierro.`,
            en: `${alt.name} helps prevent iron-deficiency anemia.`,
          },
          alternatives: { es: [], en: [] },
          image: alt.recipeId,
        });
      }
    });
  });

  return allRecipes;
};