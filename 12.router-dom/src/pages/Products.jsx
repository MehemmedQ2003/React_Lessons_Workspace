import Product from "../components/Product"
import { products } from "../data/products"

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {
        products && products.map((product) => (
          <Product key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Products
