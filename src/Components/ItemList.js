import Item from './Item'

const ItemList = ({catalogo}) => {
    
    return (
        <div className='container-fluid'>
            <ul className="cards">
                {catalogo.map ((x) => (
                    <Item key={catalogo.id} item = {x} /> 
                ))}
            </ul>
        </div>
    )
}

export default ItemList
