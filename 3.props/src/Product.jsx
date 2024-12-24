// eslint-disable-next-line react/prop-types
const Product = ({productName, productPrice}) => {
    // const {productName, productPrice} = props
    return (
        <div>
            <div>
                {/* <div>Name: {props.productName}</div>
                <div>Price: {props.productPrice}</div> */}
                <div>Name: {productName}</div>
                <div>Price: {productPrice}</div>
            </div>
            <hr />
        </div>
    )
}

export default Product
