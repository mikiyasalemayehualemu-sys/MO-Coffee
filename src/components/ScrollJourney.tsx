import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

const Leaf = ({ cx, cy, rotation, progress, milestone }: { cx: number, cy: number, rotation: number, progress: any, milestone: number }) => {
    const scale = useTransform(progress, [milestone - 0.03, milestone], [0, 1]);
    const opacity = useTransform(progress, [milestone - 0.03, milestone], [0, 0.4]);

    return (
        <motion.g style={{ opacity, scale }} transform={`translate(${cx}, ${cy}) rotate(${rotation})`}>
            <path
                d="M 0 0 C 8 -12, 24 -12, 28 0 C 24 12, 8 12, 0 0"
                className="fill-accent/40 stroke-accent/20"
                strokeWidth="0.8"
            />
            <path d="M 0 0 L 20 0" stroke="currentColor" strokeWidth="0.4" className="text-accent/30" />
        </motion.g>
    );
};

const Root = ({ progress }: { progress: any }) => {
    const rootOpacity = useTransform(progress, [0.9, 1], [0, 0.5]);
    const rootScale = useTransform(progress, [0.9, 1], [0.8, 1]);

    return (
        <motion.g style={{ opacity: rootOpacity, scale: rootScale }} transform="translate(80, 1000)">
            <path d="M 0 0 C -15 15, -40 30, -80 40" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent/30" />
            <path d="M 0 0 C 15 15, 40 30, 80 40" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent/30" />
            <path d="M 0 0 L 0 60" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent/40" />
        </motion.g>
    );
};

const GlobalVine = ({ progress }: { progress: any }) => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-40">
            <svg viewBox="0 0 1000 1100" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                    <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E67E22" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3D1E16" stopOpacity="0.8" />
                    </linearGradient>
                </defs>

                {/* THE LIVING TRUNK (The Spine) - SMOOTH CENTRAL FLOW */}
                <motion.path
                    style={{ pathLength: progress }}
                    d="M 620 0 
                       C 620 110, 380 110, 380 220 
                       C 380 320, 620 320, 620 420 
                       C 620 570, 450 570, 450 720 
                       C 450 860, 350 860, 350 1000"
                    stroke="url(#treeGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* SPROUTING LIFE along the trunk - RECENTERED */}
                <Leaf cx={610} cy={50} rotation={-30} progress={progress} milestone={0.05} />
                <Leaf cx={580} cy={120} rotation={45} progress={progress} milestone={0.10} />
                <Leaf cx={420} cy={180} rotation={160} progress={progress} milestone={0.18} />
                <Leaf cx={380} cy={220} rotation={180} progress={progress} milestone={0.22} />
                <Leaf cx={450} cy={280} rotation={-45} progress={progress} milestone={0.28} />
                <Leaf cx={550} cy={350} rotation={10} progress={progress} milestone={0.35} />
                <Leaf cx={620} cy={420} rotation={0} progress={progress} milestone={0.42} />
                <Leaf cx={550} cy={550} rotation={-20} progress={progress} milestone={0.55} />
                <Leaf cx={450} cy={720} rotation={90} progress={progress} milestone={0.72} />
                <Leaf cx={380} cy={850} rotation={160} progress={progress} milestone={0.85} />

                {/* THE ROOTS (Contact Section Bottom) */}
                <Root progress={progress} />

                {/* BRANCHING BUDS (Coffee Cherries) - RECENTERED */}
                {[0, 220, 420, 720, 1000].map((y, i) => {
                    const coordinates = [620, 380, 620, 450, 350];
                    const x = coordinates[i];
                    return (
                        <motion.circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="10"
                            className="fill-accent/30"
                            style={{
                                scale: useTransform(progress, [y / 1000 - 0.05, y / 1000], [0, i === 4 ? 0 : 1]),
                                opacity: useTransform(progress, [y / 1000 - 0.05, y / 1000], [0, 0.4])
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
};

const ScrollJourney = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 35,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative">
            <GlobalVine progress={smoothProgress} />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default ScrollJourney;
