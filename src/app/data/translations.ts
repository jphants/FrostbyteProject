export type Language = 'es' | 'en' | 'qu' | 'sw';

export interface Translation {
  welcome: string;
  selectLanguage: string;
  home: string;
  recipes: string;
  estimate: string;
  settings: string;
  startEstimation: string;
  disclaimerTitle: string;
  disclaimerText: string;
  next: string;
  back: string;
  uploadPhotos: string;
  photoNails: string;
  photoEyes: string;
  uploadTip: string;
  questionnaire: string;
  age: string;
  weight: string;
  height: string;
  energyLevel: string;
  mood: string;
  calculate: string;
  analyzing: string;
  results: string;
  riskLevel: string;
  low: string;
  medium: string;
  high: string;
  recommendation: string;
  medicalDisclaimer: string;
  viewRecipe: string;
  ingredients: string;
  preparation: string;
  alternatives: string;
  ironBenefit: string;

  /* INFORMATION SECTION */

  infoTitle: string;

  keyConceptsTitle: string;
  keyConceptsText: string;

  ironDeficiencyTitle: string;
  ironDeficiencyText: string;

  relatedFactorsTitle: string;
  relatedFactorsText: string;

  nonInvasiveTitle: string;
  visibleSignsTitle: string;

  skinMucosa: string;
  skinMucosaText: string;

  hairNails: string;
  hairNailsText: string;

  mouth: string;
  mouthText: string;

  moodFatigueTitle: string;

  chronicFatigue: string;
  chronicFatigueText: string;

  cognitiveAlterations: string;
  cognitiveAlterationsText: string;

  lowPerformance: string;
  lowPerformanceText: string;
}

export const translations: Record<Language, Translation> = {
  es: {
    welcome: "¡Hola! Cuidemos la salud de tu pequeño",
    selectLanguage: "Selecciona tu idioma",
    home: "Inicio",
    recipes: "Recetas",
    estimate: "AI",
    settings: "Ajustes",
    startEstimation: "Iniciar estimación",
    disclaimerTitle: "Información Importante",
    disclaimerText: "Esta herramienta utiliza inteligencia artificial para estimar el riesgo de anemia basándose en indicadores visuales y síntomas. NO es un diagnóstico médico profesional.",
    next: "Siguiente",
    back: "Atrás",
    uploadPhotos: "Subir Fotos",
    photoNails: "Foto de las uñas",
    photoEyes: "Foto de los ojos (párpado inferior)",
    uploadTip: "Asegúrate de tener buena luz natural y que la imagen sea nítida.",
    questionnaire: "Cuestionario",
    age: "Edad (años)",
    weight: "Peso (kg)",
    height: "Talla (cm)",
    energyLevel: "¿Cómo es su nivel de energía?",
    mood: "¿Cómo ha estado su ánimo?",
    calculate: "Estimar riesgo",
    analyzing: "Analizando información...",
    results: "Resultados",
    riskLevel: "Nivel de Riesgo",
    low: "Bajo",
    medium: "Medio",
    high: "Alto",
    recommendation: "Recomendación",
    medicalDisclaimer: "Esto no es un diagnóstico. Consulta siempre a un profesional de la salud.",
    viewRecipe: "Ver Receta",
    ingredients: "Ingredientes",
    preparation: "Preparación",
    alternatives: "Opciones alternativas",
    ironBenefit: "Aporte de Hierro",
    
    /*information section*/
    
    infoTitle: "Información sobre Anemia",

  keyConceptsTitle: "Conceptos Clave",
  keyConceptsText:
    "La anemia es un trastorno hematológico definido por la disminución de hemoglobina o glóbulos rojos, reduciendo la capacidad de transporte de oxígeno hacia los tejidos.",

  ironDeficiencyTitle: "Anemia Ferropénica",
  ironDeficiencyText:
    "Es la causa más frecuente de anemia, producida por deficiencia de hierro. Representa el 50% de los casos a nivel mundial y afecta especialmente a niños y gestantes.",

  relatedFactorsTitle: "Enfermedades y Factores Relacionados",
  relatedFactorsText:
    "Puede asociarse a deficiencia de vitamina B12, ácido fólico, enfermedades crónicas, inflamación, parasitosis y hemoglobinopatías. En contextos vulnerables, suele coexistir con desnutrición e infecciones recurrentes, afectando el desarrollo cognitivo y físico.",

  nonInvasiveTitle: "Estimación No Invasiva",
  visibleSignsTitle: "Signos Físicos Visibles",

  skinMucosa: "Piel y mucosas",
  skinMucosaText:
    "Palidez en conjuntivas, mucosa oral, labios y palmas.",

  hairNails: "Cabello y uñas",
  hairNailsText:
    "Fragilidad, caída aumentada y uñas en forma de cuchara (coiloniquia).",

  mouth: "Boca",
  mouthText:
    "Queilitis angular y glositis atrófica.",

  moodFatigueTitle: "Estado de Ánimo y Fatiga",

  chronicFatigue: "Fatiga crónica",
  chronicFatigueText:
    "Cansancio constante y debilidad generalizada.",

  cognitiveAlterations: "Alteraciones cognitivas",
  cognitiveAlterationsText:
    "Irritabilidad, apatía, falta de concentración e insomnio.",

  lowPerformance: "Bajo rendimiento",
  lowPerformanceText:
    "Disminución del desempeño escolar o laboral.",
  },
  en: {
  welcome: "Hello! Let's take care of your little one",
  selectLanguage: "Select your language",
  home: "Home",
  recipes: "Recipes",
  estimate: "AI",
  settings: "Settings",
  startEstimation: "Start estimation",
  disclaimerTitle: "Important Information",
  disclaimerText:
    "This tool uses artificial intelligence to estimate anemia risk based on visual indicators and symptoms. It is NOT a professional medical diagnosis.",
  next: "Next",
  back: "Back",
  uploadPhotos: "Upload Photos",
  photoNails: "Photo of nails",
  photoEyes: "Photo of eyes (lower eyelid)",
  uploadTip: "Ensure good natural light and that the image is sharp.",
  questionnaire: "Questionnaire",
  age: "Age (years)",
  weight: "Weight (kg)",
  height: "Height (cm)",
  energyLevel: "How is their energy level?",
  mood: "How has their mood been?",
  calculate: "Estimate risk",
  analyzing: "Analyzing information...",
  results: "Results",
  riskLevel: "Risk Level",
  low: "Low",
  medium: "Medium",
  high: "High",
  recommendation: "Recommendation",
  medicalDisclaimer:
    "This is not a diagnosis. Always consult a healthcare professional.",
  viewRecipe: "View Recipe",
  ingredients: "Ingredients",
  preparation: "Preparation",
  alternatives: "Alternative options",
  ironBenefit: "Iron Benefit",

  /* INFORMATION SECTION */

  infoTitle: "Anemia Information",

  keyConceptsTitle: "Key Concepts",
  keyConceptsText:
    "Anemia is a hematological disorder defined by a decrease in hemoglobin or red blood cells, reducing the blood's ability to transport oxygen to tissues.",

  ironDeficiencyTitle: "Iron Deficiency Anemia",
  ironDeficiencyText:
    "It is the most common type of anemia, caused by iron deficiency. It represents about 50% of cases worldwide and mainly affects children and pregnant women.",

  relatedFactorsTitle: "Related Diseases and Factors",
  relatedFactorsText:
    "It may be associated with vitamin B12 or folic acid deficiency, chronic diseases, inflammation, parasitic infections, and hemoglobin disorders. In vulnerable settings, it often coexists with malnutrition and recurrent infections, affecting cognitive and physical development.",

  nonInvasiveTitle: "Non-Invasive Estimation",
  visibleSignsTitle: "Visible Physical Signs",

  skinMucosa: "Skin and mucosa",
  skinMucosaText:
    "Paleness in the lower eyelids, oral mucosa, lips, and palms.",

  hairNails: "Hair and nails",
  hairNailsText:
    "Brittle hair, increased hair loss, and spoon-shaped nails (koilonychia).",

  mouth: "Mouth",
  mouthText:
    "Angular cheilitis and atrophic glossitis.",

  moodFatigueTitle: "Mood and Fatigue",

  chronicFatigue: "Chronic fatigue",
  chronicFatigueText:
    "Persistent tiredness and generalized weakness.",

  cognitiveAlterations: "Cognitive changes",
  cognitiveAlterationsText:
    "Irritability, apathy, difficulty concentrating, and insomnia.",

  lowPerformance: "Low performance",
  lowPerformanceText:
    "Reduced academic or work performance.",
},
  qu: {
    welcome: "¡Rimaykullayki! Wawaykipa qhalikayninta qhawasunchis",
    selectLanguage: "Simiykita akllay",
    home: "Qallariy",
    recipes: "Yanuykuna",
    estimate: "Tupuy",
    settings: "Allichaykuna",
    startEstimation: "Tupuyta qallariy",
    disclaimerTitle: "Ancha Allin Willakuy",
    disclaimerText: "Kay yanapakuymi IA nisqawan anemia unquyta tupun, ñawinchasqanman jina. Manan jampi yachaqpa nisqanchu.",
    next: "Qatiqnin",
    back: "Kutiy",
    uploadPhotos: "Rikch'aykunata churay",
    photoNails: "Sillukunapa rikch'aynin",
    photoEyes: "Ñawikunapa rikch'aynin",
    uploadTip: "Allin k'anchaypi hap'iy, sumaq rikch'akunanpaq.",
    questionnaire: "Tapuykuna",
    age: "Wata",
    weight: "Llasay (kg)",
    height: "Sayay (cm)",
    energyLevel: "¿Imaynan kallpan kachkan?",
    mood: "¿Imaynan sonqon kachkan?",
    calculate: "Tupuyta ruway",
    analyzing: "Willakuykunata t'aqwirichkan...",
    results: "Lluqsiyninkuna",
    riskLevel: "Unquy patan",
    low: "Pisi",
    medium: "Chawpi",
    high: "Ancha",
    recommendation: "Yuyaychay",
    medicalDisclaimer: "Kayqa manan jampi yachaqpa nisqanchu. Jampi yachaqmanpuni riy.",
    viewRecipe: "Yanuyta qhaway",
    ingredients: "Imakunawan yanuna",
    preparation: "Yanuy ñan",
    alternatives: "Huk yanuykuna",
    ironBenefit: "Hierro nisqa qoykuynin",
    /* INFORMATION SECTION */

  infoTitle: "Anemia Information",

  keyConceptsTitle: "Key Concepts",
  keyConceptsText:
    "Anemia is a hematological disorder defined by a decrease in hemoglobin or red blood cells, reducing the blood's ability to transport oxygen to tissues.",

  ironDeficiencyTitle: "Iron Deficiency Anemia",
  ironDeficiencyText:
    "It is the most common type of anemia, caused by iron deficiency. It represents about 50% of cases worldwide and mainly affects children and pregnant women.",

  relatedFactorsTitle: "Related Diseases and Factors",
  relatedFactorsText:
    "It may be associated with vitamin B12 or folic acid deficiency, chronic diseases, inflammation, parasitic infections, and hemoglobin disorders. In vulnerable settings, it often coexists with malnutrition and recurrent infections, affecting cognitive and physical development.",

  nonInvasiveTitle: "Non-Invasive Estimation",
  visibleSignsTitle: "Visible Physical Signs",

  skinMucosa: "Skin and mucosa",
  skinMucosaText:
    "Paleness in the lower eyelids, oral mucosa, lips, and palms.",

  hairNails: "Hair and nails",
  hairNailsText:
    "Brittle hair, increased hair loss, and spoon-shaped nails (koilonychia).",

  mouth: "Mouth",
  mouthText:
    "Angular cheilitis and atrophic glossitis.",

  moodFatigueTitle: "Mood and Fatigue",

  chronicFatigue: "Chronic fatigue",
  chronicFatigueText:
    "Persistent tiredness and generalized weakness.",

  cognitiveAlterations: "Cognitive changes",
  cognitiveAlterationsText:
    "Irritability, apathy, difficulty concentrating, and insomnia.",

  lowPerformance: "Low performance",
  lowPerformanceText:
    "Reduced academic or work performance.",

  },
  sw: {
    welcome: "Hello! Let's take care of your little one",
    selectLanguage: "Select your language",
    home: "Home",
    recipes: "Recipes",
    estimate: "Estimation",
    settings: "Settings",
    startEstimation: "Start estimation",
    disclaimerTitle: "Important Information",
    disclaimerText: "This tool uses artificial intelligence to estimate anemia risk based on visual indicators and symptoms. It is NOT a professional medical diagnosis.",
    next: "Next",
    back: "Back",
    uploadPhotos: "Upload Photos",
    photoNails: "Photo of nails",
    photoEyes: "Photo of eyes (lower eyelid)",
    uploadTip: "Ensure good natural light and that the image is sharp.",
    questionnaire: "Questionnaire",
    age: "Age (years)",
    weight: "Weight (kg)",
    height: "Height (cm)",
    energyLevel: "How is their energy level?",
    mood: "How has their mood been?",
    calculate: "Estimate risk",
    analyzing: "Analyzing information...",
    results: "Results",
    riskLevel: "Risk Level",
    low: "Low",
    medium: "Medium",
    high: "High",
    recommendation: "Recommendation",
    medicalDisclaimer: "This is not a diagnosis. Always consult a healthcare professional.",
    viewRecipe: "View Recipe",
    ingredients: "Ingredients",
    preparation: "Preparation",
    alternatives: "Alternative options",
    ironBenefit: "Iron Benefit",
    /* INFORMATION SECTION */

  infoTitle: "Anemia Information",

  keyConceptsTitle: "Key Concepts",
  keyConceptsText:
    "Anemia is a hematological disorder defined by a decrease in hemoglobin or red blood cells, reducing the blood's ability to transport oxygen to tissues.",

  ironDeficiencyTitle: "Iron Deficiency Anemia",
  ironDeficiencyText:
    "It is the most common type of anemia, caused by iron deficiency. It represents about 50% of cases worldwide and mainly affects children and pregnant women.",

  relatedFactorsTitle: "Related Diseases and Factors",
  relatedFactorsText:
    "It may be associated with vitamin B12 or folic acid deficiency, chronic diseases, inflammation, parasitic infections, and hemoglobin disorders. In vulnerable settings, it often coexists with malnutrition and recurrent infections, affecting cognitive and physical development.",

  nonInvasiveTitle: "Non-Invasive Estimation",
  visibleSignsTitle: "Visible Physical Signs",

  skinMucosa: "Skin and mucosa",
  skinMucosaText:
    "Paleness in the lower eyelids, oral mucosa, lips, and palms.",

  hairNails: "Hair and nails",
  hairNailsText:
    "Brittle hair, increased hair loss, and spoon-shaped nails (koilonychia).",

  mouth: "Mouth",
  mouthText:
    "Angular cheilitis and atrophic glossitis.",

  moodFatigueTitle: "Mood and Fatigue",

  chronicFatigue: "Chronic fatigue",
  chronicFatigueText:
    "Persistent tiredness and generalized weakness.",

  cognitiveAlterations: "Cognitive changes",
  cognitiveAlterationsText:
    "Irritability, apathy, difficulty concentrating, and insomnia.",

  lowPerformance: "Low performance",
  lowPerformanceText:
    "Reduced academic or work performance.",
  },
};
