import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers : {
        increaseCount(state, action){
           let increase = state.findIndex(i => {return i.id === action.payload});
            state[increase].count++;
        },
        decreaseCount(state, action){
            let decrease = state.findIndex(i => {return i.id === action.payload});
            state[decrease].count < 1 ? alert("We don't allow negative numbers") : state[decrease].count--;
        },
        addItem(state, action){
            let addItem = state.findIndex(i => {return i.id === action.payload.id});
            addItem === -1 ? state.push(action.payload) : state[addItem].count++;
            // 가격도 같이 올라가야됨
        },
        // addItemPrice(state, action){
        //     let addItemPrice = state.findIndex(i => {return i.id === action.payload});
        //     console.log(addItemPrice,"<<< addItemPrice");
        //     state[addItemPrice].price += 30;
        // },


        deleteItem(state, action){
            let deleteItem = state.findIndex(i => {return i.id === action.payload});
            console.log(deleteItem, "<<<deleteItem");
            state.splice(deleteItem, 1);
        },
        addPrice(state, action){
            let addPrice = state.findIndex(i => {return i.id === action.payload});
            console.log(addPrice, "<<<addPrice");
            state[addPrice].price += 30;
        },
        deductPrice(state, action){
            let deductPrice = state.findIndex(i => {return i.id === action.payload});
            state[deductPrice].price > 1 ?  state[deductPrice].price -= 30 : state[deductPrice].price = 0;
        }
    }
})

export let { increaseCount, decreaseCount, addItem, deleteItem, addPrice, deductPrice, addItemPrice } = cart.actions;

export default cart;