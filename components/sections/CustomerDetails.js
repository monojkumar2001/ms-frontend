import Link from "next/link";
import React from "react";

function CustomerDetails() {
  return (
    <div className="customer-details-wrapper">
      <form action="">
        <div className="selected-service-header-left">
          <span>02</span>
          <div className="selected-title">
            <h1>Customer  Details </h1>
          </div>
        </div>
        <div className="customer-form-input-con">
          <div className="customer-fullname">
            <div className="customer-from-input">
              <label htmlFor="">First name</label>
              <input type="text" name="" id="" />
            </div>
            <div className="customer-from-input">
              <label htmlFor="">Last name</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Your Role</label>
            <input type="text" name="" id="" />
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Cellphone/Whatsapp (optional)</label>
            <input type="number" name="" id="" />
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Confirm Password</label>
            <input type="text" name="" id="" />
          </div>
          <div className="customer-form-input-submit">
            <div className="customer-form-content">
                <input type="radio" />
                <p>By creating an account, you agree to our Terms of Services and Privacy Policy. Already a member? Sign In</p>
            </div> 
            <div className="customer-form-submit-btn">
               <Link href="/payment">
               <button>Continue To payment</button>
               </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerDetails;
