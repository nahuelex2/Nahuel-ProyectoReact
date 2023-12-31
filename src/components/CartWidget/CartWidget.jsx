import { Link } from 'react-router-dom'
import cart from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartWidget.css'


export const CartWidget = () => {

    const { items } = useContext(CartContext)
    const total = items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
    return (

        <Link to="/cart">
            <div>
                <img className='cartImg' src={cart} alt="carrito" />
                <span>{total}</span>
            </div>
        </Link>


    )
}