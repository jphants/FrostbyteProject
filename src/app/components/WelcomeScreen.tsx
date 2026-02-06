import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';
import { Button, Typography, Card } from './ui';
import { Heart, Globe } from 'lucide-react';

interface WelcomeScreenProps {
  onContinue: () => void;
}

export const WelcomeScreen = ({ onContinue }: WelcomeScreenProps) => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'qu', name: 'Quechua', flag: '🇵🇪' },
    { code: 'sw', name: 'Swahili', flag: '🇹🇿' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-2 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >

        <Typography.H1 className="text-3xl mb-2">AnemiaGuard</Typography.H1>
        <Typography.P className="text-gray-500">Juntos por un crecimiento sano</Typography.P>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-xs"
      >
        <Typography.Small className="block mb-4 font-bold uppercase tracking-wider text-gray-400">
          {t.selectLanguage}
        </Typography.Small>
        
        <div className="space-y-3 mb-8">
          {languages.map((lang) => (
            <Card
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={cn(
                "flex items-center gap-4 py-4 px-6 border-2 transition-all",
                language === lang.code ? "border-[#ED5C66] bg-[#ED5C66]/5" : "border-transparent"
              )}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className={cn(
                "font-semibold flex-1 text-left",
                language === lang.code ? "text-[#ED5C66]" : "text-gray-700"
              )}>
                {lang.name}
              </span>
              {language === lang.code && (
                <div className="w-2 h-2 rounded-full bg-[#ED5C66]" />
              )}
            </Card>
          ))}
        </div>

        <Button onClick={onContinue} size="lg" className="w-full">
          {t.next}
        </Button>
      </motion.div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
