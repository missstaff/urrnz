import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Heading from "../components/layout/Heading";
import classes from "./Product.module.css";
import "../general.css";


import { NavLink } from 'react-router-dom';
import AddToCartButton from "../components/ui/AddToCartButton";

const Product = () => {

    const { id } = useParams();
    const store = useSelector((state) => state.store);
    const products = store.products;
    const product = products.find((product) => product.zid === id);


    return (
        <div style={{ margiLeft: 5, marginRight: 5 }}>
            <div
                className="headingContainer">
                <Heading title="PRODUCT DETAILS" />
            </div>
            <NavLink
                className={classes.link}
                to={"/products"}
            >{<span>&larr;</span>}Back</NavLink>
            <div className="container" style={{ borderRadius: 7.5, backgroundColor: "rgba(255, 236, 209, 0.20)", marginBottom: `${9.6}rem`, padding: `${2.2}rem` }}>

                <div className={`${classes.productContainer} ${classes.gridColumns}`}>

                    <img
                        className={classes.productImage}
                        src={product.images.lg}
                        alt={product.name}
                    />
                    <div>
                        <div style={{marginBottom: `${2.2}rem`}}>
                            <h3 style={{ fontSize: `${7.5}rem`, marginBottom: `${1}rem` }}>{product.name}</h3>
                            <p style={{ fontSize: `${3.4}rem`, paddingBottom: `${1}rem`, marginBottom: `${1}rem` }}>{product.description}</p>
                            <p style={{ fontSize: `${2.2}rem`, paddingBottom: `${0.1}rem` }}>Price: ${product.price}</p>
                            <p style={{ fontSize: `${2.2}rem`, paddingBottom: `${0.1}rem` }}>Category: {product.category}</p>
                            {product.color && <p style={{ fontSize: `${2.2}rem`, paddingBottom: `${0.1}rem` }}>Color: {product.color}</p>}
                            {product.size && <p style={{ fontSize: `${2.2}rem`, paddingBottom: `${0.1}rem` }}>Size: {product.size}</p>}
                        </div>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: `${2.2}rem`}}>
                            <AddToCartButton />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;