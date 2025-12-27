import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

const Hero = () => {
    const t = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cream-light dark:bg-coffee-950 transition-colors duration-500 py-16 md:py-32">
            <div className="container mx-auto px-6 md:px-24 lg:px-32 relative z-10 flex flex-col items-center md:items-start justify-between">
                {/* CONTENT LEFT (Repels Bean on Right) */}
                <div className="w-[85%] md:w-[38%] text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12"
                    >
                        <div className="h-[2px] w-12 md:w-24 bg-accent/30" />
                        <span className="text-accent font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs md:text-sm">{t.hero.established}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-coffee-900 dark:text-cream-light leading-[1.1] mb-8 md:mb-12"
                    >
                        {t.hero.title} <br /> <span className="text-accent italic">{t.hero.titleAccent}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col gap-6 md:gap-10"
                    >
                        <p className="text-lg md:text-2xl text-coffee-700 dark:text-cream-dark max-w-xl leading-relaxed">
                            {t.hero.description}
                        </p>

                        <div className="flex gap-6 items-center mt-6 md:mt-12">
                            <a href="#menu" className="px-10 py-5 md:px-14 md:py-7 bg-coffee-900 dark:bg-accent text-white rounded-full font-bold text-xl md:text-2xl hover:scale-110 active:scale-95 transition-all shadow-xl">
                                {t.hero.cta}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cream-light dark:from-coffee-950 to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
