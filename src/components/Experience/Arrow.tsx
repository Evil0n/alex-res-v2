import React from 'react';
import { ThumbUp } from '../icons/ThumbUp';

export const Arrow: React.FC<{ open: boolean }> = () => (
  <ThumbUp className="h-6 w-6 shrink-0" />
);
