/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Nav, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addItemPrice } from ".././store/userSlice";

function Detail(props) {
  let { itemId } = useParams();
  let [adBar, setAdBar] = useState(true);
  let [amount, setAmount] = useState("");
  const [tab, setTab] = useState(0);
  let dispatch = useDispatch();

  let findItem = props.shoes.find((shoe) => {
    return shoe.id == itemId;
  });
  const [recentView, setRecentView] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  function cartStorage() {
    let newArray = localStorage.getItem("cartItem");
    newArray = JSON.parse(newArray);
    const checkId = newArray.findIndex((i) => {
      return i.id === findItem.id;
    });

    if (checkId !== -1) {
      null;
    } else {
      newArray.push(findItem);
    }

    setCartItems(newArray);
    localStorage.setItem("cartItem", JSON.stringify(newArray));
  }

  // 까지 test 코드

  useEffect(() => {
    let newArr = localStorage.getItem("watched");
    newArr = JSON.parse(newArr);
    const checkIndex = newArr.findIndex((i) => {
      return i.id === findItem.id;
    });

    if (checkIndex !== -1) {
      null;
    } else {
      newArr.push(findItem);
    }
    setRecentView(newArr);

    localStorage.setItem("watched", JSON.stringify(newArr));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAdBar(false);
    }, 3000);
  }, []);

  useEffect(() => {
    isNaN(amount) === "number"
      ? alert("I told you! Only numbers allowed!")
      : null;
  }, [amount]);

  return (
    <>
      {adBar === true ? (
        <Alert key={"info"} variant={"info"} className="ad-bar">
          If you buy in 3 seconds, you can get discount!
        </Alert>
      ) : null}
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${findItem.id}.png?raw=true`}
              className="detail-cardImg"
              alt="selected kimchi image from home tab"
            />
          </div>

          <div className="col detail-info">
            <h4 style={{ fontSize: "30px" }} className="pt-5">
              {findItem.title}
            </h4>
            <p style={{ fontSize: "16px" }}>{findItem.content}</p>
            <p style={{ fontSize: "18px" }}>£{findItem.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                cartStorage();
                dispatch(
                  addItem({
                    id: findItem.id,
                    name: findItem.title,
                    count: 1,
                    price: 0,
                  })
                );
                dispatch(addItemPrice(findItem.id));
              }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col recently-container">
            <span>RECENTLY VIEWED</span>

            {recentView.map((recent) => {
              return (
                <Link to={`/detail/${recent.id}`}>
                  <li>
                    <img
                      src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${recent.id}.png?raw=true`}
                      className="recentView-image"
                      alt="recently viewed kimchi image"
                    />
                  </li>
                </Link>
              );
            })}
          </div>

          <Nav variant="tabs" defaultActiveKey="link0" className="detailTab">
            <Nav.Item>
              <Nav.Link
                eventKey="link0"
                onClick={() => {
                  setTab(0);
                }}
              >
                How to Store
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link1"
                onClick={() => {
                  setTab(1);
                }}
              >
                Health Benefit
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link2"
                onClick={() => {
                  setTab(2);
                }}
              >
                Score
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link3"
                onClick={() => {
                  setTab(3);
                }}
              >
                Place of production
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="tabContent">
            {tab === 0 ? (
              <div>
                In the refrigerator, it stays fresh much longer(about 3~6
                months) and continues to ferment, which may lead to a sourer
                taste. Be sure to refrigerate your kimchi at or below 39°F
                (4°C), as warmer temperatures may accelerate spoilage.
              </div>
            ) : tab === 1 ? (
              <div>
                Vitamin A for Heart Health, Vitamin C for Immune Health, Vitamin
                K, Folate, Beta-carotene, Choline, Potassium, Calcium,
                Gut-Friendly Bacteria
              </div>
            ) : tab === 2 ? (
              <div>⭐️⭐️⭐️⭐️⭐️ (10/10)</div>
            ) : tab === 3 ? (
              <div>Made in South Korea</div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
