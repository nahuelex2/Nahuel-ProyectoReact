import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { ItemDetail } from "./ItemDetail"



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'items', id)

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() })
        })
    }, [id])

    return <div className="detailContainer">
        {item ? <ItemDetail item={item} /> : <>loading...</>}

    </div>

}