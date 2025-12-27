import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Sparkles, Wind } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const FeatureItem = ({ icon: Icon, title, desc, isLeft }: { icon: any, title: string, desc: string, isLeft?: boolean }) => (
    <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} mb-32 md:mb-64 last:mb-0 px-6 md:px-24 lg:px-32`}>
        <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-[38%] group relative"
        >
            <div className={`absolute -inset-4 md:-inset-6 bg-accent/5 rounded-[3rem] md:rounded-[5rem] -z-10 group-hover:bg-accent/10 transition-colors blur-xl`} />
            <div className="p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white/20 dark:bg-coffee-900/10 backdrop-blur-3xl border border-white/10 dark:border-coffee-800/10 shadow-2xl overflow-hidden group text-left">
                <div className={`w-20 h-20 md:w-28 md:h-28 bg-accent/10 rounded-[2rem] md:rounded-[3rem] flex items-center justify-center text-accent mb-6 md:mb-10 group-hover:rotate-[360deg] transition-all duration-1000`}>
                    <Icon className="w-10 h-10 md:w-14 md:h-14" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-cream-light mb-4 md:mb-6 leading-none tracking-tighter">{title}</h3>
                <p className="text-lg md:text-xl text-coffee-600 dark:text-cream-dark font-vibe italic opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
                    {desc}
                </p>
            </div>
        </motion.div>
    </div>
);

const Features = () => {
    const t = useTranslation();

    return (
        <section id="features" className="py-24 md:py-48 bg-cream-light dark:bg-coffee-950 relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10">
                <div className="text-center mb-24 md:mb-48">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6 md:gap-10"
                    >
                        <span className="text-accent font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-xs md:text-sm">{t.features.subtitle}</span>
                        <div className="h-[2px] w-32 md:w-48 bg-accent/30" />
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-coffee-900 dark:text-cream-light leading-[1.1] tracking-tighter">
                            {t.features.title} <br /> <span className="text-accent italic">{t.features.titleAccent}</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col">
                    {/* CONTENT RIGHT (Repels Bean on Left) */}
                    <FeatureItem
                        isLeft={false}
                        icon={Coffee}
                        title={t.features.items[0].title}
                        desc={t.features.items[0].description}
                    />
                    <FeatureItem
                        isLeft={false}
                        icon={Wind}
                        title={t.features.items[1].title}
                        desc={t.features.items[1].description}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
