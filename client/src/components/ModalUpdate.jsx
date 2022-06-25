import React from 'react'
import {Modal, Button} from 'react-bootstrap';
import '../App.scss';
import { useState } from 'react';
import {GrUpdate} from 'react-icons/gr';
import FormUpdate from './FormUpdate';
import swal from 'sweetalert';

export default function ModalUpdate({data}) {
    const [state, setState]= useState(false)
    
    function handleOnClick(e){
        if(e.target.name==='update'){
            swal({text:'The financial movement has been successfully updated', 
        icon:'success'})
        }
        setState(!state)
    }
  return (
    <div>
        <Button onClick={(e)=>handleOnClick(e)} className='btn bg-warning button'><GrUpdate /></Button>
        <Modal show={state}>
            <Modal.Header>
                <h1>Update</h1>
            </Modal.Header>
            <Modal.Body>
                <FormUpdate onClick={handleOnClick} data={data} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e)=>handleOnClick(e)}>cancel</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}
