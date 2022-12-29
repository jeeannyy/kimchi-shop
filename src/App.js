/* eslint-disable */

import './App.css';
import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Detail from './Detail';
import Sort from './Sort';

function Card(props){
  return(
         <div className='col-md-4 cardImg'>
          <img src={`https://codingapple1.github.io/shop/shoes${props.id}.jpg`}/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.content}</p>
        </div>
  )
}


function App() {
  const [shoes, setShoes] = useState(data);
  const [moreClick, setMoreClick] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    moreClick > 4 ? alert('No more items') : null;
  },[moreClick])

  {
    loading === true ? <div>Loading...</div> : null
  }

  return (
    <div className="App">
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#kimchi">Kimchi</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navLink" to={"/"}>Home</Link>
            <Link className="navLink" to={`/detail/0`}>Detail</Link>
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
              return <Card shoes={shoes[index]} key={index} id={shoes[index].id+1}/>
              })}
              </div>
          </div>
          <button onClick={() => {
            setMoreClick(moreClick + 1);
            axios.get(`https://codingapple1.github.io/shop/data${moreClick}.json`)
            .then((result) => {
              let copy = [...shoes, ...result.data];
              // copy.concat(result.data);
              setShoes(copy);
              setLoading(false);
              })     
            .catch(() => {
              console.log('error');
              setLoading(false);
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
