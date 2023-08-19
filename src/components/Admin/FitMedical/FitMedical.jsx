import React, { useState } from 'react'
import NavFitMedical from '../NavFitMedical/NavFitMedical'

import '../../../index.css'

const FitMedical = ({ user }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      {isOpen ? (
        <div >
          <NavFitMedical />

          <div className='flex justify-center items-center flex-col'>
            <button className='w-24 font-bold m-4 border-2  border-t-0  border-l-0  border-r-0 border-b-[#000000] hover:border-b-[#e58787] hover:text-[#e58787]' onClick={handleClose}>Cerrar</button>
            <h2>Apto médico de {user.Nombre}</h2>
          </div>

          {/* Contenido del apto médico */}
        </div>
      ) : null}
    </div>
  );
};

export default FitMedical;