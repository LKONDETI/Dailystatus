import React from 'react';
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import { AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {CgProfile} from "react-icons/cg";

import CComponent from './CardComponent';

function surfEBooks(){

  const leftButton = {
    backgroundColor:'#0c1524', 
    border :'none',
    fontSize :'16px',
    color :'white',
    height :'50px', 
    width :'180px',
    textAlign :'left'
  };
  function btnClick() {
    window.open("http://localhost:3000/dashboard");
}

  return(
    <div >
        <nav class="navbar navbar-expand-md" style={{backgroundColor: "#0c1524"}}>
    <div class="container-fluid">
      <a class="navbar-brand">
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
      <div style={{paddingTop:'30px',width:'180px', height:'10vh',backgroundColor:'#0c1524'}}>
        <button style={leftButton} onClick={btnClick}><AiOutlineDesktop/>Dashboard</button>
        <button style={leftButton}><a href="http://localhost:3000/surf"><AiOutlineMonitor/> Surf-e-books</a>  </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}>
        <a href="http://localhost:3000/takequiz"><AiFillHourglass/> Take Quiz </a></button>
      </div>

       <div class="p-3 text-center bg-light border border-dark" style={{marginTop:'0px',marginLeft:'210px', paddingBottom:'30px', width:'175vh'}}>
          <p class="mb-3">E-Library Filter</p>
          <form class="d-flex justify-content-evenly"> 
          <input class="form-control me-2" type="search" placeholder="Search by Name" aria-label="Search" />
          <input class="form-control me-2" type="search" placeholder="Search by Category" aria-label="Search" />
          <input class="form-control me-2" type="search" placeholder="Search by Author" aria-label="Search" />
          <button class="btn btn-outline-secondary" type="submit">Filter</button>
          </form>
        </div>   

      {/* <div><CComponent/></div> */}

    </div>

  )
}

export default surfEBooks;