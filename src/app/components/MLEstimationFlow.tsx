import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Button, Typography, Card } from './ui';
import { ChevronLeft, Camera, Upload, AlertCircle, CheckCircle2, Loader2, Info } from 'lucide-react';

interface MLEstimationProps {
  onBack: () => void;
}

export const MLEstimationFlow = ({ onBack }: MLEstimationProps) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | 'low' | 'medium' | 'high'>(null);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => {
    if (step === 1) onBack();
    else setStep(s => s - 1);
  };

  const simulateAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Random result for demo
      const results: ('low' | 'medium' | 'high')[] = ['low', 'medium', 'high'];
      setResult(results[Math.floor(Math.random() * results.length)]);
      setStep(5);
    }, 3000);
  };

  const renderStep = () => {
    switch (step) {
      case 1: // Intro & Disclaimer
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="bg-[#A3ECE6]/20 p-6 rounded-3xl mb-6">
                <Info className="w-10 h-10 text-[#A3ECE6] mb-4" />
                <Typography.H1 className="mb-4">{t.disclaimerTitle}</Typography.H1>
                <Typography.P>{t.disclaimerText}</Typography.P>
              </div>
              <Card className="border-l-4 border-[#ED5C66]">
                <Typography.P className="text-sm italic">
                  {t.medicalDisclaimer}
                </Typography.P>
              </Card>
            </div>
            <Button onClick={nextStep} size="lg" className="w-full mt-6">
              {t.next}
            </Button>
          </motion.div>
        );

      case 2: // Photo Upload
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <Typography.H1 className="mb-6">{t.uploadPhotos}</Typography.H1>
            <div className="space-y-4 flex-1">
              <PhotoPlaceholder label={t.photoNails} />
              <PhotoPlaceholder label={t.photoEyes} />
              <div className="bg-blue-50 p-4 rounded-2xl flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <Typography.Small className="text-blue-700">{t.uploadTip}</Typography.Small>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={prevStep} className="flex-1">{t.back}</Button>
              <Button onClick={nextStep} className="flex-2">{t.next}</Button>
            </div>
          </motion.div>
        );

      case 3: // Questionnaire
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <Typography.H1 className="mb-6">{t.questionnaire}</Typography.H1>
            <div className="space-y-6 flex-1 overflow-y-auto pb-4">
              <InputGroup label={t.age} placeholder="Ex: 2" />
              <div className="flex gap-4">
                <InputGroup label={t.weight} placeholder="Kg" className="flex-1" />
                <InputGroup label={t.height} placeholder="cm" className="flex-1" />
              </div>
              <InputGroup label={t.energyLevel} type="select" options={['Bajo', 'Medio', 'Alto']} />
              <InputGroup label={t.mood} type="select" options={['Normal', 'Iritado', 'Cansado']} />
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={prevStep} className="flex-1">{t.back}</Button>
              <Button onClick={nextStep} className="flex-2">{t.next}</Button>
            </div>
          </motion.div>
        );

      case 4: // Loading/Trigger
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center"
          >
            {loading ? (
              <>
                <Loader2 className="w-16 h-16 text-[#ED5C66] animate-spin mb-6" />
                <Typography.H2>{t.analyzing}</Typography.H2>
              </>
            ) : (
              <>
                <div className="w-24 h-24 bg-[#ED5C66]/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-[#ED5C66]" />
                </div>
                <Typography.H1 className="mb-4">¿Todo listo?</Typography.H1>
                <Typography.P className="mb-10 px-6">
                  Hemos recopilado la información necesaria para realizar la estimación.
                </Typography.P>
                <Button onClick={simulateAnalysis} size="lg" className="w-full">
                  {t.calculate}
                </Button>
                <Button variant="ghost" onClick={prevStep} className="mt-4">
                  Revisar datos
                </Button>
              </>
            )}
          </motion.div>
        );

      case 5: // Results
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col h-full"
          >
            <Typography.H1 className="mb-6 text-center">{t.results}</Typography.H1>
            
            <Card className={cn(
              "p-8 mb-6 text-center border-t-8",
              result === 'low' ? "border-green-500" : result === 'medium' ? "border-yellow-500" : "border-red-500"
            )}>
              <Typography.Small className="uppercase tracking-wider font-bold block mb-2">{t.riskLevel}</Typography.Small>
              <div className={cn(
                "text-4xl font-black mb-4",
                result === 'low' ? "text-green-600" : result === 'medium' ? "text-yellow-600" : "text-red-600"
              )}>
                {result === 'low' ? t.low : result === 'medium' ? t.medium : t.high}
              </div>
              <Typography.P className="text-sm">
                {result === 'low' 
                  ? "Se observa un riesgo bajo de anemia. Continúa con una dieta balanceada." 
                  : result === 'medium' 
                  ? "Existe una probabilidad moderada. Se recomienda reforzar alimentos con hierro."
                  : "Se detectan múltiples indicadores de riesgo. Es importante actuar pronto."}
              </Typography.P>
            </Card>

            <div className="bg-gray-50 p-6 rounded-3xl mb-8">
              <Typography.H2 className="text-base mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#ED5C66]" />
                {t.recommendation}
              </Typography.H2>
              <ul className="text-sm text-gray-600 space-y-3 list-disc pl-4">
                <li>{result === 'high' ? 'Contactar a un pediatra de inmediato.' : 'Programar un control de hemoglobina.'}</li>
                <li>Incluir sangrecita o hígado en la dieta 3 veces por semana.</li>
                <li>Evitar lácteos inmediatamente después de las comidas principales.</li>
              </ul>
            </div>

            <div className="mt-auto space-y-4">
              <Typography.Small className="text-center block italic text-xs px-4">
                {t.medicalDisclaimer}
              </Typography.Small>
              <Button onClick={onBack} size="lg" className="w-full">
                Finalizar
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-[80vh]">
      <div className="flex items-center mb-6">
        <button onClick={prevStep} className="p-2 -ml-2 rounded-full active:bg-gray-100">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex-1 h-2 bg-gray-100 rounded-full mx-4 overflow-hidden">
          <motion.div 
            className="h-full bg-[#ED5C66]" 
            initial={{ width: 0 }}
            animate={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
        <Typography.Small className="font-bold">{step}/5</Typography.Small>
      </div>
      <AnimatePresence mode="wait">
        <div key={step} className="flex-1 overflow-y-auto">
          {renderStep()}
        </div>
      </AnimatePresence>
    </div>
  );
};

const PhotoPlaceholder = ({ label }: { label: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        onClick={handleClick}
        className="relative border-2 border-dashed border-gray-200 rounded-3xl
                   p-4 bg-gray-50 cursor-pointer overflow-hidden
                   active:bg-gray-100 transition-colors h-48"
      >
        {preview ? (
          <img
            src={preview}
            alt={label}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Camera className="w-6 h-6 text-[#ED5C66]" />
            </div>
            <Typography.Small className="font-medium text-gray-700">
              {label}
            </Typography.Small>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Upload className="w-3 h-3" />
              <span>Sube o toma una foto</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const InputGroup = ({ label, placeholder, type = 'text', options, className }: any) => (
  <div className={className}>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    {type === 'select' ? (
      <select className="w-full bg-gray-50 border-none rounded-2xl p-4 text-gray-800 focus:ring-2 focus:ring-[#ED5C66]/20">
        {options.map((o: string) => <option key={o} value={o}>{o}</option>)}
      </select>
    ) : (
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-50 border-none rounded-2xl p-4 text-gray-800 focus:ring-2 focus:ring-[#ED5C66]/20 placeholder:text-gray-400"
      />
    )}
  </div>
);

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
