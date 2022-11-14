import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import Logo from '../../images/logo.png'
import {links} from '../../data'
import './navbar.css'


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
        <div className="container nav-container">
            {/* logo */}
            {/* <a href=""></a> */}
            <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                {
                    links.map( ({name, path}, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                                onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            {/* nav links */}
            <button className='nav-toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
            </button>
            {/* nav buttons */}


        </div>
    </nav>
  )
}

export default Navbar