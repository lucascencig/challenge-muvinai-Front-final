import React, { useEffect, useState } from 'react'
import axios from 'axios'

// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin'
import ButtonsAdmin from '../Buttons/ButtonsNav'
import noFoto from '../../../assets/no-foto.png'
import ButtonsUpdate from '../Buttons/ButtonsCrud/ButtonUpdate'
import ButtonFitMedical from '../Buttons/ButtonFitMedical/ButtonFitMedical'
import FitMedical from '../FitMedical/FitMedical'
import { Link } from 'react-router-dom'
import '../../../index.css'

const AllClients = () => {

  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  const [showFitMedical, setShowFitMedical] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null);



  useEffect(() => {
    async function getData() {
      try {
        const bdGet = await axios.get('http://localhost:8000/clients/')
        setUsers(bdGet.data)
        setShowUsers(true)
      } catch (error) {
        console.error("No se pudieron cargar los datos de los clientes", error);
      }
    }

    getData();
  }, [])

  const handleSelectUser = (user) => {
    setShowFitMedical(true);

    setSelectedUser(user);
  };





  return (
    <div>
      <NavAdmin />
      {
        showUsers === true ?
          users.map((e) => {
            return (
              <div key={e._id} className='w-4/5 mt-4  h-auto  flex justify-around items-center m-auto flex-row border-2 border-[#2cad84] rounded-md'>
                <div className='flex flex-col'>
                  <img className='w-48 h-48 rounded-md mb-4' src={noFoto} alt="foto de perfil" />
                  <li className='list-none'>Id de socio: <span className='text-bold'>{e._id}</span></li>
                </div>
                <div className='flex flex-col justify-center items-center text-justify p-4'>

                  <h2>Nombre: <span className='text-bold'>{e.Nombre}</span></h2>
                  <h3>Apellido:<span className='text-bold'> {e.Apellido}</span></h3>
                  <li className='list-none'>Fecha de Nacimiento:<span className='text-bold'>  {e.Nacimiento}</span></li>
                  <li className='list-none'>DNI: <span className='text-bold'>{e.DNI}</span></li>
                  <li className='list-none'>Email:<span className='text-bold'> {e.Email}</span></li>
                  <li className='list-none'>Tél: <span className='text-bold'>{e.Telefono}</span></li>
                  <li className='list-none'>Alta el dia: <span className='text-bold'>{e.Alta}</span></li>
                  <li className='list-none'>Plan activo: <span className='text-bold'>{e.Plan_activo}</span></li>
                  <li className='list-none'>Vigencia: <span className='text-bold'>{e.Vigencia_actual}</span></li>
                  <li className='list-none'>Proximo pago: <span className='text-bold'>{e.Fecha_proximo}</span></li>

                </div>
                <Link to={`/clients/${e._id}`}>
                  <ButtonsUpdate text="Modificar Cliente" user={e} />
                </Link>

                <ButtonFitMedical onClick={() => handleSelectUser(e)} user={e} />

                {selectedUser && selectedUser._id === e._id &&

                  <FitMedical user={selectedUser} />

                }
              </div>
            )
          })
          :
          null
      }


    </div>
  )
}

export default AllClients