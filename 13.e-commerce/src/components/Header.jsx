import { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight, CiDark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/clices/basketSlice";
import Logo from "../images/logo.jpg"


const Header = () => {
    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");
        root.style.backgroundColor = theme ? "white" : "#00000D";
        root.style.color = theme ? "#00000D" : "white";
        setTheme(!theme);
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <div className="flex-row" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <img src={Logo} className="logo" />
                    <p className="logo-text">WEB</p>
                </div>

                <div className="flex-row">
                    <div className="flex-row">
                        {theme ? (
                            <CiDark className="icon" onClick={changeTheme} />
                        ) : (
                            <CiLight className="icon" onClick={changeTheme} />
                        )}
                        <Badge
                            onClick={() => dispatch(setDrawer())}
                            badgeContent={products.length}
                            color="primary"
                        >
                            <CiShoppingBasket className="icon" />
                        </Badge>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;
