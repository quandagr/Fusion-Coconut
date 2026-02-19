import React from 'react'
import { useEffect } from 'react'
import { supabase } from '../services/supabase'
import { useState } from 'react'

export const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('menu_items')
                .select('*')
            if (error) {
                console.error('Error fetching menu items:', error);
            } else {
                console.log('Menu items:', data);
                setMenuItems(data);
            }
        };
        fetchData();


    }, []);
const breakfastItems = menuItems.filter(item => item.category === 'Breakfast');
// console.log('Breakfast items:', breakfastItems);
const lunchItems = menuItems.filter(item => item.category === 'Lunch');
// console.log('Lunch items:', lunchItems);
const dinnerItems = menuItems.filter(item => item.category === 'Dinner');
// console.log('Dinner items:', dinnerItems);
const drinksItems = menuItems.filter(item => item.category === 'Drinks');
// console.log('Drinks items:', drinksItems);  
const PriceItems = menuItems.filter(item => item.category === 'Price');

  return (
    <div className="menu-container"  style={{ padding: '20px', margin: '20px' }}>
        <h1 className=''>Fusion-Coconut Menu</h1>
    <h2>Breakfast</h2>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {/* .map will alway be in a array */}
      {breakfastItems.map(item => ( 
        <div key ={item.id} className='col'>
        <div className='card h-100'>
            <img src={item.image_url} className='card-img-top' alt={item.name} />
            <div className='card-body'>
            <div className='card 
text-center'>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            </div>
</div>
            </div>
        </div>
      ))}
      </div>
      <h2>Lunch</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
      {lunchItems.map(item => (
         <div key ={item.id} className='col'>
        <div className='card h-100'>
            <img src={item.image_url} className='card-img-top' alt={item.name} />
            <div className='card-body'>
            <div className='card 
text-center'>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            </div>

            </div>
        </div>
        </div>
      ))}
      </div>
      <h2>Dinner</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
      {dinnerItems.map(item => (
         <div key ={item.id} className='col'>
        <div className='card h-100'>
            <img src={item.image_url} className='card-img-top' alt={item.name} />
            <div className='card-body'>
            <div className='card 
text-center'>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            </div>

            </div>
        </div>
        </div>
      ))}
      </div>
        <h2>Drinks</h2>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
      {drinksItems.map(item => (
         <div key ={item.id} className='col'>
        <div className='card h-100'>
           <img src={item.image_url} className='card-img-top' alt={item.name} />
            <div className='card-body'>
            <div className='card 
text-center'>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            </div>

            </div>
        </div>
        </div>
      ))}
      </div>
      </div>
       
  )
}
