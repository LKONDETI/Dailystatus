import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";

function InterstellaPrev(){

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '200vh'
  }

  const [visible, isVisible] =React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const simpleAlert = (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      setErrorMessage('Invalid email.');
    } else {
      // Process the valid email
      setErrorMessage('');
      alert('sent!');
    }
  };

  return(
    <div >
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Interstella(Preview)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://www.themoviedb.org/t/p/w1280/qUZiVjFBd67WKktIrjJ9H3tesyo.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Kip Thorne<br/>
            Category: Sci-fi<br/>
            Publisher: W. W. Norton & Company<br/>
            Date Published :  7 Nov 2014<br/>
            Points :  200
            </p>
            Interstellar, from acclaimed filmmaker Christopher Nolan, takes us on a fantastic voyage far beyond our solar system. Yet in The Science of Interstellar, Kip Thorne, the physicist who assisted Nolan on the scientific aspects ofInterstellar, shows us that the movie’s jaw-dropping events and stunning, never-before-attempted visuals are grounded in real science. Thorne shares his experiences working as the science adviser on the film and then moves on to the science itself. 
          </CardText>
          <div class="d-flex justify-content-between">
          <button class="btn btn-outline-light" onClick={()=>isVisible(!visible)}> Read More</button>
          <button class="btn btn-outline-light" id="popoverButton" onClick={()=>setIsOpen(!isOpen)}> Recommend to colleague </button>

          <Popover placement="bottom" isOpen={isOpen} target="popoverButton" toggle={() => setIsOpen(!isOpen)}>
          <PopoverHeader>Enter Email Id</PopoverHeader>
          <PopoverBody><label style={{marginBottom:'10px'}}><input type="email" placeholder="enter email" onChange={handleEmailChange}/></label><br/>
                        <Button onClick = {simpleAlert} style={{backgroundColor:'#0c1524', color:'white'}}>Send</Button>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </PopoverBody>
          </Popover>
          </div>
          
        </CardBody>
        </Card>
        </div>
      </div>
      {visible&&(
      <div class="shadow border border-2 border border-dark rounded-2 text-center" style={{marginLeft:'200px',marginTop:'25px',maxHeight:'50vh',width:'200vh'}}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Interstellar(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          The Science of Interstellar is a non-fiction book by American theoretical physicist and Nobel laureate Kip Thorne, with a foreword by Christopher Nolan. The book was initially published on November 7, 2014 by W. W. Norton & Company. This is his second full-size book for non-scientists after Black Holes and Time Warps, released in 1994. The Science of Interstellar is a follow-up text for Nolan's 2014 film Interstellar, starring Matthew McConaughey, Anne Hathaway, and Jessica Chastain.
          </CardText>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default InterstellaPrev;