const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "#1E5C93",
                color: "white",
                padding: "20px 0",
                textAlign: "center",
            }}
        >
            <div style={{ marginBottom: "15px" }}>
                <h1 style={{ margin: "0"}}>E-Commerce Store</h1>
            </div>
            <div style={{ fontSize: "16px", marginBottom: "10px" }}>
                <p style={{ margin: "5px 0" }}>
                    <strong>Contact Us:</strong> mehemmed.qardasov2003@gmail.com | +994 55 713 52 90
                </p>
            </div>
            <div style={{ fontSize: "18px"}}>
                <p style={{ textAlign: "center" }}>
                    &copy; {new Date().getFullYear()} E-Commerce Store. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
