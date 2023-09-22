import { NavLink } from "react-router-dom";
import pastry1 from '../images/pastry/vanilacupcake.jpg';
import pastry2 from '../images/pastry/castella.jpg';
import pastry3 from '../images/pastry/bananapie.jpg';
import pastry4 from '../images/pastry/brownies.jpg';
import pastry5 from '../images/pastry/caramelcupcake.jpg';
import pastry6 from '../images/pastry/cheesecupcake.jpg';
import pastry7 from '../images/pastry/bananacupcake.jpg';
import pastry8 from '../images/pastry/melonbread.jpg';

export const pastries = [
  {
    id: 1,
    pastryname: 'Vanilla Cupcake',
    price1: 'Box of 12 - Php 200',
    price2: 'Box of 6 - Php 110',
    image: pastry1,
    description: 'Fluffy cupcake topped with vanilla frosting with fun and colorful sprinkles'
  },
  {
    id: 2,
    pastryname: 'Castella',
    price1: '6 x 6 inch - Php 230',
    price2: '6 x 3 inch - Php 130',
    image: pastry2,
    description: 'Very moist japanese sponge cake flavored with honey'
  },
  {
    id: 3,
    pastryname: 'Mini Banana Pie',
    price1: 'Box of 6 - Php 210',
    price2: '',
    image: pastry3,
    description: 'Creamy pudding with sliced sweet bananas in perfectly made buttery pie crust'
  },
  {
    id: 4,
    pastryname: 'Brownies',
    price1: 'Box of 9 - Php 250',
    price2: '',
    image: pastry4,
    description: 'Fudgiest chocolate brownies with crunchy and crackly top'
  },
  {
    id: 5,
    pastryname: 'Caramel Cupcake',
    price1: 'Box of 12 - Php 220',
    price2: 'Box of 6 - Php 130',
    image: pastry5,
    description: 'Fluffy cupcake topped with caramel frosting and drizzled with yummy caramel'
  },
  {
    id: 6,
    pastryname: 'Cheese Cupcake',
    price1: 'Box of 12 - Php 220',
    price2: 'Box of 6 - Php 130',
    image: pastry6,
    description: 'Light and fluffy milky and cheesy cupcakes'
  },
  {
    id: 7,
    pastryname: 'Banana Cupcake',
    price1: 'Box of 12 - Php 200',
    price2: 'Box of 6 - Php 120',
    image: pastry7,
    description: 'Special home-made rich and fluffy banana cupcakes'
  },
  {
    id: 8,
    pastryname: 'Melon Bread',
    price1: 'Box of 5 - Php 150',
    price2: '',
    image: pastry8,
    description: 'Soft bread covered in yummy melon flavored cookie'
  },
];

function Pastry() {
  return (
    <div className="menu-container">   
      {
        pastries.map((item, index) => (
          <div className="product" key={index}>
            <img src={item.image} className="productimage"/>
            <span className='font-face'>
              <div className="product-details">
                <h2 className="product-name">{item.pastryname}</h2><br></br>
                <p className="price-details">
                  {item.price1} <br></br>
                  {item.price2} 
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

export default Pastry;