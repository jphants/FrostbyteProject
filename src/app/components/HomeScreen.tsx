import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Button, Typography, Card } from './ui';
import { Sparkles, Utensils, Info, ArrowRight, Activity, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeScreenProps {
  onStartEstimation: () => void;
  onViewRecipes: () => void;
}

export const HomeScreen = ({ onStartEstimation, onViewRecipes }: HomeScreenProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 pb-10">
      <header className="flex justify-between items-center mb-2 pt-2">
        <div>
          <Typography.Small className="font-bold text-[#ED5C66]">AnemiaGuard</Typography.Small>
          <Typography.H1 className="text-xl">{t.welcome}</Typography.H1>
        </div>
      </header>

      {/* Main Action - AI Estimation */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#ED5C66] to-[#ff8c94] p-6 text-white shadow-lg shadow-[#ED5C66]/20 cursor-pointer"
        onClick={onStartEstimation}
      >
        <div className="relative z-10 flex flex-col h-full justify-between gap-6">
          <div className="flex justify-between items-start">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <Typography.H2 className="text-white text-2xl mb-1">Estimación IA</Typography.H2>
            <Typography.P className="text-white/80 text-sm mb-4">
              Realiza un chequeo rápido no invasivo para detectar señales tempranas.
            </Typography.P>
            <div className="flex items-center gap-2 font-bold text-sm bg-white text-[#ED5C66] w-fit px-4 py-2 rounded-full shadow-sm">
              {t.startEstimation} <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Quick Stats / Tracking Placeholder */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col gap-2 p-5 bg-[#A3ECE6]/10 border-none">
          <Activity className="w-6 h-6 text-[#A3ECE6]" />
          <Typography.Small className="font-bold">Seguimiento</Typography.Small>
          <Typography.H2 className="text-lg">8.2 g/dL</Typography.H2>
          <Typography.Small>Última medición</Typography.Small>
        </Card>
        <Card className="flex flex-col gap-2 p-5 bg-orange-50 border-none">
          <Calendar className="w-6 h-6 text-orange-400" />
          <Typography.Small className="font-bold">Próxima cita</Typography.Small>
          <Typography.H2 className="text-lg">15 Feb</Typography.H2>
          <Typography.Small>Control pediátrico</Typography.Small>
        </Card>
      </div>

      {/* Recipes Section */}
      <section>
        <div className="flex justify-between items-end mb-4 px-1">
          <Typography.H2>{t.recipes}</Typography.H2>
          <button onClick={onViewRecipes} className="text-[#ED5C66] text-sm font-bold flex items-center gap-1">
            Ver todas <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <Card onClick={onViewRecipes} className="relative h-40 overflow-hidden p-0 mb-4 border-none shadow-md">
          <ImageWithFallback 
            src="https://cdn-icons-png.flaticon.com/512/1784/1784216.png" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
            <Typography.H2 className="text-white text-lg">Dieta rica en Hierro</Typography.H2>
            <Typography.P className="text-white/80 text-xs">Descubre recetas deliciosas y nutritivas.</Typography.P>
          </div>
        </Card>
      </section>

      {/* Educational Tip */}
      <Card className="bg-blue-50 border-none flex gap-4 items-center p-5">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
          <Info className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <Typography.Small className="font-bold text-blue-800">¿Sabías que...?</Typography.Small>
          <Typography.P className="text-sm text-blue-700">
            La vitamina C ayuda a que el cuerpo absorba mejor el hierro de los alimentos.
          </Typography.P>
        </div>
      </Card>
    </div>
  );
};
