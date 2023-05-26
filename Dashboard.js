import React from "react";
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import { AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {CgProfile} from "react-icons/cg";
import Quiz from "./quizdata";

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
      <div style={{paddingTop:'30px',width:'180px', height:'10vh',backgroundColor:'#0c1524'}}>
        <button style={leftButton}><a href="http://localhost:3000/dashboard" ><AiOutlineDesktop/>Dashboard</a></button>
        <button style={leftButton}><a href="http://localhost:3000/surf"><AiOutlineMonitor/> Surf-e-books</a>  </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}>
        <a href="http://localhost:3000/takequiz"><AiFillHourglass/> Take Quiz </a></button>
      </div>
      
      <div class="container">
        <div class="row gap-4" style={{marginLeft:'150px'}}>
          {/* Total Points container */}
          <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Total Points</h6>
            <div class="d-flex p-3">
            <p>Points scored by Subcriptions</p>
            <div class="rounded-circle border border-4 border border-danger p-4" style={{width:'120px'}}><h6 class="text-center">200</h6></div>
            </div></div>
            {/*Books Subcription container */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Books Subcribed</h6>
            <div class="d-flex p-3">
            <p>Number of Books read</p>
            <div class="rounded-circle border border-4 border border-primary p-4" style={{width:'120px'}}><h6 class="text-center">2</h6></div>
            </div></div>
            {/* Active books Subcription container */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Active Subcriptions</h6>
            <div class="d-flex p-3">
            <p>Number of books currently reading</p>
            <div class="rounded-circle border border-4 border border-success p-4" style={{width:'120px'}}><h6 class="text-center">1</h6></div>
            </div></div>
            {/* next row */}
            <div class="row gap-4">
              {/* table of top subcriptions */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Top subcriptions by time</h6>
            </div>
            {/* Trend Chart */}
            <div class=" shadow rounded-4 col p-1 border border-dark border border-2">
            <h6 class="text-center">Trend Charts</h6>
            </div>
            </div>
        </div>

      </div>
      </div>
  )
}

export default Dashboard;
