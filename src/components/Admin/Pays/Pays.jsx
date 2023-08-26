import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavAdmin from '../NavAdmin/NavAdmin';

import '../../../index.css'
import classnames from 'classnames'
import s from '../../Admin/Pays/Pays.module.css'


export const Pays = ({ estilos }) => {
  const { id } = useParams();
  const [clientDataPays, setClientDataPays] = useState(null);


  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setClientDataPays(response.data);
        console.log(response.data)

      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  const variants = {
    table: 'bg-[#c1f1e2] text-[#000000] font-bold p-4 w-full ',
    cels: 'bg-[#c1f1e2] text-[#000000] font-bold',
    row: 'bg-[#2cad84] text-[#ffffff] font-bold p-4  w-fll '
  }

  const styleTable = classnames(variants.table, estilos)
  const styleCels = classnames(variants.cels, estilos)
  const styleRow = classnames(variants.row, estilos)

  return (
    <div>
      <NavAdmin />
      {
        clientDataPays ?
          (<div>
            <h2 className='font-bold text-center text-xl p-6'>
              Historial de pagos de {clientDataPays.Nombre}
            </h2>

            <div className='flex justify-center items-center text-center  border-2  border-[#2cad84]'>
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
                      <td>Febrero</td>
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
                      <td>Marzo</td>
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
                      <td>Abril</td>
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
                      <td>Mayo</td>
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
                      <td>Junio</td>
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
                      <td>Julio</td>
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
                      <td>Agosto</td>
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
                      <td>Septiembre</td>
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
                      <td>Octubre</td>
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
                      <td>Noviembre</td>
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
                      <td>Diciembre</td>
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
          null
      }
    </div >
  )
}

export default Pays