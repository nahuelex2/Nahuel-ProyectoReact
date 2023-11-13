import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { ItemDetail } from "./ItemDetail"
import { products } from '../data/products.json'
export const ItemDetailContainer = ({ greeting }) => {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })

        myPromise.then((Response) => {


            const findById = Response.find(item => item.id === Number(id))
            console.log(findById);
            setItem(findById)

        })
    }, [id])

    return <>
        {item ? <ItemDetail item={item} /> : <>loading</>}

    </>

}