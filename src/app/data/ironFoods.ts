// src/data/ironFoods.ts

export type IronFood = {
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
      {
        name: 'Lentejas cocidas',
        amount: '1 taza',
        dailyPercentage: 30,
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
    alternatives: [
      {
        name: 'Hígado de pollo',
        amount: '100 g',
        dailyPercentage: 35,
        recipeId: 'chicken-liver-garlic',
      },
    ],
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
    alternatives: [
      {
        name: 'Garbanzos',
        amount: '1 taza',
        dailyPercentage: 28,
      },
    ],
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
    alternatives: [
      {
        name: 'Acelga',
        amount: '1 taza',
        dailyPercentage: 25,
      },
    ],
  },

  {
    name: 'Hígado de pollo',
    amount: '100 g',
    ironMg: 5.0,
    dailyPercentage: 38,
    recipes: [
      { id: 'chicken-liver-garlic', label: 'Hígado de pollo al ajo' },
      { id: 'chicken-liver-rice', label: 'Hígado de pollo con arroz' },
    ],
    alternatives: [
      {
        name: 'Hígado de res',
        amount: '100 g',
        dailyPercentage: 45,
        recipeId: 'liver-lentils',
      },
    ],
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
    alternatives: [
      {
        name: 'Amaranto',
        amount: '1 taza',
        dailyPercentage: 23,
      },
    ],
  },
];