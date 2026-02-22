import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('sending');
        setTimeout(() => {
            setFormState('success');
        }, 1500);
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
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                        <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Tu Nombre</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Mensaje</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800 resize-none"
                            placeholder="Cuéntame sobre tu proyecto..."
                        />
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
