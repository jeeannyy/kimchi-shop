/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Detail from './Detail';
import Sort from './Sort';

function Card(props){
  return(
         <div className='col-md-4'>
          <img src={`https://codingapple1.github.io/shop/shoes${props.id }.jpg`}/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.content}</p>
        </div>
  )
}


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#kimchi">Kimchi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

      <Routes>
        <Route path="/" element={<>

          <div className='main-bg'></div>
          <Sort shoes={shoes} setShoes={setShoes}/>
          <div className='container'>
            <div className='row'>
          {
            shoes.map((shoe, index) => {
              return(
                <Card shoes={shoes[index]} id={shoes[index].id+1}/>
              )})
          }
              </div>
          </div>
        </>}>Home</Route>
        
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
      </Routes>
    
    </div>
  );
}

export default App;
