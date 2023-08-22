import React, { useEffect, useState } from 'react'
import { uploadFile } from '../../firebase/config'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import classnames from 'classnames'


import NavAdmin from '../Admin/NavAdmin/NavAdmin';
import noFoto from '../../assets/no-foto.png'

import Swal from 'sweetalert2';

const UpdateClient = ({ estilos }) => {

  const { id } = useParams();

  const [clientData, setClientData] = useState(null);
  const [editedData, setEditedData] = useState({});

  const [profilePhoto, setProfilePhoto] = useState(null)

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
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
    labels: 'w-64 font-bold'
  }

  const inputStyle = classnames(variants['inputs'], estilos)
  const buttonStyle = classnames(variants['button'], estilos)
  const labelStyle = classnames(variants['labels'], estilos)


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
            <p className='text-sm mt-2'>Id de cliente: {clientData._id}</p>
          </div>
          <div className='flex flex-col justify-center items-center text-start pl-4'>
            <h2>Nombre: {clientData.Nombre}</h2>
            <h3>Apellido: {clientData.Apellido}</h3>
            <p>Fecha de Nacimiento: {clientData.Nacimiento}</p>
            <p>DNI: {clientData.DNI}</p>
            <p>Email: {clientData.Email}</p>
            <p>Teléfono: {clientData.Telefono}</p>
            <p>Alta el día: {clientData.Alta}</p>
            <p>Plan activo: {clientData.Plan_activo}</p>
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