import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";

function Hp3Preview(){

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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the deathly hallows part 1(Preview)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://www.themoviedb.org/t/p/w1280/pCc6IKZfRAxGbKarQNyqa6YEtIq.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: J. K Rowling<br/>
            Category: Novel<br/>
            Publisher: Potter More<br/>
            Date Published :  21 July 2007<br/>
            Points :  200
            </p>
            Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel in the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books.
          </CardText>
          <div class="d-flex justify-content-between">
          <button class="btn btn-outline-light float-left" onClick={()=>isVisible(!visible)}> Read More</button>
          <button class="btn btn-outline-light float-left" id="popoverButton" onClick={()=>setIsOpen(!isOpen)}> Recommend to colleague </button>

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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the deathly hallows part 1(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          In the first part of the seventh and final adventure, Harry, Ron and Hermione set out on their perilous mission to track down and destroy the secret to Voldemort's immortality and destruction -- the Horcruxes. On their own, without the guidance of their professors or the protection of Dumbledore, the three friends must now rely on one another more than ever. But there are Dark Forces in their midst that threaten to tear them apart. Meanwhile, the wizarding world has become a dangerous place for all enemies of the Dark Lord. The long-feared war has begun and Voldemort's Death Eaters seize control of the Ministry of Magic and even Hogwarts, terrorizing and arresting anyone who might oppose them. But the one prize they still seek is the one most valuable to Voldemort: Harry Potter. The Chosen One has become the hunted one as the Death Eaters search for Harry with orders to bring him to Voldemort...alive.​
          </CardText>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default Hp3Preview;