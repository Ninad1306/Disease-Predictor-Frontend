import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        if(props.name!='Disease Prediction' && props.name!='Hospitals and Clinics' && props.name!='Select Symptoms'){
            setIsVisible(true)
        }
      },[])

      const clickHandler = () => {
        props.back_btn()
      }
    return (
        <div className="navbar">
            <h1 className='header' class='text-[32px] font-bold	my-2.5'>{props.name}</h1>
            <span>
                <Link to={'/'} className='link'>Home</Link>
                {isVisible && <p onClick={clickHandler} className='bk_btn'>back</p>}
            </span>
        </div>
    )
}

export default Navbar