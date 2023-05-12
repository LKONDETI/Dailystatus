import React from "react";
import HP1 from "./HP1.png";
import book from "./book.png";
import {AiOutlineUser, AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {Card, CardBody, CardLink, CardText, CardHeader, CardDeck, Row, Col} from "reactstrap";
import IS from "./IS.png";
import CC from "./CC.png";
import LAin24hrs from "./LAin24hrs.png";

import './Surf-e-books.css';
import { CardImg } from "reactstrap";

function surfEBooks(){


  return(
    <div >
        <div class="box">
          <div class="one">
          <img src={book} style={{width:'40px', height:'40px', borderRadius:'50%',backgroundColor:'white',float: 'left'}}/>
          <p style={{color:'white',align:'top', fontSize:'30px'}}>E-Library</p>
          <p style={{color:'white'}}>powered by Capgemini</p></div>
          <div class="three"> <a href="http://localhost:3000/logout" ><AiOutlineUser/> </a></div>
          <div class="two"><IoMdNotificationsOutline/> </div>
      </div>

      <div class="right-container">
        <button style={{backgroundColor:'#0c1524', border:'none',fontSize:'16px',color:'white',height:'50px'}}> <AiOutlineDesktop/> Dashboard </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px'}}><AiOutlineMonitor/> Surf-e-books </button>
        <button style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',color:'white',height:'50px'}}><AiFillHourglass/> Take Quiz </button>
      </div>

     
        <div class="filter">
            <div style={{alignSelf:'center'}}>E-book Filter</div>
            <div><label style={{ width: '200px',height: '30px',fontSize: '16px'}}><input type="search" placeholder="search by Name" /></label> </div>
            <div><label style={{ width: '200px',height: '30px',fontSize: '16px'}}><input type="search" placeholder="search by Category" /></label></div>
            <div><label style={{ width: '200px',height: '30px',fontSize: '16px'}}><input type="search" placeholder="search by Author" /></label></div>
            <div><button>Filter</button></div>
          
        </div>
        <div class="flex-container">
        
        <div class="flex-item1">
          <Card style={{width:'20rem',backgroundColor: "#192841", color:'white'}}>
          <CardBody>
          <CardImg  src={HP1} style={{width:'5rem', float:'right',paddingTop:'55px'}}/>
          <CardHeader style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the half blood prince</CardHeader>
          <CardText style={{fontSize:'12px'}}>
          Author:J.K.Rowling<br/>
          Cathegory:Novel
          </CardText>
          <CardLink href="http://localhost:3000/hp1">Preview</CardLink>
          <CardLink href="http://localhost:3000/subcribehp1">Subcribe now</CardLink>
        </CardBody>
        </Card>
      </div>
        <CardDeck/>
      <div class="flex-item2">
        <Card style={{width:'20rem',backgroundColor: "#192841", color:'white'}}>
        <CardBody>
        <CardImg src={HP1} style={{width:'5rem', float:'right',paddingTop:'55px'}}/>
        <CardHeader style={{fontSize:'18px', textAlign:'center'}}>Harry Potter & the prisoniors of Azkaban</CardHeader>
        <CardText style={{fontSize:'12px'}}>
        Author:J.K.Rowling<br/>
        Cathegory:Novel
        </CardText>
        <CardLink href="#">Preview</CardLink>
        <CardLink href="#">Subcribe now</CardLink>
        </CardBody>
        </Card>
      </div>
        <CardDeck/>
      <div class="flex-item3"> 
        <Card style={{width:'20rem',backgroundColor: "#192841", color:'white'}}>
        <CardBody>
        <CardImg  src={HP1} style={{width:'5rem', float:'right',paddingTop:'55px'}}/>
        <CardHeader style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the deathly hallows part 1 </CardHeader>
        <CardText style={{fontSize:'12px'}}>
        Author:J.K.Rowling<br/>
        Cathegory:Novel
        </CardText>
        <CardLink href="#">Preview</CardLink>
        <CardLink href="#">Subcribe now</CardLink>
        </CardBody>
        </Card>
        </div>
        </div>  

        <div class="flex-container">
        
        <div class="flex-item1">
          <Card style={{width:'20rem',backgroundColor: "#192841", color:'white'}}>
          <CardBody>
          <CardImg  src={IS} style={{width:'5rem', float:'right',paddingTop:'55px'}}/>
          <CardHeader style={{fontSize:'18px',textAlign:'center'}}>Interstellar</CardHeader>
          <CardText style={{fontSize:'12px'}}>
          Author:J.K.Borrow<br/>
          Cathegory:Sci-fi
          </CardText>
          <CardLink href="#">Preview</CardLink>
          <CardLink href="#">Subcribe now</CardLink>
        </CardBody>
        </Card>
      </div>
        <CardDeck/>
      <div class="flex-item2">
        <Card style={{width:'20rem',backgroundColor: "#192841", color:'white'}}>
        <CardBody>
        <CardImg src={CC} style={{width:'5rem', float:'right',paddingTop:'55px'}}/>
        <CardHeader style={{fontSize:'18px', textAlign:'center'}}>Corporate Chanakya</CardHeader>
        <CardText style={{fontSize:'18px'}}>
        Author:R.K.Pillai<br/>
        Cathegory:Management
        </CardText>
        <CardLink href="#">Preview</CardLink>
        <CardLink href="#">Subcribe now</CardLink>
        </CardBody>
        </Card>
      </div>
        <CardDeck/>
      <div class="flex-item3"> 
        <Card style={{width:'20rem',backgroundColor: "#192841", color:'white'}}>
        <CardBody>
        <CardImg  src={LAin24hrs} style={{width:'5rem', float:'right',paddingTop:'55px'}}/>
        <CardHeader style={{fontSize:'18px',textAlign:'center'}}>Learn Angular in 24 Hrs</CardHeader>
        <CardText style={{fontSize:'12px'}}>
        Author:L.K.Thota<br/>
        Cathegory:Technical
        </CardText>
        <CardLink href="#">Preview</CardLink>
        <CardLink href="#">Subcribe now</CardLink>
        </CardBody>
        </Card>
        </div>
        </div>
     

    </div>

  )
}

export default surfEBooks;