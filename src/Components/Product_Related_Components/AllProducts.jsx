import { useEffect, useState } from "react"
import usePublicAxiosHook from "../../hooks/usePublicAxiosHook";
import SingleCard from "./SingleCard";


const AllProducts = () => {

    const [datas, setDatas] = useState([]);
    const myHook = usePublicAxiosHook()



    useEffect(() => {
        myHook.get('/products')
            .then(res => setDatas(res.data))
            .catch(err => {
                alert(err)
            })
    }, [])


    return (
        <div className="mt-5">
        <p className=" mb-3 text-white"> Total <span className=" text-blue-300 font-semibold">10</span> Items found !</p>
            <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    datas.products?.map(one => <SingleCard key={one.id} data={one} />)
                }
            </div>
        </div>
    )
}

export default AllProducts