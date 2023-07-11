import React from "react";
import Link from "next/link";
function PaymentInformation() {
  return (
    <div className="customer-details-wrapper">
      <form action="">
        <div className="selected-service-header-left">
          <div className="selected-title">
            <h1>Selected Service</h1>
            <p>
              All transactions are secure and encrypted. Credit card information
              is never stored on our servers.
            </p>
          </div>
        </div>
        <div className="payment-information-credit-card">
          <span>
            <input type="radio" /> Credit Card
          </span>
          <img src="assets/oder-details/credit-card-img.svg" alt="" />
        </div>
        <p>Pay Securely using credit card</p>
        <div className="customer-form-input-con">
          <div className="customer-from-input">
            <label htmlFor="">Name On Card</label>
            <input type="text" />
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Card No</label>
            <input type="text" />
          </div>
          <div className="payment-form-input-item-con">
            <div className="customer-from-input">
              <label htmlFor="">Expiry (MM/YY)</label>
              <input type="text" placeholder="MM / YY" />
            </div>
            <div className="customer-from-input">
              <label htmlFor="">Card No</label>
              <input type="text" placeholder="CVC" />
            </div>
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Address</label>
            <input type="text" />
          </div>
          <div className="payment-form-input-item-con">
            <div className="customer-from-input">
              <label htmlFor="">City</label>
              <input type="text" />
            </div>
            <div className="customer-from-input">
              <label htmlFor="">State</label>
              <input type="text" />
            </div>
          </div>
          <div className="payment-form-input-item-con">
            <div className="customer-from-input">
              <label htmlFor="">County</label>
              <input type="text" />
            </div>
            <div className="customer-from-input">
              <label htmlFor="">Zip/Postal Code</label>
              <input type="text" />
            </div>
          </div>
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <Link href="/">privacy policy.</Link>
          </p>
          <button className="complete-payment-btn">Complete Payment</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentInformation;
