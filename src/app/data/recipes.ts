export interface Recipe {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  ironBenefit: Record<string, string>;
  ingredients: Record<string, string[]>;
  steps: Record<string, string[]>;
  alternatives: Record<string, string[]>;
  image: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
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
      es: ["Puedes usar camote en lugar de papa.", "Agrega hígado de pollo para más nutrientes."],
      en: ["You can use sweet potato instead of potato.", "Add chicken liver for more nutrients."],
      qu: ["Apichata churanmankis papa ranti.", "Wallpa k'ipachata yapay."]
    },
    image: "sangrecita-puree"
  },
  {
    id: "2",
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
      es: ["Usa bazo de res si no tienes hígado.", "Acompaña con jugo de naranja para absorber mejor el hierro."],
      en: ["Use beef spleen if you don't have liver.", "Accompany with orange juice to better absorb iron."],
      qu: ["Waka bazo nisqata churay.", "Laranja aywita ukyay."]
    },
    image: "liver-lentils"
  }
];
