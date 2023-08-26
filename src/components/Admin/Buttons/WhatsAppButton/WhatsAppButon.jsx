import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/Io'
import classnames from 'classnames'
import '../../../../index.css'

const WhatsAppButon = ({ estilos }) => {

  const variants = {

    wsp: 'w-12 h-12 bg-[#00c307] rounded-md flex items-center justify-center shadow-md hover:bg-green-600 ease-in duration-100',
    icon: 'text-white text-xl',

  }

  const wspButton = classnames(variants['wsp'], estilos)
  const icon = classnames(variants['icon'], estilos)


  return (
    <div>
      <button className={wspButton}>
        <IoLogoWhatsapp className={icon} />
      </button>
    </div>
  )
}

export default WhatsAppButon