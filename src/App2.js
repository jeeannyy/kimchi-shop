/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';

function App() {
  let [shoes, setShoes] = useState(data);

  function Info(){
    return(
           <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </div>
    )
  }

  return (
    <div className="App">
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#kimchi">Kimchi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    <div className='main-bg'></div>

    <div className='container'>
      <div className='row'>
      {
        shoes.map((shoe, id) => {
          return(
            <ul>
              <li key={id}>
              <div className='col-md-4'>
                <img className='colImg' src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} />
                <h4>{shoes[id].title}</h4>
                <p>{shoes[id].content}</p>
              </div>
              </li>
            </ul>
          )
        })
      }
        </div>
      </div>


    </div>
  );
}

export default App;
