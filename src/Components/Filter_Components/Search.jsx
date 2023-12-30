import { useState } from "react"


const Search = ({handleSearchByName}) => {

    const [text,setText]=useState('');
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        handleSearchByName(text)
        // setText('');
    }


    return (
        <form onSubmit={handleSubmit} className="flex-1 flex space-x-3 justify-end">
            <input onChange={e=>setText(e.target.value)} value={text} type="text" placeholder="Search by product name" className="input input-bordered w-full max-w-full lg:max-w-xs bg-gray-600" />
            <button className=" btn btn-primary">Search</button>
        </form>
    )
}

export default Search