import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";

function Hp2Preview(){

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '175vh'
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the prisoniors of Azkaban(Preview)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://www.themoviedb.org/t/p/w1280/1lFuyRbEoGnFdOrGuAbGZ9EbOFm.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: J. K Rowling<br/>
            Category: Novel<br/>
            Publisher: Potter More<br/>
            Date Published :  8 July 1999<br/>
            Points :  200
            </p>
            Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.
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
      <div class="shadow border border-2 border border-dark rounded-2 text-center" style={{marginLeft:'200px',marginTop:'25px',maxHeight:'50vh',width:'175vh'}}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the prisoniors of Azkaban(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Harry, Ron and Hermione return as teenagers for a third term at Hogwarts School of Witchcraft and Wizardry. But Harry's fate, and that of the entire community of wizards, looks bleak when the infamous Sirius Black--convicted of abetting evil Lord Voldemort by killing 13 people with a single curse--escapes from prison. The only clue to where Sirius is headed: The Azkaban guards heard Black muttering in his sleep "He's at Hogwarts ... He's at Hogwarts." Now, even within the walls of his magical school, Harry may not be safe from a convicted killer in Harry Potter and the Prisoner of Azkaban.
          </CardText>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default Hp2Preview;