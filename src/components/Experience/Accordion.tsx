import React from 'react';

type AccordionProps = {
  open: boolean;
  labelledById?: string;
  className?: string;
  children: React.ReactNode;
};

// Акордеон с корректной анимацией высоты (auto) и без обрезания контента
export const Accordion: React.FC<AccordionProps> = ({ open, labelledById, className, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [styleMaxHeight, setStyleMaxHeight] = React.useState<string | number>(0);
  const resizeObsRef = React.useRef<ResizeObserver | null>(null);

  // Управление max-height с переводом в 'none' после открытия
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => el.scrollHeight;

    if (open) {
      // при открытии задаём точную высоту для анимации
      const h = measure();
      setStyleMaxHeight(h);
      const onEnd = () => {
        // по завершению даём натуральную высоту
        setStyleMaxHeight('none');
        el.removeEventListener('transitionend', onEnd);
      };
      el.addEventListener('transitionend', onEnd);

      // Пока идёт открытие (и до перевода в 'none') следим за изменением высоты (изображения и т.п.)
      if (!resizeObsRef.current) {
        resizeObsRef.current = new ResizeObserver(() => {
          // обновляем целевую высоту, чтобы не было рывков, когда доезжает картинка
          if (getComputedStyle(el).maxHeight !== 'none') {
            setStyleMaxHeight(measure());
          }
        });
      }
      resizeObsRef.current.observe(el);
    } else {
      // Плавное закрытие всегда через фиксацию текущей натуральной высоты и анимацию к 0
      const h = measure();
      setStyleMaxHeight(h);
      // Следующий тик — к 0 (запускаем анимацию)
      requestAnimationFrame(() => setStyleMaxHeight(0));
    }
  }, [open, children]);

  // Отключаем наблюдатель, если блок закрыли
  React.useEffect(() => {
    const el = ref.current;
    const ro = resizeObsRef.current;
    if (!ro || !el) return;
    if (!open) ro.unobserve(el);
    return () => {
      try { ro.disconnect(); } catch {}
      resizeObsRef.current = null;
    };
  }, [open]);

  return (
    <div
      ref={ref}
      role="region"
      aria-labelledby={labelledById}
      aria-hidden={!open}
      className={[
        'overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out',
        open ? 'opacity-100' : 'opacity-0',
        className || '',
      ].join(' ')}
      style={{ maxHeight: styleMaxHeight }}
    >
      {children}
    </div>
  );
};


