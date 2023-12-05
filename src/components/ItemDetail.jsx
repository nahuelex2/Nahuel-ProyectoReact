import { useContext } from "react"

import { ItemCounter } from "./ItemCounter"
import { CartContext } from "../contexts/CartContext"



export const ItemDetail = ({ item }) => {
    const { onAdd } = useContext(CartContext)
    const addItem = (quantity) => {
        onAdd(item, quantity)
    }


    return (
        <>
            <div className="item__Body">
                <h1>{item.name}</h1>

                <p>{item.description}</p>
                <h6>${item.price}</h6>
                <h2>Stock: {item.stock}</h2>
                <ItemCounter onAdd={addItem} stock={item.stock} initial={1} />


            </div>
            <img className="item__image" src={item.imageUrl} alt={item.name} />


        </>
    )
}