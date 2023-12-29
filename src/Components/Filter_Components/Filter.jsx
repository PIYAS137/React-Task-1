import { useState } from "react"


const Filter = () => {

    const [maxVal,setMaxVal]=useState('');
    const [minVal,setMinVal]=useState('');


    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(maxVal, minVal);
        setMaxVal('');
        setMinVal('');
    }


    return (
        <form onSubmit={handleSubmit} className=" flex-1 flex items-center space-y-1 -mt-1">
            <p>Filter By Price :</p>
            <div className="flex-1 flex items-center space-x-3 w-full justify-end">
                <input onChange={e=>setMaxVal(e.target.value)} value={maxVal} min={0} type="number" placeholder="$ MAX" className="input bg-gray-600 max-w-xs w-[120px] border-none" />
                <p>TO</p>
                <input onChange={e=>setMinVal(e.target.value)} value={minVal} min={1} type="number" placeholder="$ MIN" className="input bg-gray-600 w-[120px] border-none " />
                <button className="btn btn-primary">Search</button>
            </div>
        </form>
    )
}

export default Filter