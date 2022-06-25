import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const financialMovementSlice = createSlice({
    name:'financial Movement',
    initialState:{
        financialMovementlist:[],
        balance:0,
    },
    reducers:{
        setFinancialMovementList: (state,action)=>{
            state.financialMovementlist = action.payload.financialMovementlist
            state.balance=action.payload.balance
        },
        setFinancialMovementListNewItem: (state,action)=>{
            state.financialMovementlist=[...state.financialMovementlist, action.payload]
            state.balance = getBalance(state.financialMovementlist)
        },
        setFinancialMovementListUpdateItem: (state,action)=>{
            state.financialMovementlist = state.financialMovementlist
                            .map(element => {
                                if(element !== action.payload.id) return element
                                return action.payload})
            state.balance = getBalance(state.financialMovementlist)
        },
        setFinancialMovementListDeleteItem: (state, action)=>{
            state.financialMovementlist= state.financialMovementlist.filter(element=>
                element.id!==action.payload
            )
            state.balance= getBalance(state.financialMovementlist)
        }
    }
})
export const {setFinancialMovementList, setFinancialMovementListNewItem, setFinancialMovementListUpdateItem,
    setFinancialMovementListDeleteItem}= financialMovementSlice.actions;
export default financialMovementSlice.reducer;

const getBalance = (response)=>{
    let amount=0;
    const balance= response.reduce((partialSum, a) => {
        if(a.type === 'exit'){
            amount = a.amount *-1;
        }else{
            amount= a.amount *1;
        }
        partialSum += amount
        return partialSum
    }, 0)
    return balance;
}

export const getFinancialMovement =()=>(dispatch)=>{
    axios.get('http://localhost:3001/financialMovement')
    .then((response)=>{
        const state= {
            financialMovementlist:response.data,
            balance:getBalance(response.data)
        }
        dispatch(setFinancialMovementList(state))
    })
    .catch((error)=>console.log(error));
}
 export const postFinancialMovement= (body)=>(dispatch)=>{
    console.log('my body is' + JSON.stringify(body))
    axios.post('http://localhost:3001/financialMovement',body)
    .then((response)=>{
        dispatch(setFinancialMovementListNewItem(response.data))
    })
    .catch((error)=>console.log(error));

 }

export const updateFinancialMovement=(body)=>(dispatch)=>{
    console.log('entro')
    axios.patch('http://localhost:3001/financialMovement',body)
    .then((response)=>{
        dispatch(setFinancialMovementListUpdateItem(response.data))

    })
    .catch((error)=>console.log(error));
}

export const deleteFinancialMovement=(id)=>(dispatch)=>{
    console.log(id)
    axios.delete(`http://localhost:3001/financialMovement/${id}`)
    .then((response)=>{
        dispatch(setFinancialMovementListDeleteItem(id))
    })
}