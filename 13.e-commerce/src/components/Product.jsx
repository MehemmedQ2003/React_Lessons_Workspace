/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "../css/Product.css"
import { FaManatSign } from "react-icons/fa6";


const Product = ({product}) => {
    const {id, title, price, description, category, image, rating} = product;

    const navigate = useNavigate();
    
    return (
        <div className="card">
            <img src={image} className="card-image" alt={title}/>
            <div style={{width: "100%"}}>
                <p className="card-title">{title}</p>
                <hr style={{width: "100%"}}/>
                <h3 className="card-price">{price} <FaManatSign /></h3>
            </div>

            <div className="flex-row">
                <button className="detail-button" onClick={() => navigate(`/product-details/${id}`)}>Go Details</button>
            </div>
        </div>
    )
}

export default Product
