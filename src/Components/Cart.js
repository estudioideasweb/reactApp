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
    const { carrito, eliminarProducto, vaciarCarrito } = useContext(context)
    const [error, setError] = useState("")

    const guardarCompra = async () => {

        const valida = validator.isEmail(email)

        if (valida) {
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
        } else {
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
        itemsInCartPrice = itemsInCartPrice + (item.cantidad) * (item.price)
    })

    return (
        <>
            <div className="card-body">
                <table className="table table-borderless table-light">
                    <thead>
                        <tr className="text-primary">
                            <th scope="col">Id</th>
                            <th scope="col">Product</th>
                            <th scope="col">(Available stock)</th>
                            <th scope="col">Requested amount</th>
                            <th scope="col">Price by unit</th>
                            <th scope="col">Remove</th>
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
                <button className="btn btnDel btn-outline-dark btn-danger" onClick={() => vaciarCarrito()}>Empty Cart</button>

                <div class="card mb-4">
                    <div class="card-header py-3">
                        <h5 class="mb-0">Summary</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>${itemsInCartPrice}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Free</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total amount</strong>
                                    <strong>
                                        <p class="mb-0">(including TAXES)</p>
                                    </strong>
                                </div>
                                <span><strong>${itemsInCartPrice}</strong></span>
                            </li>
                        </ul>
                        <input type="text" onChange={handleChangeNombre} value={nombre} placeholder="Type your full name" />
                    <input type="email" onChange={handleChangeEmail} value={email} placeholder="E-mail"/>
                    <input type="telefono" onChange={handleChangeTelefono} value={telefono} placeholder="Phone" />
                    <button id="btnBuy" type="button" class="btn btn-primary btn-lg btn-block" onClick={guardarCompra}>Go to checkout</button>
                    {loading && <p>Charging...</p>}
                    {id && <p>Save your order id: {id} for future reference.</p>}
                        <div class="card mb-4 mb-lg-0">
                    <div class="card-body table-light">
                        <p><strong>We accept</strong></p>
                        <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                            alt="Visa" />
                        <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                            alt="American Express" />
                        <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                            alt="Mastercard" />
                        <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                            alt="PayPal acceptance mark" />
                    </div>
                </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart