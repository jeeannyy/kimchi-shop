import { Table } from 'react-bootstrap'; 
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, decreaseCount } from '.././store/userSlice';

function Cart(){

let state = useSelector((state) => state);
let dispatch = useDispatch()

    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
            state.cart.map((item, id) => {
                return(
                    <tr>
                    <td>{state.cart[id].id + 1}</td>
                    <td>{state.cart[id].name}</td>
                    <td>{state.cart[id].count}</td>
                    <td><button className="countBtn"  onClick={() => {
                        state.cart(item => item.id === id ? item.count + 1 : null);
                        dispatch(increaseCount())
                    }}>+</button>
                    <button onClick={() => {
                        dispatch(decreaseCount())
                    }}>-</button>
                    </td>
                    </tr>
                )
            })
        }
      </tbody>
    </Table>
    )
}

export default Cart;