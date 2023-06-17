import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CustomProvider"

const CartWidget = () => {

    const {carrito} = useContext(context)

    let itemsInCart = 0

    carrito.map((item) => {
        itemsInCart = itemsInCart + item.cantidad
    })

    return      <div> 
                    <Link to="/cart"> 
                        <span className="material-icons">shopping_cart</span>
                        {itemsInCart}
                    </Link>
                </div>
}

export default CartWidget;