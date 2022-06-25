import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import '../App.scss';
import {postFinancialMovement} from '../store/slices/financialMovement';
import swal from 'sweetalert';

export default function Form({categories}) {
    const dispatch= useDispatch()
    const [error, setError]= useState({})
    const [state, setState]= useState({})

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
            default: return e.target.name
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
        if(state.concept&&!error.concept&&state.amount&&!error.amount&&state.type&&state.date){
            console.log(state)
            dispatch(postFinancialMovement(state))
            setState({concept:'', category:'',amount:'',type:'', date:''})
        }else{
            swal({text:'complete the form'})
        }
       
        
    }
  return (
    <form onSubmit={(e)=>{handleOnSubmit(e)}} id='form' className='needs-validation container' noValidate>
        <div className="row">
            <div className="mb-3 col">
                <label htmlFor="concept" className="form-label">Concept</label>
                <input 
                type="text" 
                className='form-control' 
                name='concept'
                value={state.concept}
                onChange={(e)=>validateInput(e)} />
            </div>

             <div className="col">
                <label htmlFor="category" className="form-label">Category</label>
                <select className='form-select' name='category' value={state.category} onChange={(e)=>validateInput(e)}>
                    <option value="default">...</option>
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
                value={state.amount}
                onChange={(e)=>validateInput(e)} /> 
            </div>

            <div className="col">
                <label htmlFor="type" className="form-label">Type</label>
                <select className='form-select' name='type' value={state.type}onChange={(e)=>validateInput(e)}>
                    <option value="default">...</option>   
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
                    value={state.date}
                    onChange={(e)=>validateInput(e)}/>
                </div>
            </div>
           
            <div className="col flex">
                <button className='btn bnt-primary' type='submit' >Add</button> 
            </div>
        </div>
        
      
    </form>
  )
}
