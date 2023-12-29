

const CartCard = ({data,handleDeleteProduct}) => {
    const {title,price,images} = data;

    return (
        <div className="card card-side max-h-40 bg-gray-600 shadow-xl">
            <figure><img src={images[0]} className="w-40 object-cover h-full" alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-300">{title}</h2>
                <p>Price : ${price}</p>
                <div className="card-actions">
                    <button onClick={()=>handleDeleteProduct(data?.id)} className="btn btn-error text-white">Delete Product</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard