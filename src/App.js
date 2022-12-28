/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Detail from './Detail';
import Sort from './Sort';
import MoreShoes from './MoreShoes';

function Card(props){
  return(
         <div className='col-md-4'>
          <img src={`https://codingapple1.github.io/shop/shoes${props.id}.jpg`}/>
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
            <Link className="navLink" to={"/"}>Home</Link>
            <Link className="navLink" to={`/detail`}>Detail</Link>
          </Nav>
        </Container>
      </Navbar>
    

      <Routes>
        <Route path="/" element={<>

          <div className='main-bg'></div>
          <Sort shoes={shoes} setShoes={setShoes}/>
          <div className='container'>
            <div className='row'>
          { shoes.map((shoe, index) => {
              return <Card shoes={shoes[index]} key={index} i ={index} id={shoes[index].id+1}/>
              })}
              </div>
          </div>
          <button onClick={() => {
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result) => {result.data})
            // .then(<MoreShoes shoes={shoes} setShoes={setShoes}/>)
            .then()
            .catch(() => {
              console.log('error')
            })
          }}>more</button>
        </>
        } />
        
        <Route path="/detail/:itemId" element={<Detail shoes={shoes} setShoes={setShoes}/>} />
      </Routes>
    
    </div>
  );
}

export default App;
