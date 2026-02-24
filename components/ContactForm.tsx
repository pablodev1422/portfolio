import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        // Check honeypot (if a bot filled it, we pretend it was successful but don't send)
        const formData = new FormData(formRef.current);
        if (formData.get('_honey')) {
            setFormState('success');
            return;
        }

        // Use type casting to safely access import.meta.env to avoid TS errors
        const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
        const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("Faltan variables de entorno VITE_EMAILJS en el archivo .env");
            setFormState('error');
            return;
        }

        setFormState('sending');

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setFormState('success');
        } catch (error) {
            console.error("Error al enviar el email: ", error);
            setFormState('error');
        }
    };

    return (
        <div className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5 rounded-sm">
            {formState === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-6">
                        <Check size={32} />
                    </div>
                    <h3 className="text-2xl text-white font-sans mb-2">Mensaje Enviado</h3>
                    <p className="text-neutral-500 font-light">Gracias por contactar. Te responderé lo antes posible.</p>
                    <button
                        onClick={() => setFormState('idle')}
                        className="mt-8 text-sm text-white underline underline-offset-4 hover:text-neutral-300"
                    >
                        Enviar otro mensaje
                    </button>
                </motion.div>
            ) : formState === 'error' ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-6">
                        <AlertCircle size={32} />
                    </div>
                    <h3 className="text-2xl text-white font-sans mb-2">Error de Envío</h3>
                    <p className="text-neutral-500 font-light">
                        El mensaje no pudo enviarse en este momento. Por favor, inténtalo de nuevo más tarde o contáctame directamente a mi correo electrónico.
                    </p>
                    <button
                        onClick={() => setFormState('idle')}
                        className="mt-8 text-sm text-white underline underline-offset-4 hover:text-neutral-300"
                    >
                        Volver a intentar
                    </button>
                </motion.div>
            ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                    {/* Honeypot anti-spam oculto. Los bots lo llenan, los humanos no lo ven */}
                    <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                    <div className="space-y-2">
                        <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Tu Nombre</label>
                        <input
                            required
                            name="name"
                            type="text"
                            className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800"
                            placeholder="Pablo Gonzalez"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800"
                            placeholder="pablo@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Mensaje</label>
                        <textarea
                            required
                            name="message"
                            rows={4}
                            className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800 resize-none"
                            placeholder="Cuéntame..."
                        />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                        <input
                            type="checkbox"
                            required
                            id="rgpd-consent"
                            className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 accent-white cursor-pointer"
                        />
                        <label htmlFor="rgpd-consent" className="text-xs text-neutral-500 font-light leading-relaxed cursor-pointer">
                            He leído y acepto la <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline underline-offset-4 transition-colors">Política de Privacidad</a> respecto al tratamiento de mis datos personales.
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={formState === 'sending'}
                        className="w-full bg-white text-black font-medium py-4 mt-4 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {formState === 'sending' ? 'Enviando...' : (
                            <>Enviar Mensaje <Send size={16} /></>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};
