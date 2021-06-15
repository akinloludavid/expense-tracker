import React from 'react';
import {Carousel, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Landing = () => {
  return ( 
    <div className = "container-fluid">
    <h3>SpendWizely</h3>
    <Carousel fade id = "carousel" >
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src="https://picsum.photos/id/237/200/300"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src = "https://picsum.photos/seed/picsum/200/300"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src = "https://picsum.photos/200/300.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
      <Link className = "text-white" to ="/signup">
        <Button className ="primary text-white">
          Get Started
        </Button>
      </Link>
 
    </div>
  );
}
 
export default Landing;