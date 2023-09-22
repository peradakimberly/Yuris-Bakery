import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <header>
          <span className='font-face'>
            <nav>           
              <div className='logo'>
                <NavLink to='/'><h1>Yuri's Bakery</h1></NavLink>
              </div>
              <div className='navigation'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='menu/pastry'>Menu</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='contact'>Contact</NavLink>
              </div>                                          
            </nav>
          </span> 
        </header>   
        <main>
            <Outlet />
        </main> 
    </div>
  )
}

export default RootLayout