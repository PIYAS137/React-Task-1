import AllProducts from "./AllProducts"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"


const ProductSection = () => {
  return (
    <div>
      <SectionHeader mainHeader={'Products'} smallHeader={'Find your required products'} />
      <AllProducts />
    </div>
  )
}

export default ProductSection