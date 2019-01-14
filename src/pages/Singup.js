import React from 'react';
import Title from '../components/Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '../components/Container'
import { Link } from 'react-router-dom'



export default class Singup extends React.Component{
  render(){

    return(
     <div className="Login-background" style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/login-background-9.jpeg'+")"}}>  
      <div className="row col-xl-12">
         <div className="col-xl-6 panel">
          
             <div className="container"> 
                <Container>
               <Title/>
               <TextField className="something"
                 floatingLabelText="Email"
                 type="email"
                 id="something"
               />
               <TextField
                 floatingLabelText="Password"
                 type="password"
               />
               <div className="Login-actions">
                 <Link to="/login" style={{marginRight:"1em", color:"white"}}>Allready have Account</Link>
                 <RaisedButton
                   label="Sign Up"
                   secondary={true}
                 />
               </div>
               </Container>
             </div>
           
           </div>
           <div className="col-xl-6 panel"></div>
         </div>
       </div>    
         
   );  
  }  
}