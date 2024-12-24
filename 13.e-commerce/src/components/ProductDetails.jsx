/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { setSelectedProduct } from "../redux/clices/productSlice";
import { FaManatSign } from "react-icons/fa6";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/clices/basketSlice";


const ProductDetails = () => {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { title, price, description, image } = selectedProduct;
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    
    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    const addBasket = () => {
        const payload = {
            id, price, title, description, image, count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    return (
        <div style={{marginTop: "30px", display: "flex", flexDirection: "row", alignItems: "center", padding: "20px", gap:"40px", flexWrap: "wrap", justifyContent: "center"}}>
            <div>
                <img src={image} alt={title} width={350} height={500} />
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1 style={{fontFamily: "arial"}}>{title}</h1>
                <h2 style={{fontFamily: "arial", fontSize: "20px"}}>{description}</h2>
                <h3 style={{fontSize: "50px", fontFamily: "arial", fontWeight: "bold", color: "goldenrod", display: "flex", alignItems: "center", justifyContent: "start"}}>{price}<FaManatSign /></h3>
                
                <div style={{display: "flex", alignItems: "center", justifyContent: "start", marginTop: "20px", gap: "10px"}}>
                    <CiCirclePlus style={{fontSize: "40px", cursor: "pointer"}} onClick={increment} /> <span style={{fontSize: "25px"}}>{count}</span> <CiCircleMinus style={{fontSize: "40px", cursor: "pointer"}} onClick={decrement} min={0}/>
                </div>

                <div >
                    <button style={{marginTop: "20px", border: "none", backgroundColor: "#063263", color: "white", padding: "10px 20px", borderRadius: "10px", fontSize: "20px", fontWeight: "bold", cursor: "pointer"}} onClick={addBasket}>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails
