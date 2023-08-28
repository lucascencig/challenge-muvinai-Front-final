import React, { useState } from 'react'

// STYLES:
import '../../../index.css'

const Pagination = () => {


  return (
    <div>
      <div className='flex justify-center items-center m-auto mt-4 mb-4'>
        <button className='w-24 h-12 rounded-md border-2 hover:bg-[#c9c9c9] ease-in-out duration-100 active:bg-[#5F8D4E] '>Anterior</button>
        <div className='flex justify-around px-2'>
          <button className='w-12 h-12 rounded-md border-2 hover:bg-[#c9c9c9] ease-in-out duration-100 active:bg-[#5F8D4E] focus:bg-[#5F8D4E]'>1</button>
          <button className='w-12 h-12 rounded-md border-2 hover:bg-[#c9c9c9] ease-in-out duration-100 active:bg-[#5F8D4E] focus:bg-[#5F8D4E]'>2</button>
          <button className='w-12 h-12 rounded-md border-2 hover:bg-[#c9c9c9] ease-in-out duration-100 active:bg-[#5F8D4E] focus:bg-[#5F8D4E]'>3</button>
          <button className='w-12 h-12 rounded-md border-2 hover:bg-[#c9c9c9] ease-in-out duration-100 active:bg-[#5F8D4E] focus:bg-[#5F8D4E]'>4</button>
          <button className='w-12 h-12 rounded-md border-2 hover:bg-[#c9c9c9] ease-in-out duration-100 active:bg-[#5F8D4E] focus:bg-[#5F8D4E]'>5</button>
        </div>
        <button className='w-24 h-12 rounded-md border-2 hover:bg-[#c9c9c9] ease-in-out duration-100 active:bg-[#5F8D4E] '>Siguiente</button>
      </div>
    </div>
  );
};



export default Pagination