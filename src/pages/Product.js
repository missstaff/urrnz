import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddToCartButton from "../components/ui/AddToCartButton";
import Heading from "../components/layout/Heading";

import { addToCartHandler } from "../store/cart-actions";

import classes from "./Product.module.css";
import "../general.css";


const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const store = useSelector((state) => state.store);
    const products = store.products;

    const product = products.find((product) => product.zid === id);
    const category = store.category;


    const addItemToCartHandler = (product) => {
        dispatch(addToCartHandler(product));
    };


    return (
        <div
            className={`${classes.wrapper} wrapper`}>
            <div
                className="headingContainer">
                <Heading
                    title="PRODUCT DETAILS" />
            </div>
            <NavLink
                className={classes.link}
                to={`/products/${category}`}>
                {<span>&larr;</span>}
                Back
            </NavLink>
            <div
                className={`container ${classes.container}`} >
                <div
                    className={`${classes.productContainer} ${classes.gridColumns}`}>
                    <img
                        alt={product.name}
                        className={classes.productImage}
                        src={product.images.lg}
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
                        <div
                            className={classes.buttonContainer}>
                            <AddToCartButton
                                onClick={() => addItemToCartHandler(product)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;