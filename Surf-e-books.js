import React from "react";
import './Surf-e-books.css';
import book from "./book.png";
import Picture1 from './Picture1.png';
import bell from './bell.png';
import profile from './profile.png';
import HP1 from './HP1.png';
import SeB from './SeB.png';
import dashB from './dashB.png';
import TQ from './TQ.png';

import {Card, CardBody, CardHeader, CardLink, CardSubtitle, CardText} from "reactstrap";

//import { ButtonGroup,Button } from "reactstrap";
//import { ColumnProps } from "reactstrap/types/lib/Col";
function Surfebooks(){

    return(

        <div>
        <div className="heading" style={{display:'flex',flexDirection:'row',backgroundColor:'#192841'}}>
                    <img src={book} style={{width:'40px', height:'40px', borderRadius:'30%',backgroundColor:'white',float: 'left'}}/>
                    <p style={{color:'white',align:'top', fontSize:'30px'}}>E-Library</p>
                    <p style={{color:'white',}}>poweredby</p>
                    <img src={Picture1} style={{width:'40px',height: '40px'}}/>
                    <img src={profile} style={{float:'right',width:'20px', height:'20px', borderRadius:'25%'}}/>
                    <img src={bell} style={{float:'right'}}/>
            </div>

            <div style={{display:'flex',flexDirection:'column', backgroundColor:'grey'}}>
                <div><img src={dashB}/>Dashbord</div>
                <div><img src={SeB}/>Surf-e-Books</div>
                <div><img src={TQ}/>Take Quiz</div>
            </div>
        <div className="surfbody">
        <div>
        <Card>
        <CardBody>
        <img class="float-right" src={HP1} />
        <CardHeader>Harry Potter & the half blood prince</CardHeader>
        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
        <CardText>
        Author:J.K.Rowling
        Cathegory:Novel
        </CardText>
        <CardLink href="#">Preview</CardLink>
        <CardLink href="#">Subcribe now</CardLink>
      </CardBody>
      </Card>
      </div>
      <div>
      <Card>
      <CardBody>
        <CardHeader>Harry Potter & the prisoniors of Azkaban</CardHeader>
        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
        <CardText>
        Author:J.K.Rowling
        Cathegory:Novel
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

export default Surfebooks;