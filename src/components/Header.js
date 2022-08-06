import React from "react";
import {Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logobig from '../images/logobig.png'
import {Link as LinkRouter} from "react-router-dom"

function Header(){
    return(
      <>
        <img className="fondo" src="https://th.bing.com/th/id/R.7aac977f9dd2c5d0416505120fb4746d?rik=Qk3RaoQjOGvbxQ&riu=http%3a%2f%2fbeautiesofearth.com%2fwp-content%2fuploads%2f2017%2f09%2fThe-Most-Beautiful-Beaches-in-The-World-PART-3-HD.jpg&ehk=0d7PVI43wETuvx7%2ffm4KO4VEZ1NpaUPFnfO0rBu7%2fuM%3d&risl=&pid=ImgRaw&r=0" alt="fondo" _mstalt="62569"></img>
        <div className="Header">
        <img src={logobig} alt="imagen logo" className='logobig' />
        <div className="divCard">
        <Card className="card1">
  <Card.Body className="cardcenter" >
    <Card.Title>   Find
your perfect trip</Card.Title>
    <Card.Text>
    login to see more!
    </Card.Text>
     <LinkRouter to={'../SignIn'} ><Button variant="primary" className="buttomcard" >Look it now</Button></LinkRouter> 
  </Card.Body>
</Card>

       </div>
        </div>
      </>
    )
}
export default Header
