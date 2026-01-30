"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OrderForm() {
    const [status, setStatus] = useState<'' | 'sending' | 'success'>('');

    // NOTE: This form is set up for use with Formspree or EmailJS.
    // For Formspree, you would typically use useForm from @formspree/react or just a fetch to their endpoint.
    // Currently implementing a generic handler that checks validation.

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setStatus('sending');

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                console.error('Submission failed');
                setStatus(''); // Reset to allow retry
                alert('حدث خطأ أثناء الإرسال. الرجاء التأكد من البيانات والمحاولة مرة أخرى.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('');
            alert('حدث خطأ غير متوقع في الاتصال بالسيرفر.');
        }
    };

    return (
        <section id="order-form" className="py-24 bg-brand-blue/20 relative">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-brand-black border border-brand-grey/20 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    layout
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center text-balance">
                        {status === 'success' ? 'شكراً لك!' : 'اطلب نسختك الآن'}
                    </h2>

                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-4"
                            >
                                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.4)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-3">تم استلام طلبك بنجاح!</h3>
                                <p className="text-brand-grey mb-8 text-lg">سنتواصل معك قريباً لتأكيد المعلومات.</p>
                                <button onClick={() => setStatus('')} className="text-brand-accent hover:text-white underline text-sm transition-colors">
                                    إرسال طلب آخر
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <p className="text-brand-grey text-center mb-8">أدخل بياناتك وسيتم التواصل معك لتأكيد الطلب وشحنه.</p>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-brand-grey">الاسم الكامل</label>
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            required
                                            className="bg-brand-blue/30 border border-brand-grey/20 text-white text-sm rounded-lg focus:ring-brand-accent focus:border-brand-accent block w-full p-3 placeholder-gray-500 outline-none transition-all focus:bg-brand-blue/50"
                                            placeholder="الاسم الثلاثي"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="user_phone" className="block mb-2 text-sm font-medium text-brand-grey">رقم الهاتف</label>
                                        <input
                                            type="tel"
                                            id="user_phone"
                                            name="user_phone"
                                            required
                                            dir="ltr"
                                            className="bg-brand-blue/30 border border-brand-grey/20 text-white text-sm rounded-lg focus:ring-brand-accent focus:border-brand-accent block w-full p-3 placeholder-gray-500 text-right outline-none transition-all focus:bg-brand-blue/50"
                                            placeholder="05xxxxxxxx"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="user_address" className="block mb-2 text-sm font-medium text-brand-grey">العنوان</label>
                                        <input
                                            type="text"
                                            id="user_address"
                                            name="user_address"
                                            required
                                            className="bg-brand-blue/30 border border-brand-grey/20 text-white text-sm rounded-lg focus:ring-brand-accent focus:border-brand-accent block w-full p-3 placeholder-gray-500 outline-none transition-all focus:bg-brand-blue/50"
                                            placeholder="المدينة، الحي، الشارع"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-brand-grey">الكمية</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="1"
                                            defaultValue="1"
                                            required
                                            className="bg-brand-blue/30 border border-brand-grey/20 text-white text-sm rounded-lg focus:ring-brand-accent focus:border-brand-accent block w-full p-3 outline-none transition-all focus:bg-brand-blue/50"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full text-brand-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-3 text-center transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin"></span>
                                                جاري الإرسال...
                                            </>
                                        ) : 'تأكيد الطلب'}
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
