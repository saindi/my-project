import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function OrderDetails() {
    const { orderId } = useParams();
    const location = useLocation();
    const orderData = location.state;

    if (!orderData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="order-body">
            <h2 className="form-title">Thank you for your order!</h2>

            <div className="m-4">
                <h1>Order Details</h1>
                <p>Order ID: {orderId}</p>
                <p>Customer: {orderData.customer}</p>
                <p>Address: {orderData.address}</p>
                <p>Phone:{orderData.phone}</p>
                <p>Priority: {orderData.priority ? 'Yes' : 'No'}</p>
                <p>Estimated Delivery:{orderData.estimatedDelivery}</p>
                <p>Total Price: €{orderData.orderPrice}</p>
                <p>Status: {orderData.status}</p>
            </div>
        </div>

    );
}

export default OrderDetails;
