import React from 'react';
import imgAvatar from '../assets/contacts.png';
import VkIcon from './icons/VkIcon';
import InstagramIcon from './icons/InstagramIcon';
import { ResumeIcon } from './icons/ResumeIcon';
import TelegramIcon from './icons/TelegramIcon';
import PhoneFillIcon from './icons/PhoneFillIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';

export type ContactsModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ContactsModal: React.FC<ContactsModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  const base = import.meta.env.BASE_URL || '/';
  const resumeUrl = `${base}images/resume.png`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={onClose} />

      {/* dialog */}
      <div className="relative z-10 w-full max-w-[500px] rounded-[28px] border border-white/10 bg-[#0B0B0B] p-8 shadow-[0_10px_60px_rgba(0,0,0,0.6)]">
        {/* close */}
        <button aria-label="Закрыть" onClick={onClose} className="absolute right-3 top-3 text-white/80 hover:text-white">
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          {/* avatar */}
          <img src={imgAvatar} alt="Аватар" className="h-[80px] w-[80px] rounded-[12px] object-cover" />

          <div className="flex-1">
            <h3 className="text-[24px] leading-[110%] tracking-[-0.04em] font-normal text-[#F3F3F3]">Александр Кудрявцев</h3>
            <p className="mt-3 text-[18px] leading-[130%] text-[#B5B5B5]">Chief Product &amp; Growth Officer / Ex. CMO</p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-8 grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <a
            href="https://t.me/Kudryavtcev"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex h-[50px] items-center gap-2 rounded-[36px] bg-[#C6F57A] px-4 text-[14px] font-medium text-[#060807] hover:brightness-95"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#C6F57A]"><TelegramIcon className="h-5 w-5 text-[#C6F57A]" /></span>
              Написать в Телеграм
            </a>

            <a
              href="tel:+79607793254"
              className="inline-flex h-[50px] items-center gap-2 rounded-[36px] border border-[#B5B5B5] px-4 text-[14px] text-[#B5B5B5] hover:border-white/40"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full"><PhoneFillIcon className="h-5 w-5 text-[#B5B5B5]" /></span>
              +7 (960) 779-32-54
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <a
              href={resumeUrl}
              download="resume.png"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-[36px] border border-[#B5B5B5] px-4 text-[14px] text-[#B5B5B5] hover:border-white/40"
            >
              <ResumeIcon className="h-6 w-6 text-[#B5B5B5]" />
              <span className="sr-only">Скачать PDF-резюме</span>
            </a>
            <a href="https://vk.com/kudryavtcev_aa" target="_blank" rel="noopener noreferrer" className="grid h-[50px] place-items-center rounded-[36px] border border-[#B5B5B5] text-[#B5B5B5]">
              <VkIcon className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/aleksandr.kudryavtcev/?igsh=MTlybG5zeXlieW50Mg%3D%3D#" target="_blank" rel="noopener noreferrer" className="grid h-[50px] place-items-center rounded-[36px] border border-[#B5B5B5] text-[#B5B5B5]">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsModal;


