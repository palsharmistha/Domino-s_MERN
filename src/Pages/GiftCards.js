import React from "react";
import "../styles/GiftCard.css";
import giftCardImage from "../Images/giftcardbanner.png"; // Import your gift card image
import eGiftVoucherImage from "../Images/egiftvoucher.png"; // Import your e-gift voucher image
import giftCard from "../Images/giftcard.png"; // Import your gift card image

function GiftCards() {
  return (
    <div>
      {/* Front of the gift card */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <img src={giftCardImage} alt="Gift Card" />
</div>
      
      {/* Back of the gift card */}
      <p style={{ fontWeight: 'bolder', color: 'darkblue', fontSize: '30px', textAlign: 'center' }}>GIFT DELICIOUS MOMENTS WITH DOMINO'S PIZZA GIFTING SOLUTIONS</p>

      <div className="gift-cards-container"> 
      <div className="gift-card-content">
        <div className="row">
          {/* Left side */}
          <div className="col">
            <img src={eGiftVoucherImage} alt="E-Gift Voucher" />
            <p>E-GIFT VOUCHER</p>
            <p>Confused thinking about what to gift your family & friends on every festival? Be it any occasion, bring a smile on everyone's face by gifting them a Domino's Pizza E-Gift Voucher. This can be redeemed on the Mobile Site or the Mobile App.</p>
          </div>
          
          {/* Right side */}
          <div className="col">
            <img src={giftCard} alt="Gift Card" />
            <p>GIFT CARD</p>
            <p>Discover the joy of gifting with Domino's Pizza Gift Card. Gift Cards are redeemable at all the Domino's Pizza outlets, Mobile Site & Mobile App & can be easily reloaded whenever anyone is hungry.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GiftCards;

