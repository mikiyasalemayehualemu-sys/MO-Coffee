import { motion } from 'framer-motion';

const LiquidPour = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* The Pouring Stream */}
                <motion.rect
                    x="98"
                    y="0"
                    width="4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: [0, 150, 150, 0],
                        opacity: [0, 1, 1, 0],
                        y: [0, 0, 50, 200]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="fill-coffee-500 dark:fill-accent-DEFAULT"
                />

                {/* Splash/Ripple inside the cup area */}
                <motion.circle
                    cx="100"
                    cy="150"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1.2, 1.5],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                    }}
                    className="fill-coffee-600 dark:fill-accent"
                />
            </svg>
        </div>
    );
};

export default LiquidPour;
