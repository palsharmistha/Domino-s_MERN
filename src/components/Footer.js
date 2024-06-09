import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer()
{
    return(
      <div>
      <section className='footer'>
          <Container>
              <Row className='text-center py-5'>
               <Col sm={3}>
                <h4>MENU</h4>
                <ul>
                  <a href="#"><li>Veg Pizza</li></a>
                  <a href="#"><li>Chicken Pizza</li></a>
                  <a href="#"><li>Pasta Pizza</li></a>
                  <a href="#"><li>Pizza Crust</li></a>
                  <a href="#"><li>Burger Pizza</li></a>
                </ul>
               </Col>
                <Col sm={3}>
                <h4>PIZZA RESTAURANTS</h4>
                <ul>
                  <a href="#"><li>Restaurants Near Me</li></a>
                  <a href="#"><li>Pizza Near Me</li></a>
                  <a href="#"><li>Food Near Me</li></a>
                  <a href="#"><li>Food Delivery</li></a>
                  <a href="#"><li>Italian Food</li></a>
                </ul>
               </Col>
  
               <Col sm={3}>
                <h4>ABOUT</h4>
                <ul>
                  <a href="#"><li>Gift Card</li></a>
                  <a href="#"><li>Card Balance Enquiry</li></a>
                  <a href="#"><li>FAQ</li></a>
                  <a href="#"><li>Virtual Pizza Party</li></a>
                  <a href="#"><li>E-Gift Vouchers</li></a>
                </ul>
                </Col>
                <Col sm={3}>
               <h4>SOCIAL MEDIA</h4>
               <ul className='icons'>
                  <a href="#"><FacebookIcon /></a>
                  <a href="#"><YouTubeIcon/></a>
                  <a href="#"><InstagramIcon/></a>
                  <a href="#"></a>
                </ul>
                </Col>
              </Row>
          </Container>
          <hr style={{color:'white',border:'1px solid white'}}/>
          <h6 style={{color:'white',textAlign:'center'}}>Copyright Reserved @2024 Sharmistha Pal</h6>
        </section>
      </div>

    )
}


export default Footer