/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Nav, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addItemPrice } from '.././store/userSlice';



function Detail(props){
    
    let {itemId} = useParams();
    let [adBar, setAdBar] = useState(true);

    let [amount, setAmount] = useState("");
    const [tab, setTab] = useState(0);
    let findItem = props.shoes.find((shoe) => {return shoe.id == itemId});    
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    const [recentView, setRecentView] = useState([]);

    // useEffect(() =>{
    //     let save = localStorage.setItem(findItem.id, findItem.title);
    //     save = JSON.stringify(save);
    //     save.push(findItem.title);
    //     localStorage.setItem('findItem.id', JSON.stringify(save));
    // },[])

    // console.log(localStorage, "storage")

    // console.log(recentView, "<<<");


    useEffect(()=>{
        setTimeout(()=>{ setAdBar(false) }, 3000)
      }, [])

      useEffect(() => {
        isNaN (amount) === 'number' ? alert('I told you! Only numbers allowed!') : null
        }, [amount])

        console.log(findItem, "<<< findItem");
        // console.log(findItem.id, "<<<finditem")


    return(
        <>
            {
                adBar === true ? <div className='adBar transition-start transition-end'>If you buy in 3 seconds, you can get discount</div> : null
            }
            <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${findItem.id}.png?raw=true`} className="cardImg"/>

                         </div>
{/*                    
                         <div className="recentItem">
                                    <Card>
                                        <Card.Header>최근 본 상품</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item >{recentView}</ListGroup.Item>

                                        </ListGroup>
                                    </Card>
        
            </div> */}
            <div className="col-md-6 mt-4">
                <h4 style={{fontSize: "30px"}} className="pt-5">{findItem.title}</h4>
                <p style={{fontSize: "16px"}}>{findItem.content}</p>
                <p style={{fontSize: "18px"}}>£{findItem.price}</p>
                <button className="btn btn-danger" onClick={() => {
                    dispatch(addItem( { id: findItem.id, name: findItem.title, count: 1, price: 30}))
                    // dispatch(addItemPrice(findItem.id))
                    }}>Add to Cart</button> 
            
            
            </div>
            </div>
            </div> 

            <Nav variant="tabs" defaultActiveKey="link0" className='detailNav'>
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => {
                        setTab(0);
                    }}>How to Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>Health Benefit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>Score</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link3" onClick={() => {setTab(3)}}>Place of production</Nav.Link>
                </Nav.Item>
            </Nav>
           
           <div className='detailContent'>
           {
            tab === 0 ? <div>In the refrigerator, it stays fresh much longer(about 3~6 months) and continues to ferment, which may lead to a sourer taste. Be sure to refrigerate your kimchi at or below 39°F (4°C), as warmer temperatures may accelerate spoilage.</div> :  
            tab === 1 ? <div>Vitamin A for Heart Health, Vitamin C for Immune Health, Vitamin K, Folate, Beta-carotene, Choline, Potassium, Calcium, Gut-Friendly Bacteria</div> :
            tab === 2 ? <div>⭐️⭐️⭐️⭐️⭐️ (10/10)</div> :
            tab === 3 ? <div>Made in South Korea</div> : null
            }
            </div>
         





            </>
        )
        }


export default Detail;
