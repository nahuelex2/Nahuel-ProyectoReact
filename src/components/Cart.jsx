import { useContext, useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../contexts/CartContext"
import { useNavigate } from "react-router-dom"
const initialValues = {
    name: '',
    phone: '',
    email: ''
}
export const Cart = () => {



    const [buyer, setBuyer] = useState(initialValues)
    const handleChange = (event) => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value
            }
        })
    }
    const sendOrder = (event) => {
        event.preventDefault()
        const order = {
            buyer,
            items,
            total
        }

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert(`su orden ` + id + 'ha sido completada ')
                setBuyer(initialValues)
                clear()
            }
        })
    }
    const navigate = useNavigate()
    const { items, clear, onRemove } = useContext(CartContext)
    const total = items.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)
    if (!items.length) {
        return <>
            <h1>compra algo mijo</h1>
            <button onClick={() => navigate('/')}>volver a home</button>
        </>

    }
    return (
        <div>

            <h1>Cart</h1>

            <table className="cartTable">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><img src={item.imageUrl} alt={item.name} /></td>
                            <td onClick={() => onRemove(item.id)}>X</td>
                        </tr>
                    ))}
                    <tfoot>
                        <tr>
                            <td>
                                Total: ${total}
                            </td>
                        </tr>
                    </tfoot>
                </tbody>
            </table>

            <button onClick={clear}>Vaciar carrito</button>
            <hr />
            <form >
                <input type="text" name="name" value={buyer.name} onChange={handleChange} placeholder="Nombre" />
                <input type="text" name="phone" id="" value={buyer.phone} onChange={handleChange} placeholder="Telefono" />
                <input type="text" name="email" id="" value={buyer.email} onChange={handleChange} placeholder="email" />

                <button type="submit" onClick={sendOrder}>Enviar</button>
            </form>
        </div>
    )
}