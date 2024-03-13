import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='bg-primary py-2 '>
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <div className="nav-logo">
                        <a href="#!" className="nav-brand">
                            <img src="./assets/images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="register-btn">
                        <Link to='/' className='btn-white !flex items-center gap-2'><img src="./assets/images/building.png" alt="" /> Register</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar