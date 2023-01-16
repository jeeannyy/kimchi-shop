/* eslint-disable */

import "./App.css";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import Sort from "./Sort";

function Card(props) {
  return (
    <div className="col-md-4 cardImg">
      <img
        src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${props.id}.png?raw=true`}
        className="cardImg"
      />

      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

function App() {
  const [shoes, setShoes] = useState(data);
  const [moreClick, setMoreClick] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);
  // 이건 처음 App 접속할때마다 돌아가는거임

  useEffect(() => {
    moreClick > 4 ? alert("No more items") : null;
  }, [moreClick]);

  {
    loading === true ? <div>Loading...</div> : null;
  }

  return (
    <div className="App">
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/kimchi-shop">Kimchi</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navLink" to={"/kimchi-shop"}>
              Home
            </Link>
            <Link className="navLink" to={`/detail/0`}>
              Detail
            </Link>
            <Link className="navLink" to={`/cart`}>
              Cart
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/kimchi-shop"
          element={
            <>
              <div className="main-container">
                <div className="main-bg"></div>
                <div className="bg-text">
                  <p>Korea's Kimchi,</p>
                  <p>Absolutely Korgeous</p>
                </div>
              </div>

              <div className="container">
                <Sort shoes={shoes} setShoes={setShoes} />

                <div className="row">
                  {shoes.map((shoe, index) => {
                    return (
                      <Link
                        className="imgLink"
                        to={`/detail/${shoes[index].id}`}
                      >
                        <Card
                          className="cardImg"
                          shoes={shoes[index]}
                          key={index}
                          id={shoes[index].id}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <button
                className="moreBtn"
                onClick={() => {
                  setMoreClick(moreClick + 1);
                  axios
                    .get(
                      `https://raw.githubusercontent.com/jeeannyy/kimchi-shop/main/src/data${moreClick}.json`
                    )
                    .then((result) => {
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                      setLoading(false);
                    })
                    .catch(() => {
                      console.log("error");
                      setLoading(false);
                    });
                }}
              >
                more
              </button>
            </>
          }
        />
        <Route
          path="/detail/:itemId"
          element={<Detail shoes={shoes} setShoes={setShoes} />}
        />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
