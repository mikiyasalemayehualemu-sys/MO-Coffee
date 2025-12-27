import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollJourney from './components/ScrollJourney';
import MainRoastVisual from './components/MainRoastVisual';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="min-h-screen bg-cream-light dark:bg-coffee-950 transition-colors duration-500 overflow-x-hidden">
                    <Navbar />
                    <MainRoastVisual />
                    <ScrollJourney>
                        <main>
                            <Hero />
                            <Features />
                            <Menu />
                            <Gallery />
                            <Contact />
                        </main>
                        <Footer />
                    </ScrollJourney>
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
