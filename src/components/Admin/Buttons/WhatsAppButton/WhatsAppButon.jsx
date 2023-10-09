import React from 'react'

// STYLES:
import classnames from 'classnames'
import '../../../../index.css'

// ICONS:
import { FaWhatsapp } from 'react-icons/fa6'

const WhatsAppButon = ({ estilos }) => {
  const variants = {
    wsp: 'w-16 h-16 bg-[#00c307] rounded-full flex items-center justify-center shadow-md hover:bg-green-600 ease-in duration-100',
    icon: 'text-[#fff] rounded-full text-4xl bg-[#00c307] ',
  }
  const wspButton = classnames(variants['wsp'], estilos)
  const icon = classnames(variants['icon'], estilos)

  return (
    <div>
      <button className={wspButton}>
        <FaWhatsapp className={icon} />
      </button>
    </div>
  )
}

export default WhatsAppButon