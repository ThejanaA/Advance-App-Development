// Payment.jsx
import React from "react";
import UserNav from "./UserNav"; // Import the UserNav component
import "./Payment.css";

function Payment() {
  return (
    <div>
      <UserNav /> {/* Include the UserNav component here */}
      <div className="payment-container">
        <div className="payment-card">
          <div className="payment-header">
            <h1 className="payment-title">Credit Card</h1>
          </div>
          <div className="payment-body">
            <div className="payment-input">
              <label className="payment-label" htmlFor="card-number">
                Card Number
              </label>
              <input
                className="payment-input-field"
                id="card-number"
                type="text"
                placeholder="**** **** **** ****"
              />
            </div>
            <div className="payment-input">
              <label className="payment-label" htmlFor="expiration-date">
                Expiration Date
              </label>
              <input
                className="payment-input-field"
                id="expiration-date"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className="payment-input">
              <label className="payment-label" htmlFor="cvv">
                CVV
              </label>
              <input
                className="payment-input-field"
                id="cvv"
                type="text"
                placeholder="***"
              />
            </div>
            <div className="payment-input">
              <label className="payment-label" htmlFor="cardholder-name">
                Cardholder Name
              </label>
              <input
                className="payment-input-field"
                id="cardholder-name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <button className="payment-button">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
