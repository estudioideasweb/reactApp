import React from 'react';

import CartWidget from './CartWidget'

import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (         
                <nav className="aboutusHeader__nav navbar navbar-expand-lg navbar-light">
                <div className="encabezado justify-content-center ">
                    <div className="headerTitulo one">
                        <h1>DeTito.com</h1>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav navbar-nav-scroll">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio<span className="sr-only"></span>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Categorias
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
                <div>
                <CartWidget/>
                </div>
            </nav>
            )
}

export default Nav;