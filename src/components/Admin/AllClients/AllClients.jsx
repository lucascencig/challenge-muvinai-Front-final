import React, { useEffect, useState } from 'react'
import axios from 'axios'


// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin'
import ButtonsAdmin from '../Buttons/ButtonsNav'
import noFoto from '../../../assets/no-foto.png'
import ButtonsUpdate from '../Buttons/ButtonsCrud/UpdateButton/ButtonUpdate'
import ButtonFitMedical from '../Buttons/ButtonFitMedical/ButtonFitMedical'
import FitMedical from '../FitMedical/FitMedical'
import { Link } from 'react-router-dom'
import '../../../index.css'
import ButtonDelete from '../Buttons/ButtonsCrud/DeleteButton/ButtonDelete'
import WhatsAppButon from '../Buttons/WhatsAppButton/WhatsAppButon'
import EmailButton from '../Buttons/EmailButton/EmailButton'
import { uploadFile } from '../../../firebase/config'

import PaysButton from '../Buttons/ButtonsCrud/PaysButton/PaysButton'
import FitMedicalUpload from '../FitMedical/FitMedicalUpload/FitMedicalUpload'


// const AllClients = () => {


//   const [users, setUsers] = useState([])
//   const [showUsers, setShowUsers] = useState()

//   const [showFitMedical, setShowFitMedical] = useState(false)
//   const [selectedUser, setSelectedUser] = useState(null);

//   const [profilePhotos, setProfilePhotos] = useState({});


//   useEffect(() => {
//     async function getData() {
//       try {
//         const bdGet = await axios.get('http://localhost:8000/clients/');
//         setUsers(bdGet.data);
//         setShowUsers(true);
//         const photos = {};
//         for (const user of bdGet.data) {
//           if (user.profilePhotoUrl) {
//             photos[user._id] = user.profilePhotoUrl;
//           }
//         }
//         setProfilePhotos(photos);
//       } catch (error) {
//         console.error("No se pudieron cargar los datos de los clientes", error);
//       }
//     }

//     getData();
//   }, []);
//   const handleSelectUser = (user) => {
//     setShowFitMedical(true);

//     setSelectedUser(user);
//   };





//   return (
//     <div>
//       <NavAdmin />

//       {
//         showUsers ?
//           users.map((e) => {

//             return (
//               <div key={e._id} className='w-4/5 mt-4 p-2 h-auto  flex justify-around items-center m-auto flex-row border-2 border-[#2cad84] rounded-md'>
//                 <div className='flex flex-col'>
//                   <img
//                     className="w-48 h-48 rounded-md mb-4"
//                     src={profilePhotos[e._profilePhotoURL] || noFoto}
//                     alt="foto de perfil"
//                   />
//                   <li className='list-none'>Id de socio: <span className='text-bold'>{e._id}</span></li>
//                 </div>
//                 <div className='flex flex-col justify-center items-center text-justify p-4'>
//                   <div className='flex flex-wrap w-2/5 gap-2 text-justify'>
//                     <li className='list-none font-bold text-lg'>Nombre: <span className='text-bold'>{e.Nombre}</span></li>
//                     <li className='list-none font-bold text-lg'>Apellido:<span className='text-bold'> {e.Apellido}</span></li>
//                     <li className='list-none font-bold text-lg'>Fecha de Nacimiento:<span className='text-bold'>  {e.Nacimiento}</span></li>
//                     <li className='list-none font-bold text-lg'>DNI: <span className='text-bold'>{e.DNI}</span></li>
//                     <li className='list-none font-bold text-lg'>Email:<span className='text-bold'> {e.Email}</span></li>
//                     <li className='list-none font-bold text-lg'>Tél: <span className='text-bold'>{e.Telefono}</span></li>
//                   </div>

//                   <div className='flex flex-wrap w-2/5 gap-2 text-justify mt-4'>
//                     <li className='list-none font-bold text-lg'>Alta el dia: </li><span className='flex justify-center items-center font-bold'>{e.Alta}</span>
//                     <li className='list-none font-bold text-lg'>Plan activo: </li><span className='flex justify-center items-center font-bold'>{e.Plan_activo}</span>
//                     <li className='list-none font-bold text-lg'>Vigencia: </li><span className='flex justify-center items-center font-bold'>{e.Vigencia_actual}</span>
//                     <li className='list-none font-bold text-lg'>Proximo pago: </li><span className='flex justify-center items-center font-bold'>{new Date(new Date(e.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</span>
//                     <li className='list-none font-bold text-lg'>Estado de pago: </li> <span className='flex justify-center items-center font-bold'>{e.isPay}</span>
//                     <li className='list-none font-bold text-lg'>Estado de cliente: </li><span className='flex justify-center items-center font-bold'>{e.active_noActive}</span>
//                   </div>
//                   <ul className='flex p-2 gap-2'>
//                     <li>
//                       <a href={`https://api.whatsapp.com/send?phone=${e.Telefono}&text=Hola%20,Este%20mensaje%20es
// %20del%20gimnasio.%20%20Recuerda%20venir%20este%20mes`}>
//                         <WhatsAppButon />
//                       </a>
//                     </li>

//                     <li>
//                       <a href={`mailto:${e.Email}`}>
//                         <EmailButton />
//                       </a>
//                     </li>
//                   </ul>

//                 </div>

//                 <div className='flex justify-center items-center flex-col'>
//                   <Link to={`/clients/${e._id}`}>
//                     <ButtonsUpdate text="Modificar Cliente" user={e} />
//                   </Link>

//                   <ButtonFitMedical onClick={() => handleSelectUser(e)} user={e} />

//                   {/* <Link to={`/clients/del/${e._id}`}>
//                     <ButtonDelete text="Dar de baja" user={e} />
//                   </Link> */}

//                   <Link to={`/clients/pays/${e._id}`}>
//                     <PaysButton text="Ver historial de pagos" user={e} />
//                   </Link>
//                 </div>



//                 {selectedUser && selectedUser._id === e._id &&
//                   <div>

//                     <FitMedical user={selectedUser} />

//                   </div>
//                 }
//               </div>
//             )
//           })
//           :
//           (<div>
//             <h2>NO HAY CLIENTES PARA MOSTRAR</h2>
//           </div>)
//       }


//     </div>
//   )
// }



const AllClients = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);
  const [showFitMedical, setShowFitMedical] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profilePhotos, setProfilePhotos] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const bdGet = await axios.get('http://localhost:8000/clients/');
        setUsers(bdGet.data);
        setShowUsers(true);
        const photos = {};
        for (const user of bdGet.data) {
          if (user.profilePhotoUrl) {
            photos[user._id] = user.profilePhotoUrl;
          }
        }
        setProfilePhotos(photos);
      } catch (error) {
        console.error('No se pudieron cargar los datos de los clientes', error);
      }
    }

    getData();
  }, []);

  const handleSelectUser = (user) => {
    setShowFitMedical(true);
    setSelectedUser(user);
  };

  return (
    <div>
      <NavAdmin />

      {showUsers ? (
        users.map((e) => (
          <div
            key={e._id}
            className="w-4/5  mt-4 p-4 bg-white shadow-md rounded-md flex justify-between items-center m-auto"
          >
            <div className="flex justify-center m-auto items-center">
              <img
                className="w-24 h-24 rounded-full mr-4"
                src={profilePhotos[e._id] || noFoto}
                alt="foto de perfil"
              />
              <div>
                <h2 className="font-bold text-xl">
                  {e.Nombre} {e.Apellido}
                </h2>
                <p className="text-gray-600">{e.Email}</p>
                <p className='text-sm'>Id de socio: <span className='text-bold'>{e._id}</span></p>
                {/* <div className='flex flex-col justify-center items-center text-justify p-4'>
                  <div className='flex flex-wrap w-2/5 gap-2 text-justify'>
                    <li className='list-none font-bold text-lg'>Nombre: <span className='text-bold'>{e.Nombre}</span></li>
                    <li className='list-none font-bold text-lg'>Apellido:<span className='text-bold'> {e.Apellido}</span></li>
                    <li className='list-none font-bold text-lg'>Fecha de Nacimiento:<span className='text-bold'>  {e.Nacimiento}</span></li>
                    <li className='list-none font-bold text-lg'>DNI: <span className='text-bold'>{e.DNI}</span></li>
                    <li className='list-none font-bold text-lg'>Email:<span className='text-bold'> {e.Email}</span></li>
                    <li className='list-none font-bold text-lg'>Tél: <span className='text-bold'>{e.Telefono}</span></li>
                  </div>

                  <div className='flex flex-wrap w-2/5 gap-2 text-justify mt-4'>
                    <li className='list-none font-bold text-lg'>Alta el dia: </li><span className='flex justify-center items-center font-bold'>{e.Alta}</span>
                    <li className='list-none font-bold text-lg'>Plan activo: </li><span className='flex justify-center items-center font-bold'>{e.Plan_activo}</span>
                    <li className='list-none font-bold text-lg'>Vigencia: </li><span className='flex justify-center items-center font-bold'>{e.Vigencia_actual}</span>
                    <li className='list-none font-bold text-lg'>Proximo pago: </li><span className='flex justify-center items-center font-bold'>{new Date(new Date(e.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</span>
                    <li className='list-none font-bold text-lg'>Estado de pago: </li> <span className='flex justify-center items-center font-bold'>{e.isPay}</span>
                    <li className='list-none font-bold text-lg'>Estado de cliente: </li><span className='flex justify-center items-center font-bold'>{e.active_noActive}</span>
                  </div>
                </div> */}

              </div>
              <div className="flex items-center flex-row-reverse space-x-4">
                <ButtonFitMedical onClick={() => handleSelectUser(e)} user={e} />

                <Link to={`/clients/pays/${e._id}`}>
                  <PaysButton text="Historial de pagos" user={e} />
                </Link>
                <Link to={`/clients/${e._id}`}>
                  <ButtonsUpdate text="Modificar Cliente" user={e} />
                </Link>

                <a href={`https://api.whatsapp.com/send?phone=${e.Telefono}&text=Hola%20,Este%20mensaje%20es%20del%20gimnasio.%20%20Recuerda%20venir%20este%20mes`}>
                  <WhatsAppButon />
                </a>
                <a href={`mailto:${e.Email}`}>
                  <EmailButton />
                </a>
              </div>
              {selectedUser && selectedUser._id === e._id && (
                <div>
                  <FitMedical user={selectedUser} />
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold">NO HAY CLIENTES PARA MOSTRAR</h2>
        </div>
      )}
    </div>
  );
};




export default AllClients