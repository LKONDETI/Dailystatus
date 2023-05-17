import React,{useState} from "react";
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import {AiOutlineUser, AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {Button, Container} from "reactstrap";

import './TakeQuiz.css';


function TakeQuiz(){

  const leftButton = {
    backgroundColor:'#0c1524', 
    border :'none',
    fontSize :'16px',
    color :'white',
    height :'50px', 
    width :'180px',
    textAlign :'left'
  };

  const [show, setshow] =React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

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
        <button style={leftButton}> <a href="http://localhost:3000/dashboard" ><AiOutlineDesktop/>Dashboard</a></button>
        <button style={leftButton}><a href="http://localhost:3000/surf"><AiOutlineMonitor/> Surf-e-books</a> </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}><AiFillHourglass/> Take Quiz </button>
      </div>

        <div class="table-contanier">
        <h1 style={{fontSize:'18px',textAlign:'center'}}>select from your Subcription</h1>
        <div>
        <table style={{ marginTop:'10px', width: '900px', height: '200px', marginLeft:'30px'}}>
        <tr style={{backgroundColor:'#0c1524', color:'white'}}>
          <th>e-Book Id</th>
          <th>e-Book Name</th>
          <th>Subcription Date</th>
          <th>Subcription Id</th>
          <th></th>
        </tr>
       <tr onClick={()=>setshow(!show)} style={{backgroundColor:'lightgrey'}}>
              <td>1221</td>
              <td>Harry Potter & The Half Blood Prince </td>
              <td>29 Mar 2020</td>
              <td>1022242</td>
              <AiFillHourglass/>
        </tr>

        <tr onClick={()=>setOpen(!open)}>
              <td>1226</td>
              <td>Interstella</td>
              <td>25 Feb 2020</td>
              <td>1011231</td>
              <AiFillHourglass/>
        </tr>

        <tr onClick={()=>setVisible(!visible)} style={{backgroundColor:'lightgrey'}}>
              <td>1889</td>
              <td>Corporate Chanakya</td>
              <td>12 Jan 2020</td>
              <td>1011223</td>
              <AiFillHourglass/>
        </tr>       
      </table>
      </div>
     
      {show&&(
        <div class="quizContainer">
        <h1 style={{textAlign:'center', fontSize:'18px'}}>Harry Potter & The Half Blood Prince Quiz</h1>
        <div style={{backgroundColor:'#0c1524', marginLeft:'20px', marginTop:'30px', marginBottom:'10px', color:'white', width:'165vh'}}>
          <p>Question: 2 / 20 <p style={{textAlign:'right'}}> Score:10</p></p>
          <p> 2. Who actually was the half blood prince?</p>
          <button style={{marginLeft:'30px'}}>A. Albus Dumbledore</button>
          <button style={{marginLeft:'30px'}}>B. Severus Snape</button>
          <button style={{marginLeft:'30px'}}>C. Bellatrix Lestrange</button>
          <button style={{marginLeft:'30px'}}>D. Tom Riddle</button>
          
        </div>
        </div>
      )}
      {open&&(
        <div class="card-container1">
        <h1 style={{textAlign:'center', fontSize:'18px'}}>Interstella</h1>
        <div class="quiz1">

          <p>Question: 1 / 20 <p style={{textAlign:'right'}}> Score:10</p></p>
          <p> 1. Who actually was the half blood prince?</p>
          <button>A. Albus Dumbledore</button>
          <button>B. Severus Snape</button> 
          <button>C. Bellatrix Lestrange</button> 
          <button>D. Tom Riddle </button>

        </div>
        </div>
      )}
      {visible&&(
        <p>quiz3</p>
      )}
      </div>
          
      </div>

  )
}

export default TakeQuiz;