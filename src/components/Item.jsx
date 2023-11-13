import { Link } from "react-router-dom"
export const Item = ({ item }) => {
    return (
        <div className="card" >
            <div className="card__img">
                <img src={item.image} alt="img" />
            </div>

            <div className="card__body">
                <h3 className="card__title">
                    {item.name}
                </h3>
                <div className="card__text">
                    {item.description}
                    <h6 className="card__category">{item.category}</h6>
                    <span>{item.price}</span>
                </div>
                <Link to={`/items/${item.id}`}>  <button>Go somwhere</button></Link>

            </div>

        </div>
    )
}