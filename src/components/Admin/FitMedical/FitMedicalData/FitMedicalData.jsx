import React, { useEffect, useState } from 'react'
import NavAdmin from '../../NavAdmin/NavAdmin'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames'
import '../../../../index.css'

const FitMedicalData = () => {
  const { id } = useParams();
  const [fitMedicalClient, setFitMedicalClient] = useState()


  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setFitMedicalClient(response.data);
        console.log(response.data)

      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  const variants = {

    inputs: 'w-64 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#2cad84] focus:border-2',
    button: 'w-64 bg-[#2cad84] text-white font-bold py-2 px-4 rounded-md hover:bg-[#6bdcb8]',
    labels: 'w-64 font-bold',
    id_style: 'text-sm font-bold mt-2',
    texts: 'font-bold'
  }

  const inputStyle = classnames(variants['inputs'])
  const buttonStyle = classnames(variants['button'])
  const labelStyle = classnames(variants['labels'])
  const idStyle = classnames(variants['id_style'])
  const textsStyles = classnames(variants['texts'])


  return (
    <div>
      <NavAdmin />
      {fitMedicalClient ?
        <div>
          <h2>Apto medico de {fitMedicalClient.Nombre}</h2>

          <div className='flex flex-col justify-center items-center text-start pl-4'>
            {/* <h2 className={textsStyles}>Nombre: {clientData.Nombre}</h2>
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
            <p className={textsStyles}>Numero de tarjeta: {clientData.card_number ? `**** **** **** ${String(clientData.card_number).substr(-4)}` : 'N/A'}</p> */}
          </div>
          <div>
            Aprobar apto medico:

            <select>
              <option value="ok">Aprobado</option>
              <option value="notOk">Desaprobado</option>
            </select>
          </div>
        </div>

        :
        null
      }
    </div>
  )
}

export default FitMedicalData