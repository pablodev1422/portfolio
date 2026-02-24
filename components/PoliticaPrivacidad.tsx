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
                    <h2 className="text-xl text-white font-medium mb-4">1. Información al usuario</h2>
                    <p>
                        Pablo González Pérez, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">2. Finalidad del tratamiento</h2>
                    <p>
                        Tratamos la información que nos facilita con el fin de prestarle el servicio solicitado, atender sus solicitudes a través del formulario de contacto y/o enviarle la información requerida sobre mis servicios profesionales como desarrollador.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">3. Criterios de conservación de los datos</h2>
                    <p>
                        Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">4. Comunicación de los datos</h2>
                    <p>
                        No se comunicarán los datos a terceros, salvo obligación legal. Sin embargo, para la correcta gestión de los correos electrónicos enviados a través del formulario de contacto, se utilizan los servicios de proveedores como EmailJS, sujetos a sus propias políticas de RGPD.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-medium mb-4">5. Derechos que asisten al Usuario</h2>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-neutral-400">
                        <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                        <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
                        <li>Puede ejercer estos derechos enviando un correo a: pablodev1422@gmail.com</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};
