import React from 'react';
import { Button } from 'reactstrap';
import book from './book.png';
import Picture1 from './Picture1.png';


function Logout() {

    function handleClick( ) {
        alert('clicked');
      }
      const pageStyle ={
        color: 'white',
        textAlign : 'center',
        padding:'140px',
        backgroundColor:'#192841'
      };

      const paragraphStyle = {
        fontSize:'19px',
        margin:'10px 20px 0 10px'
    };

      const buttonStyle = {
        backgroundColor:'#192841',
        color:'blue',
        width: '250px',
        height: '30px',
        fontSize: '18px'
        
      };
      const imageStyle={
        width:'300', 
        height:'300', 
        borderRadius:'50%', 
        backgroundColor:'white',
        float: 'left',
        height: '70px',
        padding: '20px',
        margin:'25px 25px 0'
      };


      return(
        <div style={pageStyle}>
          <img src={book} style={imageStyle}/>
          <p style={{fontSize:'40px'}}>E-library</p>
          <p>powered by</p>
            <img src={Picture1} alt="Picture1" style={{margin:'10px 0 0px 140px'}}/>
            <h1 style={paragraphStyle}>You have successfully logged out, ThankYou!</h1>
            <Button label="logout" onClick={handleClick} style={buttonStyle}><u> Go back to the login page</u></Button>
    </div>
      )

}

export default Logout;