import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import nonveg1 from '../Images/nonveg_pizza (1).png';
import nonveg2 from '../Images/nonveg_pizza (2).png';
import nonveg4 from '../Images/nonveg_pizza (4).png';
import veg2 from '../Images/veg_pizza (2).png';
import veg3 from '../Images/veg_pizza (3).png';
import veg4 from '../Images/veg_pizza (4).png';
import veg5 from '../Images/veg_pizza (5).png';
import veg6 from '../Images/veg_pizza (6).png';
import img7 from '../Images/veg_pizza (7).png';
import { UserContext } from '../Pages/UserContext';
import '../styles/Order.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const pizzas = [
  { name: 'FRESH VEGGIE', type: 'Veg', imgSrc: img7, description: 'Onion & Capsicum', price: 250 },
  { name: 'NON VEGGIE DELIGHT', type: 'Non-Veg', imgSrc: nonveg1, description: 'Chicken & Capsicum', price: 500 },
  { name: 'MARGHERITA', type: 'Veg', imgSrc: veg2, description: 'A hugely popular margherita, with a deliciously tangy single cheese topping', price: 200 },
  { name: 'CHICKEN DOMINATOR', type: 'Non-Veg', imgSrc: nonveg4, description: 'Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers', price: 550 },
  { name: 'PEPPY PANEER', type: 'Veg', imgSrc: veg3, description: 'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!', price: 300 },
  { name: 'CHICKEN TIKKA', type: 'Non-Veg', imgSrc: nonveg2, description: 'Chicken Tikka & Red Paprika', price: 450 },
  { name: 'INDI TANDOORI PANEER', type: 'Veg', imgSrc: veg4, description: 'Tandoori paneer with capsicum and red paprika topped with mint mayo', price: 350 },
  { name: 'MEXICAN GREEN WAVE', type: 'Veg', imgSrc: veg5, description: 'Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno', price: 375 },
  { name: 'VEG EXTRAVAGANZA', type: 'Veg', imgSrc: veg6, description: 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese', price: 400 },
];

function Order() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [filter, setFilter] = useState('All');
  const { user } = useContext(UserContext);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const filteredPizzas = pizzas.filter(pizza => filter === 'All' || pizza.type === filter);

  const addToCart = (itemName, itemPrice) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.name === itemName);
      if (existingItemIndex !== -1) {
        const updatedCartItems = prevCartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              amount: (item.quantity + 1) * itemPrice
            };
          }
          return item;
        });
        return updatedCartItems;
      } else {
        return [...prevCartItems, { name: itemName, price: itemPrice, quantity: 1, amount: itemPrice }];
      }
    });
  };

  const checkout = async () => {
    if (!user) {
      alert('Please log in to checkout.');
      return;
    }

    try {
      const orderDetails = {
        userId: user._id,
        items: cartItems.map((item, index) => ({
          index: index + 1,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount
      };

      const response = await axios.post('http://localhost:8000/checkout', orderDetails);

      if (response.status === 200) {
        alert('Thank you for your purchase!');
        setCartItems([]);
        setTotalAmount(0);
      } else {
        alert('There was a problem with your order. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred during checkout. Please try again.');
    }
  };

  return (
    <div className="order-container">
      <div className="menu-add" id="menu-add">
        <h1>Domino's Pizza Menu</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" onClick={() => setFilter('Veg')}>Veg</button>
            <button className="dropdown-item" onClick={() => setFilter('Non-Veg')}>Non Veg</button>
            <button className="dropdown-item" onClick={() => setFilter('All')}>All</button>
          </div>
          <span id="selectedOption">{filter}</span>
        </div>
        <div className="menu-container">
          {filteredPizzas.map((pizza, index) => (
            <div className={`pizza-item ${pizza.type}`} key={index}>
              <img src={pizza.imgSrc} alt={`${pizza.name} Pizza`} />
              <h3>{pizza.name}</h3>
              <p style={{ fontSize: 'smaller' }}>{pizza.description}</p>
              <p>Rs.{pizza.price}</p>
              <button onClick={() => addToCart(pizza.name, pizza.price)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {index + 1}. {item.name} - Quantity: {item.quantity}, Price: Rs.{item.price}, Amount: Rs.{item.amount}
            </li>
          ))}
        </ul>
        <h3>Total Amount: Rs.{totalAmount}</h3>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}

export default Order;
