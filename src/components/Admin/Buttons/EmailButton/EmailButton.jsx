import React from 'react'
import { MdEmail } from 'react-icons/Md'
import classnames from 'classnames'
import '../../../../index.css'

const EmailButton = ({ estilos }) => {

  const variants = {

    email: 'w-12 h-12 bg-[#F84437] rounded-md flex items-center justify-center shadow-md hover:bg-red-600',
    icon: 'text-white text-xl',

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