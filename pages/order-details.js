import React from 'react'
import AppLayout from "../components/layout/AppLayout";
import SelectedService from '../components/sections/SelectedService';
import CustomerDetails from '../components/sections/CustomerDetails';
import OrderPlan from '../components/sections/OrderPlan';
function OrderDetails() {
  return (
    <>
     <div className="order-details">
        <div className="container">
         <div className="order-details-wrapper">
         <div className="order-details-left">
                <SelectedService/>
                <CustomerDetails/>
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
OrderDetails.layout = AppLayout;
export default OrderDetails