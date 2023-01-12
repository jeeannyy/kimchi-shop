import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: [
        // { id: 0, name: 'Pa Kimchi', count: 2, price: 60}
    ],
    reducers : {
        increaseCount(state, action){
            state.find(i => {return i.id === action.payload});
            state[action.payload].count++;
        },
        decreaseCount(state, action){
            state.find(i => {return i.id === action.payload});
            state[action.payload].count < 1 ? alert("We don't allow negative numbers") : state[action.payload].count--;
        },
        addItem(state, action){
            let number = state.findIndex(i => {return i.id === action.payload.id});
            console.log(action.payload, "<<< action.payload");
            console.log(action.payload.id, "<<< action.payload.id")
            number !== -1 ? state[action.payload.id].count++ : state.push(action.payload);
        },
        deleteItem(state, action){
            state.splice(action.payload, 1);
        },
        addPrice(state, action){
            state.find(i => {return i.id === action.payload});
            state[action.payload].price += 30;
        },
        deductPrice(state, action){
            state.find(i => {return i.id === action.payload});
            state[action.payload].price > 1 ?  state[action.payload].price -= 30 : state[action.payload].price = 0;
        }
        // changeTotal(state, action){
        //     state.find()
        // }
    }
})

export let { increaseCount, decreaseCount, addItem, deleteItem, addPrice, deductPrice } = cart.actions;

export default cart;