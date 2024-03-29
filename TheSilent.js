import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import TheSilentPatient from "./TheSilentPatient.jpg";
import NavSideBars from "../Auth/NavSideBars";

function TheSPrev(){

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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>The Silent Patient(Preview)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src={TheSilentPatient} style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Alex Michaelides<br/>
            Category: Thriller<br/>
            Publisher:  Celadon Books<br/>
            Date Published :  5 Feb 2019<br/>
            Points :  200
            </p>
            The Silent Patient is a 2019 psychological thriller novel written by British–Cypriot author Alex Michaelides. The successful debut novel was published by Celadon Books, a division of Macmillan Publishers, on 5 February 2019.Four years later, a month after his 40th birthday, Michaelides sold the book. Not only has it been a stalwart across hardcover, paperback and audio best-seller lists, “The Silent Patient” has inspired a slew of #BookTok videos with 14 million viewers.
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>The Silent Patient(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.
          The Dangers of Unresolved or Improperly Treated Mental Illness. The overall narrative of The Silent Patient and many of the characters' individual narratives demonstrate the dangers of unresolved or improperly treated mental illness.
          THE SILENT PATIENT is immersive and hypnotic—the kind of confidently drawn suspense story that doesn't need big, flashy twists to keep you hooked… but that delivers an exceptional twist or two anyway. Believe the hype: THE SILENT PATIENT may well be the debut crime novel of the season.
          </CardText>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default TheSPrev;