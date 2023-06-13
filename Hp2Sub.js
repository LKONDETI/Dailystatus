import React,{useState} from "react";
import {Button, Card, CardBody, CardText} from "reactstrap";
import { CardImg } from "reactstrap";
import NavSideBars from "../Auth/NavSideBars";

function Hp2Subcribe(){
  const [points,SetPoints] = useState(400);
  const [count,Setcount] = useState(2);
  const [isSubscribed, setIsSubscribed] = useState(false);


  const ContainerStyle={
    marginLeft: '200px',
    height : '50vh',
    width: '175vh',
    boxShadow: '0 4px 8px 0 rgba(13, 8, 57, 0.2), 0 6px 20px 0 rgba(17, 4, 46, 0.19)'
    }

  const handleSaveAndDownload = () => {
    window.print();
    
    localStorage.setItem("count",count);
    console.log(count);
   
    localStorage.setItem("points",points);
    console.log(points);
  };
  const handleSubscribe = () => {
    setshow(!show)
    setIsSubscribed(true);
  };

  
  const [show, setshow] =React.useState(false);
  
  return(
    <div>
         <div><NavSideBars/></div>

        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Active Subscriptions List</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://www.themoviedb.org/t/p/w1280/1lFuyRbEoGnFdOrGuAbGZ9EbOFm.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: J. K Rowling<br/>
            Category: Novel<br/>
            Publisher: Potter More<br/>
            Date Published : 8 July 1999<br/>
            Points :  200
            </p>
            Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.
          </CardText>
          <div class='btn btn-outline-light' onClick={handleSubscribe} style={{marginLeft:'160px'}}>  {isSubscribed ? 'Subscribed' : 'Subscribe'}</div>
       
        </CardBody>
        </Card>
      </div></div>
      
        {show&&(
        <div class="border border-2 border border-dark rounded-2 text-center" 
        style={{marginLeft:'200px',marginTop:'25px',maxHeight:'50vh',width:'175vh',boxShadow: '0 4px 8px 0 rgba(13, 8, 57, 0.2), 0 6px 20px 0 rgba(17, 4, 46, 0.19)'}}> 
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the prisoniors of Azkaban(Subcription Form)</h1>
        <div class="container" style={{margin:'10px'}}>
          <div class="row" style={{marginTop:'30px'}}>
            <div class="col"><input type="text" placeholder="Enter Global Id"/></div>
            <div class="col"><b>Name</b> <input type="text" placeholder="name"/> </div>
            <div class="col"><b>Grade</b><input type="text" placeholder="grade"/></div>
          </div>
          <div class="row" style={{marginTop:'20px'}}>
            <div class="col"><b>Joining Date</b> <input type="date"/></div>
            <div class="col"><b>Employee Id</b> <input type="number" placeholder="Employee Id"/></div>
            <div class="col"><b>Supervisior</b> <input type="text" placeholder="supervisior"/></div>
            </div>
          <div class="row"><div class="col-xs-3"><Button style={{backgroundColor:'#0c1524', width :'30vh', marginTop:'20px'}} onClick={handleSaveAndDownload}>Save & Download</Button></div></div>
        </div> </div>)}
        
    </div>

  )
}

export default Hp2Subcribe;