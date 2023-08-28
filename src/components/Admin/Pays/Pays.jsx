import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin';

// STYLES:
import '../../../index.css'
import classnames from 'classnames'

export const Pays = ({ estilos }) => {
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
  const [clientDataPays, setClientDataPays] = useState(null);

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setClientDataPays(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  const variants = {
    table: 'bg-[#FAFAFA] text-[#000000] border-2 font-bold p-4 w-10/12 m-auto shadow-md',
    cels: 'bg-[#FAFAFA] text-[#000000] font-bold ',
    row: 'bg-[#5F8D4E] border-2 text-[#ffffff] font-bold p-4 w-fll '
  }
  const styleTable = classnames(variants.table, estilos)
  const styleCels = classnames(variants.cels, estilos)
  const styleRow = classnames(variants.row, estilos)

  return (
    <div>
      <NavAdmin />
      {
        clientDataPays ?
          (<div className='bg-[#FAFAFA] h-screen '>
            <h2 className='font-bold ml-56 text-xl p-6'>
              Historial de pagos de {clientDataPays.Nombre}
            </h2>
            <div className='flex justify-center items-center text-center'>
              <div>
                <table className={styleTable}>
                  <colgroup className={styleCels}>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead className={styleRow}>
                    <tr>
                      <th>Mes</th>
                      <th>A pagar</th>
                      <th>Tipo de tarjeta</th>
                      <th>Tipo de pago</th>
                      <th>terminada en</th>
                      <th>Estado de pago</th>
                      <th>Motivo de no pago</th>
                      <th>Proximo pago</th>
                      <th>Fecha de vencimiento</th>
                      <th>Descuento actual</th>
                      <th>Vencimiento del descuento:</th>
                      <th>Estado del cliente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styleCels}>Enero</td>
                      <td>$10500</td>
                      <td>{clientDataPays.credit_card} </td>
                      <td>{clientDataPays.type_of_pay}</td>
                      <td>{clientDataPays.card_number ? `**** ${String(clientDataPays.card_number).substr(-4)}` : 'N/A'}</td>
                      {clientDataPays ?
                        (<>{clientDataPays.isPay === "Al dia" ? <td className='bg-green-600'>{clientDataPays.isPay}</td> : null}
                          {clientDataPays.isPay === "Atrasado" ? <td className='bg-slate-600'>{clientDataPays.isPay}</td> : null}
                          {clientDataPays.isPay === "Vencido" ? <td className='bg-red-600'>{clientDataPays.isPay}</td> : null}</>)
                        :
                        (
                          <td> </td>
                        )
                      }
                      {clientDataPays ?
                        (<>{clientDataPays.isPay === "Al dia" ? <td ></td> : null}
                          {clientDataPays.isPay === "Atrasado" ? <td >Rechazo de pago</td> : null}
                          {clientDataPays.isPay === "Vencido" ? <td>Rechazo de pago</td> : null}</>)
                        :
                        (
                          <td> </td>
                        )
                      }
                      <td>{new Date(new Date(clientDataPays.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</td>
                      <td>{new Date(new Date(clientDataPays.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</td>
                      <td>{clientDataPays.Plan_activo}</td>
                      <td>{clientDataPays.Vigencia_actual}</td>
                      {clientDataPays ?
                        (<>{clientDataPays.active_noActive === "De alta" ? <td className='bg-green-600'>{clientDataPays.active_noActive}</td> : null}
                          {clientDataPays.active_noActive === "De baja" ? <td className='bg-red-600'>{clientDataPays.active_noActive}</td> : null}
                        </>
                        )
                        :
                        (
                          <></>
                        )
                      }
                    </tr>
                    <tr>
                      <td className={styleCels}>Febrero</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Marzo</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Abril</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Mayo</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Junio</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Julio</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Agosto</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Septiembre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Octubre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Noviembre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Diciembre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          )
          :
          users ? (<div className='bg-[#FAFAFA] h-screen '>
            <h2 className='font-bold ml-56 text-xl p-6'>
              Historial de pagos de {users.Nombre}
            </h2>
            <div className='flex justify-center items-center text-center'>
              <div>
                <table className={styleTable}>
                  <colgroup className={styleCels}>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead className={styleRow}>
                    <tr>
                      <th>Mes</th>
                      <th>A pagar</th>
                      <th>Tipo de tarjeta</th>
                      <th>Tipo de pago</th>
                      <th>terminada en</th>
                      <th>Estado de pago</th>
                      <th>Motivo de no pago</th>
                      <th>Proximo pago</th>
                      <th>Fecha de vencimiento</th>
                      <th>Descuento actual</th>
                      <th>Vencimiento del descuento:</th>
                      <th>Estado del cliente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styleCels}>Enero</td>
                      <td>$10500</td>
                      <td>{users.credit_card} </td>
                      <td>{users.type_of_pay}</td>
                      <td>{users.card_number ? `**** ${String(users.card_number).substr(-4)}` : 'N/A'}</td>
                      {users ?
                        (<>{users.isPay === "Al dia" ? <td className='bg-green-600'>{users.isPay}</td> : null}
                          {users.isPay === "Atrasado" ? <td className='bg-slate-600'>{users.isPay}</td> : null}
                          {users.isPay === "Vencido" ? <td className='bg-red-600'>{users.isPay}</td> : null}</>)
                        :
                        (
                          <td> </td>
                        )
                      }
                      {users ?
                        (<>{users.isPay === "Al dia" ? <td ></td> : null}
                          {users.isPay === "Atrasado" ? <td >Rechazo de pago</td> : null}
                          {users.isPay === "Vencido" ? <td>Rechazo de pago</td> : null}</>)
                        :
                        (
                          <td> </td>
                        )
                      }
                      <td>{new Date(new Date(users.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</td>
                      <td>{new Date(new Date(users.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</td>
                      <td>{users.Plan_activo}</td>
                      <td>{users.Vigencia_actual}</td>
                      {users ?
                        (<>{users.active_noActive === "De alta" ? <td className='bg-green-600'>{users.active_noActive}</td> : null}
                          {users.active_noActive === "De baja" ? <td className='bg-red-600'>{users.active_noActive}</td> : null}
                        </>
                        )
                        :
                        (
                          <></>
                        )
                      }
                    </tr>
                    <tr>
                      <td className={styleCels}>Febrero</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Marzo</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Abril</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Mayo</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Junio</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Julio</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Agosto</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Septiembre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Octubre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Noviembre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styleCels}>Diciembre</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>)
            :
            null
      }
    </div >
  )
}

export default Pays