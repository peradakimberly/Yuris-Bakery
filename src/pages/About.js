import yuriyum from '../images/yuriyum1.png'

function About() {
    return (
      <div className='menu-layout'>
      <span className='font-face'>
          <div className='menu-navigation'>
            <h2 className='menu-about-content'>About</h2>    
          </div> 
          <div className='about'>
            <p>
            Welcome to Yuri's Bakery, where sweet dreams come true!<br></br>
            <br></br>
            At Yuri's Bakery, we are passionate about crafting delectable treats that will satisfy your cravings 
            and leave you wanting more. From artisanal bread to mouthwatering pastries and delightful cakes, we 
            specialize in creating baked goods that are made with love and attention to detail.<br></br>
            <br></br>
            Our journey began with a simple desire, to bring joy to people's lives through the irresistible magic of 
            baked delights. With years of experience, we have perfected our recipes to ensure every bite is a 
            delightful experience. We use only the finest ingredients, sourced locally whenever possible, to ensure 
            the highest quality and taste in every bite.<br></br>
            <br></br>
            Browse through our mouthwatering menu, featuring an array of delectable options to satisfy any craving.
            Whether you're celebrating a special occasion or simply treating yourself to a little sweetness, 
            Yuri's Bakery is here to make your day a little brighter. Join us on this delightful journey of taste 
            and texture, and let us create unforgettable moments for you and your loved ones!
            </p>
          </div>        
          <div className='yuriyum'>
            <img src={yuriyum} width={130}/>
          </div>       
      </span>
      
    </div>
    )
  }
  
  export default About