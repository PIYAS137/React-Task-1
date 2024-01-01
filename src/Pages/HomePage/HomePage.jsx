import { useEffect, useState } from "react";
import FilterAndSearch from "../../Components/Filter_Components/FilterAndSearch"
import ProductSection from "../../Components/Product_Related_Components/ProductSection"
import usePublicAxiosHook from "../../hooks/usePublicAxiosHook";


const HomePage = () => {

  const myHook = usePublicAxiosHook()
  const [datas, setDatas] = useState([]);



  useEffect(() => {
    myHook.get('/products')
      .then(res => setDatas(res.data.products))
      .catch(err => {
        alert(err)
      })
  }, [])

  const handleSearchByName = (text) => {
    myHook.get(`/products/search?q=${text}`)
      .then(res => {
        setDatas(res.data.products)
      })
      .catch(err => console.log(err))
  }

  const handleFilterItemByPrice = (min, max) => {

    // i use client side filter cz here i face a problem during filter by price, server is not send the proper data;

    if (min == '') {
      min = 0;
    }
    if (max == '') {
      max = 10000;
    }

    let temp = datas.filter(one => one.price >= parseInt(min) && one.price <= parseInt(max));
    setDatas(temp)
  }




  return (
    <div className=" mx-2 md:mx-0">
      <FilterAndSearch handleSearchByName={handleSearchByName} handleFilterItemByPrice={handleFilterItemByPrice} />
      <ProductSection datas={datas} />
    </div>
  )
}

export default HomePage