import { Table } from 'react-bootstrap'; 
import { useSelector } from 'react-redux';

function Cart(){

let state = useSelector((state) => {return state});

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
        <tr>
          <td>{state.cart[0].id+1}</td>
          <td>{state.cart[0].name}</td>
          <td>{state.cart[0].count}</td>
          <td>@jeeanny</td>
        </tr>
        <tr>
          <td>{state.cart[1].id+1}</td>
          <td>{state.cart[1].name}</td>
          <td>{state.cart[1].count}</td>
          <td>@jeeanny</td>
        </tr>
      </tbody>
    </Table>
    )
}

export default Cart;