import { json } from "react-router-dom"
import { Item } from "./Item/Item"

export const ItemList = ({ items }) => {
    // console.log(items);
    return <div className="CardContainer">
        {items.map((item) => (
            <Item key={item.id} item={item} />
        ))}
    </div>
}