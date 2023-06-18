import { NavLink } from "react-router-dom";

const Item = ({item}) => {
    return (
            <div className="card container-flex" >
                <p className="fw-bolder text-center">{item.title}</p>
                <img className="card-img-top" src={item.image} alt={item.title} style={{maxWidth:"250px", minWidth:"20%", alignSelf:"center"}}/>
                <p className="invisible">{item.id}</p>
                <p className="invisible card-text description">{item.description}</p>
                <p className="fw-bolder text-center">${item.price}</p>
                <p className="text-center">Stock: {item.count}</p>
                <div className="card-footer p-5 pt-5 border-top-0 bg-transparent text-center">
                <NavLink className="btn btn-outline-dark mt-auto btnAddCart" to={`../products/${item.id}`}>Detalle</NavLink>
                </div>
            </div>
    )
}

export default Item