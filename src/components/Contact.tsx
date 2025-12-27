import { Phone, MapPin, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

const Contact = () => {
    const t = useTranslation();

    return (
        <section id="contact" className="py-48 bg-cream-light dark:bg-coffee-950 relative transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10">
                <div className="text-center mb-16 md:mb-48">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6 md:gap-14"
                    >
                        <span className="text-accent font-bold tracking-[0.2em] md:tracking-[0.8em] uppercase text-[10px] md:text-sm">{t.contact.subtitle}</span>
                        <div className="h-[2px] w-32 md:w-64 bg-accent/30" />
                        <h2 className="text-3xl md:text-7xl font-serif font-bold text-coffee-900 dark:text-cream-light leading-none tracking-tighter">
                            {t.contact.title} <span className="text-accent italic">{t.contact.titleAccent}</span>
                        </h2>
                        <p className="text-sm md:text-lg text-coffee-700 dark:text-cream-dark max-w-2xl leading-relaxed mt-4 md:mt-10 text-center px-4">
                            {t.contact.description}
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-12 md:gap-32 px-4 md:px-24 lg:px-32">
                    {/* CONTENT SECTION */}
                    <div className="w-full flex justify-start md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full md:w-[38%] grid grid-cols-1 gap-4 md:gap-6"
                        >
                            {[
                                { icon: Phone, title: t.contact.directLine, value: '+251 974 744 444', action: 'tel:+251974744444' },
                                { icon: MapPin, title: t.contact.roastHouse, value: t.contact.location, action: 'https://maps.google.com' },
                                { icon: Instagram, title: t.contact.socialStory, value: '@mo.coffee.et', action: 'https://instagram.com' },
                            ].map((item) => (
                                <a
                                    key={item.title}
                                    href={item.action}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 md:gap-8 p-4 md:p-10 rounded-[1.5rem] md:rounded-[3rem] bg-white/20 dark:bg-coffee-900/40 border border-white/10 dark:border-coffee-800/10 hover:bg-white dark:hover:bg-coffee-800 transition-all duration-1000 shadow-xl md:flex-row-reverse"
                                >
                                    <div className="w-10 h-10 md:w-16 md:h-16 bg-accent/15 rounded-[0.8rem] md:rounded-[2rem] flex items-center justify-center text-accent group-hover:rotate-[360deg] transition-all duration-1000 shadow-lg">
                                        <item.icon className="w-5 h-5 md:w-8 md:h-8" />
                                    </div>
                                    <div className="flex-1 md:text-right">
                                        <h3 className="text-sm md:text-xl font-bold text-coffee-900 dark:text-cream-light mb-0.5 md:mb-1">{item.title}</h3>
                                        <p className="text-xs md:text-base text-coffee-600 dark:text-cream-dark opacity-80 font-vibe">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* MAP SECTION */}
                    <div className="w-full flex justify-start md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-[90%] md:w-[38%] space-y-4"
                        >
                            <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 dark:border-coffee-800/10">
                                <iframe
                                    src="https://maps.google.com/maps?q=8.992301470147268,38.77390586188653&hl=en&z=15&output=embed"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
