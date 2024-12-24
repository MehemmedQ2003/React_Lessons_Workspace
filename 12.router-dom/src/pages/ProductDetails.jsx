import { useParams } from "react-router-dom"
import { products } from "../data/products";
import Product from "../components/Product";

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <br />
            <br />
            {
                products && products.map((product) => {
                    if(product.id == id) {
                        return <Product product={product} key={product.id}/>
                    }
                })
            }
        </div>
    )
}

export default ProductDetails
