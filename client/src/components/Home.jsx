import React, { useEffect}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import Balance from './Balance';
import DataTable from './DataTable';
import Form from './Form';
import '../App.scss';
import { getFinancialMovement } from '../store/slices/financialMovement';
import { getAllCategories } from '../store/slices/category';

export default function Home() {
  const dispatch= useDispatch()
  const financialMovement= useSelector(state=>state.financialMovement)
  const categories= useSelector(state=>state.category)

  useEffect(()=>{
  dispatch(getFinancialMovement()) 
  dispatch(getAllCategories())
}, [dispatch])

  return (
    <div className="container home">
        <Form categories={categories.categoriesList}  />
        <Balance state={financialMovement.balance}/>
        <DataTable state={financialMovement.financialMovementlist}/>
    </div>
  )
}
