import Swal from 'sweetalert2'
import { resetCart } from '../../utils/localStorageState';


const LeftSideOfCart = ({setDatas,setLen, setTotalRevenue,len,totalRevenue}) => {

    const handleClickReset = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reset it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const flag = resetCart();
                if (flag > 0) {
                    setDatas([]);
                    setLen(0)
                    setTotalRevenue(0)
                    Swal.fire({
                        title: "Deleted !",
                        text: "Your cart has been deleted.",
                        icon: "success"
                    });
                }else{
                    Swal.fire({
                        title: "Cart is Empty !",
                        text: "Your cart is empty !!",
                        icon: "warning"
                    });
                }
            }
        });
    }

    return (
        <div className='py-3'>
            <h1 className=" text-white text-3xl text-center font-black bg-blue-400 py-2">Total Calculation</h1>
            <div className=" p-5 my-3 text-center text-xl text-white">
                <p>Total Items : <span className=" font-black text-yellow-400">{len}</span> </p>
                <p>Total Price : <span className=" font-black text-yellow-400">$ {totalRevenue}</span> </p>
            </div>
            <div className="flex items-center justify-center space-x-3 mx-3">
                <button className=" flex-1 btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Purchase</button>
                <button onClick={handleClickReset} className=" flex-1 btn clear-start btn-error text-white">Reset Cart</button>
                <dialog id="my_modal_3" className="modal text-red-300 ">
                    <div className="modal-box bg-gray-600">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg text-red-500">Purchase not available</h3>
                        <p className="py-4">Press ✕ button to close</p>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default LeftSideOfCart