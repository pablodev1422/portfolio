import React from 'react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-[#050505] border-t border-white/5 text-center">
            <p className="font-poppins text-[10px] text-neutral-600 uppercase tracking-widest">
                Pablo González Pérez © {currentYear}
            </p>
        </footer>
    );
};
