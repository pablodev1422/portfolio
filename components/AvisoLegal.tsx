import React, { useEffect } from 'react';

export const AvisoLegal: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen text-neutral-300 font-sans font-light leading-relaxed">
            <h1 className="text-3xl md:text-5xl font-medium text-white mb-8 border-b border-white/10 pb-6">Aviso Legal</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl text-white font-medium mb-4">1. Datos Identificativos</h2>
                    <p>
                        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE) de España, te informo de que este sitio web es un portfolio personal y profesional perteneciente a:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-neutral-400">
                        <li>Titular del sitio web: Pablo González Pérez</li>
                        <li>Correo electrónico de contacto: pablodev1422@gmail.com</li>
                        <li>Sitio web: pabloperez.es</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">2. Uso del Sitio Web</h2>
                    <p>
                       Esta web tiene como único propósito mostrar mi trabajo como desarrollador de software (portfolio), mis proyectos y ofrecer una vía de contacto profesional. El acceso a la web es libre y gratuito. Al navegar por ella, te comprometes a hacer un uso adecuado de sus contenidos y a no emplearlos para actividades ilícitas o que dañen el funcionamiento del sitio.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">3. Propiedad Intelectual</h2>
                    <p>
                        El diseño, código fuente, textos y estructura de este sitio web son de mi propiedad o tengo licencia para usarlos. Sin embargo, los logotipos, marcas o nombres de tecnologías mencionadas en los proyectos (como React, Java, Vercel, etc.) pertenecen a sus respectivos creadores y dueños legales, y se utilizan aquí únicamente con fines descriptivos e informativos.
                        Si quieres usar parte de mi código o diseño, te invito a visitar mi perfil de GitHub donde comparto mis repositorios públicos.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">4. Enlaces a Terceros</h2>
                    <p>
                       En este portfolio encontrarás enlaces a proyectos externos, repositorios de código (GitHub) o perfiles sociales (LinkedIn). Como son sitios web que no administro yo, no puedo hacerme responsable de los cambios en sus contenidos, sus políticas de privacidad o si en algún momento dejan de funcionar.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">5. Responsabilidad</h2>
                    <p>
                       Trabajo para que la web sea segura, rápida y no tenga errores. Aún así, al ser un entorno digital, no puedo garantizar la inexistencia total de interrupciones o fallos técnicos temporales en el servidor.
                    </p>
                </section>
            </div>
        </div>
    );
};
