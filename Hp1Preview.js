import React from "react";
import HP1 from "./HP1.png";
import Picture1 from './Picture1.png'
import book from "./book.png";
import {AiOutlineUser, AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody} from "reactstrap";
import { useState } from "react";

import './Hp1Preview.css';
import { CardImg } from "reactstrap";

function Hp1Preview(){

  const [open, setOpen ] =useState(false);

  const leftButton = {
    backgroundColor:'#0c1524', 
    border :'none',
    fontSize :'16px',
    color :'white',
    height :'50px', 
    width :'180px',
    textAlign :'left'
  };

  const [visible, isVisible] =React.useState(false);
  const [isOpen, setIsOpen] = useState(false);


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

        <div class="card1container">
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the half blood prince(Preview)</h1>
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
          <Button onClick={()=>isVisible(!visible)} style={{marginLeft:'200px', border:'none'} }> Read More</Button>
          <Button id="popoverButton" style={{marginLeft:'400px', border:'none'}} onClick={()=>setIsOpen(!isOpen)}> Recommend to colleague </Button>

          <Popover placement="bottom" isOpen={isOpen} target="popoverButton" toggle={() => setIsOpen(!isOpen)}>
          <PopoverHeader>Enter Email Id</PopoverHeader>
          <PopoverBody><label style={{marginBottom:'10px'}}><input type="text" placeholder="enter email"/></label><br/>
                        <Button style={{backgroundColor:'#0c1524', color:'white'}}>Send</Button>
          </PopoverBody>
          </Popover>
          
        </CardBody>
        </Card>
        
      </div>
      {visible&&(
      <div class="card2container">
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the half blood prince(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          The central character in the series is Harry Potter, a boy who lives in the fictional town of Little Whinging, Surrey with his aunt, uncle, and cousin – the Dursleys – and discovers at the age of eleven that he is a wizard, though he lives in the ordinary world of non-magical people known as Muggles.[8] The wizarding world exists parallel to the Muggle world, albeit hidden and in secrecy. His magical ability is inborn, and children with such abilities are invited to attend exclusive magic schools that teach the necessary skills to succeed in the wizarding world.[9]
          Harry becomes a student at Hogwarts School of Witchcraft and Wizardry, a wizarding academy in Scotland, and it is here where most of the events in the series take place. As Harry develops through his adolescence, he learns to overcome the problems that face him: magical, social, and emotional, including ordinary teenage challenges such as friendships, infatuation, romantic relationships, schoolwork and exams, anxiety, depression, stress, and the greater test of preparing himself for the confrontation that lies ahead in wizarding Britain's increasingly-violent second wizarding war.[10]
          Each novel chronicles one year in Harry's life[11] during the period from 1991 to 1998.[12] The books also contain many flashbacks, which are frequently experienced by Harry viewing the memories of other characters in a device called a Pensieve.
          The environment Rowling created is intimately connected to reality. The British magical community of the Harry Potter books is inspired by 1990s British culture.
          </CardText>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
    </div>

  )
}

export default Hp1Preview;