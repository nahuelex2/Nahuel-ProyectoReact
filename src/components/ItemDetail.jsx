export const ItemDetail = ({ item }) => {

    return (
        <>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <span>{item.price}</span>
        </>
    )
}