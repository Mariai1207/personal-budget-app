import React from 'react';
import swal from 'sweetalert';
import {MdDelete}  from 'react-icons/md';
import {deleteFinancialMovement} from '../store/slices/financialMovement'
import { useDispatch } from 'react-redux';

export default function Alert({id}) {
    const dispatch= useDispatch();
    function handleOnClick(){
        swal({
            text:'Do you want to delete this financial movement?',
            icon: 'warning',
            buttons: ['Cancel', 'Yes, delete it!']
        }).then(response=>{
            if(response){
                dispatch(deleteFinancialMovement(id))
                swal({text:'The financial movement has been successfully deleted', 
                icon:'success'})
            }
        })
    }
  return (
    <button onClick={()=>handleOnClick()} className='btn bg-danger button'><MdDelete /></button>
  )
}
