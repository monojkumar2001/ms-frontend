import AppLayout from "../components/layout/AppLayout";
import PaymentInformation from "../components/sections/PaymentInformation";
import OrderPlan from "../components/sections/OrderPlan";
function Payment() {
  return (
    <>
         <div className="order-details">
        <div className="container">
        <div className="order-details-wrapper">
        <div className="order-details-left">
             <PaymentInformation/>
            </div>
            <div className="order-details-right">
              <OrderPlan/>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}
Payment.layout = AppLayout;
export default Payment