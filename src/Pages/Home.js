import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import header from '../Images/header_bg.png';
import banner from '../Images/banner_brand_20210922.jpg';
import menu from '../Images/menu1.jpeg';
import store from '../Images/store.png';
import img5 from '../Images/new_app_img.png'
import img6 from '../Images/app_store.png'
import carousel1 from '../Images/amazon_home_20210412.jpg'
import carousel2 from '../Images/Home_Paytm_20210519.jpg'
import carousel3 from '../Images/Home_airtel_30082020.jpg'
import carousel4 from '../Images/Home_Freecharge_20210405.jpg'
import carousel5 from '../Images/Dominos_Mobi_Home_20210503.jpg'
import carousel6 from '../Images/Home_payzapp_20201029.jpg'
import carousel7 from '../Images/Home_au_20201029.jpg'
import carousel8 from '../Images/amazon_home_20210412.jpg'
import '../styles/Home.css';

const AppImg = () => (
  <div className="app-img">
    <img
      className="app-img-desktop"
      src={img5}
      alt="App Promotional"
    />
    <div className="app-download-wrapper">
      <h3 className="app-download">Unlock Exclusive Offers</h3>
      <p>For lightning fast ordering experience download the Domino’s app</p>
      <ul className="appdownload-img">
        <li>
          <button onClick={() => window.location.href='#'}>
            <img
              src={img6}
              alt="Google Play Store"
            />
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href='#'}>
            <img
              src={img6}
              alt="Apple App Store"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
);

function Home() {
  useEffect(() => {
    const slides = document.querySelectorAll('.offers-slide');
    let currentSlide = 0;

    const showSlides = (startIndex) => {
      for (let i = startIndex; i < startIndex + 2; i++) {
        if (i < slides.length) {
          slides[i].style.display = 'block';
        }
      }
      for (let i = 0; i < startIndex; i++) {
        slides[i].style.display = 'none';
      }
      for (let i = startIndex + 2; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
    };

    const nextSlides = () => {
      currentSlide = (currentSlide + 2) % slides.length;
      showSlides(currentSlide);
    };

    showSlides(currentSlide);
    const intervalId = setInterval(nextSlides, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="online-order" id="online-banner" style={{backgroundColor: '#0d4888'}}>
        <div className="banner-text">
          <h1 className="order-heading">Domino's online ordering</h1>
          <p className="deliver-message" id="delivery-text">Yummy pizza delivered fast & fresh</p>
          <a href="menu">
            <button>ORDER ONLINE NOW</button>
          </a>
        </div>
        <a href="#">
          <img
            src={header}
            alt="Food Delivery & Order Pizza Online"
            id="bannerImage"
          />
          <img
            src={banner}
            alt="Food Delivery & Order Pizza Online"
            id="higeneImage"
          />
        </a>
      </div>

      <div className="carousel-wrapper">
        <div className="offers" id="offers">
          <h2 className="carousel-title">Coupons & Offers</h2>
          <div className="offers-container">
            <div className="slides" id="slides">
              <img className="offers-slide" src={carousel1} alt="AmazonPay Offer" />
              <img className="offers-slide" src={carousel2} alt="Paytm Offer" />
              <img className="offers-slide" src={carousel3} alt="Airtel Offer" />
              <img className="offers-slide" src={carousel4} alt="Freecharge Offer" />
              <img className="offers-slide" src={carousel5} alt="Mobiwik Offer" />
              <img className="offers-slide" src={carousel6} alt="PayZapp Offer" />
              <img className="offers-slide" src={carousel7} alt="AU Bank Offer" />
              <img className="offers-slide" src={carousel8} alt="AmazonPay Offer" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <Row className="py-4">
        <Col className="text-center">
  <h3 style={{ color: 'grey', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Explore</h3>
</Col>

        </Row>
        <Row className="text-center">
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={menu} style={{ height: '150px' }} alt="Menu" />
              <Card.Body>
                <Card.Title>OUR MENU</Card.Title>
                <Card.Text>Explore our range of delicious Pizzas, delivered in 30 minutes!</Card.Text>
                <Button variant="primary">DISCOVER</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={store} style={{ height: '150px' }} alt="Store" />
              <Card.Body>
                <Card.Title>OUR STORES</Card.Title>
                <Card.Text>Find a store near you and enjoy your favorite pizza!</Card.Text>
                <Button variant="primary">DISCOVER</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={menu} style={{ height: '150px' }} alt="Menu" />
              <Card.Body>
                <Card.Title>OUR MENU</Card.Title>
                <Card.Text>Explore our range of delicious Pizzas, delivered in 30 minutes!</Card.Text>
                <Button variant="primary">DISCOVER</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={store} style={{ height: '150px' }} alt="Store" />
              <Card.Body>
                <Card.Title>OUR STORES</Card.Title>
                <Card.Text>Find a store near you and enjoy your favorite pizza!</Card.Text>
                <Button variant="primary">DISCOVER</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section>
        <AppImg />
      </section>
      <section>
      <div className="seo-content" id="seo-content">
      <h3 className="content-h3">Domino's Pizza: Delivering Happiness</h3>
      <p className="content-p">What’s better than having a crispy melty pizza, you ask?</p>
      <p className="content-p">Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.</p>
      <p className="content-p">With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.</p>
      <p className="content-p">There is something for everyone here. The vegetarians, non-vegetarians, the sides’ lovers and also the ones who love to have something sweet by the time they reach the last bite of the last slice of pizza slice.</p>
      <h3 className="content-h3">What We Need - More Choice. More Fun.</h3>
      <p className="content-p">No matter what the situation, pizza always helps. Especially a pizza that gives you the freedom to choose your toppings - from paneer, crisp capsicum, onion, grilled mushroom, golden corn, black olives, fresh tomato, red paprika, jalapeno, paneer tikka and extra cheese to non-veg toppings such as pepper barbeque chicken, peri-peri chicken, grilled chicken rasher, chicken sausage or chicken tikka- the options are almost endless, anything and everything you can think of that too on top of the crust of your choice - New hand-tossed crust, wheat thin crust, cheese burst crust, classic hand-tossed crust or a fresh pan pizza. Because just like a pizza, Domino's understands you.</p>
      <p className="content-p">And to shoo away those end-of-the-month blues while placing your order with our pizza restaurant, check out the everyday pizzas from pizza mania combos with everyday value offer of 2 pizzas starting at just ₹99 (regular size) and ₹199 (medium size) each.</p>
      <h3 className="content-h3">The promise of 30-minute Delivery</h3>
      <p className="content-p">The icing on the cake or more aptly the extra cheese on your already fabulous pizza is that Domino’s takes only half an hour for its pizza delivery service. Don’t believe us? Time it if you please. With 1250+ stores present all over India, you can have a Domino’s pizza even while traveling on a train. Yes, you are reading it right, you can enjoy pizza on train too.</p>
      <p className="content-p">So stop googling for the “pizza shops near me” and order from your nearest pizza outlet to have a hot box of pizza on your table in the next 30 minutes, or berth at the next halting station.</p>
      <h3 className="content-h3">Franchise Information</h3>
      <p className="content-p">Jubilant FoodWorks Limited is the Master Franchisee of Domino’s Pizza in India, Bangladesh, Sri Lanka and Nepal with sole and exclusive rights to own and operate Domino’s Pizza restaurants in these territories. For any franchise-related queries, kindly email us directly at dominos.franchise@jublfood.com</p>
      <p className="content-p">We have come across a few instances of fraudsters posing as Jubilant FoodWorks and asking for payment from gullible investors against the promise of a Domino’s franchise. We therefore caution and urge all interested parties to be careful and vigilant and interact only with the email id mentioned above. Anyone dealing with such fraudsters shall be doing so on their own peril, risk and consequences.</p>
      <p className="content-p">Neither Jubilant FoodWorks nor its Directors/Officers shall be responsible for any loss, harm, damage or fraud that occurs or may occur or arise to any person who decides to access such fake websites, or deal with them.</p>
    </div>
      </section>
    </div>
  );
}

export default Home;
