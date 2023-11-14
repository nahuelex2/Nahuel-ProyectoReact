import { Link } from "react-router-dom"

import './Item.css'
export const Item = ({ item }) => {
    return (
        <div className="card" >

            <img className="card__img" src={item.image} alt="img" />


            <div className="card__body">
                <h3 className="card__title">
                    {item.name}
                </h3>
                <p className="card__text">{item.description}</p>
                <h6 className="card__category">{item.category}</h6>
                <span>${item.price}</span>
                <Link className="card__btn" to={`/items/${item.id}`}>detalles</Link>

            </div>

        </div>
    )
}