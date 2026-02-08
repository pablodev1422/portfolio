import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Send, Terminal, Loader2, CheckCircle2 } from 'lucide-react';

export const InteractiveContact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'filling' | 'charging' | 'sent'>('idle');
  const [chargeProgress, setChargeProgress] = useState(0);
  const requestRef = useRef<number>();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Controls controls animation of the "distortion"
  const controls = useAnimation();
  
  const isFormValid = formData.name && formData.email && formData.message;

  const handleChargeStart = () => {
    if (!isFormValid || formState === 'sent') return;
    setFormState('charging');
    
    let start = 0;
    const animate = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / 1500, 1); // 1.5s to charge
      setChargeProgress(progress * 100);

      // Visual feedback intensifies
      controls.start({
        scale: 1 + progress * 0.1,
        filter: `blur(${progress * 2}px) hue-rotate(${progress * 90}deg)`,
      });

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        handleSubmit();
      }
    };
    requestRef.current = requestAnimationFrame(animate);
  };

  const handleChargeEnd = () => {
    if (formState === 'sent') return;
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    
    // If released before 100%, reset
    if (chargeProgress < 100) {
      setFormState(isFormValid ? 'filling' : 'idle');
      setChargeProgress(0);
      controls.start({ scale: 1, filter: "blur(0px) hue-rotate(0deg)" });
    }
  };

  const handleSubmit = () => {
    setFormState('sent');
    // Simulate API call or explosion
    setTimeout(() => {
        // Reset or keep success state
    }, 2000);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value});
      if (formState === 'idle') setFormState('filling');
  };

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Background Grid Distortion Effect (Simulated via CSS/Divs for performance) */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] opacity-10 pointer-events-none">
         {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-neutral-700 aspect-square" />
         ))}
      </div>

      <motion.div 
        animate={controls}
        className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-neutral-800 p-8 md:p-16 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
        
        {formState === 'sent' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center h-[400px]"
          >
             <motion.div 
               initial={{ rotate: -180, scale: 0 }}
               animate={{ rotate: 0, scale: 1 }}
               transition={{ type: "spring", duration: 1.5 }}
             >
                <CheckCircle2 size={64} className="text-white mb-6" />
             </motion.div>
             <h3 className="text-3xl font-sans text-white mb-2">TRANSMISIÓN COMPLETADA</h3>
             <p className="font-mono text-neutral-500">He recibido tus datos. Iniciando protocolo de respuesta.</p>
             <button 
                onClick={() => { setFormState('idle'); setChargeProgress(0); setFormData({name:'', email:'', message:''}); }}
                className="mt-8 text-xs font-mono text-neutral-400 border-b border-transparent hover:border-neutral-400 transition-colors"
             >
                NUEVA TRANSMISIÓN
             </button>
          </motion.div>
        ) : (
          <>
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-2">
                 <Terminal size={16} className="text-neutral-500" />
                 <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Secure Connection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-sans text-white">INICIAR PROTOCOLO</h2>
            </div>

            <div className="space-y-8 relative">
               <div className="group relative">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInput}
                    required
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-white text-lg focus:outline-none focus:border-white transition-colors peer font-sans"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-neutral-600 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-400 pointer-events-none">
                    IDENTIFICADOR (NOMBRE)
                  </label>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 peer-focus:w-full" />
               </div>

               <div className="group relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    required
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-white text-lg focus:outline-none focus:border-white transition-colors peer font-sans"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-neutral-600 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-400 pointer-events-none">
                    ENLACE (EMAIL)
                  </label>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 peer-focus:w-full" />
               </div>

               <div className="group relative">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInput}
                    required
                    rows={3}
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-white text-lg focus:outline-none focus:border-white transition-colors peer font-sans resize-none"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-neutral-600 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-400 pointer-events-none">
                    DATA (MENSAJE)
                  </label>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 peer-focus:w-full" />
               </div>
            </div>

            <div className="mt-16 relative select-none">
                <div 
                    className={`relative w-full h-16 border border-neutral-800 flex items-center justify-center overflow-hidden transition-colors duration-300 ${isFormValid ? 'cursor-pointer hover:border-neutral-600' : 'opacity-50 cursor-not-allowed'}`}
                    onMouseDown={handleChargeStart}
                    onMouseUp={handleChargeEnd}
                    onMouseLeave={handleChargeEnd}
                    onTouchStart={handleChargeStart}
                    onTouchEnd={handleChargeEnd}
                >
                    {/* Progress Bar Background */}
                    <motion.div 
                        className="absolute left-0 top-0 bottom-0 bg-white mix-blend-difference"
                        style={{ width: `${chargeProgress}%` }}
                    />
                    
                    <span className="font-mono text-xs tracking-[0.2em] text-white z-10 uppercase flex items-center gap-3">
                        {chargeProgress > 0 ? (
                             <>CARGANDO TRANSMISIÓN... {Math.floor(chargeProgress)}%</>
                        ) : (
                             <>MANTENER PARA ENVIAR <Send size={12} /></>
                        )}
                    </span>
                </div>
                <p className="text-center mt-4 font-mono text-[10px] text-neutral-600 uppercase">
                    Interacción segura &bull; Mantén pulsado para confirmar
                </p>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};