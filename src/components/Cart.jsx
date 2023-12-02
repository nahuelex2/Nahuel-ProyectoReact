import { useContext } from "react"

import { CartContext } from "../contexts/CartContext"
export const Cart = () => {

    const { items, clear } = useContext(CartContext)

    // if (!!items.length) {
    //     return <div>Sin elementos</div>
    // }
    return (
        <div>
            <h1>Cart</h1>
            {items?.map(item => <div key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
                <img src={item.imageUrl} alt={item.name} width={300} />
            </div>)}
            <button onClick={clear}>Vaciar carrito</button>
        </div>
    )
}