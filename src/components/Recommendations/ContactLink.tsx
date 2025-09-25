import React from 'react';
import ContactRequestModal from '../ContactRequestModal';

export const ContactLink: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative self-start text-center text-[18px] font-medium tracking-[-0.02em] uppercase transition-all duration-500 hover:scale-105"
      >
        <span className="relative z-10 bg-gradient-to-r from-[#009596] via-[#C6F57A] to-[#E8FFC3] bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-1000 group-hover:bg-[length:100%_100%] group-hover:animate-gradient-shift">
          [ любой контакт дам по запросу ]
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#009596]/10 via-[#C6F57A]/10 to-[#E8FFC3]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </button>
      <ContactRequestModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
