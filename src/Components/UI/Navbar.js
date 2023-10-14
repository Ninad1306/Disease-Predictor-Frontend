import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <h1 className='header'>{props.name}</h1>
            <Link to={'/'} className='link'>Home</Link>
        </div>
    )
}

export default Navbar