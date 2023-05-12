import React from "react";
//import HP1 from "./HP1.png";
import book from "./book.png";
import {AiOutlineUser, AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
//import {Card, CardBody, CardLink, CardText, CardHeader, CardDeck} from "reactstrap";

import './Subcribehp1.css';

function Subcribehp1(){
    return(
        <div class="wrapper">
            <div class="box">
              <div class="one">
              <img src={book} style={{width:'40px', height:'40px', borderRadius:'50%',backgroundColor:'white',float: 'left'}}/>
              <p style={{color:'white',align:'top', fontSize:'30px'}}>E-Library</p>
              <p style={{color:'white'}}>powered by Capgemini</p></div>
              <div class="three"> <a href="http://localhost:3000/logout" ><AiOutlineUser/> </a></div>
              <div class="two"><IoMdNotificationsOutline/> </div>
          </div>
    
          <div class="right-container">
            <button style={{backgroundColor:'#0c1524', border:'none',fontSize:'16px',color:'white',height:'50px'}}> <AiOutlineDesktop/> Dashboard </button>
            <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px'}}><AiOutlineMonitor/> Surf-e-books </button>
            <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px'}}><AiFillHourglass/> Take Quiz </button>
          </div>
</div>
    )    
}

export default Subcribehp1;