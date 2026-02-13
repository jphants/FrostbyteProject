import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomeScreen } from './components/HomeScreen';
import { RecipeDetail } from './components/RecipeDetail';
import { MLEstimationFlow } from './components/MLEstimationFlow';
import { Recipe } from './data/recipes';
import { Typography } from './components/ui';
import { Home, Utensils, Activity, Settings, Smile, InfoIcon, AlertCircleIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import EmotionsScreen from './components/Emotions/EmotionsScreen';
import { getAllRecipes } from '../Utils/getAllRecipes';
import { train } from '../Utils/trainModel';
import * as tf from '@tensorflow/tfjs';
import { InformationScreen } from './components/information/InformationScreen';
import { SettingsScreen } from './components/settings/settingsScreen';

import type { Screen } from '../types/navigation';


const AppContent = () => {
  const { language, t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Estado para mostrar que el modelo ya fue entrenado
  const [trained, setTrained] = useState(false);

  const navigateTo = (screen: Screen) => setCurrentScreen(screen);

// In App.tsx
const handleTrain = async () => {
  console.log('🧠 Entrenando modelo...');
  try {
    await train();
    console.log('🎉 Modelo entrenado');
    setTrained(true);
  } catch (error) {
    console.error('❌ ERROR EN ENTRENAMIENTO:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
  }
};

async function testModel() {
  try {
    console.log('📦 Cargando modelo...');
    const model = await tf.loadLayersModel('/models/eyes-anemia-model.json');

    console.log('✅ Modelo cargado');
    model.summary();

    // 🔹 INPUT DUMMY (1280 features)
    const input = tf.randomNormal([1, 1280]);

    const output = model.predict(input) as tf.Tensor;

    const result = await output.array();
    console.log('🎯 Output del modelo:', result);
    // Ej: [[0.83, 0.17]]

    input.dispose();
    output.dispose();
  } catch (error) {
    console.error('❌ Error probando el modelo:', error);
  }
}
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onContinue={() => navigateTo('home')} />;

      case 'home':
        return (
          <HomeScreen
            onStartEstimation={() => navigateTo('estimation')}
            onViewRecipes={() => navigateTo('recipe_detail')}
          />
        );

      case 'recipe_detail':
        return (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => {
              setSelectedRecipe(null);
              navigateTo('recipe_detail');
            }}
            onSelectRecipe={(recipeId) => {
              const all = getAllRecipes();
              const found = all.find((r) => r.id === recipeId);
              if (found) {
                setSelectedRecipe(found);
                navigateTo('recipe_detail');
              }
            }}
          />
        );

      case 'estimation':
        return <MLEstimationFlow onBack={() => navigateTo('home')} />;

      case 'settings':
        return <SettingsScreen navigateTo={navigateTo} t={t} />;

      case 'emotions':
        return <EmotionsScreen />;

      case 'information':
        return <InformationScreen />;

      default:
        return <div className="p-10 text-center">Screen not implemented</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col overflow-hidden">
        {/* Status Bar Mock */}
        <div className="h-10 w-full flex justify-between items-center px-6 pt-2 select-none">
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto px-5 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen + (selectedRecipe?.id || '')}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        {currentScreen !== 'welcome' && (
          <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-4 pb-8 flex justify-between items-center z-50">
            <NavIcon
              active={currentScreen === 'home'}
              icon={<Home size={24} />}
              label={t.home}
              onClick={() => navigateTo('home')}
            />
            <NavIcon
              active={currentScreen === 'emotions'}
              icon={<Smile size={24} />}
              label="Animo"
              onClick={() => navigateTo('emotions')}
            />
            <NavIcon
              active={currentScreen === 'recipe_detail'}
              icon={<Utensils size={24} />}
              label="Dieta"
              onClick={() => {
                setSelectedRecipe(null);
                navigateTo('recipe_detail');
              }}
            />
            <NavIcon
              active={currentScreen === 'estimation'}
              icon={<Activity size={24} />}
              label={t.estimate}
              onClick={() => navigateTo('estimation')}
            />
            <NavIcon
              active={currentScreen === 'settings'}
              icon={<Settings size={24} />}
              label={t.settings}
              onClick={() => navigateTo('settings')}
            />
            <NavIcon
              active={currentScreen === 'information'}
              icon={<AlertCircleIcon size={24} />}
              label="Alerta"
              onClick={() => navigateTo('information')}
            />
          </nav>
        )}
      </div>
    </div>
  );
};

const NavIcon = ({ active, icon, label, onClick }: any) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-[#ED5C66]' : 'text-gray-400'}`}
  >
    <div className={`p-1 rounded-xl transition-colors ${active ? 'bg-[#ED5C66]/10' : ''}`}>{icon}</div>
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

const App = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
