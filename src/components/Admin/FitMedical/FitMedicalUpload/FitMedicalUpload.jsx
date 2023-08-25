import React, { useEffect, useState } from 'react';
import NavAdmin from '../../NavAdmin/NavAdmin';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';

import '../../../../index.css';

const FitMedicalUpload = ({ estilos }) => {
  const { id } = useParams();
  const [fitMedicalClient, setFitMedicalClient] = useState();

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setFitMedicalClient(response.data);
        console.log(response.data);
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
  };

  const inputStyle = classnames(variants['inputs'], estilos);
  const buttonStyle = classnames(variants['button'], estilos);
  const labelStyle = classnames(variants['labels'], estilos);
  const idStyle = classnames(variants['id_style'], estilos);
  const textsStyles = classnames(variants['texts'], estilos);

  return (
    <div>
      <NavAdmin />
      {fitMedicalClient ? (
        <div>
          <h2>Subir apto medico para {fitMedicalClient.Nombre} {fitMedicalClient.Apellido}</h2>

          <p className={idStyle}>ID del cliente: {id}</p>

          <div>
            <form action="">
              <label className={labelStyle}> Foto:
                <input
                  className='border-0 outline-none w-64'
                  type="file"
                  name="Apto_medico"
                  placeholder="Nombre"
                // onChange={handleChange}
                />
              </label>
              <button className={buttonStyle}>Subir apto médico</button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FitMedicalUpload;
