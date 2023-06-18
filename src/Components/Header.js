import React from 'react';
import CartWidget from './CartWidget'
import Nav from './NavBar';

const Header = () => {
    return (
        <header style={{ width: "100%" }}>
            <div class="p-3 border-bottom" style={{ width: "100%" }}>
                <div class="container" style={{ width: "100%" }}>
                    <div class="row gy-3" style={{ width: "100%" }}>
                        <div class="col-lg-2 col-sm-8 col-8 headerTitulo" style={{marginRight:"-50", marginLeft:"-50"}}>
                            <h1>DeTodo.com</h1>
                        </div>
                        <div class="order-lg-last col-lg-5 col-sm-8 col-8" style={{marginRight:"-100px"}}>
                            <div class="d-flex float-end" >
                                <CartWidget />
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 col-12">
                            <div class="input-group float-center">
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Nav />
        </header>
    )
}

export default Header;