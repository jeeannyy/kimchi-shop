/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '.././store/userSlice';




function Detail(props){
    
    let {itemId} = useParams();
    let [adBar, setAdBar] = useState(true);

    let [amount, setAmount] = useState("");
    const [tab, setTab] = useState(0);

    let findItem = props.shoes.find((shoe) => {return shoe.id == itemId});
    console.log(findItem, "fd");
    
    let state = useSelector((state) => state);
    let dispatch = useDispatch()

    console.log(state, "<<");

    useEffect(()=>{
        setTimeout(()=>{ setAdBar(false) }, 2000)
      }, [])

      useEffect(() => {
        isNaN (amount) === 'number' ? alert('I told you! Only numbers allowed!') : null
        }, [amount])

    return(
        <>
            {
                adBar === true ? <div className='adBar transition-start transition-end'>2초 안에 사면 할인</div> : null
            }
            <div className="container">

                    <div className="row">
                      <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${findItem.id+1}.jpg`} width="100%" />
                         </div>
                   

                      <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{findItem.title}</h4>
                        <p>{findItem.content}</p>
                        <p>£{findItem.price}</p>
                        <button className="btn btn-danger" onClick={() => {dispatch(addItem( { id: findItem.id, name: findItem.title, count: 1}))}}>Order</button> 
                      </div>
                    </div>
            </div> 

            <Nav variant="tabs" defaultActiveKey="link0" className='detailNav'>
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => {
                        setTab(0);
                    }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>버튼 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>버튼 2</Nav.Link>
                </Nav.Item>
            </Nav>
           
           <div className='detailContent'>
           {
            tab === 0 ? <div>내용0</div> :  
            tab === 1 ? <div>내용1</div> :
            tab === 2 ? <div>내용2</div> : null
            }
            </div>
         





            </>
        )
        }


export default Detail;
