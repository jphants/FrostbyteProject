import React from 'react';
import { motion } from 'motion/react';
import { Typography, Card } from '../ui';
import { useLanguage } from '../../context/LanguageContext';
import type { Screen } from '../../../types/navigation';

import {
  Sparkles,
  HeartPulse,
  Info,
  Activity,
  Brain,
} from 'lucide-react';

interface SettingsScreenProps {
  navigateTo: (screen: Screen) => void;
  t: any;
}

export const SettingsScreen = ({ navigateTo, t }: SettingsScreenProps) => {
  const { language } = useLanguage();

  return (
    <div className="pt-2 space-y-6">

      {/* Conceptos Clave */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 bg-gradient-to-br from-[#ED5C66] to-[#ff8c94] text-white border-none shadow-lg shadow-[#ED5C66]/20">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-white" />
            <Typography.H2 className="text-white text-lg">
              {t.keyConceptsTitle}
            </Typography.H2>
          </div>
          <Typography.P className="text-white/90 text-sm leading-relaxed">
            {t.keyConceptsText}
          </Typography.P>
        </Card>
      </motion.div>

      {/* Anemia Ferropénica */}
      <Card className="p-5 bg-orange-50 border-none">
        <div className="flex items-start gap-3 mb-2">
          <HeartPulse className="w-6 h-6 text-orange-400" />
          <Typography.Small className="font-bold">
            {t.ironDeficiencyTitle}
          </Typography.Small>
        </div>
        <Typography.P className="text-sm text-gray-700">
          {t.ironDeficiencyText}
        </Typography.P>
      </Card>

      {/* Factores Relacionados */}
      <Card className="p-5 bg-blue-50 border-none">
        <div className="flex items-start gap-3 mb-2">
          <Info className="w-6 h-6 text-blue-500" />
          <Typography.Small className="font-bold text-blue-800">
            {t.relatedFactorsTitle}
          </Typography.Small>
        </div>
        <Typography.P className="text-sm text-blue-700">
          {t.relatedFactorsText}
        </Typography.P>
      </Card>

      {/* SETTINGS SECTION */}
      <div className="pt-4 border-t">
        <Typography.H1 className="mb-6">
          {t.settings}
        </Typography.H1>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
            <span className="font-medium text-gray-700">Idioma</span>
            <span className="text-[#ED5C66] font-bold uppercase">
              {language}
            </span>
          </div>

          <button
            onClick={() => navigateTo('welcome')}
            className="w-full p-4 bg-gray-100 rounded-2xl text-left font-medium text-gray-600 active:bg-gray-200 transition-colors"
          >
            Cambiar Idioma / Cerrar Sesión
          </button>
        </div>
      </div>

    </div>
  );
};
