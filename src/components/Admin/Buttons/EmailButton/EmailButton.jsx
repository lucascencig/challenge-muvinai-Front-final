import React from 'react'

// STYLES:
import classnames from 'classnames'
import '../../../../index.css'

// ICONS:
import { MdEmail } from 'react-icons/Md'

const EmailButton = ({ estilos }) => {
  const variants = {
    email: 'w-16 h-16 bg-[#F84437] rounded-full flex items-center justify-center shadow-md hover:bg-red-600 ease-in duration-100',
    icon: 'text-white text-3xl',
  }
  const wspButton = classnames(variants['email'], estilos)
  const icon = classnames(variants['icon'], estilos)

  return (
    <div>
      <button className={wspButton}>
        <MdEmail className={icon} />
      </button>
    </div>
  )
}

export default EmailButton