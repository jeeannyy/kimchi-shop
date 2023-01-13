import { Table } from 'react-bootstrap'; 
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, decreaseCount, deleteItem, addPrice, deductPrice } from '.././store/userSlice';
import { useEffect, useState } from 'react'


function Cart(){

let state = useSelector((state) => state);
let dispatch = useDispatch()
const [total, setTotal] = useState(0);

   useEffect(() => {
    let sum = 0;
    for(let i = 0; i < state.cart.length; i++){
    sum += state.cart[i].price;
    }
    setTotal(sum);
   }, [state]);


    return(
      <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th className='product-name'>Product name</th>
          <th>Qty</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
            state.cart.map((item, id) => {
                return(
                    <tr className='cart-table'>
                    <td>{state.cart[id].id}</td>
                    <td><img src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${state.cart[id].id}.png?raw=true`} className="cartImg"/>{state.cart[id].name}</td>
                    <td>{state.cart[id].count}</td>
                    <td>£{state.cart[id].price}</td>
                    <td><button className="countBtn"  
                    onClick={() => {
                        dispatch(increaseCount(state.cart[id].id))
                        dispatch(addPrice(state.cart[id].id))
                    }}>+</button>
                    <button onClick={() => {
                        dispatch(decreaseCount(state.cart[id].id))
                        dispatch(deductPrice(state.cart[id].id))
                    }}>-</button>
                    </td>
                    <td><button className='cartDeleteBtn' style={{cursor: 'pointer'}} onClick={() => {
                        dispatch(deleteItem(state.cart[id].id))
                    }}>❌</button></td>
                    </tr>
                )
                
            })
        }

      </tbody>

    </Table>
            <div className='total'>
            <span>{`Sub-total: £${total} `}</span>
            <button>Order</button>
            </div>
          
</>
    )
}

export default Cart;