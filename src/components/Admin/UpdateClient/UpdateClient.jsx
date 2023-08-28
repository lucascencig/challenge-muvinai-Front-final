import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { uploadFile } from '../../../firebase/config'
import axios from 'axios'

// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin';
import noFoto from '../../../assets/no-foto.png'
import Swal from 'sweetalert2';

// STYLES:
import classnames from 'classnames'

const UpdateClient = ({ estilos }) => {
  const [users, setUsers] = useState([
    {
      _id: '1',
      Nombre: 'John',
      Apellido: 'Doe',
      Plan_activo: '3 meses al 50%',
      DNI: '32132654',
      Telefono: 1512345678,
      Alta: '24/08/2023',
      Nacimiento: '02/03/1990',
      Vigencia_actual: '2023-11-23',
      Fecha_proximo: '24/09/2023',
      isPay: 'Al dia',
      active_noActive: 'De alta',
      type_of_pay: 'Crédito',
      credit_card: 'MASTER',
      card_number: 4546123456784641,
      Apto_medico: '',
      Email: 'john@example.com',
      profilePhotos: '',
    },
  ])
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [clientState, setClientState] = useState(false)
  const [altaOBaja, setAltaOBaja] = useState(false);

  const handleAltaOBajaChange = () => {
    setAltaOBaja(!altaOBaja);
  };


  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setClientData(response.data);
        setEditedData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveChanges = async (e) => {
    e.preventDefault();
    try {
      let newProfilePhotoUrl = editedData.profilePhotoUrl;
      if (profilePhoto) {
        const result = await uploadFile(profilePhoto);
        newProfilePhotoUrl = result.url;
      }
      const updatedData = { ...editedData, profilePhotoUrl: newProfilePhotoUrl };
      const updatedResponse = await axios.put(`http://localhost:8000/clients/${id}`, updatedData);
      setClientData(updatedResponse.data);
      Swal.fire({
        title: '¡Cambios guardados correctamente!',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(
        window.localStorage.getItem('adminEmail')
      );
      window.location.reload();
    } catch (error) {
      console.error("Error al guardar los cambios", error);
    }
  };

  const handlePlanChange = (e) => {
    handleInputChange(e);
    const { name, value } = e.target;
    if (value === "3 meses al 50%") {
      calcularFechasOffset(editedData.Alta, 90);
    } else if (value === "5 meses al 50%") {
      calcularFechasOffset(editedData.Alta, 150);
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

  const [fechasCalculadas, setFechasCalculadas] = useState({
    fecha90: "",
    fecha150: ""
  });

  const variants = {
    inputs: 'w-64 font-bold border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#2cad84] focus:border-2',
    button: 'w-64 bg-[#5F8D4E] text-white font-bold py-2 px-4 rounded-md hover:bg-[#285430] ease-in duration-100',
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
    <div className='bg-[#FAFAFA] '>
      <NavAdmin />
      <div className='h-screen'>
        <h2 className='text-center font-bold text-2xl pb-6 mt-4 '>ACTUALIZAR CLIENTE</h2>
        <div className='flex justify-around w-10/12 h-auto bg-[#fff] items-center m-auto shadow-md p-4 '>
          <div className='w-2/4'>
            <h4 className='text-center font-bold text-lg pb-6 mt-4'>Ultima vez modificado por: <p>{window.localStorage.getItem('adminEmail')}</p></h4>
            {clientData ? (
              <div className="w-10/12 text-[#68686c]  bg-[#FAFAFA] h-auto rounded-md shadow-md bg-white flex justify-between flex-col items-center m-auto space-x-2">
                <div className="flex flex-col items-center">
                  <img
                    className="w-32 h-32 p-2 rounded-full"
                    src={
                      profilePhoto
                        ? URL.createObjectURL(profilePhoto)
                        : clientData.profilePhotoUrl || noFoto
                    }
                    alt="foto de perfil"
                  />
                  <div className="flex flex-col w-full  justify-center items-center p-4 ">
                    <p className={idStyle}>Id de cliente: {clientData._id}</p>
                  </div>
                </div>
                <div className="flex flex-col flex-grow justify-center text-start pl-4">
                  <h2 className={textsStyles}>Nombre: {clientData.Nombre}</h2>
                  <h3 className={textsStyles}>Apellido: {clientData.Apellido}</h3>
                  <p className={textsStyles}>Fecha de Nacimiento: {clientData.Nacimiento}</p>
                  <p className={textsStyles}>DNI: {clientData.DNI}</p>
                  <p className={textsStyles}>Email: {clientData.Email}</p>
                  <p className={textsStyles}>Teléfono: {clientData.Telefono}</p>
                  <p className={textsStyles}>Alta el día: {clientData.Alta}</p>
                  <p className={textsStyles}>Plan activo: {clientData.Plan_activo}</p>
                  <p className={textsStyles}>Vigencia: {clientData.Vigencia_actual}</p>
                  <p className={textsStyles}>Proximo pago: {new Date(new Date(clientData.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</p>
                  <p className={textsStyles}>Estado del pago: {clientData.isPay}</p>
                  <p className={textsStyles}>Estado del Cliente: {clientData.active_noActive}</p>
                  <p className={textsStyles}>Tipo de pago: {clientData.type_of_pay}</p>
                  <p className={textsStyles}>Tipo de tarjeta: {clientData.credit_card}</p>
                  <p className={textsStyles}>
                    Numero de tarjeta:{' '}
                    {clientData.card_number
                      ? `**** **** **** ${String(clientData.card_number).substr(-4)}`
                      : 'N/A'}
                  </p>
                </div>
              </div>
            )
              :
              users ?
                (<div className="w-10/12 text-[#68686c]  bg-[#FAFAFA] h-auto rounded-md shadow-md bg-white flex justify-between flex-col items-center m-auto space-x-2">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-32 h-32 p-2 rounded-full"
                      src={
                        profilePhoto
                          ? URL.createObjectURL(profilePhoto)
                          : users.profilePhotoUrl || noFoto
                      }
                      alt="foto de perfil"
                    />
                    <div className="flex flex-col w-full  justify-center items-center p-4 ">
                      <p className={idStyle}>Id de cliente: {users._id}</p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow justify-center text-start pl-4">
                    <h2 className={textsStyles}>Nombre: {users.Nombre}</h2>
                    <h3 className={textsStyles}>Apellido: {users.Apellido}</h3>
                    <p className={textsStyles}>Fecha de Nacimiento: {users.Nacimiento}</p>
                    <p className={textsStyles}>DNI: {users.DNI}</p>
                    <p className={textsStyles}>Email: {users.Email}</p>
                    <p className={textsStyles}>Teléfono: {users.Telefono}</p>
                    <p className={textsStyles}>Alta el día: {users.Alta}</p>
                    <p className={textsStyles}>Plan activo: {users.Plan_activo}</p>
                    <p className={textsStyles}>Vigencia: {users.Vigencia_actual}</p>
                    <p className={textsStyles}>Proximo pago: {new Date(new Date(users.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</p>
                    <p className={textsStyles}>Estado del pago: {users.isPay}</p>
                    <p className={textsStyles}>Estado del Cliente: {users.active_noActive}</p>
                    <p className={textsStyles}>Tipo de pago: {users.type_of_pay}</p>
                    <p className={textsStyles}>Tipo de tarjeta: {users.credit_card}</p>
                    <p className={textsStyles}>
                      Numero de tarjeta:{' '}
                      {users.card_number
                        ? `**** **** **** ${String(users.card_number).substr(-4)}`
                        : 'N/A'}
                    </p>
                  </div>
                </div>)
                :
                null
            }
          </div>
          <div className='w-10/12'>
            <section className='mt-8 flex justify-center items-center flex-col mb-6'>
              <h2 className='text-xl font-semibold mb-4'>Editar campos</h2>
              <form className='flex flex-col justify-center items-center space-y-2 bg-[#fff] text-[#000]  w-10/12 rounded-md p-8 shadow-md' >
                <div className="flex flex-col ">
                  <label className="text-[#c9c9c9]">Foto de perfil</label>
                  <input
                    type="file"
                    name=""
                    id=""
                    className="border rounded-md py-2 px-4"
                    onChange={(e) => setProfilePhoto(e.target.files[0])}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#c9c9c9]">Seleccionar Estado de cliente</label>
                  <select
                    className="border rounded-md py-2 px-4"
                    onChange={handleInputChange}
                    name="active_noActive"
                    id=""
                  >
                    <option value=""></option>
                    <option className="font-bold" value="De alta">De Alta</option>
                    <option className="font-bold" value="De baja">De Baja</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label className="text-[#000000]">Nombre</label>
                    <input
                      className={inputStyle}
                      type="text"
                      name="Nombre"
                      placeholder="Nombre"
                      value={editedData.Nombre || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#000000]">Apellido</label>
                    <input
                      className={inputStyle}
                      type="text"
                      name="Apellido"
                      placeholder="Apellido"
                      value={editedData.Apellido || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#000000]">Fecha de nacimiento</label>
                    <input
                      className={inputStyle}
                      type="date"
                      name="Nacimiento"
                      placeholder="Fecha de Nacimiento"
                      value={editedData.Nacimiento || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label className="text-[#000000]">DNI</label>
                    <input
                      className={inputStyle}
                      type="text"
                      name="DNI"
                      value={editedData.DNI || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#000000]">Email</label>
                    <input
                      className={inputStyle}
                      type="text"
                      name="Email"
                      value={editedData.Email || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#000000]">Teléfono</label>
                    <input
                      className={inputStyle}
                      type="text"
                      name="Telefono"
                      value={editedData.Telefono || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label className="text-[#000000]">Fecha de alta</label>
                    <input
                      className={inputStyle}
                      type="date"
                      name="Alta"
                      value={editedData.Alta || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#000000]">Plan</label>
                    <select
                      className={inputStyle}
                      onChange={handlePlanChange}
                      name="Plan_activo"
                      value={editedData.Plan_activo}
                    >
                      <option className="font-bold" value=""></option>
                      <option className="font-bold" value="3 meses al 50%">3 meses al 50%</option>
                      <option className="font-bold" value="5 meses al 50%">5 meses al 50%</option>
                    </select>
                  </div>
                  <label className={labelStyle}>Seleccionar tipo de pago
                    <select className={inputStyle} onChange={handleInputChange} name="type_of_pay" id="">
                      <option className="font-bold" value="" ></option>
                      <option className="font-bold" value="Crédito">Crédito</option>
                      <option className="font-bold" value="Débito">Débito</option>
                      <option className="font-bold" value="Efectivo">Efectivo</option>
                    </select>
                  </label>
                </div>
                <div className="flex gap-4">
                  <label className={labelStyle}>Seleccionar tarjeta de credito
                    <select className={inputStyle} onChange={handleInputChange} name="credit_card" id="">
                      <option className="font-bold" value="" ></option>
                      <option className="font-bold" value="VISA">VISA</option>
                      <option className="font-bold" value="MASTER">MASTERCARD</option>
                      <option className="font-bold" value="OTRA">OTRA</option>
                    </select>
                  </label>
                  <div className='font-bold flex flex-col gap-2 '>
                    <label className={labelStyle}>
                      <input type="number" placeholder='Numero de tarjeta' className='w-64 font-bold border border-gray-300 px-4 py-2 mt-6 rounded-md focus:outline-none focus:border-[#2cad84] focus:border-2' onChange={handleInputChange} name='card_number' />
                    </label>
                  </div>
                  <label className={labelStyle}>Seleccionar Estado de pago
                    <select className={inputStyle} onChange={handleInputChange} name="isPay" id="">
                      <option className="font-bold" value="" ></option>
                      <option className="font-bold" value="Al dia">Al día</option>
                      <option className="font-bold" value="Atrasado">Atrasado</option>
                      <option className="font-bold" value="Vencido">Vencido</option>
                    </select>
                  </label>
                </div>
                <div className='flex gap-4'>
                  <dir className='mt-4'>
                    <button
                      className={buttonStyle}
                      onClick={saveChanges}
                    >
                      Guardar Cambios
                    </button>
                  </dir>
                  <div className='mt-6'>
                    {fechasCalculadas.fecha90 && (
                      <p className='font-bold text-xl'>3 meses al 50% hasta: {fechasCalculadas.fecha90}</p>
                    )}
                    {fechasCalculadas.fecha150 && (
                      <p className='font-bold text-xl'>5 meses al 50% hasta: {fechasCalculadas.fecha150}</p>
                    )}
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateClient;