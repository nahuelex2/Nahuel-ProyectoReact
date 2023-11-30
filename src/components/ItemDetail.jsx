export const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="item__Body">
                <h1>{item.name}</h1>

                <p>{item.description}</p>
                <h6>${item.price}</h6>
            </div>
            <img className="item__image" src={item.imageUrl} alt={item.name} />
        </>
    )
}