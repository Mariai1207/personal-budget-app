import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const categorySlice = createSlice({
    name:'category',
    initialState:{
        categoriesList:[]
    },
    reducers:{
        setCategoriesList: (state,action)=>{
            state.categoriesList=action.payload
        },
        setCategoriesListCreated:(state,action)=>{
            state.categoriesList= [...state.categoriesList, action.payload]
        }
    }
})
export const {setCategoriesList, setCategoriesListCreated}= categorySlice.actions;
export default categorySlice.reducer;

export const getAllCategories =()=> (dispatch)=>{
    axios.get('http://localhost:3001/category')
    .then((response)=>{
        dispatch(setCategoriesList(response.data))
    })
    .catch((error)=>console.log(error));
}
export const createCategory= (body)=>(dispatch)=>{
    axios.post('http://localhost:3001/category', body)
    
    .then((response)=>{
        console.log(response.data)
        dispatch(setCategoriesListCreated(response.data))
    })
}