import { EmotionsProvider } from './EmotionContext';
import { MonthlyEmotionGauge } from './MonthlyEmotionController';
import { EmotionCheckIn } from './EmotionsCheckIn';
import { EmotionCalendar } from './EmotionCalendar';

export default function EmotionsScreen() {
  return (
    <EmotionsProvider>
      <div className="p-5 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <h1 className="text-2xl text-center mb-4 font-extrabold">
          Registro emocional
        </h1>

        <MonthlyEmotionGauge />

        <div className="mt-4 p-4 rounded-xl border-2 border-red-400 bg-red-50 text-sm italic">
          Este registro es privado y solo se almacena en tu dispositivo para ayudarte a identificar patrones emocionales a lo largo del tiempo.
          Si notas que tu hijo está frecuentemente desanimado o irritable, considera hablar con un profesional de la salud.
        </div>

        <EmotionCheckIn />
        <EmotionCalendar />
      </div>
    </EmotionsProvider>
  );
}
