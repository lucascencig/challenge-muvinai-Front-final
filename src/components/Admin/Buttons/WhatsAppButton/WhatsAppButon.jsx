import React from 'react'

// STYLES:
import classnames from 'classnames'
import '../../../../index.css'

// ICONS:
import { IoLogoWhatsapp } from 'react-icons/Io'

const WhatsAppButon = ({ estilos }) => {
  const variants = {
    wsp: 'w-16 h-16 bg-[#00c307] rounded-full flex items-center justify-center shadow-md hover:bg-green-600 ease-in duration-100',
    icon: 'text-white text-3xl',
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