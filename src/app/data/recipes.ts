// src/data/recipes.ts

// Define el tipo para una alternativa
export type Alternative = {
  name: string;
  amount: string;
  recipeId?: string;  // Si es necesario, esta propiedad puede ser opcional
  dailyPercentage: number;
};

// Define el tipo Recipe
export interface Recipe {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  ironBenefit: Record<string, string>;
  ingredients: Record<string, string[]>;
  steps: Record<string, string[]>;
  alternatives: Record<string, Alternative[]>;  // Cambiado para aceptar un array de objetos Alternative
  image: string;
}

export const recipes: Recipe[] = [
  {
    id: "sangrecita-puree",
    title: {
      es: "Puré de Sangrecita",
      en: "Sangrecita Puree",
      qu: "Sangrecita Puré"
    },
    description: {
      es: "Un plato tradicional altamente nutritivo y rico en hierro hemínico.",
      en: "A traditional highly nutritious dish rich in heme iron.",
      qu: "Ancha allin kallpayoq mikhuy, hierro nisqayoq."
    },
    ironBenefit: {
      es: "La sangrecita es la mejor fuente de hierro para combatir la anemia infantil.",
      en: "Sangrecita is the best source of iron to combat childhood anemia.",
      qu: "Sangrecitaqa aswan allinmi anemia unquyta thajyananpaq."
    },
    ingredients: {
      es: ["100g de sangrecita de pollo", "1 papa amarilla", "Una pizca de sal", "Aceite vegetal"],
      en: ["100g chicken blood", "1 yellow potato", "A pinch of salt", "Vegetable oil"],
      qu: ["100g wallpapi siran", "1 q'ello papa", "Kachi", "Wira"]
    },
    steps: {
      es: ["Lavar bien la sangrecita.", "Sancochar la sangrecita con hierbabuena.", "Prensar la papa amarilla.", "Mezclar todo hasta obtener un puré suave."],
      en: ["Wash the sangrecita well.", "Boil the sangrecita with mint.", "Mash the yellow potato.", "Mix everything until you get a smooth puree."],
      qu: ["Sira t'aqsay.", "Sira yanuy.", "Papata t'ustuy.", "Lliwtapuni chaqruy."]
    },
    alternatives: {
      es: [
        { name: "Camote", amount: "1 papa", recipeId: "sweet-potato-recipe", dailyPercentage: 30 },
        { name: "Hígado de pollo", amount: "100g", recipeId: "chicken-liver-recipe", dailyPercentage: 50 }
      ],
      en: [
        { name: "Sweet potato", amount: "1 potato", recipeId: "sweet-potato-recipe", dailyPercentage: 30 },
        { name: "Chicken liver", amount: "100g", recipeId: "chicken-liver-recipe", dailyPercentage: 50 }
      ],
      qu: [
        { name: "Apichata", amount: "1 papa", recipeId: "sweet-potato-recipe", dailyPercentage: 30 },
        { name: "Wallpa k'ipa", amount: "100g", recipeId: "chicken-liver-recipe", dailyPercentage: 50 }
      ]
    },
    image: "sangrecita-puree"
  },
  {
    id: "liver-lentils",
    title: {
      es: "Hígado con Lentejas",
      en: "Liver with Lentils",
      qu: "Lentejas k'ipawan"
    },
    description: {
      es: "Combinación potente de hierro vegetal y animal.",
      en: "Powerful combination of plant and animal iron.",
      qu: "Sach'amanta uywakunamantawan hierro chaqrusqa."
    },
    ironBenefit: {
      es: "Las lentejas aportan fibra y el hígado asegura una absorción rápida de hierro.",
      en: "Lentils provide fiber and liver ensures fast iron absorption.",
      qu: "Lentejasqa kallpata qon, k'ipataq hierrota usqhaylla chaskinanpaq."
    },
    ingredients: {
      es: ["50g de hígado de pollo", "1/2 taza de lentejas cocidas", "Arroz blanco", "Zanahoria picada"],
      en: ["50g chicken liver", "1/2 cup cooked lentils", "White rice", "Chopped carrot"],
      qu: ["50g wallpa k'ipa", "Chaupi tasa lentejas", "Iskay arroz", "Sapallu"]
    },
    steps: {
      es: ["Cocinar las lentejas con zanahoria.", "Freír el hígado con poco aceite.", "Servir con una porción pequeña de arroz."],
      en: ["Cook lentils with carrot.", "Fry liver with little oil.", "Serve with a small portion of rice."],
      qu: ["Lentejasta yanuy.", "K'ipata kankay.", "Arrozwan hayway."]
    },
    alternatives: {
      es: [
        { name: "Bazo de res", amount: "100g", recipeId: "beef-spleen-recipe", dailyPercentage: 40 },
        { name: "Jugo de naranja", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ],
      en: [
        { name: "Beef spleen", amount: "100g", recipeId: "beef-spleen-recipe", dailyPercentage: 40 },
        { name: "Orange juice", amount: "1 cup", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ],
      qu: [
        { name: "Bazo nisqata", amount: "100g", recipeId: "beef-spleen-recipe", dailyPercentage: 40 },
        { name: "Laranja aywita", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ]
    },
    image: "liver-lentils"
  },
];
