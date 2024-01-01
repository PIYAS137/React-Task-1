import Filter from "./Filter"
import Search from "./Search"


const FilterAndSearch = ({handleSearchByName,handleFilterItemByPrice}) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between md:space-x-3 mt-3">
            <Filter handleFilterItemByPrice={handleFilterItemByPrice}/>
            <div className="divider text-red-500 divider-primary lg:divider-horizontal ml-0"></div>
            <Search handleSearchByName={handleSearchByName}/>
        </div>
    )
}

export default FilterAndSearch