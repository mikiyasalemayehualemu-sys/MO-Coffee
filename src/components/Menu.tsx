import { MENU_DATA } from '../data/constants';
import { motion } from 'framer-motion';

const MenuSection = ({ title, items, isLeft }: { title: string; items: typeof MENU_DATA.coffee, isLeft?: boolean }) => (
    <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} mb-16 md:mb-48 last:mb-0 px-4 md:px-24 lg:px-32`}>
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-[90%] md:w-[38%] group relative"
        >
            <div className="absolute -inset-5 md:-inset-10 bg-accent/5 rounded-[2rem] md:rounded-[6rem] -z-10 group-hover:bg-accent/10 transition-colors blur-2xl" />
            <div className="text-left mb-6 md:mb-20">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-coffee-800 dark:text-cream-light mb-2 relative inline-block">
                    {title}
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-accent/40 rounded-full" />
                </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-16">
                {items.map((item, idx) => (
                    <div
                        key={item.name}
                        className="group p-6 md:p-14 rounded-[2rem] md:rounded-[5rem] bg-white/30 dark:bg-coffee-900/40 backdrop-blur-3xl border border-white/10 dark:border-coffee-800/10 hover:bg-white dark:hover:bg-coffee-800 transition-all duration-1000 shadow-xl"
                    >
                        <div className="flex justify-between items-start text-left mb-2 md:mb-4">
                            <h4 className="text-lg md:text-2xl font-bold text-coffee-900 dark:text-cream-light group-hover:text-accent transition-colors">
                                {item.name}
                            </h4>
                            <span className="font-bold text-coffee-800 dark:text-accent text-lg md:text-2xl ml-4">
                                {item.price}
                            </span>
                        </div>
                        <p className="text-base md:text-xl text-coffee-600 dark:text-cream-dark font-vibe italic opacity-80 group-hover:opacity-100 transition-all text-left mt-1 md:mt-2 leading-relaxed tracking-wide">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
);

const Menu = () => {
    return (
        <section id="menu" className="py-24 md:py-48 bg-cream-light dark:bg-coffee-950 relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10">
                <div className="text-center mb-24 md:mb-48">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-8 md:gap-14"
                    >
                        <span className="text-accent font-bold tracking-[0.4em] md:tracking-[0.7em] uppercase text-xs md:text-sm">The Peak Selection</span>
                        <div className="h-[2px] w-32 md:w-64 bg-accent/30" />
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-coffee-900 dark:text-cream-light leading-none tracking-tighter">
                            Pure <span className="text-accent italic">Peak.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col">
                    {/* CONTENT LEFT (Repels Bean on Right) */}
                    <MenuSection isLeft={true} title="Specialty Menu" items={MENU_DATA.coffee.slice(0, 4)} />
                </div>
            </div>
        </section>
    );
};

export default Menu;
