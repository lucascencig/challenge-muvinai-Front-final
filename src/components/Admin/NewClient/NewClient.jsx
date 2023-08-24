import React, { useState } from 'react'
import classnames from 'classnames'

// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin'


// Estilos:
import '../../../index.css'
import axios from 'axios'
import Swal from 'sweetalert2'

export const NewClient = ({ estilos }) => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Plan_activo: "",
    DNI: '',
    Telefono: '',
    Alta: "",
    Email: "",
    Nacimiento: "",
    profilePhotoUrl: '',
    active_noActive: 'De alta',
    isPay: "Al dia"
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const variants = {

    inputs: 'w-64 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500',
    button: 'w-64 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600',
    labels: 'w-64 font-bold',
    inputDisabled: 'w-64 border text-white bg-slate-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 hidden',
    labelNone: 'w-64 font-bold hidden'
  }

  const inputStyle = classnames(variants['inputs'], estilos)
  const buttonStyle = classnames(variants['button'], estilos)
  const labelStyle = classnames(variants['labels'], estilos)
  const inputDisabledStyle = classnames(variants['inputDisabled'], estilos)
  const labelNoneStyle = classnames(variants['labelNone'], estilos)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/clients/', formData)
      .then((response) => {
        Swal.fire({
          title: '¡Usuario creado correctamente!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        console.log('Cliente creado:', response.data);
      })
      .catch((error) => {
        console.error('Error al crear el cliente:', error);
      });
  };


  return (
    <div>

      <NavAdmin />


      <h1 className='text-center font-bold text-2xl pb-6 mt-4 mb-0'>NEW CLIENT</h1>
      <section className='mt-8 flex justify-center items-center flex-col'>
        <form className='flex flex-col space-y-2' action="">
          <label className={labelNoneStyle}>Estado del cliente:
            <input
              className={inputDisabledStyle}
              type="text"
              name="active_noActive"
              value={formData.active_noActive} // Establecer el valor predeterminado
              readOnly // Hacer que el campo sea de solo lectura
              onChange={handleChange}
              disabled
            />
          </label>

          <label className={labelNoneStyle}>Estado del cliente:
            <input
              className={inputDisabledStyle}
              type="text"
              name="active_noActive"
              value={formData.isPay} // Establecer el valor predeterminado
              readOnly // Hacer que el campo sea de solo lectura
              onChange={handleChange}
              disabled
            />
          </label>
          <label className={labelStyle}> Foto:
            <input
              className='border-0 outline-none w-64 '
              type="file"
              name="profilePhotoUrl"
              placeholder="Nombre"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}> Nombre:
            <input
              className={inputStyle}
              type="text"
              name="Nombre"
              placeholder="Nombre"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}> Apellido:
            <input
              className={inputStyle}
              type="text"
              name="Apellido"
              placeholder="Apellido"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}> Fecha de nacimiento:
            <input
              className={inputStyle}
              type="date"
              name="Nacimiento"
              placeholder="Fecha de Nacimiento"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}> DNI:
            <input
              className={inputStyle}
              type="text"
              name="DNI"
              placeholder="DNI"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}> Email:
            <input
              className={inputStyle}
              type="text"
              name="Email"
              placeholder="Email"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}> Teléfono:
            <input
              className={inputStyle}
              type="text"
              name="Telefono"
              placeholder="Teléfono"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}>Fecha de alta:
            <input
              className={inputStyle}
              type="date"
              name="Alta"
              placeholder="Fecha de alta"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}>Plan
            <input
              className={inputStyle}
              type="text"
              name="Plan_activo"
              placeholder="Plan"
              onChange={handleChange}
            />
          </label>

          <label className={labelStyle}>Seleccionar tipo de pago
            <select className={inputStyle} onChange={handleChange} name="type_of_pay" id="">
              <option value="" disabled></option>
              <option value="Crédito">Crédito</option>
              <option value="Débito">Débito</option>
              <option value="OTRA">Efectivo</option>
            </select>
          </label>

          <label className={labelStyle}>Seleccionar tarjeta de credito
            <select className={inputStyle} onChange={handleChange} name="credit_card" id="">
              <option value="" disabled></option>
              <option value="VISA">VISA</option>
              <option value="MASTER">MASTERCARD</option>
              <option value="OTRA">OTRA</option>
            </select>
          </label>

          <label lassName={labelStyle}> Numero de tarjeta (si corresponde)
            <input
              type="number"
              className={inputStyle}
              onChange={handleChange}
              name='card_number' />
          </label>

          <button
            className={buttonStyle}
            onClick={handleSubmit}
          >
            Guardar Cambios
          </button>
        </form>
      </section>
    </div>
  )
}

export default NewClient