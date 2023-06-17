import { createContext , useState } from "react"

export const context = createContext()

const { Provider } = context

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const isInCart = (id) => {
        const found = carrito.find (item => item.id === id);
        return found;  
    }

    const agregarProducto = (producto,cantidad) => {        
        isInCart(producto.id)
        ?
        setCarrito(carrito.map((prod) =>{
            if(prod.id === producto.id){
                prod.cantidad = cantidad
            }
            return prod
        }))
        :
        setCarrito([...carrito,{...producto,cantidad}])            
    
    }

    const eliminarProducto = (id) => {
        setCarrito (carrito.filter ((item) => item.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidad(0)
    }

    const valorContexto = { 
        carrito,
        cantidad,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
     }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider