import { NavLink } from "react-router-dom";
import cake1 from '../images/cake/yemacake.jpg';
import cake2 from '../images/cake/dedicationcake.jpg';
import cake3 from '../images/cake/tallcake.jpg';
import cake4 from '../images/cake/blueberrycheesecake.jpg';
import cake5 from '../images/cake/fondantcake.jpg';
import cake6 from '../images/cake/minimalistcake.jpg';
import cake7 from '../images/cake/twotieredcake.jpg';

export const cakes = [
  {
    id: 1,
    cakename: 'Yema Cake',
    price: '7x3 round - Php 300',
    image: cake1,
    description: 'Soft vanilla cake covered in creamy pinoy classic yema frosting'
  },
  {
    id: 2,
    cakename: 'Dedication Cake',
    price: '7x3 round - Php 500',
    image: cake2,
    description: 'Custom made yummy cake with whipped cream frosting made special with your personalized message'
  },
  {
    id: 3,
    cakename: 'Customized Tall Cake',
    price: '7x6 round - Php 1,000',
    image: cake3,
    description: 'Customized flavor and design cake for your special events'
  },
  {
    id: 4,
    cakename: 'Blueberry Cheesecake',
    price: '8" round - Php 830',
    image: cake4,
    description: 'Rich and creamy baked cheesecake with just the right amount of sweetness'
  },
  {
    id: 5,
    cakename: 'Fondant Cake',
    price: '7x4 round - Php 1,500',
    image: cake5,
    description: 'Customized themed fondant cakes that is yummy and priced reasonably'
  },
  {
    id: 6,
    cakename: 'Minimalist Cake',
    price: '7x3 round - Php 500',
    image: cake6,
    description: 'Trending customized minimalist cakes for your loved ones'
  },
  {
    id: 7,
    cakename: 'Two-tiered Cake',
    price: '8x3 / 10x5 round - Php 3,000',
    image: cake7,
    description: 'Extravagant cake for your very special event specially made with care'
  }
]

function Cake() { 
  return (
    <div className="menu-container">   
      {
        cakes.map((item, index) => (
          <div className="product" key={index}>
            <img src={item.image} className="productimage"/>
            <span className='font-face'>
              <div className="product-details">
                <h2 className="product-name">{item.cakename}</h2><br></br>
                <p className="price-details">
                  {item.price} 
                  <br></br>

                </p>
                <NavLink to={item.id + ""}>
                  <p className="product-description">
                    Product details
                  </p>
                </NavLink>
              </div>
            </span>       
          </div>
        ))
      }     
    </div>
  )
}

export default Cake