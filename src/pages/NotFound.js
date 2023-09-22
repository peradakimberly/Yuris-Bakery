import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>Not Found!</h2>
        <NavLink to='/'>Go Back to Home Page</NavLink>
    </div>
  )
}

export default NotFound
