import React, { useEffect, useState } from 'react'
import { uploadFile } from '../../firebase/config'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import classnames from 'classnames'


import NavAdmin from '../Admin/NavAdmin/NavAdmin';
import UpdateState from '../Admin/Buttons/UpdateState/UpdateState'
import noFoto from '../../assets/no-foto.png'
import s from '../Admin/Buttons/UpdateState/UpdateState.module.css'

import Swal from 'sweetalert2';

const UpdateClient = ({ estilos }) => {

  const { id } = useParams();

  const [clientData, setClientData] = useState(null);
  const [editedData, setEditedData] = useState({});

  const [profilePhoto, setProfilePhoto] = useState(null)

  const [clientState, setClientState] = useState(false)

  const [altaOBaja, setAltaOBaja] = useState(false);

  const handleAltaOBajaChange = () => {
    setAltaOBaja(!altaOBaja); // Toggle between alta and baja
  };

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        console.log(response)
        setClientData(response.data);
        setEditedData(response.data); // Inicializa los datos editados con los datos actuales
      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);



  // Manejador para los cambios en los campos editables
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  // Manejador para guardar los cambios
  const saveChanges = async (e) => {
    e.preventDefault();
    try {
      // Upload the profile photo if it's available
      let newProfilePhotoUrl = editedData.profilePhotoUrl; // Keep the existing value

      if (profilePhoto) {
        const result = await uploadFile(profilePhoto);
        newProfilePhotoUrl = result.url;
      }

      // Update the editedData with the new profilePhotoUrl
      const updatedData = { ...editedData, profilePhotoUrl: newProfilePhotoUrl };

      // Send a single PUT request to update the client data
      const updatedResponse = await axios.put(`http://localhost:8000/clients/${id}`, updatedData);
      setClientData(updatedResponse.data);

      Swal.fire({
        title: '¡Cambios guardados correctamente!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      window.location.reload();
    } catch (error) {
      console.error("Error al guardar los cambios", error);
    }
  };




  const variants = {

    inputs: 'w-64 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#2cad84] focus:border-2',
    button: 'w-64 bg-[#2cad84] text-white font-bold py-2 px-4 rounded-md hover:bg-[#6bdcb8]',
    labels: 'w-64 font-bold',
    id_style: 'text-sm font-bold mt-2',
    texts: 'font-bold'
  }

  const inputStyle = classnames(variants['inputs'], estilos)
  const buttonStyle = classnames(variants['button'], estilos)
  const labelStyle = classnames(variants['labels'], estilos)
  const idStyle = classnames(variants['id_style'], estilos)
  const textsStyles = classnames(variants['texts'], estilos)



  return (
    <div>
      <NavAdmin />


      <h2 className='text-center font-bold text-2xl pb-6 mt-4'>ACTUALIZAR CLIENTE</h2>


      {clientData && (

        <div div className='w-max h-auto p-4 flex justify-around items-center m-auto flex-row border-2 border-[#2cad84] rounded-md'>
          <div className='flex flex-col'>
            <img
              className='w-48 h-48 rounded-md'
              src={
                profilePhoto

                  ? URL.createObjectURL(profilePhoto)
                  : clientData.profilePhotoUrl || noFoto
              }
              alt="foto de perfil"
            />
            <div className='flex flex-col w-64'>
              <p className={idStyle}>Id de cliente: {clientData._id}</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-start pl-4'>
            <h2 className={textsStyles}>Nombre: {clientData.Nombre}</h2>
            <h3 className={textsStyles}>Apellido: {clientData.Apellido}</h3>
            <p className={textsStyles}>Fecha de Nacimiento: {clientData.Nacimiento}</p>
            <p className={textsStyles}>DNI: {clientData.DNI}</p>
            <p className={textsStyles}>Email: {clientData.Email}</p>
            <p className={textsStyles}>Teléfono: {clientData.Telefono}</p>
            <p className={textsStyles}>Alta el día: {clientData.Alta}</p>
            <p className={textsStyles}>Plan activo: {clientData.Plan_activo}</p>
            <p className={textsStyles}>Estado del pago: {clientData.isPay}</p>
            <p className={textsStyles}>Estado del Cliente: {clientData.active_noActive}</p>
            <p className={textsStyles}>Tipo de pago: {clientData.type_of_pay}</p>
            <p className={textsStyles}>Tipo de tarjeta: {clientData.credit_card}</p>
            <p className={textsStyles}>Numero de tarjeta: {clientData.card_number}</p>

          </div>
        </div>
      )
      }
      <section className='mt-8 flex justify-center items-center flex-col mb-6'>
        <h2 className='text-xl font-semibold mb-4'>Editar campos</h2>
        <form className='flex flex-col space-y-4' >
          <label >Foto de perfil
            <input type="file" name="" id="" onChange={e => setProfilePhoto(e.target.files[0])} />
          </label>
          <label className={labelStyle}>Seleccionar Estado de cliente
            <select className={inputStyle} onChange={handleInputChange} name="active_noActive" id="">
              <option value="" disabled></option>
              <option value="De Alta">De Alta</option>
              <option value="De Baja">De Baja</option>
            </select>
          </label>

          <label className={labelStyle}> Nombre
            <input
              className={inputStyle}
              type="text"
              name="Nombre"
              placeholder="Nombre"
              value={editedData.Nombre || ''}
              onChange={handleInputChange}
            />
          </label>
          <label className={labelStyle}> Apellido
            <input
              className={inputStyle}
              type="text"
              name="Apellido"
              placeholder="Apellido"
              value={editedData.Apellido || ''}
              onChange={handleInputChange}
            />
          </label>
          <label className={labelStyle}> Fecha de nacimiento
            <input
              className={inputStyle}
              type="date"
              name="Nacimiento"
              placeholder="Fecha de Nacimiento"
              value={editedData.Nacimiento || ''}
              onChange={handleInputChange}
            />
          </label>
          <label className={labelStyle}> DNI
            <input
              className={inputStyle}
              type="text"
              name="DNI"
              value={editedData.DNI || ''}
              onChange={handleInputChange}
            />
          </label>
          <label className={labelStyle}> Email
            <input
              className={inputStyle}
              type="text"
              name="Email"
              value={editedData.Email || ''}
              onChange={handleInputChange}
            />
          </label>
          <label className={labelStyle}> Tel
            <input
              className={inputStyle}
              type="text"
              name="Telefono"
              value={editedData.Telefono || ''}
              onChange={handleInputChange}
            />
          </label>
          <label className={labelStyle}> Fecha de alta
            <input
              className={inputStyle}
              type="date"
              name="Alta"
              value={editedData.Alta || ''}
              onChange={handleInputChange}
            />
          </label>
          <label className={labelStyle}> Plan
            <input
              className={inputStyle}
              type="text"
              name="Plan_activo"
              value={editedData.Plan_activo || ''}
              onChange={handleInputChange}
            />
          </label>


          <label className={labelStyle}>Seleccionar tipo de pago
            <select className={inputStyle} onChange={handleInputChange} name="type_of_pay" id="">
              <option value="" disabled></option>
              <option value="Crédito">Crédito</option>
              <option value="Débito">Débito</option>
              <option value="OTRA">Efectivo</option>
            </select>
          </label>


          <label className={labelStyle}>Seleccionar tarjeta de credito
            <select className={inputStyle} onChange={handleInputChange} name="credit_card" id="">
              <option value="" disabled></option>
              <option value="VISA">VISA</option>
              <option value="MASTER">MASTERCARD</option>
              <option value="OTRA">OTRA</option>
            </select>
          </label>

          <label lassName={labelStyle}>
            <input type="number" className={inputStyle} onChange={handleInputChange} name='card_number' />
          </label>

          <label className={labelStyle}>Seleccionar Estado de pago
            <select className={inputStyle} onChange={handleInputChange} name="isPay" id="">
              <option value="" disabled></option>
              <option value="Al dia">Al día</option>
              <option value="Atrasado">Atrasado</option>
              <option value="Vencido">Vencido</option>
            </select>
          </label>




          <button
            className={buttonStyle}
            onClick={saveChanges}
          >
            Guardar Cambios
          </button>
        </form>
      </section>


    </div >


  );
};

export default UpdateClient;