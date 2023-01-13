/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
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

    useEffect(() => {
        let newArr = localStorage.getItem('watched'); 
        newArr = JSON.parse(newArr)
        const checkIndex = newArr.findIndex(i => {return i.id === findItem.id});

        console.log(checkIndex, "<<checkIndex");
        console.log(findItem, "<<findItem");

        
        if (checkIndex !== -1 ){
           null;
        } else{
          newArr.push(findItem);
        }
        setRecentView(newArr); 

        
        localStorage.setItem('watched', JSON.stringify(newArr));

       
      }, [])
      console.log(recentView, "<<<recentView")
      console.log(recentView[0], "<<<recentView[0]")

    useEffect(()=>{
        setTimeout(()=>{ setAdBar(false) }, 3000)
      }, [])

      useEffect(() => {
        isNaN (amount) === 'number' ? alert('I told you! Only numbers allowed!') : null
        }, [amount])


    return(
        <>
            {
                adBar === true ? <div className='adBar transition-start transition-end'>If you buy in 3 seconds, you can get discount</div> : null
            }
            <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${findItem.id}.png?raw=true`} className="detail-cardImg"/>

                         </div>

            <div className="col-md-6 mt-4">
                <h4 style={{fontSize: "30px"}} className="pt-5">{findItem.title}</h4>
                <p style={{fontSize: "16px"}}>{findItem.content}</p>
                <p style={{fontSize: "18px"}}>£{findItem.price}</p>
                <button className="btn btn-danger" onClick={() => {
                    dispatch(addItem( { id: findItem.id, name: findItem.title, count: 1, price: 0}))
                    dispatch(addItemPrice(findItem.id))
                    }}>Add to Cart</button> 
            </div>
            </div>
            <div className='recently-container'>
            <h5 style={{fontWeight: 400, fontFamily: "kanit", paddingLeft: 26, fontSize:16}}>RECENTLY VIEWED</h5>
                <ul>
                    {recentView.map(recent => {
                     return <Link to={`/detail/${recent.id}`}><li><img src={`https://github.com/jeeannyy/kimchi-shop/blob/main/public/img/kimchi${recent.id}.png?raw=true`} className="recentView-image"/></li></Link>  
                    })}
                </ul>
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
