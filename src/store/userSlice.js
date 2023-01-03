import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'Pa Kimchi', count: 2},
        { id: 1, name: 'Yeolmu-kimchi', count: 1}
    ],
    reducers : {
        increaseCount(state, action){
            state.find(i => {return i.id === action.payload})
            state[action.payload].count += 1;
        },
        decreaseCount(state, action){
            state.find(i => {return i.id === action.payload})
            state[action.payload].count < 1 ? alert("We don't allow negative numbers bro") : state[action.payload].count -= 1;
        },
        addItem(state, action){
            state.map(i => i.id === action.payload.id ? i[action.payload].count += 1 :
            state.push(action.payload))
        },
        deleteItem(state, action){
            state.splice(action.payload, 1);
        }
    }
})

export let { increaseCount, decreaseCount, addItem, deleteItem } = cart.actions;

export default cart;