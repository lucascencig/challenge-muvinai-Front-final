import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


//ESTILOS:
import s from '../LandingPage/LandingPage.module.css'
import Swal from 'sweetalert2'

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Predefined email and password to validate
    const validEmail = 'admin@admin.com';
    const validPassword = 'admin';

    if (email === validEmail && password === validPassword) {
      // Save email to localStorage if valid
      localStorage.setItem('adminEmail', email);
      // Redirect to admin page or perform any other action
      navigate('/admin')
      // For now, let's simulate a navigation by logging to the console
      console.log('Logged in successfully');
    } else {
      // Show error message or take appropriate action
      Swal.fire({
        title: '¡Credenciales incorrectas!',
        icon: 'error',
        confirmButtonText: 'Ok'
      }).then(
        navigate('/')
      )
    }
  };


  return (
    <div >
      <div >



        <div className={s.container}>

          <div className={s.top_header}>
            <h1 className='text-2xl font-bold'>Bienvenido</h1>
            <p className='font-bold mb-4'>Inicia sesion para comenzar</p>
          </div>
          <form className={s.form}>
            <div className={s.header}>Ingresar</div>
            <div className={s.inputs}>
              <input placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} className={s.input} type="text" />
              <input placeholder="Contraseña" value={password}
                onChange={(e) => setPassword(e.target.value)} className={s.input} type="password" />
              <div className={s.checkbox_container}>
                <label className={s.checkbox}>
                  <input type="checkbox" id="checkbox" />
                </label>
                <label for="checkbox" className={s.checkbox_text}>Recordarme</label>
              </div>


              <button onClick={handleLogin} className={s.sigin_btn}>Acceder al admin</button>

              <a className={s.forget} href="#">¿Olvidaste tu contraseña?</a>
              <p className={s.signup_link}>¿No tienes cuenta? <a href="#">Registrarte</a></p>
            </div>
          </form>




        </div>
      </div>
    </div>
  )
}

export default LandingPage