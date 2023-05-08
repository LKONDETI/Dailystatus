import React from "react";
import book from "./book.png";
import Picture1 from './Picture1.png';
import bell from './bell.png';
import profile from './profile.png';
import { header, Row, Col} from "reactstrap";
import {Card, CardBody, CardHeader, CardLink, CardSubtitle, CardText} from "reactstrap";

//import { ButtonGroup,Button } from "reactstrap";
//import { ColumnProps } from "reactstrap/types/lib/Col";
function Surfebooks(){

    const headingTemplate ={
        backgroundColor: '#192841',
        flex: 1,
    };

    return(

        <div>
        <header style={headingTemplate}>
                <Row>
                    <Col>
                    <img src={book} style={{width:'40px', height:'40px', borderRadius:'30%',backgroundColor:'white',float: 'left'}}/>
                    <p style={{color:'white', fontSize:'30px'}}>E-Library</p>
                    <p style={{color:'white'}}>powered by</p>
                    <img src={Picture1}/>
                    <img src={profile} style={{float:'right',width:'20px', height:'20px', borderRadius:'25%'}}/>
                    <img src={bell} style={{float:'right'}}/>

                    </Col>
                </Row>
            </header>
    
        <Card style={{ width: '18rem' }}>
        <CardBody>
        <CardHeader>Harry Potter & the half blood prince</CardHeader>
        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
        <CardText>
        Author:J.K.Rowling
        Cathegory:Novel
        </CardText>
        <CardLink href="#">Preview</CardLink>
        <CardLink href="#">Subcribe now</CardLink>
      </CardBody>
      
      
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
    )
}

export default Surfebooks;