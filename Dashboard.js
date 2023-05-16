import React from "react";
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import {AiOutlineUser, AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {Button, Card, CardBody, CardDeck, CardText} from "reactstrap";
import { useState } from "react";

import './Dashboard.css';
import { CardImg } from "reactstrap";

function Dashboard(){

  const [open, setOpen ] =useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

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
        <button style={leftButton}> <a href="http://localhost:3000/dashboard" ><AiOutlineDesktop/>Dashboard</a></button>
        <button style={leftButton}><a href="http://localhost:3000/surf"><AiOutlineMonitor/> Surf-e-books</a> </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px',textAlign:'left',width:'180px', paddingBottom:'500px'}}>
        <a href="http://localhost:3000/takequiz"><AiFillHourglass/> Take Quiz </a></button>
      </div>

        <div className="card-styling">
        <h1 style={{fontSize:'18px',textAlign:'center', marginTop:'20px'}}>Harry Potter & the half blood prince(Subcription)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src={HP1} style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: J. K Rowling<br/>
            Category: Novel<br/>
            Publisher: Potter More<br/>
            Date Published : June 26, 1997<br/>
            Points :  200
            </p>
       
          Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. 
        The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. 
        The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).
          </CardText>
          <Button  onClick={handleClick} style={{marginLeft:'200px', border:'none'} }> Continue Reading </Button>
          
        </CardBody>
        </Card>
      </div>
        <CardDeck/>
          <div style={{ display: open ? 'block' : 'none' }}>
          <h1 style={{fontSize:'18px',textAlign:'center', marginTop:'20px'}}>Historical Subcriptions List</h1>
          <Card style={{backgroundColor:'#0c1524',color:'white',height:'40vh', width:'170vh'}}>
            <CardBody></CardBody>
          </Card></div>
          
      </div>

    </div>
    

  )
}

export default Dashboard;