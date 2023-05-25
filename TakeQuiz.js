import React,{useState} from "react";
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import Quiz from "./quizdata";
import { AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {IoMdNotificationsOutline} from "react-icons/io";

import './TakeQuiz.css';


function TakeQuiz(){

  const ContainerStyle={
    marginLeft: '200px',
    height : '50vh',
    width: '175vh',
    boxShadow: '0 4px 8px 0 rgba(13, 8, 57, 0.2), 0 6px 20px 0 rgba(17, 4, 46, 0.19)'
    }

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
  

  return(
    <div >
         <nav class="navbar navbar-expand-md" style={{backgroundColor: "#0c1524"}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src={book} style={{width:'40px', height:'40px', borderRadius:'50%',backgroundColor:'white',float: 'left'}}/>
            <h3 style={{color:'white',align:'top'}}>E-Library</h3>
            <p style={{color:'white',marginLeft:'30px'}}>powered by <img src={Picture1}/></p>
            </a>
     
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"  aria-label="Toggle navigation"
        aria-controls="navbarSupportedContent" aria-expanded="false" data-mdb-target="#navbarSupportedContent">
            <i class="fas fa-bars"></i>
        </button>

            <ul class="navbar-nav d-flex flex-row me-1">
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link text-white" href="#" style={{fontSize:'30px'}}><IoMdNotificationsOutline/></a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link text-white" href="http://localhost:3000/logout" style={{fontSize:'30px'}}><CgProfile/></a>
                </li>
            </ul>
        </div>   
</nav>
      <div class="buttonContainer" style={{paddingTop:'30px',width:'180px'}}>
        <button style={leftButton}> <a href="http://localhost:3000/dashboard" ><AiOutlineDesktop/>Dashboard</a></button>
        <button style={leftButton}><a href="http://localhost:3000/surf"><AiOutlineMonitor/> Surf-e-books</a> </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}><AiFillHourglass/> Take Quiz </button>
      </div>

        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>select from your Subcription</h1>
        <div>
        <table style={{ marginTop:'10px', width: '900px', height: '200px', marginLeft:'30px'}}>
         
        <tr style={{backgroundColor:'#0c1524', color:'white'}}>
          <th>e-Book Id</th>
          <th>e-Book Name</th>
          <th>Subcription Date</th>
          <th>Subcription Id</th>
          <th> </th>
        </tr>
        <tbody>
         <tr onClick={()=>setshow(!show)} >
              <td>1221</td>
              <td>Harry Potter & The Half Blood Prince </td>
              <td>29 Mar 2020</td>
              <td>1022242</td>
              <AiFillHourglass/>
        </tr>

        <tr>
              <td>1226</td>
              <td>Interstella</td>
              <td>25 Feb 2020</td>
              <td>1011231</td>
              <AiFillHourglass/>
        </tr>

        <tr>
              <td>1889</td>
              <td>Corporate Chanakya</td>
              <td>12 Jan 2020</td>
              <td>1011223</td>
              <AiFillHourglass/>
        </tr> 
        </tbody>      
      </table>
      </div></div>
     
      {show&&(
        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 "
        style={{width:'175vh',marginTop:'10px',maxHeight:'60vh', marginLeft:'200px'}}> 
        <p style={{textAlign:'center', fontSize:'18px',marginTop:'10px'}}>Harry Potter & The Half Blood Prince Quiz</p>
        <div style={{backgroundColor:'#0c1524', marginLeft:'20px', marginTop:'10px', marginBottom:'10px', color:'white', width:'165vh'}}>
         
         <Quiz/>
          
        </div>
        </div>
      )}    
      </div>
  )
}

export default TakeQuiz;