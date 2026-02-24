import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabase";


    export const Chatbot = () => {
     const [input, setInput] = useState("");
    const [products, setProducts] = useState("");

        const url = import.meta.env.VITE_SUPABASE_URL;
        const Token = import.meta.env.VITE_TOKEN;
       

     const getProducts = async () => {
      const url = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        
            const response = await fetch(url, {
                method:"GET",
                headers: {
                    "apikey": supabaseKey,
                    // "Content-Type": "application/json",
                },
            })
            const data = await response.json();
        let prods=""
        data.forEach((prod) => {
            prods += `Name: ${prod.name}, Price: ${prod.price}\n`;
        });
        setProducts(prods);
    };

    useEffect(() => {
     getProducts();

     },[]);

    
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  
  const onChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

const [loading, setLoading] = useState(false);

const instructions = `
You're a helpful waiter for a restaurant called Fusion-Coconut. You can answer questions about the menu, hours, and location. If you don't know the answer, say you don't know.
Here is the menu:
${products}


You are going to take the orders from the customers and save them in a database. The orders should be in the following format:
Customer Name: [customer name]
Order Details: [order details]
When you receive an order, you should save it in the database and respond with a confirmation message that includes the customer's name and the order details. If the order is not clear, ask the customer for clarification.
Always respond with a confirmation message that includes the customer's name and the order details. If the order is not clear, ask the customer for clarification. Always confirm the order with the customer before saving it in the database. If the customer asks for something that is not on the menu, politely inform them that it's not available and suggest something else from the menu.
Give the list of the specials of the day if the customer asks for it. If there are no specials, respond with "There are no specials today."
When the customer is done ordering, respond with a message that says "Thank you for your order! Your food will be ready soon." and save the order in the database. Give the customer an estimated time for when their food will be ready based on the current orders in the database. If the customer asks for the restaurant's hours or location, provide that information as well. Always be polite and helpful in your responses.
Give a summary of the current orders in the database, including the customer's name and the order details. If there are no current orders, respond with "There are no current orders in the database."Give the total of the current orders in the database. If there are no current orders, respond with "There are no current orders in the database and the total is $0."
Thank the customer for their order and let them know that their food will be ready soon. If the customer asks for the restaurant's hours or location, provide that information as well. Always be polite and helpful in your responses.

Format the orders in the database as follows: Only include the customer's name and the order details. Do not include any other information such as the date or time of the order. The format should be: in plain text, with each order on a new line, and the customer's name and order details separated by a colon. For example: Alecya : 1 burger, 1 fries, 1 soda
Don't use any formatting such as markdown or HTML in your responses. Only respond with plain text. Do not include any code snippets or special characters in your responses. Always respond with plain text that is easy to read and understand. Do not include any non-text characters in your responses. Always be polite and helpful in your responses.
Do include emojis in your responses to make them more friendly and engaging. Use emojis that are relevant to the restaurant industry, such as food and drink emojis, to enhance the customer experience. Always use emojis in a way that complements your responses and adds to the overall tone of your messages. Do not overuse emojis or use them in a way that is inappropriate or unprofessional. Always be polite and helpful in your responses, while also using emojis to create a friendly and welcoming atmosphere for the customers.
`;



  const onSubmitForm = async (event) => {
        const url = import.meta.env.VITE_GEMINI_URL;
        const Token = import.meta.env.VITE_TOKEN;

       event.preventDefault();

        const history = messages.concat();
        // history.push({ role: "system", content: instructions });
        history.push({ role: "user", text: question });
        setMessages(history);

        setQuestion("");
        // event
    setLoading(true);

    const apiHistory = history.map(item => ({
        role: item.role, 
        parts: [{ text: item.text }]
    }));
    console.log(apiHistory);
    
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'x-goog-api-key':Token,
        },
        body: JSON.stringify({
            // model: "gemini-1.5-pro",
            contents: apiHistory,
            system_instruction: {
                parts: [{ text: instructions }]
            },
         
        })
    });

    
const data = await result.json();
    console.log(data);
        if (!result.ok) {
            console.error("Error:", data);
            setLoading(false);
            return;
        }
    const answer = data.candidates[0].content.parts[0].text;
    console.log(answer);
    const response = { role: "model",text: answer };
    // const response = {
    //     role: "model",
    //
    history.push(response);

    setMessages(history);

    setLoading(false);

    
   }; 
  
  return (
    <div className="container mt-4">
      <h1 className="text-center">Chatbot</h1>
      <p className="text-center">
        Ask me anything about our menu, hours, or location!</p>

      <form onSubmit={onSubmitForm}>
        <label>Chat History</label>
        <div className="mt-4 mb-3">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <strong>{message.role}:</strong> {message.text}
            </div>
            
          ))}
        </div>
        {loading && <p>Loading...</p>}
        <input
          type="text"
          className="form-label"
          value={question}
          onChange={onChangeQuestion}
          placeholder="Ask me a question"
        />
        <button className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
    );
};
    

    export default Chatbot;