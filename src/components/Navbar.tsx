import { useState, useEffect } from 'react';
import { Menu, X, Languages, Sun, Moon, ChevronDown } from 'lucide-react';
import { NAV_LINKS, LANGUAGES } from '../data/constants';
import { useTheme } from '../context/ThemeContext';
import { useLanguage, useTranslation } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const t = useTranslation();
    const currentLang = LANGUAGES.find(lang => lang.code === language) || LANGUAGES[0];

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.features, href: '#features' },
        { name: t.nav.menu, href: '#menu' },
        { name: t.nav.gallery, href: '#gallery' },
        { name: t.nav.visit, href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out',
                isScrolled
                    ? 'bg-cream-light/60 dark:bg-coffee-950/60 backdrop-blur-2xl py-3 shadow-sm border-b border-coffee-100/30'
                    : 'bg-transparent py-8'
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-4 group" aria-label="MO Coffee & Roastery Home">
                    <div className="w-12 h-12 bg-coffee-800 dark:bg-accent rounded-2xl flex items-center justify-center text-cream-light font-bold text-2xl shadow-lg group-hover:bg-accent dark:group-hover:bg-coffee-700 transition-colors duration-500 transform group-hover:-rotate-3" aria-hidden="true">
                        MO
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-bold text-2xl tracking-tight text-coffee-900 dark:text-cream-light leading-none">
                            MO Coffee
                        </span>
                        <span className="text-coffee-500 dark:text-accent-DEFAULT text-xs font-bold tracking-[0.2em] uppercase mt-1 opacity-70">
                            & Roastery
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-bold text-coffee-800 dark:text-cream-dark hover:text-accent dark:hover:text-accent transition-all duration-300 relative group text-sm tracking-wider uppercase"
                                aria-label={`Navigate to ${link.name}`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="p-3 bg-coffee-100 dark:bg-coffee-700 rounded-2xl text-coffee-900 dark:text-cream-light hover:scale-110 active:scale-95 transition-all shadow-md"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>

                    <div className="relative pl-8 border-l border-coffee-200/50">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-3 px-4 py-2 bg-coffee-50 dark:bg-coffee-800 rounded-xl text-xs font-bold text-coffee-600 dark:text-cream-dark hover:scale-105 transition-all shadow-sm"
                            aria-label="Select Language"
                            aria-expanded={isLangOpen}
                            aria-haspopup="true"
                        >
                            <Languages className="w-4 h-4 text-accent" aria-hidden="true" />
                            <span>{currentLang.name}</span>
                            <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isLangOpen && "rotate-180")} aria-hidden="true" />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 mt-3 w-48 bg-white dark:bg-coffee-900 rounded-2xl shadow-2xl border border-coffee-100 dark:border-coffee-800 overflow-hidden"
                                >
                                    <div className="p-2 space-y-1">
                                        {LANGUAGES.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code as 'EN' | 'AM' | 'OM' | 'TI');
                                                    setIsLangOpen(false);
                                                }}
                                                className={cn(
                                                    "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                                                    currentLang.code === lang.code
                                                        ? "bg-accent/10 text-accent"
                                                        : "text-coffee-600 dark:text-cream-dark hover:bg-coffee-50 dark:hover:bg-coffee-800"
                                                )}
                                            >
                                                {lang.name}
                                                {currentLang.code === lang.code && <div className="w-1.5 h-1.5 bg-accent rounded-full" />}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="w-12 h-12 flex items-center justify-center bg-coffee-100 dark:bg-coffee-700 rounded-2xl text-coffee-900 dark:text-cream-light transition-all active:scale-90 shadow-md"
                    >
                        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                    <button
                        className="w-12 h-12 flex items-center justify-center bg-coffee-50 dark:bg-coffee-800 rounded-2xl text-coffee-900 dark:text-cream-light transition-all active:scale-90 shadow-md"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-x-0 top-[80px] bg-cream-light/95 dark:bg-coffee-950/95 backdrop-blur-3xl md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl border-t border-coffee-100 dark:border-coffee-800',
                    isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="p-8 space-y-8">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-serif font-bold text-coffee-800 dark:text-cream-light hover:text-accent transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="pt-8 border-t border-coffee-100 dark:border-coffee-800">
                        <div className="flex items-center gap-3 mb-6">
                            <Languages className="w-5 h-5 text-accent" />
                            <span className="text-sm font-bold tracking-widest uppercase text-coffee-500 dark:text-accent-DEFAULT uppercase">Select Language</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang.code}
                                    className={cn(
                                        "px-5 py-2.5 rounded-2xl text-sm font-bold border transition-all duration-300",
                                        lang.code === 'EN'
                                            ? "bg-coffee-900 dark:bg-accent text-cream-light border-coffee-900 dark:border-accent shadow-lg shadow-coffee-900/20"
                                            : "bg-white dark:bg-coffee-800 text-coffee-700 dark:text-cream-dark border-coffee-200 dark:border-coffee-700 hover:border-accent"
                                    )}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
