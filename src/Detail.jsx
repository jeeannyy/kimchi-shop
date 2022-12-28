/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


function Detail(props){
    let {itemId} = useParams();
    let [adBar, setAdBar] = useState(true);

    let [amount, setAmount] = useState("");

    // let findItem = props.shoes.find(function(shoe){return shoe.id == itemId});
    // let findItem = props.shoes.find((shoe) => {shoe.id === itemId});
    // console.log(findItem, "ffffff");
    // Q) findItem 계속 undefined 나옴

    

    useEffect(()=>{
        setTimeout(()=>{ setAdBar(false) }, 2000)
      }, [])

      useEffect(() => {
        isNaN (amount) === 'number' ? alert('I told you! Only numbers allowed!') : null
        }, [amount])

    return(
        <>
            {
                adBar === true ? <div className='adBar'>2초 안에 사면 할인</div> : null
            }
            <div className="container">

                    <div className="row">
                      <div className="col-md-6">
                        {/* <img src={`https://codingapple1.github.io/shop/shoes${props.shoes[id].id+1}.jpg`} width="100%" /> */}
                        {/* <img src={`https://codingapple1.github.io/shop/shoes${findItem.id}.jpg`} width="100%" /> */}
                        {/* <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" /> */}
                        <img src={`https://codingapple1.github.io/shop/shoes${props.shoes[itemId].id+1}.jpg`} width="100%" />
                      </div>
                   
                      <input onChange={(e) => {setAmount(e.target.value)}}/>
                      
                      <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{props.shoes[itemId].title}</h4>
                        <p>{props.shoes[itemId].content}</p>
                        <p>£{props.shoes[itemId].price}</p>
                        <p><input type="number" /></p>

                        <button className="btn btn-danger">Order</button> 
                      </div>
                    </div>
            </div> 
            </>
        )
        }


export default Detail;
