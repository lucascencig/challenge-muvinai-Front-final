import axios from 'axios'
import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavAdmin from '../NavAdmin/NavAdmin'
import Swal from 'sweetalert2'


const DeleteClient = () => {
  const { id } = useParams();
  const [clientDataForDelete, setClientDataForDelete] = useState(null);


  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setClientDataForDelete(response.data);
        console.log(response.data)

      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  return (
    <div>
      <NavAdmin />
      {
        clientDataForDelete ?
          (<div>  <h2>
            ¿Dar de baja a {clientDataForDelete.Nombre}?
          </h2>
            {/* <button>Dar de baja</button> */}
          </div>
          )

          :
          null
      }
    </div>
  )
}

export default DeleteClient