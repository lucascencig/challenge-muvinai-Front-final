import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Link, useParams } from 'react-router-dom';

import '../../../index.css';
import axios from 'axios';

export const NavFitMedical = ({ user, estilos }) => {
  const { id } = useParams();
  const [userFitmedical, setUserFitmedical] = useState()

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        console.log(response.data);
        setUserFitmedical(response.data)
      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  const variants = {
    view: 'w-64 m-2 bg-green-600 text-white font-bold p-2 rounded-md',
    update: 'w-64 m-2 bg-sky-600 text-white font-bold p-2 rounded-md none'
  };

  const styleButtonView = classnames(variants['view'], estilos);
  const styleButtonUpdate = classnames(variants['update'], estilos);

  return (
    <div className='flex justify-center items-center flex-col '>


      <div >
        <form className='flex flex-col justify-center items-center ' >
          <label>
            <input type="file" name="Subir apto medico" />
          </label>

          <button className={styleButtonUpdate}>Subir apto medico</button>
        </form>

      </div>
    </div>
  );
};

export default NavFitMedical;
