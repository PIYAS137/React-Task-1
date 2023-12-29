import { useState } from 'react';
import Swal from 'sweetalert2'

const SingleCard = ({ data }) => {
    console.log(data);

    const handleAddToCart = (sid) => {
        Swal.fire({
            title: "Add to Cart?",
            text: "click yes if you agree",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add !"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Added Successfull!",
                    text: "Your product has been added.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={data?.thumbnail} /></figure>
            <div className="card-body bg-gray-800 overflow-hidden rounded-b-xl p-4">
                <div className=" flex justify-between items-center">
                    <h2 className="card-title">{data?.title}</h2>
                    <div className="badge badge-info text-white">$ {data?.price}</div>
                </div>
                <p>{data?.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data?.category}</div>
                    <div className="badge badge-outline">{data?.brand}</div>
                </div>
                <div className=' flex justify-between'>
                    <button onClick={() => handleAddToCart(data?.id)} className=" btn w-full bg-yellow-500 border-none">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCard