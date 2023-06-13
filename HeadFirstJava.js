import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";

function HFJPrev(){

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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Head First Java(Preview)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVy-e1kG8UsygRmHjoxScusINAu2aErCgnHN4BAQaeVtKG4icm" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Bert Bates,Kathy Sierra<br/>
            Category: Technical<br/>
            Publisher: O′Reilly<br/>
            Date Published :  2003<br/>
            Points :  200
            </p>
            Head First Java is a complete learning experience in Java and object-oriented programming. With this book, you'll learn the Java language with a unique method that goes beyond how-to manuals and helps you become a great programmer. Through puzzles, mysteries, and soul-searching interviews with famous Java objects, you'll quickly get up to speed on Java's fundamentals and advanced topics including lambdas, streams, generics, threading, networking, and the dreaded desktop GUI. If you have experience with another programming language, Head First Java will engage your brain with more modern approaches to coding--the sleeker, faster, and easier to read, write, and maintain Java of today.
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Head First Java(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Head First Java combines puzzles, strong visuals, mysteries, and soul-searching interviews with famous Java objects to engage you in many different ways. It's fast, it's fun, and it's effective. And, despite its playful appearance, Head First Java is serious stuff: a complete introduction to object-oriented programming and Java. You'll learn everything from the fundamentals to advanced topics, including threads, network sockets, and distributed programming with RMI. And the new. second edition focuses on Java 5.0, the latest version of the Java language and development platform. Because Java 5.0 is a major update to the platform, with deep, code-level changes, even more careful study and implementation is required. So learning the Head First way is more important than ever.
          </CardText>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default HFJPrev;