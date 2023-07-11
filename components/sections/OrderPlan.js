import React from "react";

function OrderPlan() {
  return (
    <>
      <div className="order-plan-wrapper">
        <div className="order-plan-header">
          <div className="oder-plan-item">
            <h4>Your Plan</h4>
            <p>Team (base plan)</p>
          </div>
          <div className="oder-plan-item">
            <h5 className="order-plan-foucs">Change Plan</h5>
            <h4>$998.00</h4>
          </div>
        </div>
        <div className="order-multimedia">
          <h3>Multimedia Specialist</h3>
          <span>
            <svg
              width="21"
              height="26"
              viewBox="0 0 21 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 22H0V22.5H0.5V22ZM20.3536 22.3536C20.5488 22.1583 20.5488 21.8417 20.3536 21.6464L17.1716 18.4645C16.9763 18.2692 16.6597 18.2692 16.4645 18.4645C16.2692 18.6597 16.2692 18.9763 16.4645 19.1716L19.2929 22L16.4645 24.8284C16.2692 25.0237 16.2692 25.3403 16.4645 25.5355C16.6597 25.7308 16.9763 25.7308 17.1716 25.5355L20.3536 22.3536ZM0 0V22H1V0H0ZM0.5 22.5H20V21.5H0.5V22.5Z"
                fill="black"
              />
            </svg>
            Web and App Designer
          </span>
          <div className="order-apply-btn">
            <button>
              <p>promo</p>
              <span>APPLY</span>
            </button>
          </div>
        </div>
        <div className="order-subtotal-item">
          <p>Subtotal</p>
          <p>
            $<span>799</span>/mo
          </p>
        </div>
        <div className="order-total-item">
          <p>Total (USD)</p>
          <p>
            <span>$799</span>
          </p>
        </div>
      </div>
      <div className="order-secured">
        <img src="assets/oder-details/stripe.svg" alt="" />
        <p>Secured By Stripe</p>
      </div>
    </>
  );
}

export default OrderPlan;
