import React,{useState} from "react";
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import {AiOutlineUser, AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {Button, Card, CardBody, CardLink, CardText} from "reactstrap";
import {Row, Col} from 'reactstrap';

import './Subcribe.css';
import { CardImg } from "reactstrap";

function Subcribe(){

  

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

        <div class="card1">
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Active Subscriptions List</h1>
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
          <Button onClick={()=>setshow(!show)} style={{marginLeft:'160px'}}> Subcribe</Button>
         
        </CardBody>
        </Card>
      </div>
      
        {show&&(
        <div class="card2"> 
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the half blood prince(Subcription Form)</h1>
        <div style={{margin:'10px'}}>
          <Row style={{marginTop:'30px'}}>
            <Col><input type="text" placeholder="Enter Global Id"/></Col>
            <Col><b>Name</b> <input type="text" placeholder="name"/> </Col>
            <Col><b>Grade</b><input type="text" placeholder="grade"/></Col>
          </Row>
          <Row style={{marginTop:'20px'}}>
            <Col><b>Joining Date</b> <input type="date"/></Col>
            <Col><b>Employee Id</b> <input type="number" placeholder="Employee Id"/></Col>
            <Col><b>Supervisior</b> <input type="text" placeholder="supervisior"/></Col>
          </Row>
          <Row><Col xs='3'><Button style={{marginLeft:'70vh',backgroundColor:'#0c1524', width :'30vh', marginTop:'20px'}}>Save & Download</Button></Col></Row>
        </div> </div>)}
        

   
    </div>
    </div>

  )
}

export default Subcribe;