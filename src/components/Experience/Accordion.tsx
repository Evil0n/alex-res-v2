import React from 'react';

type AccordionProps = {
  open: boolean;
  labelledById?: string;
  className?: string;
  children: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ open, labelledById, className, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // измеряем контент при открытии/обновлении
    const next = el.scrollHeight;
    setMaxHeight(next);
  }, [open, children]);

  return (
    <div
      ref={ref}
      role="region"
      aria-labelledby={labelledById}
      aria-hidden={!open}
      className={[
        'overflow-hidden transition-[max-height,opacity] duration-300 ease-out',
        open ? 'opacity-100' : 'opacity-0',
        className || '',
      ].join(' ')}
      style={{ maxHeight: open ? maxHeight : 0 }}
    >
      {children}
    </div>
  );
};


