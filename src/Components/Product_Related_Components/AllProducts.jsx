import { useEffect, useState } from "react"
import usePublicAxiosHook from "../../hooks/usePublicAxiosHook";
import SingleCard from "./SingleCard";


const AllProducts = () => {

    const [datas,setDatas]=useState([]);
    const myHook = usePublicAxiosHook()



    useEffect(()=>{
        myHook.get('/products')
        .then(res=>setDatas(res.data))
        .catch(err=>{
            alert(err)
        })
    },[])


  return (
    <div className=" mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            datas.products?.map(one=><SingleCard key={one.id} data={one}/>)
        }
    </div>
  )
}

export default AllProducts