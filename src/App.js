import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Menu from './Pages/Menu';
import Orders from './Pages/Orders';
import Footer from './components/Footer';
import { UserProvider } from './Pages/UserContext'; // Import UserProvider
import GiftCards from './Pages/GiftCards';
function ComponentWithTopMargin({ children }) {
  return (
    <div style={{ marginTop: '50px' }}> {/* Adjust the margin top based on the height of your fixed header */}
      {children}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <ComponentWithTopMargin></ComponentWithTopMargin>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
