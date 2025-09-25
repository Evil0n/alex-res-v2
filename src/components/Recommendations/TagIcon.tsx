import React from 'react';
import {
  SparklesIcon,
  StarIcon,
  PresentationChartLineIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';
import { type RecGroup } from '../../data/recommendations';

export const tagIcon = (group: RecGroup, tag: string) => {
  if (group === 'leaders') return <SparklesIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  if (group === 'partners') return <StarIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  const t = tag.toLowerCase();
  if (t.includes('аналит'))
    return <PresentationChartLineIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  if (t.includes('разраб'))
    return <CodeBracketIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  if (t.includes('дизайн'))
    return <PaintBrushIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  return <MegaphoneIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
};
