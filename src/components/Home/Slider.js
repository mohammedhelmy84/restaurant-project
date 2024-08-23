import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import coffee from './../../assets/coffee.jpg';
import customers from './../../assets/customers.jpg';
import tea from './../../assets/tea.jpg';
import './Home.css';




export default function Slider(){
  return (
    <section className='reviewsdiv py-3'>
      <div className="container">
      <h3>Our Cusomers</h3>
      <div className='slides'>
      <Carousel>
      <Carousel.Item>
      <img src={coffee}  alt="..." width="75px" height="75px" />
        <Carousel.Caption>

          <p>Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
  
      <Carousel.Item>
      <img  src={customers}  alt="{image}" width="75px" height="75px"/>
       
        <Carousel.Caption>
    
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
 
      <img  src={tea} alt="{image}" width="75px" height="75px"/>
        <Carousel.Caption>
   
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      </div>
    </section>
  )
}