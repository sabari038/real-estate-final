import React from 'react'
import './HomePage.css';
import Card from "react-bootstrap/Card";
import Plot from '../Images/Plot.png';
import Rental from '../Images/Rental.png';
import Villa from '../Images/Villa.png';
import Commercial from '../Images/Commercial.png';

const Exploreproperty = () => {
  return (
    <div className="exploreprop">
      <p className="section-subtitle" id="Properties">Explore Properties</p>
      <div className="cardgroup">
        <Card className="card expcard">
          <Card.Img variant="top" src={Plot} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>PLOTS AND LANDS</Card.Title>
            <Card.Text className='expbody'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard">
          <Card.Img variant="top" src={Villa} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>INDIVIDUAL VILLAS</Card.Title>
            <Card.Text className='expbody'>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard">
          <Card.Img variant="top" src={Commercial} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>COMMERCIAL BUILDINGS</Card.Title>
            <Card.Text className='expbody'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard">
          <Card.Img variant="top" src={Rental} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>PG/RENTAL</Card.Title>
            <Card.Text className='expbody'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Exploreproperty;
