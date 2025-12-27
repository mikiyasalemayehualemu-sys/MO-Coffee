import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

const MainRoastVisual = () => {
    const { scrollYProgress } = useScroll();
    const shouldReduceMotion = useReducedMotion();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 35,
        restDelta: 0.001
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Vertical position tracking - minimal drift
    const y = useTransform(smoothProgress, [0, 1], ["0vh", "1vh"]);

    // MOBILE PATH (Ladder): Lock to right corner, then zig-zag down the right side
    const mobileX = useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["30vw", "35vw", "28vw", "32vw", "30vw"]
    );

    // DESKTOP PATH (S-Curve): Winding journey
    const desktopX = useTransform(
        smoothProgress,
        [0, 0.22, 0.42, 0.72, 1],
        ["12vw", "-12vw", "12vw", "-5vw", "-15vw"]
    );

    // SVG Path Morphing for Liquid (Compact Falling Drop)
    const splashPath = "M51.5,14.5 C55.5,5.5 64.5,10.5 68.5,18.5 C72.5,26.5 78.5,35.5 82.5,45.5 C86.5,55.5 91.5,68.5 88.5,82.5 C85.5,96.5 74.5,108.5 61.5,115.5 C48.5,122.5 32.5,123.5 19.5,114.5 C6.5,105.5 1.5,88.5 4.5,72.5 C7.5,56.5 16.5,42.5 26.5,31.5 C36.5,20.5 47.5,23.5 51.5,14.5 Z";
    const longDropPath = "M50,10 C52,10 53,30 53,65 C53,100 52,125 50,130 C48,125 47,100 47,65 C47,30 48,10 50,10 Z";
    // Shortened, more compact drop for impact
    const compactDropPath = "M50,40 C53,40 55,50 55,65 C55,80 53,90 50,90 C47,90 45,80 45,65 C45,50 47,40 50,40 Z";

    const liquidPath = useTransform(
        smoothProgress,
        [0.85, 0.89, 0.92, 0.95],
        [splashPath, splashPath, longDropPath, compactDropPath]
    );

    const x = isMobile ? mobileX : desktopX;

    // Vertical "Fall" motion (Shortened to 5vh for containment)
    const yOffset = useTransform(
        smoothProgress,
        [0.85, 0.89, 0.95],
        ["0vh", "0vh", "5vh"]
    );


    // STAGED TRANSITION: Bean -> Splash/Drop -> Cup
    const beanOpacity = useTransform(smoothProgress, [0, 0.85, 0.89], [1, 1, 0]);
    const splashOpacity = useTransform(smoothProgress, [0.85, 0.89, 0.95, 0.96], [0, 1, 1, 0]);
    const cupOpacity = useTransform(smoothProgress, [0.93, 0.97, 1], [0, 1, 1]);

    // Scaling logic: Extreme condensation for the "small drop"
    const mobileScale = useTransform(
        smoothProgress,
        [0, 0.5, 0.85, 0.89, 0.94, 1],
        [0.4, 0.5, 0.45, 0.25, 0.45, 0.35]
    );

    const desktopScale = useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 0.85, 0.89, 0.94, 1],
        [0.5, 0.8, 0.6, 0.85, 0.65, 0.35, 0.65, 0.4]
    );

    const scale = isMobile ? mobileScale : desktopScale;

    const rotate = useTransform(smoothProgress, [0, 1], [0, 720]);

    // Color transformation
    const beanColor = useTransform(
        smoothProgress,
        [0, 0.3, 0.6, 1],
        ["#91A062", "#BC6C25", "#3D1E16", "#140A08"]
    );

    const liquidSurfaceY = useTransform(smoothProgress, [0.93, 0.98, 1], [15, 0, 0]);
    const liquidSurfaceOpacity = useTransform(smoothProgress, [0.93, 0.95], [0, 1]);

    // Dynamic Blur for the "Crash" impact
    const morphBlur = useTransform(
        smoothProgress,
        [0, 0.85, 0.89, 0.93, 1],
        ["blur(0px)", "blur(0px)", "blur(15px)", "blur(0px)", "blur(0px)"]
    );

    if (shouldReduceMotion) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] flex items-center justify-center">
            <motion.div
                style={{ y, x, scale, rotate, filter: morphBlur }}
                className="relative w-32 h-48 md:w-[250px] md:h-[350px] flex items-center justify-center transition-all duration-300"
            >
                {/* STAGE 1: THE BEAN */}
                <motion.div style={{ opacity: beanOpacity }} className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 100 130" className="w-full h-full filter drop-shadow-[0_45px_100px_rgba(0,0,0,0.4)]">
                        <defs>
                            <filter id="beanAnatomy" x="-20%" y="-20%" width="140%" height="140%">
                                <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="4" result="grain" />
                                <feDisplacementMap in="SourceGraphic" in2="grain" scale="1.5" />
                            </filter>
                            <linearGradient id="beanDepth" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="black" stopOpacity="0" />
                                <stop offset="100%" stopColor="black" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            style={{ fill: beanColor }}
                            d="M50 10C35 10 15 25 15 65C15 105 35 120 50 120C65 120 85 105 85 65C85 25 65 10 50 10Z"
                        />
                        <path d="M50 10C35 10 15 25 15 65C15 105 35 120 50 120C65 120 85 105 85 65C85 25 65 10 50 10Z" fill="url(#beanDepth)" />
                        <motion.path d="M48 10C48 10 40 40 55 65C70 90 48 120 48 120" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#beanAnatomy)" />
                    </svg>
                    <motion.div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-10 select-none" style={{ opacity: useTransform(smoothProgress, [0.4, 0.5, 0.6], [0, 0.2, 0]) }}>
                        <div className="text-white font-serif text-4xl md:text-7xl font-bold tracking-tighter">MO</div>
                    </motion.div>
                </motion.div>

                {/* STAGE 2: THE LIQUID CRASH (Splash Morphing into Falling Drop) */}
                <motion.div
                    style={{
                        opacity: splashOpacity,
                        color: beanColor,
                        y: yOffset
                    }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                    <svg viewBox="0 0 100 130" className="w-[120%] h-[120%] text-coffee-900 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                        <motion.path
                            fill="currentColor"
                            style={{ d: liquidPath }}
                        />
                        {/* Smaller droplets that fade out during the fall */}
                        <motion.circle
                            cx="85" cy="30" r="3" fill="currentColor"
                            style={{ opacity: useTransform(smoothProgress, [0.85, 0.9], [1, 0]) }}
                        />
                        <motion.circle
                            cx="15" cy="40" r="4" fill="currentColor"
                            style={{ opacity: useTransform(smoothProgress, [0.85, 0.9], [1, 0]) }}
                        />
                    </svg>
                </motion.div>

                {/* STAGE 3: THE FINISHED CUP */}
                <motion.div
                    style={{
                        opacity: cupOpacity,
                        x: isMobile
                            ? useTransform(smoothProgress, [0.97, 1], ["0vw", "30vw"])
                            : useTransform(smoothProgress, [0.97, 1], ["0vw", "-25vw"])
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                >
                    {/* Modern Coffee Cup */}
                    <svg viewBox="0 0 280 280" fill="none" className="w-80 h-80 md:w-[550px] md:h-[550px] drop-shadow-2xl">
                        {/* Hot Steam Animation - Multiple Wisps */}
                        <g opacity="0.7">
                            <motion.path
                                d="M100 50 Q 95 40, 100 30 Q 105 20, 100 10 Q 95 0, 100 -10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="text-accent"
                                fill="none"
                                animate={{
                                    opacity: [0.2, 0.7, 0.2],
                                    y: [0, -8, 0],
                                    x: [-2, 2, -2]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.path
                                d="M140 55 Q 145 45, 140 35 Q 135 25, 140 15 Q 145 5, 140 -5"
                                stroke="currentColor"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                className="text-accent"
                                fill="none"
                                animate={{
                                    opacity: [0.3, 0.8, 0.3],
                                    y: [0, -10, 0],
                                    x: [2, -2, 2]
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.7
                                }}
                            />
                            <motion.path
                                d="M180 50 Q 185 40, 180 30 Q 175 20, 180 10 Q 185 0, 180 -10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="text-accent"
                                fill="none"
                                animate={{
                                    opacity: [0.2, 0.6, 0.2],
                                    y: [0, -9, 0],
                                    x: [-1, 1, -1]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.4
                                }}
                            />
                        </g>

                        {/* Gradients */}
                        <defs>
                            <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#2C1810" className="dark:stop-color-[#BC6C25]" />
                                <stop offset="100%" stopColor="#1A0F08" className="dark:stop-color-[#9A5620]" />
                            </linearGradient>
                            <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#6F4E37" stopOpacity="1" />
                                <stop offset="50%" stopColor="#5C3D2E" />
                                <stop offset="100%" stopColor="#4A2C1F" />
                            </linearGradient>
                            <radialGradient id="cupShine">
                                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Realistic Coffee Cup Body */}
                        <path
                            d="M60 80 Q60 75 65 72 L75 72 Q80 70 85 70 L195 70 Q200 70 205 72 L215 72 Q220 75 220 80 L220 90 Q220 95 218 100 L200 180 Q195 195 180 200 L100 200 Q85 195 80 180 L62 100 Q60 95 60 90 Z"
                            fill="url(#cupGradient)"
                            className="transition-all duration-700"
                        />

                        {/* Cup Rim - Top Edge */}
                        <ellipse
                            cx="140"
                            cy="75"
                            rx="80"
                            ry="12"
                            fill="currentColor"
                            className="text-coffee-900 dark:text-accent opacity-50"
                        />

                        {/* Coffee Liquid Surface */}
                        <motion.ellipse
                            cx="140"
                            cy="85"
                            rx="75"
                            ry="11"
                            fill="url(#coffeeGradient)"
                            style={{ y: liquidSurfaceY, opacity: liquidSurfaceOpacity }}
                        />

                        {/* Coffee Surface Highlight */}
                        <ellipse
                            cx="115"
                            cy="83"
                            rx="25"
                            ry="4"
                            fill="white"
                            opacity="0.15"
                        />

                        {/* Cup Handle - Realistic C-Shape */}
                        <path
                            d="M220 95 Q 245 95, 252 115 Q 258 135, 252 155 Q 245 175, 220 175"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                            fill="none"
                            className="text-coffee-900 dark:text-accent transition-all duration-700"
                        />

                        {/* Handle Inner Depth */}
                        <path
                            d="M220 100 Q 240 100, 246 115 Q 251 135, 246 155 Q 240 170, 220 170"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            fill="none"
                            className="text-coffee-950 dark:text-accent-dark opacity-30"
                        />

                        {/* Cup Body Shine/Reflection */}
                        <ellipse
                            cx="95"
                            cy="120"
                            rx="20"
                            ry="40"
                            fill="url(#cupShine)"
                            transform="rotate(-15 95 120)"
                        />

                        {/* Saucer/Plate */}
                        <g>
                            {/* Saucer Shadow */}
                            <ellipse
                                cx="140"
                                cy="220"
                                rx="95"
                                ry="14"
                                fill="currentColor"
                                className="text-coffee-900 dark:text-coffee-800 opacity-15"
                            />

                            {/* Main Saucer */}
                            <ellipse
                                cx="140"
                                cy="215"
                                rx="90"
                                ry="12"
                                fill="url(#cupGradient)"
                                className="transition-all duration-700"
                            />

                            {/* Saucer Rim */}
                            <ellipse
                                cx="140"
                                cy="213"
                                rx="92"
                                ry="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-coffee-800 dark:text-accent opacity-30"
                            />

                            {/* Saucer Inner Ring */}
                            <ellipse
                                cx="140"
                                cy="214"
                                rx="70"
                                ry="9"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-coffee-700 dark:text-accent-dark opacity-20"
                            />

                            {/* Saucer Center (cup base area) */}
                            <ellipse
                                cx="140"
                                cy="214"
                                rx="50"
                                ry="7"
                                fill="currentColor"
                                className="text-coffee-950 dark:text-accent-dark opacity-15"
                            />

                            {/* Saucer Highlight */}
                            <ellipse
                                cx="110"
                                cy="212"
                                rx="25"
                                ry="4"
                                fill="white"
                                opacity="0.2"
                            />
                        </g>
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MainRoastVisual;
