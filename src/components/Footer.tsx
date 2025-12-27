import { Facebook, Instagram, Phone, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-cream-light dark:bg-coffee-950 border-t border-coffee-100 dark:border-coffee-800 py-16 md:py-20 transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-24 lg:px-32">
                <div className="flex flex-col items-center gap-12">
                    {/* Logo & Brand */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-coffee-800 dark:bg-accent rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg transition-colors duration-500">
                            MO
                        </div>
                        <div className="text-center">
                            <h3 className="font-serif font-bold text-2xl text-coffee-900 dark:text-cream-light">MO Coffee & Roastery</h3>
                            <p className="text-sm text-coffee-500 dark:text-cream-dark mt-1">Established 2024 • Addis Ababa, Ethiopia</p>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/251974744444"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            aria-label="WhatsApp"
                        >
                            <Send className="w-5 h-5" />
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+251974744444"
                            className="group flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent-dark text-white rounded-full shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            aria-label="Phone"
                        >
                            <Phone className="w-5 h-5" />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/mo.coffee.et"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-full shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://facebook.com/mo.coffee.et"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>

                        {/* X (formerly Twitter) */}
                        <a
                            href="https://x.com/mo_coffee_et"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            aria-label="X (Twitter)"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center border-t border-coffee-100 dark:border-coffee-800 pt-8 w-full">
                        <p className="text-coffee-500 dark:text-cream-dark text-sm">
                            © {new Date().getFullYear()} MO Coffee & Roastery. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
