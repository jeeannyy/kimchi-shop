import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2},
        { id: 1, name: 'Grey Yordan', count: 1}
    ],
    reducers : {
        increaseCount(state, id){
            return state.map(item => item[id].count+1); 
        },
        decreaseCount(state, id){
            return state.map(item => item[id].count-1); 
        }
    }
})

export let { increaseCount, decreaseCount } = cart.actions;

export default cart;