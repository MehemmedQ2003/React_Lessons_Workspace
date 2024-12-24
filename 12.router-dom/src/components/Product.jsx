/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const Product = ({ product }) => {
    const {id, image, name, price} = product;
    
    const navigate = useNavigate();
    
    return (
        <div style={{marginBottom: "40px", backgroundColor: "lightblue", padding: "10px"}}>
            <h1>Product Details: {name}</h1>
            <img src={image} alt={name} style={{width: "500px"}}/>
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <button onClick={() => navigate(`/product-details/${id }`)}>Go details</button>
        </div>
    )
}

export default Product
