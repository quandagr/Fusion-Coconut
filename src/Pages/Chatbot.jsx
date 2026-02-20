import React, { useState} from 'react'
import { supabase } from '../services/supabase'
        
        
export const Chatbot = () => {
const apiAccount = import.meta.env.VITE_API_CLOUD_FARE_ACCOUNT;
const apiToken = import.meta.env.VITE_API_CLOUD_FARE_TOKEN;
const apiModel = import.meta.env.VITE_API_CLOUD_FARE_MODEL;

    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const[input, setInput] = useState("");

  async function handleSubmit(event) {
        event.preventDefault();
const response = await
        fetch(`https://api.cloudflare.com/client/v4/accounts/${apiAccount}/ai/run/${apiModel}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: input
        })
    })
    .then(response => response.json())
    .then(data => {
        setResponse(data.response);
    })
    .catch(error => {
        console.error("Error:", error);
    });
  }
  return (
    <div className="container mt-4">
        <h1 className="text-center">Chatbot</h1>
            <p className="text-center">Ask me anything about our menu, hours, or location!</p>

<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea className="form-control" id="message" rows="3" aria-describedby="messageHelp"value={input} onChange={(e) => setInput(e.target.value)}/>
    <div id="messageHelp" className="form-text">Please enter your message.</div>
  </div>
  <button type="submit" className="btn btn-primary">Send</button>
</form>
    </div>
  )
}
