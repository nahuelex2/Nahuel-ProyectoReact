import { useContext } from "react"

import { CartContext } from "../contexts/CartContext"
export const Cart = () => {

    const { items, clear } = useContext(CartContext)
    const total = items.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)

    return (
        <div>
            <h1>Cart</h1>
            <h2>total : {total}</h2>
            {items?.map(item => <div key={item.id}>
                <h2>{item.name}</h2>
                <h3>cantidad: {item.quantity}</h3>
                <h3>precio: ${item.price}</h3>
                <img src={item.imageUrl} alt={item.name} width={300} />
            </div>)}
            <button onClick={clear}>Vaciar carrito</button>
        </div>
    )
}