import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import img1 from '../Images/i (1).png';
import img2 from '../Images/i (2).png';
import img3 from '../Images/i (3).png';
import img4 from '../Images/i (4).png';
import '../styles/Menu.css'; // Import your CSS file

const MenuSlide = ({ imgSrc, imgAlt, heading, content, orderLink }) => (
  <div className="menu-slide-wrapper">
    <div className="menu-slide">
      <img src={imgSrc} alt={imgAlt} />
      <div className="menu-desc">
        <h3 className="menu-heading">{heading}</h3>
        <p className="menu-content">{content}</p>
      </div>
      <button className="menu-now" onClick={() => window.location.href = orderLink}>
        ORDER
      </button>
    </div>
  </div>
);

const MenuSlider = () => (
  <div className="menu-slider">
    <MenuSlide
      imgSrc={img1}
      imgAlt="Veg Pizza"
      heading="VEG PIZZA"
      content="A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier"
      orderLink="orders"
    />
    <MenuSlide
      imgSrc={img2}
      imgAlt="Non-Pizza"
      heading="NON-PIZZA"
      content="Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings"
      orderLink="orders"
    />
    <MenuSlide
      imgSrc={img3}
      imgAlt="Pizza Mania"
      heading="PIZZA MANIA"
      content="Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings"
      orderLink="orders"
    />
    <MenuSlide
      imgSrc={img4}
      imgAlt="Sides and Beverages"
      heading="SIDES & BEVERAGES"
      content="Complement your pizza with wide range of sides & beverages available at Domino's Pizza India"
      orderLink="#"
    />
  </div>
);

const Menu = () => (
  <div>
    <Row className="text-center py-3 justify-content-center">
      <Col md="auto">
        <h1 className="menu-title">DOMINO'S MENU</h1>
      </Col>
    </Row>
    <Container>
      <MenuSlider />
    </Container>
  </div>
);

export default Menu;
