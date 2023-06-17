import React, {useState} from 'react';

const ItemCount = ({id, count, initial, onAdd}) => {
    
    const [cantidad , setcantidad] = useState (initial);

    const aumentarContador = () =>{
        if (cantidad < count){
        setcantidad ( cantidad + 1 )
        }
    }

    const reduceContador = () =>{
        if (cantidad > initial) {
        setcantidad (cantidad - 1)
        }    
    }

    const confirmar = () => {
        onAdd(cantidad, id)
    }

    return  (
            <>
            <div className='text-center counter'>
                <span>
                    <button onClick={reduceContador}>-</button>            
                </span>
                <span>{cantidad}</span>
                <span>
                <button onClick={aumentarContador}>+</button>
                </span>
            </div>
            <button className="btn btn-outline-dark mt-auto btnAddCart" disabled={count<initial} onClick={confirmar}>Agregar al carrito</button>        
            </>
    )
}

export default ItemCount;
