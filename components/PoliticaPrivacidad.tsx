import React, { useEffect } from 'react';

export const PoliticaPrivacidad: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen text-neutral-300 font-sans font-light leading-relaxed">
            <h1 className="text-3xl md:text-5xl font-medium text-white mb-8 border-b border-white/10 pb-6">Política de Privacidad</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl text-white font-medium mb-4">1. Quién es el responsable de tus datos</h2>
                    <p>
                        En cumplimiento con el Reglamento Europeo de Protección de Datos (RGPD) y la normativa española (LOPDGDD), te informo de que yo, Pablo González Pérez, soy el responsable del tratamiento de los datos personales que se recogen en este portfolio web.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">2. Qué datos recojo y para qué los uso</h2>
                    <p>
                        Cuando utilizas el formulario de contacto de mi web, te pido únicamente los datos estrictamente necesarios (Nombre y Email) con una sola finalidad: poder leer tu mensaje y contestarte.
                        Tus datos se utilizarán exclusivamente para gestionar propuestas profesionales, ofertas de empleo o resolver tus dudas. Nunca te suscribiré a listas de correo (newsletters) ni te enviaré spam.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">3. Cuánto tiempo guardo tu información</h2>
                    <p>
                        Conservaré tus correos y datos únicamente durante el tiempo necesario para mantener nuestra conversación profesional o cumplir con el propósito por el que me escribiste. Una vez finalizada nuestra interacción (o si me lo pides antes), eliminaré los correos de mi bandeja de entrada de forma segura.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">4. Terceros y servicios externos</h2>
                    <p>
                        Quiero ser totalmente transparente con la tecnología que uso: no vendo, cedo ni comparto tus datos con terceros.
Sin embargo, como esta web no utiliza un servidor backend propio para procesar el formulario de contacto, utilizo el servicio de EmailJS para enrutar tu mensaje hasta mi correo personal de Gmail. EmailJS actúa como encargado del tratamiento, procesa la información de forma segura y cumple con sus propias políticas estrictas de privacidad y RGPD.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">5. Tus derechos sobre tus datos</h2>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-neutral-400">
                        <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                        <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
                    </ul>
                        <p>Para hacerlo, solo tienes que enviarme un correo electrónico a pablodev1422@gmail.com con el asunto "Protección de Datos" y lo gestionaré lo antes posible.</p>
                </section>
            </div>
        </div>
    );
};
