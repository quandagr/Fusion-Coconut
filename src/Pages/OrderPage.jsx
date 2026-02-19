import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'


export const OrderPage = () => {
    const [name, setName] = useState("");
    const [order_details, setOrderDetails] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        alert(`Order submitted successfully!\nName: ${name}\nOrder Details: ${order_details}`);
        setName("");
        setOrderDetails("");
    }
        // Here you can add code to send the order details to your backend or database
  return (
    <div className="container mt-4"> <h1 className="text-center">Customer Order Form</h1>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="customer_name" className="form-label">Customer Name</label>
    <input type="text" className="form-control" id="customer_name" aria-describedby="customerNameHelp"value={name} onChange={(e) => setName(e.target.value)}/>
    <div id="customerNameHelp" className="form-text">Please enter your full name.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="order_text" className="form-label">Order Details</label>
    <textarea className="form-control" id="order_text" rows="3" aria-describedby="orderDetailsHelp" value={order_details} onChange={(e) => setOrderDetails(e.target.value)}></textarea>
    <div id="orderDetailsHelp" className="form-text">Please enter your order details.</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit Order</button>
</form>
    </div>

  )
}
