export type Language = 'es' | 'en' | 'qu';

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
}

export const translations: Record<Language, Translation> = {
  es: {
    welcome: "¡Hola! Cuidemos la salud de tu pequeño",
    selectLanguage: "Selecciona tu idioma",
    home: "Inicio",
    recipes: "Recetas",
    estimate: "Estimación",
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
  },
  en: {
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
  }
};
