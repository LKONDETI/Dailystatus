import React from "react";
import book from './book.png';
import Picture1 from './Picture1.png'
import {IoMdNotificationsOutline} from "react-icons/io";
import {AiOutlineDesktop,AiOutlineMonitor,AiFillHourglass} from "react-icons/ai";
import {CgProfile} from "react-icons/cg"

function Filter(){
    return(
        <div>


<nav class="navbar navbar-expand-md" style={{backgroundColor: "#192841"}}>
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
                    <a class="nav-link text-white" href="#" style={{fontSize:'30px'}}><CgProfile/></a>
                </li>
            </ul>
        </div>   
</nav>
        {/* <div class="buttonContainer" style={{paddingTop:'30px',width:'180px'}}>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px'}}><AiOutlineDesktop/>Dashboard</button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px'}}><AiOutlineMonitor/> Surf-e-books</button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}>
        <a href="http://localhost:3000/takequiz"><AiFillHourglass/> Take Quiz </a></button>
      </div> */}

{/* style={{width: '30vh', height: '70vh', backgroundColor: 'black'}} 
style={{width: '30vh', height: '70vh'}}
style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}      */}
  {/* <div style={{width: '30vh', height: '70vh',backgroundColor: '#192841'}}>
  <ul class="navbar-nav d-flex ">
        <li class="nav-item">
            <a class="nav-link text-white" href="#" style={{fontSize:'30px'}}><IoMdNotificationsOutline/></a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="#" style={{fontSize:'30px'}}><CgProfile/></a>
        </li>
    </ul>
  </div> */}
  <div class="p-3 text-center bg-light border border-dark" style={{marginTop:'0px',marginLeft:'210px', paddingBottom:'30px', width:'175vh'}}>
          <p class="mb-3">E-Library Filter</p>
          <form class="d-flex justify-content-evenly"> 
          <input class="form-control me-2" type="search" placeholder="Search by Name" aria-label="Search" />
          <input class="form-control me-2" type="search" placeholder="Search by Category" aria-label="Search" />
          <input class="form-control me-2" type="search" placeholder="Search by Author" aria-label="Search" />
          <button class="btn btn-outline-secondary" type="submit">Filter</button>
          </form>
        </div> 

    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
    <div class="card" style={{width: '18rem'}}>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a></div>
    </div></div>
    
    <div class="col">
    <div class="card" style={{width: '18rem'}}>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div></div></div>
</div>

    
    </div>
        
    )
}

export default Filter;