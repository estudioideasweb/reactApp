import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (         
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark ml-auto" style={{width:"100%"}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{marginRight:"100%"}} id="navbarScroll">
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home<span className="sr-only"></span>
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Categories
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to="/category/electronics">electronics
                            </NavLink>
                            </li>
                            <li><NavLink className="dropdown-item" to="/category/jewelery">jewelery
                            </NavLink>
                            </li>
                            <li><NavLink className="dropdown-item" to="/category/men's clothing">men's clothing
                            </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </nav>
            )
}

export default Nav;