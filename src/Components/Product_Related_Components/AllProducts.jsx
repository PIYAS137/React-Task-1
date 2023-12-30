
import SingleCard from "./SingleCard";


const AllProducts = ({datas}) => {




    return (
        <div className="mt-5">
        <p className=" mb-3 text-white"> Total <span className=" text-blue-300 font-semibold">{datas?.length}</span> Items found !</p>
            <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    datas?.map(one => <SingleCard key={one.id} data={one} />)
                }
            </div>
        </div>
    )
}

export default AllProducts