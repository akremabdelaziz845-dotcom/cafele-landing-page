"use client";

import { motion } from "framer-motion";

export default function Mechanism() {
    return (
        <section id="mechanism" className="py-24 bg-[#0a0f1c] overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Smooth Retraction</h2>
                    <p className="text-brand-grey">Pull from both ends to extend. Pull slightly to retract.</p>
                </motion.div>

                {/* Animation Container */}
                <div className="relative h-64 flex items-center justify-center max-w-4xl mx-auto">
                    {/* Center Hub */}
                    <div className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-b from-brand-grey to-brand-black border-4 border-brand-blue shadow-[0_0_50px_rgba(59,130,246,0.2)] flex items-center justify-center">
                        <span className="text-brand-white font-bold text-xs tracking-widest">CAFELE</span>
                    </div>

                    {/* Cables extending */}
                    {/* Left Cable */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute right-1/2 h-2 bg-brand-black border-t border-b border-brand-grey/30 origin-right rounded-l-full"
                    />
                    {/* Right Cable */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute left-1/2 h-2 bg-brand-black border-t border-b border-brand-grey/30 origin-left rounded-r-full"
                    />

                    {/* Connectors (simulated) */}
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: -250, opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute z-20 w-12 h-6 bg-brand-grey rounded-md shadow-lg flex items-center justify-center"
                    >
                        <div className="w-1 h-3 bg-black/50 mx-[1px]" />
                        <div className="w-1 h-3 bg-black/50 mx-[1px]" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 250, opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute z-20 w-12 h-6 bg-brand-grey rounded-md shadow-lg flex items-center justify-center"
                    >
                        <div className="w-1 h-3 bg-black/50 mx-[1px]" />
                        <div className="w-1 h-3 bg-black/50 mx-[1px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
