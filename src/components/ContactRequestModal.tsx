import React from 'react';
import imgAvatar from '../assets/contacts.png';
import TelegramIcon from './icons/TelegramIcon';
import PhoneFillIcon from './icons/PhoneFillIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';

type ContactRequestModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ContactRequestModal: React.FC<ContactRequestModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={onClose} />

      <div className="relative z-10 w-full max-w-[500px] rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_10px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <button aria-label="Закрыть" onClick={onClose} className="absolute right-3 top-3 text-white/80 hover:text-white">
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* header */}
        <div className="flex items-center gap-6">
          <img src={imgAvatar} alt="Аватар" className="h-20 w-20 rounded-[12px] object-cover" />
          <div className="flex min-w-0 flex-col gap-3">
            <h3 className="text-[24px] leading-[110%] tracking-[-0.04em] text-[#F3F3F3]">Любой контакт под запрос</h3>
            <p className="text-[18px] leading-[130%] text-[#B5B5B5]">Чтобы не шерить данные ребят в открытом доступе</p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-8 space-y-3">
          {/* row 1 */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <a
              href="https://t.me/Kudryavtcev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[50px] items-center gap-2 rounded-[36px] bg-[#C6F57A] px-4 text-[14px] font-medium text-[#060807] hover:brightness-95"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#C6F57A]"><TelegramIcon /></span>
              Написать в Телеграм
            </a>
            <a
              href="tel:+79607793254"
              className="inline-flex h-[50px] items-center gap-2 rounded-[36px] border border-[#B5B5B5] px-4 text-[14px] text-[#B5B5B5] hover:border-white/40"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full"><PhoneFillIcon /></span>
              +7 (960) 779-32-54
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRequestModal;


