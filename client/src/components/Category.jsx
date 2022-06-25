import React, { useEffect } from 'react';
import FormCategory from './FormCategory';
import CategoryTable from './CategoryTable';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../store/slices/category';


export default function Category() {
  const dispatch= useDispatch()
  const categories= useSelector(state=>state.category)
  useEffect(()=>{
    dispatch(getAllCategories()) 
  }, [dispatch])
  return (
    <div>
      <CategoryTable state={categories.categoriesList} />
      <FormCategory />
    </div>
  )
}
