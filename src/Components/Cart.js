import { db } from "../Firebase"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { useContext } from "react"
import { context } from "./CustomProvider"
import validator from "validator"
import { toast } from "react-toastify"

const Cart = () => {

    const [loading, setLoading] = useState(false)
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const { carrito , eliminarProducto , vaciarCarrito } = useContext(context)
    const [error, setError] = useState("")

    const guardarCompra = async () => {

        const valida = validator.isEmail(email)

        if(valida){
                setLoading(true)
                const orden = {
                                productos: carrito,
                                usuario: {
                                    nombre,
                                    email,
                                    telefono,
                                },
                                total: itemsInCartPrice
                }

                const ordenesCollection = collection(db, "ordenes")

                const referencia = await addDoc(ordenesCollection, orden)

                const id = referencia.id
                setLoading(false)
                setId(id)
                vaciarCarrito()
                setNombre("")
                setEmail("")
                setTelefono("")
                setError("")
                toast.success("Compra realizada con exito!")
        }else {
            const msg = "Ingrese una direccion de e-mail valida"
            setError(msg)
            toast.error(msg)
        }

    }

    const handleChangeNombre = (e) => {
                const valor = e.target.value
                setNombre(valor)
    }
    const handleChangeEmail = (e) => {
        const valorE = e.target.value
        setEmail(valorE)
    }
    const handleChangeTelefono = (e) => {
        const valorT = e.target.value
        setTelefono(valorT)
    }

    let itemsInCartPrice = 0

    carrito.map((item) => {
        itemsInCartPrice = itemsInCartPrice + (item.cantidad)*(item.price)
    })

    return (
            <>
            <div>
                <table className="table table-borderless table-dark">
                    <thead>
                    <tr className="text-primary">
                        <th scope="col">Id</th>
                        <th scope="col">Producto</th>
                        <th scope="col">(Stock disponible)</th>
                        <th scope="col">Cantidad solicitada</th>
                        <th scope="col">Precio por unidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody id="contenedor-carrito">
                            {carrito.map(item => (
                            <tr key={item.id}>
                                <th scope="row" className="table__ID">{item.id}</th>
                                <td> {item.title}</td>
                                <td> {item.count}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.price}</td>
                                <td><button className="btn btnDel btn-outline-dark btn-danger" onClick={() => eliminarProducto(item.id)}>X</button></td>
                            </tr>
                            ))}
                    </tbody>
                </table>
                {error && <p>{error}</p>}
                <button className="btn btnDel btn-outline-dark btn-danger" onClick={() => vaciarCarrito()}>vaciar Carrito</button>
                <div id="totalPrice" className="container">
                        <h4 className="title h1 nav-item">El total de su compra es:$ {itemsInCartPrice} </h4>
                </div>
                <div>
                        <input type="text" onChange={handleChangeNombre} value={nombre} placeholder="ingrese su nombre" />
                        <input type="email" onChange={handleChangeEmail} value={email} placeholder="ingrese su e-mail" />
                        <input type="telefono" onChange={handleChangeTelefono} value={telefono} placeholder="ingrese su telefono"/>
                        <button id="btnBuy" className="btn btn-outline-dark" onClick={guardarCompra}>Finalizar la compra</button>
                            {loading && <p>Cargando...</p>}
                            {id && <p>Se guardo la compra con id {id}</p>}
                </div>
            </div>
            </>
    )
}

export default Cart