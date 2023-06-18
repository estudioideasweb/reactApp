import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (prop) => {

    const [catalogo, setCatalogo] = useState ([])
    const {id} = useParams()

    const traerProductos = async () => {
        const productosCollection = collection (db, "products")
        const consulta = await getDocs (productosCollection)
        const docs_ref = consulta.docs
        const formated = docs_ref.map(documento=>{
            return {...documento.data(), id: documento.id}
        })
        setCatalogo(formated)
    }

    const traerProductosPorCategoria = async () => {

        const productosCollection = collection (db, "products")
        const constrain = where ("categoryId", "==", id)
        const customQuery = query(productosCollection, constrain)
        const consulta = await getDocs (customQuery)
        const docs_ref = consulta.docs
        const formated = docs_ref.map(documento=>{
            return {...documento.data(), id: documento.id}
        })
        setCatalogo(formated)
    }

    useEffect (() =>{

       if(id){
            traerProductosPorCategoria()
       }else{
            traerProductos ()
       }
    
    },[id])

    if(catalogo.length === 0){

        return (
                <div>
                <h4>"Charging..."</h4>
                </div>

    )}else{
        return(
                <ItemList catalogo ={catalogo}/>   
        )
    }
}

export default ItemListContainer