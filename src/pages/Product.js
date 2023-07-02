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
    const category = store.category;
    const products = store.products;
    const product = products.find((product) => product.zid === id);


    return (
        <div
            className={classes.wrapper}>
            <div
                className="headingContainer">
                <Heading
                    title="PRODUCT DETAILS" />
            </div>
            <NavLink
                className={classes.link}
                to={`/products/${category}`}>
                {<span>&larr;</span>}Back
            </NavLink>
            <div
                className={`container ${classes.container}`} >
                <div
                    className={`${classes.productContainer} ${classes.gridColumns}`}>
                    <img
                        className={classes.productImage}
                        src={product.images.lg}
                        alt={product.name}
                    />
                    <div>
                        <div
                            style={{ marginBottom: `${2.2}rem` }}>
                            <h3
                                className={classes.title}>{product.name}
                            </h3>
                            <p
                                className={classes.description}>
                                {product.description}
                            </p>
                            <p
                                className={classes.detailText}>
                                Price: ${product.price}
                            </p>
                            <p
                                className={classes.detailText}>
                                Category: {product.category}
                            </p>
                            {product.color
                                &&
                                (
                                    <p
                                        className={classes.detailText}>
                                        Color: {product.color}
                                    </p>
                                )
                            }
                            {product.size
                                &&
                                (
                                    <p
                                        className={classes.detailText}>
                                        Size: {product.size}
                                    </p>
                                )
                            }
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: `${2.2}rem` }}>
                            <AddToCartButton />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;