import {configureStore} from '@reduxjs/toolkit';
import financialMovement from './slices/financialMovement';
import category from './slices/category'


export default configureStore({
    reducer:{
        financialMovement,
        category
    }
});
