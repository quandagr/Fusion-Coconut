import React from 'react'

import { Link } from 'react-router-dom'


export const Home = () => { 
    return (
        <div className="home-container" style={{ padding: '20px', margin: '20px' }}>
            <h1>Welcome to Fusion-Coconut!</h1>
            <p>Experience a delightful blend of flavors from around the world at Fusion-Coconut. Our menu features a unique fusion of international cuisines, crafted with fresh ingredients and a touch of creativity. Whether you're craving a hearty breakfast, a satisfying lunch, or a delicious dinner, we have something for everyone. Join us for an unforgettable dining experience that will tantalize your taste buds and leave you wanting more!</p>
            <img src="/public/international.png"alt="International Cuisine" style={{ width: '100%', height: 'auto', marginTop: '20px' }} />
            <div style={{ marginTop: '20px' }}>
                <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
                </div>
                </div>
                )
                }
                

  

