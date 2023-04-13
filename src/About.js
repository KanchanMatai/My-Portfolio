import * as React from 'react';
import './Assets/Style.css';
// import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container fluid className="cont">
      <Row>
        <Col lg = {6} md ={12} sm ={12}>
        <article>
      <button class="button-64" role="button"><span class="text"><i class="fa-solid fa-envelope"></i> mataikanchan@gmail.com</span></button>
      <h1 className ="about mt-1">Hi, I am Kanchan Matai. I am a Front End Developer.</h1>
      </article>
  <br></br>
<button class="button-64 mt-2" role="button"><span class="text"><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/kanchan-matai-a295a1211/"> Get in touch on LinkedIn</a></span></button>
        </Col>
        <Col lg = {6} md ={12} sm={12}><img style ={{width:"100%"}}src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&w=1000&q=80"></img></Col>
      </Row>
      </Container>
  );
}

export default About;