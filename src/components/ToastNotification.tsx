import React from 'react';
import { Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
      <div className="bg-stone-900 text-white text-xs sm:text-sm font-medium py-3 px-5 rounded-xl shadow-2xl border border-[#D4AF37]/50 flex items-center gap-2.5">
        <Sparkles className="w-4 h-4 text-[#DFC16E] shrink-0" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
