import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../Firebase";
import { collection, doc,getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState ([])

    const {id} = useParams()

    const getItem = async () => {
        const productosCollection = collection (db, "products")
        const referencia = doc (productosCollection, id)
        const documento = await getDoc(referencia)        
        setItem({...documento.data(), id: documento.id})
    }

    useEffect (() =>{
        getItem ()
    },[])

    if(item.length === 0){
            return (
                <div>
                <h4>"cargando..."</h4>
                </div>
            )
    }else{
            return(
                    <ItemDetail item ={item}/>    
            )
    }

}

export default ItemDetailContainer