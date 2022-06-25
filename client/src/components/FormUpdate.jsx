import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {updateFinancialMovement} from '../store/slices/financialMovement';

export default function FormUpdate({onClick, data}) {
    const dispatch= useDispatch()
    const categories= useSelector(state=>state.category.categoriesList)
    const [state, setState]= useState({id:data.id})
    const [error, setError]= useState({})

    function validateInput(e){
        handleChangeInput(e)
        switch (e.target.name){
            case "concept" :           
                /\d/.test(e.target.value)? 
                setError({...error, [e.target.name]: 'the name can´t contains any number'}):
                setError({...error,[e.target.name]:''})
                return
            case "amount" :
                /^[0-9]*$/.test(e.target.value)?
                setError({...error,[e.target.name]:''}):
                setError({...error, [e.target.name]: 'this field can´t contains characters'})
                return

            default:  return e.target.name
        }

    }
    function handleChangeInput (e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    function handleOnSubmit(e){
        e.preventDefault() 
        if(state.concept || state.amount || state.date || state.category){
            dispatch(updateFinancialMovement(state))
        }else{
            console.log(state)
        }
        onClick(e)
    }
  return (
    <form name='update' onSubmit={(e)=>{handleOnSubmit(e)}} id='form' className='needs-validation container' noValidate>
        <div className="row">
            <div className="mb-3 col">
            <label htmlFor="concept" className="form-label">Concept</label>
                <input 
                type="text" 
                className='form-control' 
                name='concept'
                placeholder={data.concept}
                onChange={(e)=>validateInput(e)} />
            </div>
             <div className="col">
             <label htmlFor="category" className="form-label">Category</label>
                <select className='form-select' name='category' onChange={(e)=>validateInput(e)}>
                    <option value="default">{data.category}</option>
                    {categories.map((category)=><option value={category.name} name={category.name}>{category.name}</option>)}
                </select>
            </div>

        </div>
        {error.concept? <p className='errorText'>{error.concept}</p>: null}
        
        <div className="row">
            <div className="col">
                <label htmlFor="amount" className="form-label">Amount</label>
                    <input 
                    type="number" 
                    className='form-control'
                    name='amount'
                    placeholder={data.amount} 
                    onChange={(e)=>validateInput(e)} /> 
            </div>

            <div className="col">
                <label htmlFor="type" className="form-label">Type</label>
                <select className='form-select' name='type' disabled>
                    <option value="default">{data.type}</option>   
                    <option value="entry">entry</option>
                    <option value="exit">exit</option>
                </select>
            </div>
        </div>
        {error.amount? <p className='errorText'>{error.amount}</p>: null}

        <div className="row">
            <div className="col">
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                        <input 
                        type="date" 
                        className="form-control"
                        name='date'
                        placeholder={data.date}
                        onChange={(e)=>validateInput(e)}/>
                </div>
            </div>
           
            <div className="col flex">
                <button  className='btn bnt-primary' type='submit' >Update</button> 
            </div>
        </div>
      
    </form>
  )
}
