import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomeScreen } from './components/HomeScreen';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { MLEstimationFlow } from './components/MLEstimationFlow';
import { recipes, Recipe } from './data/recipes';
import { Typography } from './components/ui';
import { Home, Utensils, Activity, Settings, ChevronLeft, Smile } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import EmotionsScreen from './components/Emotions/EmotionsScreen';
import { ironFoods } from './components/RecipeDetail'; // 👈 IMPORTANTE
import { getAllRecipes } from '../Utils/getAllRecipes';


type Screen = 'welcome' | 'home' | 'recipes_list' | 'recipe_detail' | 'estimation' | 'settings' | 'emotions';

const AppContent = () => {
  const { language, t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const navigateTo = (screen: Screen) => setCurrentScreen(screen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onContinue={() => navigateTo('home')} />;
      
      case 'home':
        return (
          <HomeScreen 
            onStartEstimation={() => navigateTo('estimation')}
            onViewRecipes={() => navigateTo('recipes_list')}
          />
        );

      case 'recipe_detail':
        return (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => {
              setSelectedRecipe(null);
              navigateTo('home');
            }}
            onSelectRecipe={(recipeId) => {
              const all = getAllRecipes();
              const found = all.find(r => r.id === recipeId);

              if (found) {
                setSelectedRecipe(found);
                navigateTo('recipe_detail');
              } else {
                console.error("Receta no encontrada:", recipeId);
              }
            }}
          />
        );


      case 'estimation':
        return <MLEstimationFlow onBack={() => navigateTo('home')} />;

      case 'settings':
        return (
          <div className="pt-2">
            <Typography.H1 className="mb-6">{t.settings}</Typography.H1>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
                <span className="font-medium text-gray-700">Idioma</span>
                <span className="text-[#ED5C66] font-bold uppercase">{language}</span>
              </div>
              <button 
                onClick={() => navigateTo('welcome')}
                className="w-full p-4 bg-gray-100 rounded-2xl text-left font-medium text-gray-600 active:bg-gray-200 transition-colors"
              >
                Cambiar Idioma / Cerrar Sesión
              </button>
            </div>
          </div>
        );

      case 'emotions':
        return <EmotionsScreen />;


      default:
        return <div className="p-10 text-center">Screen not implemented</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      {/* Mobile Frame Container */}
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
          <nav className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-4 pb-8 flex justify-between items-center z-50">
            <NavIcon 
              active={currentScreen === 'home'} 
              icon={<Home size={24} />} 
              label={t.home} 
              onClick={() => navigateTo('home')} 
            />
            <NavIcon 
              active={currentScreen === 'emotions'} 
              icon={<Smile size={24} />} 
              label="Emociones" 
              onClick={() => navigateTo('emotions')} 
            />

            <NavIcon 
              active={currentScreen === 'recipe_detail'} 
              icon={<Utensils size={24} />} 
              label="Hierro" 
              onClick={() => navigateTo('recipe_detail')} 
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
    <div className={`p-1 rounded-xl transition-colors ${active ? 'bg-[#ED5C66]/10' : ''}`}>
      {icon}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);



const App = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
