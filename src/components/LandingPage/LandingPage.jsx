import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// COMPONENTS:
import Swal from 'sweetalert2'

//STYLES:
import '../../index.css'
import s from '../LandingPage/LandingPage.module.css'

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const validEmail = 'admin@admin.com';
    const validPassword = 'admin';
    const recepEmail = 'carla@recepcionista.com';
    const recepPassword = "recepcionista";

    if (!email || !password) {
      Swal.fire({
        title: 'Campos incompletos',
        text: 'Por favor, ingresa un email y una contraseña válidos.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    if ((email === validEmail && password === validPassword) || (email === recepEmail && password === recepPassword)) {
      localStorage.setItem('adminEmail', email);
      navigate('/admin');
    } else {
      Swal.fire({
        title: 'Credenciales inválidas',
        text: 'El email y/o la contraseña son incorrectos.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };




  return (
    <div>
      <div>
        <div className={s.container}>
          <div className={s.top_header}>
            <h1 className='text-5xl  font-bold text-[#fff]'>Bienvenido</h1>
            <p className='font-bold mb-4 text-[#fff] text-4xl'>Inicia sesion para comenzar</p>
          </div>
          <form className={s.form}>
            <div className={s.header}>Ingresar</div>
            <div className={s.inputs}>
              <input placeholder="Email: admin@admin.com" value={email}
                onChange={(e) => setEmail(e.target.value)} className={s.input} type="text" />
              <input placeholder="Contraseña: admin" value={password}
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