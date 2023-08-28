import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS:

// STYLES:
import classnames from 'classnames';
import '../../../index.css';

export const NavFitMedical = ({ user, estilos }) => {
  const { id } = useParams();
  const [userFitmedical, setUserFitmedical] = useState()

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setUserFitmedical(response.data)
      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  const variants = {
    view: 'w-10/12 m-2 text-white font-bold p-2 rounded-md border-2 border-[#5F8D4E] p-8',
    update: 'w-64 m-2 bg-sky-600 text-white font-bold p-2 rounded-md none'
  };
  const styleButtonView = classnames(variants['view'], estilos);
  const styleButtonUpdate = classnames(variants['update'], estilos);

  return (
    <div className='flex justify-center items-center flex-col '>
      <div className={styleButtonView}>
        <form className='flex flex-col justify-center items-center ' >
          <label>
            <input type="file" className='w-64  text-[#000]' name="Subir apto medico" />
          </label>
          <button className={styleButtonUpdate}>Subir apto medico</button>
        </form>
      </div>
    </div>
  );
};

export default NavFitMedical;
