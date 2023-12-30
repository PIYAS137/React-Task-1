import AllProducts from "./AllProducts"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"


const ProductSection = ({datas}) => {




  return (
    <div>
      <SectionHeader mainHeader={'Products'} smallHeader={'Find your required products'} />
      <AllProducts datas={datas}/>
    </div>
  )
}

export default ProductSection