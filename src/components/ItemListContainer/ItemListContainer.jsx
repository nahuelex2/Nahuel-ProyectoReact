import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { products } from '../../data/products.json'
import { ItemList } from "../ItemList"
export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })

        myPromise.then((Response) => {

            if (!id) {
                setItems(Response)
            }
            else {
                const filterByCategory = Response.filter(item => item.category === id)
                setItems(filterByCategory)
            }
        })
    }, [id])

    return <>
        <h1>{greeting}</h1>
        {items ? <ItemList items={items} /> : <>Loading...</>}
    </>

}