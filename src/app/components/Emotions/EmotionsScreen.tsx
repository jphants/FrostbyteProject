import { useState, useEffect } from 'react';
import { Smile, Frown, Meh, SmilePlus, Angry } from 'lucide-react';
import dayjs from 'dayjs';
import { Button, Typography, Card } from '../ui';
type Emotion = 'happy' | 'sad' | 'neutral' | 'angry' | 'excited' | 'sleepy';

const EMOTIONS: { type: Emotion; label: string; icon: any; color: string }[] = [
  { type: 'happy', label: 'Feliz', icon: Smile, color: '#FFD700' },
  { type: 'sad', label: 'Triste', icon: Frown, color: '#1E90FF' },
  { type: 'neutral', label: 'Neutral', icon: Meh, color: '#808080' },
  { type: 'angry', label: 'Enojado', icon: Angry, color: '#FF4500' },
  { type: 'excited', label: 'Emocionado', icon: SmilePlus, color: '#FF69B4' },
  { type: 'sleepy', label: 'Somnoliento', icon: SmilePlus, color: '#9370DB' },
];

type EmotionsRecord = Record<string, Emotion>; // key = fecha "YYYY-MM-DD"

export default function EmotionsScreen() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [records, setRecords] = useState<Record<string, string>>({});

  const today = dayjs().format('YYYY-MM-DD');

  // Cargar registros desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem('emotions') ?? '{}';
    const parsed: Record<string, string> = JSON.parse(stored);
    setRecords(parsed);
  }, []);

  // Guardar en localStorage cuando se selecciona una emoción
  const handleSelectEmotion = (emotion: Emotion) => {
    const newRecords = { ...records, [today]: emotion };
    setRecords(newRecords);
    setSelectedEmotion(emotion);
    localStorage.setItem('emotions', JSON.stringify(newRecords));
  };

  // Crear matriz de días del mes para mostrar
  const daysInMonth = Array.from({ length: dayjs().daysInMonth() }, (_, i) => dayjs().date(i + 1).format('YYYY-MM-DD'));

  return (
    <div className="p-5 bg-gradient-to-b to-white">
      <h1 className="text-2xl text-center mb-4 font-bold">Registro de Emociones</h1>

      {/* Selector de emoción de hoy */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {EMOTIONS.map(({ type, label, icon: Icon, color }) => (
          <button
            key={type}
            onClick={() => handleSelectEmotion(type)}
            className={`flex flex-col items-center justify-center gap-2
              h-24 rounded-xl border-2 transition-all
              ${
                selectedEmotion === type
                  ? 'border-black scale-105'
                  : 'border-gray-200'
              }`}
            style={{
              backgroundColor: selectedEmotion === type ? color + '33' : 'transparent',
            }}
          >
            <Icon size={32} color={color} />
            <span className="text-sm font-medium text-center">{label}</span>
          </button>
        ))}
      </div>


      {/* Vista mensual */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Vista Mensual</h2>
        <div className="grid grid-cols-7 gap-2">
          {daysInMonth.map(day => {
            const emotion = records[day];
            const color = EMOTIONS.find(e => e.type === emotion)?.color || '#E0E0E0';
            return (
              <div
                key={day}
                className="h-10 w-10 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: color }}
                title={`${day} - ${emotion || 'Sin registro'}`}
              >
                {dayjs(day).date()}
              </div>
            );
          })}
        </div>
      </div>

      <div>
        
              <Card className="mt-5 border-l-4 border-[#ED5C66]">
                <Typography.P className="text-sm italic">
                  Este registro es privado y solo se almacena en tu dispositivo para ayudarte a identificar patrones emocionales a lo largo del tiempo.
                  Si notas que tu hijo está frecuentemente triste o enojado, considera hablar con un profesional de la salud para obtener apoyo adicional.
                </Typography.P>
              </Card>

      </div>
    </div>
  );
}
