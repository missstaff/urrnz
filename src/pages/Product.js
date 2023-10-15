import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddToCartButton from "../components/ui/AddToCartButton";
import Heading from "../components/layout/Heading";

import { addToCartHandler } from "../store/cart-actions";
import { loadingActions } from "../store/loading-slice";

import classes from "./Product.module.css";
import { useEffect } from "react";
import ShowIf from "../components/ShowIf";
import PageContent from "../components/PageContent";
import LoadingMessage from "../components/LoadingMessage";


const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading);
    const store = useSelector((state) => state.store);
    const products = store.products;

    let product = products.find((product) => product.zid === id);
    let category = store.category;
   console.log("B:",category)
    const addItemToCartHandler = (product) => {
        dispatch(addToCartHandler(product));
    };

    useEffect(() => {
        dispatch(loadingActions.setLoading(true));
        const id = setTimeout(() => { dispatch(loadingActions.setLoading(false)) }
        , 1000);
        return () => clearTimeout(id);
    }, [id]);

    
    return (
        <div className={`${classes.wrapper}`}>
            <div className="headingContainer">
                <Heading
                    title="PRODUCT DETAILS" />
            </div>
            <ShowIf
                condition={isLoading}
                render={() => {
                    return (
                        <LoadingMessage
                            message="Loading product details..." />
                    );
                }} />
            {!isLoading && product && <NavLink
                className={classes.link}
                to={`/products/${category}`}>
                {<span>&larr;</span>}
                Back
            </NavLink>}
            <ShowIf
                condition={!isLoading && product}
                render={() => {
                    return (
                        <div className={`${classes.container}`} >
                            <div className={`${classes.productContainer} ${classes.gridColumns}`}>
                                <img
                                    alt={product.name}
                                    className={classes.productImage}
                                    src={product.images.lg}
                                />
                                <div>
                                    <div style={{ marginBottom: `${2.2}rem` }}>
                                        <h3 className={classes.title}>{product.name}
                                        </h3>
                                        <p className={classes.description}>
                                            {product.description}
                                        </p>
                                        <p className={classes.detailText}>
                                            Price: ${product.price}
                                        </p>
                                        <p className={classes.detailText}>
                                            Category: {product.category}
                                        </p>
                                        {product.color
                                            &&
                                            (
                                                <p className={classes.detailText}>
                                                    Color: {product.color}
                                                </p>
                                            )
                                        }
                                        {product.size
                                            &&
                                            (
                                                <p className={classes.detailText}>
                                                    Size: {product.size}
                                                </p>
                                            )
                                        }
                                    </div>
                                    <div className={classes.buttonContainer}>
                                        <AddToCartButton
                                            onClick={() => addItemToCartHandler(product)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            />
            <ShowIf
                condition={!isLoading && !product}
                render={() => {
                    return (
                        <PageContent
                        titleClassName={classes.title}
                            title={"Page not found!"}>
                            <p className={classes.errorMessage}>Sorry, the page you were looking for does not exist.</p>
                            <NavLink
                                className={classes.link}
                                to="/genres">
                                {<span>&larr;</span>}Back
                            </NavLink>
                        </PageContent>
                    );
                }}
            />
        </div>
    );
};

export default Product;