import { configureStore, createSlice } from '@reduxjs/toolkit';
import cart from './store/userSlice'

const user = createSlice({
    name: 'user',
    initialState: 'Kim'
})


export default configureStore({
  reducer: { 
    user: user.reducer,
    cart: cart.reducer
  }
}) 
