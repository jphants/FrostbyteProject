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
  {
  id: "espagueti-salsa-roja-higado",
  title: {
    es: "Espagueti en Salsa Roja con Hígado",
    en: "Spaghetti with Red Sauce and Liver",
    qu: "Espagueti Puka Salsawan K'ipawan"
  },
  description: {
    es: "Un plato completo rico en hierro hemínico ideal para prevenir la anemia.",
    en: "A complete dish rich in heme iron, ideal for preventing anemia.",
    qu: "Hierro nisqayoq mikhuy, anemia hark'anapaq allin."
  },
  ironBenefit: {
    es: "El hígado aporta hierro de alta absorción que ayuda a combatir la anemia infantil.",
    en: "Liver provides highly absorbable iron that helps fight childhood anemia.",
    qu: "K'ipa aswan allin hierrota qon, anemia thajyananpaq."
  },
  ingredients: {
    es: [
      "80g de hígado de pollo picado",
      "100g de espagueti",
      "1 tomate mediano",
      "1/4 de cebolla",
      "1/4 de zanahoria rallada",
      "1/4 de pimiento picado",
      "1 diente de ajo",
      "1 cucharadita de mantequilla",
      "1/2 taza de fondo de pollo",
      "Sal y pimienta al gusto"
    ],
    en: [
      "80g chopped chicken liver",
      "100g spaghetti",
      "1 medium tomato",
      "1/4 onion",
      "1/4 grated carrot",
      "1/4 chopped bell pepper",
      "1 garlic clove",
      "1 teaspoon butter",
      "1/2 cup chicken broth",
      "Salt and pepper to taste"
    ],
    qu: [
      "80g wallpa k'ipa",
      "100g espagueti",
      "1 tomate",
      "Chaupi cebolla",
      "Chaupi zanahoria",
      "Chaupi pimiento",
      "1 ajo",
      "Mantequilla",
      "Chaupi tasa caldo wallpa",
      "Kachiwan pimientawan"
    ]
  },
  steps: {
    es: [
      "Sofreír el ajo con mantequilla.",
      "Añadir la zanahoria, el pimiento, el tomate y la cebolla. Saltear por 5 minutos.",
      "Agregar el fondo de pollo y cocinar por 8 minutos.",
      "Procesar la preparación y colar.",
      "Regresar al fuego y reducir hasta obtener la salsa. Condimentar.",
      "Saltear el hígado picado, añadir sal y pimienta.",
      "Cocinar el espagueti por 10 minutos.",
      "Servir el espagueti con la salsa y el hígado encima."
    ],
    en: [
      "Sauté garlic with butter.",
      "Add carrot, bell pepper, tomato, and onion. Cook for 5 minutes.",
      "Add chicken broth and cook for 8 minutes.",
      "Blend the mixture and strain.",
      "Return to heat and reduce until sauce thickens. Season.",
      "Sauté chopped liver and add salt and pepper.",
      "Cook spaghetti for 10 minutes.",
      "Serve spaghetti with sauce and liver on top."
    ],
    qu: [
      "Ajo mantequillawan kankay.",
      "Zanahoria, pimiento, tomate, cebollata yapay, pichqa minutokama yanuy.",
      "Caldo yapay, pusaj minutokama yanuy.",
      "Lliwta licuadora nisqapi ruwaspa chulluy.",
      "Kutmuy ninaman, salsa tukunanpaq.",
      "K'ipata kankay, kachiwan pimientawan yapay.",
      "Espaguetita chunka minutokama yanuy.",
      "Espagueti salsawan k'ipawan hayway."
    ]
  },
  alternatives: {
    es: [
      { name: "Hígado de res", amount: "80g", recipeId: "beef-liver-recipe", dailyPercentage: 55 },
      { name: "Jugo de naranja", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
    ],
    en: [
      { name: "Beef liver", amount: "80g", recipeId: "beef-liver-recipe", dailyPercentage: 55 },
      { name: "Orange juice", amount: "1 cup", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
    ],
    qu: [
      { name: "Wak k'ipa", amount: "80g", recipeId: "beef-liver-recipe", dailyPercentage: 55 },
      { name: "Laranja aywita", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
    ]
  },
  image: "espagueti-salsa-roja-higado"
  },
  {
    id: "tortilla-quinua",
    title: {
      es: "Tortilla de Quinua",
      en: "Quinoa Tortilla",
      qu: "Kinwa Tortilla"
    },
    description: {
      es: "Una opción nutritiva rica en hierro vegetal y proteínas de alta calidad.",
      en: "A nutritious option rich in plant-based iron and high-quality protein.",
      qu: "Allin mikhuy, sach'a hierro nisqayoq kallpayuq."
    },
    ironBenefit: {
      es: "La quinua y la lenteja aportan hierro vegetal que, acompañado de vitamina C, mejora su absorción.",
      en: "Quinoa and lentils provide plant-based iron that is better absorbed when paired with vitamin C.",
      qu: "Kinwa lentejawan hierro qon, vitamina Cwan aswan allinta chaskisqa."
    },
    ingredients: {
      es: [
        "1/4 taza de quinua cruda (cocida previamente)",
        "1/4 taza de lentejas cocidas",
        "1 huevo",
        "1 cucharada de apanadura o pan molido",
        "1 cucharada de cebolla picada",
        "1 cucharada de pimiento picado",
        "1 diente pequeño de ajo picado",
        "1 cucharadita de culantro picado",
        "Una pizca de paprika",
        "Sal y pimienta al gusto",
        "1 cucharadita de aceite vegetal"
      ],
      en: [
        "1/4 cup raw quinoa (previously cooked)",
        "1/4 cup cooked lentils",
        "1 egg",
        "1 tablespoon breadcrumbs",
        "1 tablespoon chopped onion",
        "1 tablespoon chopped bell pepper",
        "1 small garlic clove, minced",
        "1 teaspoon chopped cilantro",
        "A pinch of paprika",
        "Salt and pepper to taste",
        "1 teaspoon vegetable oil"
      ],
      qu: [
        "Chaupi tasa kinwa (ñawpaqta yanusqa)",
        "Chaupi tasa lentejas yanusqa",
        "1 runtu",
        "1 cuchara pan molido",
        "Cebolla uchuylla",
        "Pimiento uchuylla",
        "1 ajo uchuylla",
        "Culantro uchuylla",
        "Paprika aslla",
        "Kachiwan pimientawan",
        "Aslla wira"
      ]
    },
    steps: {
      es: [
        "Cocer la quinua y la lenteja por separado.",
        "Sofreír el ajo, la cebolla y el pimiento.",
        "Añadir la quinua cocida y saltear por 3 minutos.",
        "Procesar la lenteja y mezclar con la quinua salteada.",
        "Agregar el huevo, la apanadura, la paprika, el culantro, sal y pimienta. Mezclar bien.",
        "Formar pequeñas tortillas.",
        "Cocinarlas en un sartén con poco aceite o al horno hasta que estén doradas.",
        "Servir y acompañar con un jugo de frutas, preferiblemente cítricos."
      ],
      en: [
        "Cook quinoa and lentils separately.",
        "Sauté garlic, onion, and bell pepper.",
        "Add cooked quinoa and sauté for 3 minutes.",
        "Blend lentils and mix with sautéed quinoa.",
        "Add egg, breadcrumbs, paprika, cilantro, salt, and pepper. Mix well.",
        "Shape into small patties.",
        "Cook in a lightly oiled pan or bake until golden brown.",
        "Serve with fruit juice, preferably citrus."
      ],
      qu: [
        "Kinwata lentejastawan sapanmanta yanuy.",
        "Ajo, cebolla, pimiento kankay.",
        "Kinwa yanusqata yapay, kimsa minutokama kankay.",
        "Lentejasta licuadora nisqapi ruwaspa kinwawan chaqruy.",
        "Runtu, pan molido, paprika, culantro, kachi, pimienta yapay.",
        "Tortillasta ruray.",
        "Sarténpi utaq hornopi q'omeraykama yanuy.",
        "Hayway, fruta aywawan, aswan allin cítricoswan."
      ]
    },
    alternatives: {
      es: [
        { name: "Espinaca picada", amount: "2 cucharadas", recipeId: "spinach-recipe", dailyPercentage: 15 },
        { name: "Jugo de naranja", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ],
      en: [
        { name: "Chopped spinach", amount: "2 tablespoons", recipeId: "spinach-recipe", dailyPercentage: 15 },
        { name: "Orange juice", amount: "1 cup", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ],
      qu: [
        { name: "Espinaca uchuylla", amount: "2 cuchara", recipeId: "spinach-recipe", dailyPercentage: 15 },
        { name: "Laranja aywita", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ]
    },
    image: "tortilla-quinua"
  },
  {
  id: "ravioli-remolacha-salsa-roja",
  title: {
    es: "Ravioli de Remolacha y Salsa Roja",
    en: "Beet Ravioli with Red Sauce",
    qu: "Betarraga Ravioli Puka Salsawan"
  },
  description: {
    es: "Una preparación casera rica en hierro gracias al hígado y con el aporte nutritivo de la remolacha.",
    en: "A homemade dish rich in iron from liver and enhanced with nutritious beetroot.",
    qu: "K'ipamanta hierro nisqayoq, betarragawan kallpayuq mikhuy."
  },
  ironBenefit: {
    es: "El hígado aporta hierro de alta absorción que contribuye a prevenir la anemia.",
    en: "Liver provides highly absorbable iron that helps prevent anemia.",
    qu: "K'ipa aswan allin hierrota qon, anemia hark'anapaq."
  },
  ingredients: {
    es: [
      // Masa
      "1/2 taza de harina de trigo",
      "1 huevo pequeño",
      "2 cucharadas de remolacha cocida y licuada",
      "1 cucharadita de aceite",
      "2–3 cucharadas de agua",
      "Una pizca de sal",

      // Relleno
      "70g de hígado de pollo en cubos pequeños",
      "1 cucharada de cebolla picada",
      "1 cucharada de pimiento picado",
      "1 diente pequeño de ajo picado",
      "Una pizca de tomillo",
      "Una pizca de comino",
      "Sal al gusto",

      // Salsa roja
      "1 tomate mediano",
      "1 cucharada de zanahoria rallada",
      "1/4 de pimiento",
      "1 diente pequeño de ajo",
      "1/4 taza de agua",
      "1 cucharadita de aceite"
    ],
    en: [
      "1/2 cup wheat flour",
      "1 small egg",
      "2 tablespoons cooked blended beetroot",
      "1 teaspoon oil",
      "2–3 tablespoons water",
      "A pinch of salt",

      "70g chicken liver, small cubes",
      "1 tablespoon chopped onion",
      "1 tablespoon chopped bell pepper",
      "1 small garlic clove, minced",
      "A pinch of thyme",
      "A pinch of cumin",
      "Salt to taste",

      "1 medium tomato",
      "1 tablespoon grated carrot",
      "1/4 bell pepper",
      "1 small garlic clove",
      "1/4 cup water",
      "1 teaspoon oil"
    ],
    qu: [
      "Chaupi tasa harina",
      "1 uchuy runtu",
      "2 cuchara betarraga yanusqa licuasqa",
      "1 cuchara wira",
      "Yaku aslla",
      "Kachi",

      "70g wallpa k'ipa",
      "Cebolla uchuylla",
      "Pimiento uchuylla",
      "1 ajo uchuylla",
      "Tomillo aslla",
      "Comino aslla",
      "Kachi",

      "1 tomate",
      "Zanahoria uchuylla",
      "Pimiento",
      "1 ajo",
      "Yaku",
      "Wira"
    ]
  },
  steps: {
    es: [
      "Mezclar harina, sal, aceite, agua, huevo y remolacha para formar la masa.",
      "Amasar hasta obtener una textura lisa y dejar reposar 10 minutos.",
      "Extender la masa con rodillo hasta que quede fina y cortar en cuadrados.",
      "Sofreír ajo, cebolla y pimiento.",
      "Añadir el hígado en cubos pequeños, condimentar con sal, tomillo y comino. Cocinar bien.",
      "Rellenar los raviolis y sellarlos.",
      "Hervir en agua por 5 minutos hasta que floten.",
      "Para la salsa: tatemar el pimiento y limpiarlo.",
      "Blanquear el tomate 30 segundos, pelar, retirar semillas y cortar.",
      "Sofreír ajo, añadir tomate y zanahoria. Agregar agua y cocinar.",
      "Procesar, colar y reducir hasta obtener una salsa espesa.",
      "Servir los raviolis bañados con la salsa roja."
    ],
    en: [
      "Mix flour, salt, oil, water, egg, and beetroot to form dough.",
      "Knead until smooth and let rest for 10 minutes.",
      "Roll out thin and cut into small squares.",
      "Sauté garlic, onion, and bell pepper.",
      "Add diced liver, season with salt, thyme, and cumin. Cook thoroughly.",
      "Fill and seal ravioli.",
      "Boil for 5 minutes until they float.",
      "For the sauce: roast bell pepper and peel it.",
      "Blanch tomato for 30 seconds, peel, remove seeds, and chop.",
      "Sauté garlic, add tomato and carrot. Add water and cook.",
      "Blend, strain, and reduce until thick.",
      "Serve ravioli topped with red sauce."
    ],
    qu: [
      "Harina, runtu, betarraga, yaku, wira chaqruy.",
      "Allinta ñit'iy, samachiy.",
      "Thinllata mast'ay, cuadradosta cuchuy.",
      "Ajo, cebolla, pimiento kankay.",
      "K'ipata yapay, kachi, tomillo, cominowan yanuy.",
      "Relleno churay, wichq'ay.",
      "Pusaj minutokama yaku ukupi yanuy.",
      "Pimiento tatemay.",
      "Tomate hirviy, q'ipiy, muruta hurquy.",
      "Ajo kankay, tomate zanahoria yapay, yanuy.",
      "Licuay, chulluy, salsa tukuykama.",
      "Raviolita salsawan hayway."
    ]
  },
  alternatives: {
    es: [
      { name: "Hígado de res", amount: "70g", recipeId: "beef-liver-recipe", dailyPercentage: 60 },
      { name: "Jugo de naranja", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
    ],
    en: [
      { name: "Beef liver", amount: "70g", recipeId: "beef-liver-recipe", dailyPercentage: 60 },
      { name: "Orange juice", amount: "1 cup", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
    ],
    qu: [
      { name: "Wak k'ipa", amount: "70g", recipeId: "beef-liver-recipe", dailyPercentage: 60 },
      { name: "Laranja aywita", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
    ]
  },
  image: "ravioli-remolacha-salsa-roja"
  },
  {
    id: "pan-harina-garbanzo",
    title: {
      es: "Pan de Harina de Garbanzo",
      en: "Chickpea Flour Bread",
      qu: "Garbanzo Harina T'anta"
    },
    description: {
      es: "Pan nutritivo con mayor contenido de hierro vegetal y proteínas gracias a la harina de garbanzo.",
      en: "Nutritious bread with higher plant-based iron and protein thanks to chickpea flour.",
      qu: "Garbanzo harinamanta kallpayuq t'anta, hierro nisqayoq."
    },
    ironBenefit: {
      es: "La harina de garbanzo aporta hierro vegetal que contribuye a una alimentación balanceada.",
      en: "Chickpea flour provides plant-based iron that supports a balanced diet.",
      qu: "Garbanzo harina hierro qon, allin mikhunapaq yanapan."
    },
    ingredients: {
      es: [
        "1/4 taza de harina de garbanzo",
        "1/4 taza de harina de trigo",
        "1 huevo pequeño",
        "1 cucharada de manteca o mantequilla",
        "1 cucharadita de azúcar",
        "1/4 cucharadita de sal",
        "1/2 cucharadita de levadura seca",
        "3–4 cucharadas de agua tibia"
      ],
      en: [
        "1/4 cup chickpea flour",
        "1/4 cup wheat flour",
        "1 small egg",
        "1 tablespoon shortening or butter",
        "1 teaspoon sugar",
        "1/4 teaspoon salt",
        "1/2 teaspoon dry yeast",
        "3–4 tablespoons warm water"
      ],
      qu: [
        "Chaupi tasa garbanzo harina",
        "Chaupi tasa trigo harina",
        "1 uchuy runtu",
        "1 cuchara manteca",
        "1 cuchara asuk'ar",
        "Kachi aslla",
        "Levadura aslla",
        "Yaku q'uñi aslla"
      ]
    },
    steps: {
      es: [
        "Colocar en un bowl la harina de garbanzo, harina de trigo, sal, azúcar, manteca, levadura, huevo y agua tibia.",
        "Amasar hasta obtener una masa lisa y elástica.",
        "Dejar reposar 30 minutos en un lugar cálido.",
        "Dividir en porciones de aproximadamente 40 g y dar forma.",
        "Dejar reposar 20 minutos más hasta que dupliquen su tamaño.",
        "Hornear a 180°C por 20 minutos.",
        "Dejar enfriar antes de servir."
      ],
      en: [
        "Place chickpea flour, wheat flour, salt, sugar, shortening, yeast, egg, and warm water in a bowl.",
        "Knead until smooth and elastic.",
        "Let rest for 30 minutes in a warm place.",
        "Divide into 40 g portions and shape.",
        "Let rest 20 more minutes until doubled in size.",
        "Bake at 180°C for 20 minutes.",
        "Let cool before serving."
      ],
      qu: [
        "Garbanzo harina, trigo harina, kachi, asuk'ar, manteca, levadura, runtu, yaku q'uñiwan chaqruy.",
        "Allinta ñit'iy, lisa masa tukuykama.",
        "Kimsa chunka minutokama samachiy.",
        "40g tupuypi rakiy, formata ruray.",
        "Iskay chunka minutokama wiñachiy.",
        "180°C hornopi iskay chunka minutokama yanuy.",
        "Chiri tukuchkan chaymanta hayway."
      ]
    },
    alternatives: {
      es: [
        { name: "Harina de quinua", amount: "1/4 taza", recipeId: "tortilla-quinua", dailyPercentage: 20 },
        { name: "Jugo de naranja", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ],
      en: [
        { name: "Quinoa flour", amount: "1/4 cup", recipeId: "tortilla-quinua", dailyPercentage: 20 },
        { name: "Orange juice", amount: "1 cup", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ],
      qu: [
        { name: "Kinwa harina", amount: "Chaupi tasa", recipeId: "tortilla-quinua", dailyPercentage: 20 },
        { name: "Laranja aywita", amount: "1 vaso", recipeId: "orange-juice-recipe", dailyPercentage: 20 }
      ]
    },
    image: "pan-harina-garbanzo"
  },

];
