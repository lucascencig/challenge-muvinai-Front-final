import React from 'react'
import { Link } from 'react-router-dom'


//ESTILOS:
import '../../index.css'

const LandingPage = () => {
  return (
    <div>
      <h1>Landing page</h1>

      <Link to={'/admin'}>
        <button>Acceder al admin</button>
      </Link>

    </div>
  )
}

export default LandingPage