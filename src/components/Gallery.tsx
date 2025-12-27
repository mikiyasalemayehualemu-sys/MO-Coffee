import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../data/constants';
import { useTranslation } from '../context/LanguageContext';

const Gallery = () => {
    const t = useTranslation();

    return (
        <section id="gallery" className="py-24 md:py-48 bg-cream-light dark:bg-coffee-950 transition-colors duration-500 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-24 lg:px-32 relative z-10">
                <div className="text-center mb-24 md:mb-48">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4 md:gap-6"
                    >
                        <span className="text-accent font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">{t.gallery.subtitle}</span>
                        <div className="h-[2px] w-24 md:w-32 bg-accent/30" />
                        <h2 className="text-4xl md:text-7xl font-serif font-bold text-coffee-900 dark:text-cream-light leading-[1.1]">
                            {t.gallery.title} <br /> <span className="text-accent italic">{t.gallery.titleAccent}</span>
                        </h2>
                        <p className="text-base md:text-xl text-coffee-700 dark:text-cream-dark max-w-2xl leading-relaxed mt-6 md:mt-10">
                            {t.gallery.description}
                        </p>
                    </motion.div>
                </div>

                {/* THE STAGGERED PATH: Zig-Zag layout frames the Winding Path */}
                <div className="flex flex-col gap-24 md:gap-48 items-center">
                    <div className="w-full flex justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-[85%] md:w-[35%] relative group"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-[4/5] shadow-2xl">
                                <img
                                    src={GALLERY_IMAGES[0].url}
                                    alt={GALLERY_IMAGES[0].title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full flex justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-[85%] md:w-[35%] relative group"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-[4/5] shadow-2xl">
                                <img
                                    src={GALLERY_IMAGES[1].url}
                                    alt={GALLERY_IMAGES[1].title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full flex justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-[85%] md:w-[35%] relative group"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-[4/5] shadow-2xl">
                                <img
                                    src={GALLERY_IMAGES[2].url}
                                    alt={GALLERY_IMAGES[2].title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full flex justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-[85%] md:w-[35%] relative group"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-[4/5] shadow-2xl">
                                <img
                                    src={GALLERY_IMAGES[3].url}
                                    alt={GALLERY_IMAGES[3].title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
