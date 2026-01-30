"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Layers, Cable, ShieldCheck, Repeat } from "lucide-react";

const features = [
    {
        icon: <Repeat className="w-8 h-8" />,
        title: "Retractable Design",
        description: "5 adjustable lengths. Pull to extend, pull again to retract. No more tangles.",
        colSpan: "md:col-span-2",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Fast Charging",
        description: "Support for 3.0A fast charging to power up your devices in no time.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "3-in-1 Connector",
        description: "Micro-USB, Lightning, and Type-C. One cable for all your devices.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Durable Material",
        description: "High-quality TPE material that withstands thousands of bends.",
        colSpan: "md:col-span-2",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-brand-black relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineered for Perfection</h2>
                    <p className="text-brand-grey max-w-2xl mx-auto">Why settle for messy cables when you can have the perfect all-in-one charging solution?</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-brand-blue/30 border border-brand-grey/10 rounded-2xl p-8 hover:bg-brand-blue/50 transition-colors backdrop-blur-sm ${feature.colSpan}`}
                        >
                            <div className="bg-brand-accent/20 w-fit p-3 rounded-xl text-brand-accent mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-brand-grey">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
