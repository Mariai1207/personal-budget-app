import React, {useState} from 'react'
import '../App.scss';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import {createCategory} from '../store/slices/category'

export default function FormCategory() {
    const [state, setState]= useState({})
    const dispatch =useDispatch();
    function handleOnChange (e){
        setState({
            [e.target.name]: e.target.value
        })
    }
    function handleOnSubmit(e){
        e.preventDefault()
        dispatch(createCategory(state))
        setState({name:''})
        swal({
            text:'category created successfully',
            icon:'success',
            timer: 3000,
            button: false
        })
    }
  return (
    <div className='formCategory'>
        <h3>Create new category</h3>
        <form onSubmit={(e)=>{handleOnSubmit(e)}} id='form' className='needs-validation container' noValidate>
            <div className="row">
                <div className="mb-3 col">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                    type="text" 
                    className='form-control' 
                    value= {state.name}
                    name='name'
                    onChange={(e)=>handleOnChange(e)}  />
                </div>
                <button className=' row btn bnt-primary' type='submit'>Add</button> 
            
            </div>
      
        </form>
    </div>
    
  )
}
