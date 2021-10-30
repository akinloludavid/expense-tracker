import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import image2 from "../assets/michael-longmire-lhltMGdohc8-unsplash.jpg";
import image3 from "../assets/visual-stories-micheile-ZVprbBmT8QA-unsplash.jpg";
import './Landing.css'
const Landing = () => {
 return (
  <div className="container-fluid landing">
    <h2>SpendWizely</h2>
    <Carousel fade id="carousel">
      <Carousel.Item>
      <img className="d-block img-fluid carousel-image" src={image1} alt="First slide" />
      <Carousel.Caption>
        <h3>Track your finance</h3>
        <p>Keep tabs on your income and expenditure</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block img-fluid carousel-image" src={image2} alt="Second slide" />

      <Carousel.Caption>
        <h3>Save more, spend less</h3>
        <p>Helps you spend less and save more money.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block img-fluid carousel-image" src={image3} alt="Third slide" />
      <Carousel.Caption>
        <h3 className="shadow-lg">Your money works for you.</h3>
        <p>Your money yields 10% interest per annum.</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Link className="text-white" to="/signin">
      <Button className="primary text-white">Get Started</Button>
    </Link>
  </div>
 );
};

export default Landing;
