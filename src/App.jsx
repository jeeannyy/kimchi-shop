/* eslint-disable */

import "./App.css";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import Sort from "./Sort";

function Card(props) {
  return (
    <div className="col-md-4 p-0 w-100" style={{ marginBottom: "40px" }}>
      <img
        src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${props.id}.png?raw=true`}
        className="main-card"
        alt="different kimchi images"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

function App() {
  const [shoes, setShoes] = useState(data);
  const [moreClick, setMoreClick] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
    localStorage.setItem("cartItem", JSON.stringify([]));
  }, []);

  useEffect(() => {
    moreClick > 4 ? alert("No more items") : null;
  }, [moreClick]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/kimchi-shop">Kimchi</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/kimchi-shop"} class="p-2 navLink">
              Home
            </Link>
            <Link to={`/detail/0`} class="p-2 navLink">
              Detail
            </Link>
            <Link to={`/cart`} class="p-2 navLink">
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
                          shoes={shoes[index]}
                          key={index}
                          id={shoes[index].id}
                          className="col-sm-4"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="d-grid col-6 mx-auto">
                <Button
                  variant="success"
                  size="lg"
                  className="moreBtn"
                  onClick={() => {
                    setMoreClick(moreClick + 1);
                    setLoading(true);
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
                </Button>
              </div>
            </>
          }
        />
        <Route
          path="/detail/:itemId"
          element={<Detail shoes={shoes} setShoes={setShoes} />}
        />
        <Route
          path="/cart"
          element={<Cart shoes={shoes} setShoes={setShoes} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
