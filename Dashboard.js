import React from "react";
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import {AiOutlineUser, AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {Button, Card, CardBody, CardDeck, CardText} from "reactstrap";
//import { Collapse } from "react-collapse";
//import { useState } from "react";

import './Hp1Preview.css';
import { CardImg } from "reactstrap";

function Dashboard(){



  const leftButton = {
    backgroundColor:'#0c1524', 
    border :'none',
    fontSize :'16px',
    color :'white',
    height :'50px', 
    width :'180px',
    textAlign :'left'
  };

  

  return(
    <div >
        <div class="box">
          <div class="one">
          <img src={book} style={{width:'40px', height:'40px', borderRadius:'50%',backgroundColor:'white',float: 'left'}}/>
          <p style={{color:'white',align:'top', fontSize:'25px'}}>E-Library</p>
          <p style={{color:'white',marginLeft:'30px'}}>powered by <img src={Picture1}/></p></div>
          <div class="three"> <a href="http://localhost:3000/logout" ><AiOutlineUser/> </a></div>
          <div class="two"><IoMdNotificationsOutline/> </div>
      </div>
      <div class="buttonContainer" style={{paddingTop:'30px',width:'180px'}}>
        <button style={leftButton}><a href="http://localhost:3000/dashboard" ><AiOutlineDesktop/>Dashboard</a> </button>
        <button style={leftButton}><a href="http://localhost:3000/surf"><AiOutlineMonitor/> Surf-e-books</a> </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}><AiFillHourglass/> Take Quiz </button>
      </div>

        <div class="card-styling">

    </div>
    </div>

  )
}

export default Dashboard;