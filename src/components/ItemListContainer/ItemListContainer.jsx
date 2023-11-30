import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ItemList } from "../ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';



export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore()
        const refCollection = !id ? collection(db, 'items')
            : query(collection(db, 'items'), where('category', '==', id))

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log('no results');
            else

                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                );
        })
    }, [id])

    return <>
        <h1>{greeting}</h1>
        {items ? <ItemList items={items} /> : <>Loading...</>}
    </>;

};
