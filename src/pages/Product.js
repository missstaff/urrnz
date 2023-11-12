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
import Footer from "../components/layout/Footer";
const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading);
    const store = useSelector((state) => state.store);
    const products = store.products;

    let product = products.find((product) => product.zid === id);
    let category = store.category;


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

        <div div style={{ position: "relative" }}>
            <div className={classes.container}>

                <div className="headingTopMargin">
                    <Heading
                        title="PRODUCT DETAILS" />
                </div>

                <ShowIf
                    condition={isLoading}
                    render={() => {
                        return (
                            <div className={classes.fullpage}>
                                <LoadingMessage
                                    message="Loading product details..." />
                            </div>
                        );
                    }}
                    renderElse={() => {
                        return (
                            <ShowIf
                                condition={!isLoading && !product}
                                render={() => {
                                    return (
                                        <div className={classes.fullpage}>
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
                                        </div>
                                    );
                                }}
                                renderElse={() => {
                                    return (
                                        <>
                                            <NavLink
                                                className={classes.link}
                                                to={`/products/${category}`}>
                                                {<span>&larr;</span>}
                                                Back
                                            </NavLink>
                                            <div>
                                                <div className={`${classes.itemContainer}`}>
                                                    <div className={classes.item}>
                                                        <img
                                                            alt={product.name}
                                                            className={classes.productImage}
                                                            src={product.images.lg}
                                                        />
                                                        <div className={classes.descriptionContainer}>
                                                            <h3 className={classes.title}>{product.name}</h3>
                                                            <div
                                                                className={classes.detailTextContainer}>
                                                                <p className={classes.detailText}>
                                                                    Price: ${product.price}
                                                                </p>
                                                                <p className={classes.detailText}>
                                                                    Category: {product.category}
                                                                </p>
                                                            </div>
                                                            <p className={classes.description}>
                                                                {product.description}
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <div className={classes.btnContainer}>
                                                        <AddToCartButton
                                                            onClick={() => addItemToCartHandler(product)}
                                                            style={{ fontSize: `${2.2}rem` }}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </>
                                    );
                                }}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Product;