import React from 'react'
import '../App.scss'
import ModalUpdate from './ModalUpdate';
import Alert from './Alert';


export default function DataList({response}) {
  const data= response.slice(-10).reverse()
    
  return (
    <tbody>
        {data.map((dato)=>{
            return(
            <tr>
                <td>{dato.concept}</td>
                <td>{dato.category}</td>
                <td>$ {dato.amount}</td>
                <td>{dato.type}</td>
                <td>{dato.date}</td>
                <div className='flex'>
                  <ModalUpdate data={dato} />
                  <Alert id={dato.id}/>
                </div>
                
            </tr>
            )
        })
        }
    </tbody>
  )
}
