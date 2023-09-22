import { NavLink, Outlet } from 'react-router-dom'

function MenuLayout() {
  return (
    <div className='menu-layout'>
      <span className='font-face'>
          <div className='menu-navigation'>
            <h2 className='menu-about-content'>Menu</h2>
              <NavLink to='pastry'><h2>Pastries</h2></NavLink>
              <NavLink to='cake'><h2>Cakes</h2></NavLink>
          </div> 
      </span>
        <Outlet />
    </div>
  )
}

export default MenuLayout