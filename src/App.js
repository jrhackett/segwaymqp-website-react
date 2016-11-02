import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import $ from 'jquery'; 

import contract from './assets/contract.png';
import doctor from './assets/doctor.png';
import emergency from './assets/emergency.png';
import heart from './assets/heart.png';
import sign from './assets/sign.png';
import toilet from './assets/toilet.png';
// import female from './assets/female.png';
// import male from './assets/male.png';

function Square(props) {
  return (
    <Col xs={12} sm={12} md={6} lg={6} className="choice">
      <a href={props.destination}>
        <div className="choice-inner">
          <img src={props.image} alt={props.message} />
          <p>{props.message}</p>
        </div>
      </a>
    </Col>
  );
}

class App extends Component {
  handleHeights() {
    $(".choice").height($(".choice").width());
    $(".choice-inner").height($(".choice-inner").width());
  }

  render() {
    return (
        <Grid onLoad={() => this.handleHeights()}>
          <Row className="choices">
            <Square destination="#" image={contract} message="Check In"/>
            <Square destination="#" image={sign} message="Directions"/>
            <Square destination="#" image={heart} message="Find my Loved One"/>
            <Square destination="#" image={doctor} message="Contact Staff"/>
            <Square destination="#" image={toilet} message="Restroom"/>
            <Square destination="#" image={emergency} message="Emergency"/>
          </Row>
        </Grid>
    );
  }
}

export default App;
