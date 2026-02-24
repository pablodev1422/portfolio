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
                        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-neutral-400">
                        <li>Titular del sitio web: Pablo González Pérez</li>
                        <li>Correo electrónico de contacto: pablodev1422@gmail.com</li>
                        <li>Sitio web: pabloperez.es</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">2. Uso del Portal</h2>
                    <p>
                        El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
                        El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos en Internet pertenecientes a Pablo González Pérez creador del sitio web a los que el USUARIO pueda tener acceso.
                        El USUARIO asume la responsabilidad del uso del portal.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">3. Propiedad Intelectual e Industrial</h2>
                    <p>
                        Pablo González Pérez por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
                    <p>
                        Pablo González Pérez no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">5. Enlaces</h2>
                    <p>
                        En el caso de que en la web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Pablo González Pérez no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
                        En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                    </p>
                </section>
            </div>
        </div>
    );
};
