import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Login.css';
 
const Home = () => {
  return (
    <>   
     {/* <h1>Home Component</h1> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/14656105/pexels-photo-14656105.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/14737351/pexels-photo-14737351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/16090220/pexels-photo-16090220.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>

  )
}
export default Home;