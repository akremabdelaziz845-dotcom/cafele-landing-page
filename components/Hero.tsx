"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 to-brand-black opacity-50 z-0" />

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-6"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-brand-accent tracking-[0.2em] font-medium uppercase text-sm"
                    >
                        The Ultimate Charging Solution
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-grey">3-in-1</span> <br />
                        Retractable Power.
                    </h1>

                    <p className="text-brand-grey text-lg max-w-lg leading-relaxed">
                        Experience the future of charging. Compact, durable, and compatible with all your devices. Tangle-free life starts here.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-8 py-4 bg-white text-brand-black font-bold rounded-full flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                    >
                        Get Yours Today
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-md aspect-square">
                        {/* Pulsing effect behind product */}
                        <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
                        <Image
                            src="/hero-product.png"
                            alt="CAFELE 3-in-1 Cable"
                            width={600}
                            height={600}
                            className="object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
