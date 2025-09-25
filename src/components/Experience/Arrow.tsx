import React from 'react';

export const Arrow: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    aria-hidden="true"
    className={`h-5 w-5 shrink-0 text-[#C6F57A] transition-transform ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 12.5l-5-5h10l-5 5z" />
  </svg>
);
