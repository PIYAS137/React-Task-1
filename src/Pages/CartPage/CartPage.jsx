import { useEffect, useState } from 'react'
import SectionHeader from '../../Shared/SectionHeader/SectionHeader'
import { getStoredCartProduct, removeAnItemToLocalStorage } from '../../utils/localStorageState'
import CartCard from '../../Components/Cart_Related_Components/cartCard'
import LeftSideOfCart from '../../Components/Cart_Related_Components/LeftSideOfCart'
import Swal from 'sweetalert2'

const CartPage = () => {

  const [datas, setDatas] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [len, setLen] = useState(0)


  const handleDeleteProduct = (sid) => {
    const flag = removeAnItemToLocalStorage(sid)
    if (flag > 0) {
      const temp = datas.filter(one => one.id != sid);
      setDatas(temp);
      const rev = temp.reduce((total, current) => total + current.price, 0);
      setTotalRevenue(rev);
      setLen(temp.length)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Deleted !",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  useEffect(() => {
    const temp = getStoredCartProduct();
    setDatas(temp);
    const rev = temp.reduce((total, current) => total + current.price, 0);
    setTotalRevenue(rev);
    setLen(temp.length)
  }, [])


  return (
    <div className='mx-2 md:mx-0'>
      <SectionHeader mainHeader={'Cart Page'} smallHeader={'Products you added'} />
      <div className='mt-10 grid md:gap-3 grid-cols-1 lg:grid-cols-3'>
        <div className=' col-span-1 border rounded-lg mb-3'>
          <LeftSideOfCart setDatas={setDatas} setLen={setLen} setTotalRevenue={setTotalRevenue} totalRevenue={totalRevenue} len={len} />
        </div>
        <div className=' space-y-3 col-span-2'>
          {
            datas?.map(one => <CartCard key={one?.id} data={one} handleDeleteProduct={handleDeleteProduct} />)
          }
          {
            datas?.length === 0 && <p className=' bg-red-200 text-red-600 p-3 rounded-lg text-center'>No Product Added</p>
          }
        </div>
      </div>
    </div>
  )
}

export default CartPage