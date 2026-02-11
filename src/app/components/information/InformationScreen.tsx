import React from 'react';
import { motion } from 'motion/react';
import { Typography, Card } from '../ui';
import { Info, Activity, HeartPulse, Brain, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const InformationScreen = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 pb-10">

      {/* Header */}
      <header className="pt-2">
        <Typography.Small className="font-bold text-[#ED5C66]">
          AnemiaGuard
        </Typography.Small>
        <Typography.H1 className="text-xl">
          {t.infoTitle}
        </Typography.H1>
      </header>

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

      {/* Estimación No Invasiva */}
      <section className="space-y-4">
        <Typography.H2 className="text-lg">
          {t.nonInvasiveTitle}
        </Typography.H2>

        <Card className="p-5 bg-[#A3ECE6]/10 border-none">
          <div className="flex items-start gap-3 mb-3">
            <Activity className="w-6 h-6 text-[#5ccfc5]" />
            <Typography.Small className="font-bold">
              {t.visibleSignsTitle}
            </Typography.Small>
          </div>
          <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>
              <strong>{t.skinMucosa}:</strong> {t.skinMucosaText}
            </li>
            <li>
              <strong>{t.hairNails}:</strong> {t.hairNailsText}
            </li>
            <li>
              <strong>{t.mouth}:</strong> {t.mouthText}
            </li>
          </ul>
        </Card>
      </section>

      {/* Estado de Ánimo */}
      <Card className="p-5 bg-purple-50 border-none">
        <div className="flex items-start gap-3 mb-3">
          <Brain className="w-6 h-6 text-purple-500" />
          <Typography.Small className="font-bold text-purple-800">
            {t.moodFatigueTitle}
          </Typography.Small>
        </div>
        <ul className="text-sm text-purple-700 space-y-2 list-disc list-inside">
          <li>
            <strong>{t.chronicFatigue}:</strong> {t.chronicFatigueText}
          </li>
          <li>
            <strong>{t.cognitiveAlterations}:</strong> {t.cognitiveAlterationsText}
          </li>
          <li>
            <strong>{t.lowPerformance}:</strong> {t.lowPerformanceText}
          </li>
        </ul>
      </Card>

    </div>
  );
};
