import React from 'react';
import { motion } from 'motion/react';
import { Typography, Card } from '../ui';
import { AlertTriangle, Stethoscope, Brain, Utensils, Pill } from 'lucide-react';

export const InformationScreen = () => {
  return (
    <div className="space-y-6 pb-10">

      {/* Header */}
      <header className="pt-2">
        <Typography.Small className="font-bold text-[#ED5C66]">
          AnemiaGuard
        </Typography.Small>
        <Typography.H1 className="text-xl">
          Signos de Alerta y Efectos Secundarios
        </Typography.H1>
      </header>

      {/* SIGNOS DE ALERTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 bg-red-50 border-l-4 border-red-500 shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <Typography.H2 className="text-red-700 text-lg font-bold">
              🔴 Signos de Alerta
            </Typography.H2>
          </div>

          <Typography.P className="text-sm text-red-800 mb-4 font-medium">
            La falta de adherencia al tratamiento puede hacer que los síntomas
            perduren o se agraven. Se debe vigilar:
          </Typography.P>

          <ul className="space-y-3 text-sm text-gray-800">
            <li className="flex gap-2">
              <Stethoscope className="w-4 h-4 mt-1 text-red-500" />
              <span>
                <strong>Síntomas cardiopulmonares:</strong> dificultad respiratoria
                al esfuerzo, taquicardia o soplos.
              </span>
            </li>

            <li className="flex gap-2">
              <Utensils className="w-4 h-4 mt-1 text-red-500" />
              <span>
                <strong>Trastornos de conducta (Pica):</strong> tendencia a comer
                tierra (geofagia) o hielo (pagofagia).
              </span>
            </li>

            <li className="flex gap-2">
              <Brain className="w-4 h-4 mt-1 text-red-500" />
              <span>
                <strong>Neurológicos:</strong> alteraciones del lenguaje o atención.
              </span>
            </li>

            <li className="flex gap-2">
              <AlertTriangle className="w-4 h-4 mt-1 text-red-500" />
              <span>
                <strong>Generales:</strong> mareos, cefaleas intensas, anorexia
                o crecimiento inadecuado.
              </span>
            </li>
          </ul>
        </Card>
      </motion.div>

      {/* EFECTOS SECUNDARIOS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 bg-amber-50 border-l-4 border-amber-500 shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <Pill className="w-6 h-6 text-amber-600" />
            <Typography.H2 className="text-amber-700 text-lg font-bold">
              ⚠️ Recordatorio de Efectos Secundarios
            </Typography.H2>
          </div>

          <Typography.P className="text-sm text-amber-800 mb-4 font-medium">
            Es vital educar al paciente para evitar el abandono del tratamiento
            por efectos adversos comunes:
          </Typography.P>

          <ul className="space-y-3 text-sm text-gray-800">
            <li>
              <strong>Heces oscuras:</strong> es normal y temporal, no es signo de alarma.
            </li>

            <li>
              <strong>Estreñimiento / Diarrea:</strong> se sugiere fraccionar la dosis
              o cambiar el horario.
            </li>

            <li>
              <strong>Dolor estomacal:</strong> dar el suplemento junto con el
              refrigerio (evitando lácteos).
            </li>

            <li>
              <strong>Manchas en dientes:</strong> mezclar con agua o jugo y evitar
              contacto prolongado con la boca.
            </li>
          </ul>
        </Card>
      </motion.div>

    </div>
  );
};
