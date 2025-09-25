import React from "react";

export const Header: React.FC = () => {
    return (
        <header className="relative overflow-hidden">
            {/* фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-950 to-black" />
            <div className="relative mx-auto max-w-7xl px-4 md:px-8">
                {/* topbar */}
                <div className="flex items-center justify-between py-5">
                    <div className="rounded-full bg-black/40 px-4 py-2 text-sm text-white shadow-[0_0_40px_0_rgba(0,255,180,.15)]">
                        Александр Кудрявцев
                    </div>
                    <nav className="hidden gap-8 text-sm text-white/90 md:flex">
                        <a href="#experience" className="transition-colors hover:text-emerald-300">
                            Опыт работы
                        </a>
                        <a href="#team" className="transition-colors hover:text-emerald-300">
                            Фото с командой
                        </a>
                        <a href="#recommendations" className="transition-colors hover:text-emerald-300">
                            Рекомендации
                        </a>
                        <a href="#about" className="transition-colors hover:text-emerald-300">
                            О себе
                        </a>
                        <a href="#contacts" className="transition-colors hover:text-emerald-300">
                            Контакты
                        </a>
                    </nav>
                </div>

                {/* hero */}
                <div className="grid items-stretch gap-8 pb-14 md:grid-cols-2 md:pb-24">
                    {/* фото */}
                    <div className="relative">
                        <div className="rounded-3xl bg-black/30 p-2 shadow-[0_25px_120px_-30px_rgba(0,255,180,.25)]">
                            <img
                                src="/photo.jpg"
                                alt="Фото"
                                className="h-full w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    {/* текст */}
                    <div className="flex flex-col">
                        <h1 className="mt-2 text-4xl font-semibold leading-tight text-white md:text-5xl">
                            Chief Product & Growth Officer / Ex. CMO
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-[17px]">
                            8 лет в digital-продуктах и финтехе. Руководил направлениями с
                            выручкой в 9 млрд. руб., командой 60+ человек и полной
                            бизнес-ответственностью (P&amp;L, рост, стратегия).
                        </p>

                        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-emerald-900/20 px-5 py-4 text-white backdrop-blur-sm">
                                Forbes до 30
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-emerald-900/20 px-5 py-4 text-white backdrop-blur-sm">
                                Топ-1 самый быстрорастущий FinTech
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-emerald-900/20 px-5 py-4 text-white backdrop-blur-sm">
                                Топ-1 детский EdTech
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-emerald-900/20 px-5 py-4 text-white backdrop-blur-sm">
                                Топ-5 Legal Tech
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-emerald-900/20 px-5 py-4 text-white backdrop-blur-sm">
                                9 млрд. выручки
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-emerald-900/20 px-5 py-4 text-white backdrop-blur-sm">
                                700 млн. / в мес. на рекламу
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400/90 px-5 py-3 text-[15px] font-medium text-black shadow-[0_10px_40px_-10px_rgba(16,185,129,.9)] transition hover:bg-emerald-300 active:translate-y-[1px]"
                            >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                  💬
                </span>
                                Связаться со мной
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* нижнее скругление */}
            <div className="pointer-events-none mx-4 mb-6 h-10 rounded-b-[28px] bg-emerald-800/20 md:mx-8" />
        </header>
    );
};
