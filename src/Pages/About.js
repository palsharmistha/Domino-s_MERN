import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import aboutimg from '../Images/virtual_pizza_party.png'

function About() {
  return (
    <div>
    <section className='About'>
      <Container>
        <Row className='text-center py-1'>
          <h2 style={{color:'red',textDecoration:'underline',fontFamily:'fantasy'}}>WHO WE ARE</h2>
        </Row>
        <hr/>
        <Row>
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
        </Row>
        <Row>
          <img src={aboutimg} height={400} style={{paddingBottom:'20px'}}></img>
        </Row>
      </Container>
    </section>
</div>
  )
}

export default About