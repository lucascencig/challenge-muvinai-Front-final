import React, { useState } from 'react'
import axios from 'axios'

// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin'
import Swal from 'sweetalert2'

// Estilos:
import classnames from 'classnames'
import '../../../index.css'

export const NewClient = ({ estilos }) => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Plan_activo: "",
    DNI: '',
    Telefono: '',
    Alta: "",
    Vigencia_actual: '',
    Fecha_proximo: '',
    Email: "",
    Nacimiento: "",
    profilePhotoUrl: '',
    active_noActive: 'De alta',
    isPay: "Al dia"
  });

  const [fechasCalculadas, setFechasCalculadas] = useState({
    fecha90: "",
    fecha150: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, Vigencia_actual: fechasCalculadas.fecha90 || fechasCalculadas.fecha150 });
  };

  const handlePlanChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;
    if (value === "3 meses al 50%") {
      calcularFechasOffset(formData.Alta, 90);
    } else if (value === "5 meses al 50%") {
      calcularFechasOffset(formData.Alta, 150);
    } else {
      setFechasCalculadas({
        fecha90: "",
        fecha150: ""
      });
    }
  };

  const calcularFechasOffset = (fechaSeleccionada, dias) => {
    const fechaInicio = new Date(fechaSeleccionada);
    if (!isNaN(fechaInicio)) { // Comprobamos si fechaInicio es una fecha válida
      const fechaCalculada = new Date(fechaInicio);
      fechaCalculada.setDate(fechaInicio.getDate() + dias);
      setFechasCalculadas({
        fecha90: dias === 90 ? fechaCalculada.toISOString().split("T")[0] : "",
        fecha150: dias === 150 ? fechaCalculada.toISOString().split("T")[0] : ""
      });
    } else {
      console.error('Fecha inválida');
      setFechasCalculadas({
        fecha90: "",
        fecha150: ""
      });
    }
  };

  const variants = {
    inputs: 'w-64 border text-[#000000] font-bold border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500',
    button: 'w-64 bg-[#5F8D4E] text-white font-bold py-2 px-4 rounded-md hover:bg-[#285430] ease-in-out duration-100',
    labels: 'w-64 font-bold text-[#000]',
    labelCCard: 'w-64 font-bold  -mt-6 text-[#000]',
    inputDisabled: 'w-64 border text-white bg-slate-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 hidden',
    labelNone: 'w-64 font-bold hidden',
    optionsText: 'font-bold'
  }
  const inputStyle = classnames(variants['inputs'], estilos)
  const buttonStyle = classnames(variants['button'], estilos)
  const labelStyle = classnames(variants['labels'], estilos)
  const labelCCardStyle = classnames(variants['labelCCard'], estilos)
  const inputDisabledStyle = classnames(variants['inputDisabled'], estilos)
  const labelNoneStyle = classnames(variants['labelNone'], estilos)
  const optionsTextStyle = classnames(variants['optionsText'], estilos)

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
    <div className='bg-[#FAFAFA] h-screen'>
      <NavAdmin />
      <div className=' p-4 w-10/12 flex justify-center items-center flex-col m-auto mt-4 rounded-md'>
        <div className='w-10/12'>
          <h2 className='font-bold ml-2 text-xl float-left mb-8'>Nuevo cliente:</h2>
        </div>
        <form className='flex flex-col justify-center items-center space-y-10 w-10/12 bg-[#fff] rounded-md p-4 shadow-md' action="">
          <label className={labelNoneStyle}>Estado del cliente:
            <input
              className={inputDisabledStyle}
              type="text"
              name="active_noActive"
              value={formData.isPay}
              readOnly
              onChange={handleChange}
              disabled
            />
          </label>
          <label className={labelStyle}> Foto:
            <input
              className="flex justify-center w-64 h-12 items-center border rounded-md py-2 px-4"
              type="file"
              name="profilePhotoUrl"
              placeholder="Nombre"
              onChange={handleChange}
            />
          </label>
          <div className='flex gap-2'>
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
          </div>
          <div className='flex  gap-2 justify-center items-center'>
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
          </div>
          <div className='flex gap-2 justify-center items-center'>
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
              <select
                className={inputStyle}
                onChange={handlePlanChange}
                name="Plan_activo"
                value={formData.Plan_activo}
              >
                <option value=""></option>
                <option className={optionsTextStyle} value="3 meses al 50%">3 meses al 50%</option>
                <option className={optionsTextStyle} value="5 meses al 50%">5 meses al 50%</option>
              </select>
            </label>
            <label className={labelStyle}>Seleccionar tipo de pago
              <select className={inputStyle} onChange={handleChange} name="type_of_pay" id="">
                <option value="" ></option>
                <option className={optionsTextStyle} value="Crédito">Crédito</option>
                <option className={optionsTextStyle} value="Débito">Débito</option>
                <option className={optionsTextStyle} value="OTRA">Efectivo</option>
              </select>
            </label>
          </div>
          <div className='flex gap-2 mt-8 justify-center items-center'>
            <label className={labelCCardStyle}>Seleccionar tarjeta de credito
              <select className={inputStyle} placeholder='Tarjeta de credito' onChange={handleChange} name="credit_card" id="">
                <option value="" ></option>
                <option className={optionsTextStyle} value="VISA">VISA</option>
                <option className={optionsTextStyle} value="MASTER">MASTERCARD</option>
                <option className={optionsTextStyle} value="OTRA">OTRA</option>
              </select>
            </label>
            <label lassName={labelStyle}>
              <input
                type="number"
                className={inputStyle}
                onChange={handleChange}
                name='card_number'
                placeholder='Numero de tarjeta' />
            </label>
            <button
              className={buttonStyle}
              onClick={handleSubmit}
            >
              Guardar Cambios
            </button>
          </div>
          <div >
            {fechasCalculadas.fecha90 && (
              <p className='font-bold text-xl'>3 meses al 50% hasta: {fechasCalculadas.fecha90}</p>
            )}
            {fechasCalculadas.fecha150 && (
              <p className='font-bold text-xl'>5 meses al 50% hasta: {fechasCalculadas.fecha150}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewClient