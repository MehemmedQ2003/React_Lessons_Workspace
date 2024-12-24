import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../redux/clices/productSlice";
import Product from "./Product";
import { searchProduct } from "../redux/clices/productSlice";

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, searchResults } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])
    return (
        <div>
            <h1 style={{margin: "40px 0", textAlign: "center", fontSize: "50px", fontFamily: "Arial"}}>Products</h1>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Arial", flexWrap: "wrap"}}>
                <h1 style={{margin: "40px 0",fontSize: "30px", fontFamily: "Arial", textAlign: "center"}}>Result: {searchResults?.length}</h1>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    onChange={(event) => dispatch(searchProduct(event.target.value))}
                />
            </div>
            <div className='flex-row' style={{flexWrap: "wrap", padding : "40px 0 100px 0", justifyContent: "center"}}>
                {searchResults?.length > 0 ? (
                    searchResults.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    products && products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    )
}

export default ProductList
