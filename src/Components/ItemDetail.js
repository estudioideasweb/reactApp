import ItemCount from "./ItemCount";
import { useContext } from "react"
import { context } from "./CustomProvider"

const ItemDetail = ({item}) => {
    
    const { agregarProducto } = useContext(context)
    
    const onAdd = (cantidad) =>{

    agregarProducto(item, cantidad)

    }

    return (
            <div className="card container-flex">
                <p className="fw-bolder text-center">{item.title}</p>
                <img className="card-img-det mx-auto" src={item.image} alt={item.title} style={{maxWidth:"250px", minWidth:"20%", alignSelf:"center"}}/>
                <p className="invisible">{item.id}</p>
                <p className="card-text description text-center">description:{item.description}</p>
                <p className="fw-bolder text-center">${item.price}</p>
                <p className="text-center">Stock: {item.count}</p>
                <div className="card-footer p-5 pt-5 border-top-0 bg-transparent text-center">
                <ItemCount id={item.id} title={item.title} price={item.price} count={item.count} initial={1} onAdd={onAdd}/>
                </div>
            </div>
    )
}

export default ItemDetail