import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddToCartButton from "../components/ui/AddToCartButton";
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import LoadingMessage from "../components/LoadingMessage";
import ShowIf from "../components/ShowIf";

import { addToCartHandler } from "../store/cart-actions";
import { loadingActions } from "../store/loading-slice";
import { storeActions } from "../store/store-slice";

import classes from "./Products.module.css";


const Products = () => {

    const { category } = useParams();
    const dispatch = useDispatch();
    const store = useSelector(state => state.store);
    const isLoading = useSelector(state => state.loading);

    const [categoryProducts, setCategoryProducts] = useState([]);
    const [touchedIndex, setTouchedIndex] = useState(-1);

    const products = store.products;


    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    const handleTouchEnd = () => {
        setTimeout(() => {
            setTouchedIndex(-1);
        }, 1000);
    };

    const addItemToCartHandler = (product) => {
        dispatch(addToCartHandler(product));
    };

    useEffect(() => {

        dispatch(loadingActions.setLoading(true));

        if (products && products.length) {
            const setProducts = () => {
                if (category === "All") {
                    setCategoryProducts(products);
                } else {
                    const filteredProducts = products.filter(product => product?.category === category);
                    setCategoryProducts(filteredProducts);
                }
            };
            setProducts();
            dispatch(storeActions.setCategory(category));
        }

        const id = setTimeout(() => {
            dispatch(loadingActions.setLoading(false));
        }, 500);

        return () => {
            clearTimeout(id);
        }

    }, [category, dispatch, products]);



    return (
        <main style={{ height: isLoading ? `${100}vh` : "" }}>
            <section
                className={`${classes.section}`}
                id="gallery">
                <div className={classes.headingContainer}>
                    <Heading title="GALLERY" />
                </div>
                <ShowIf
                    condition={isLoading}
                    render={() => {
                        return (
                            <LoadingMessage />
                        );
                    }}
                />
                <ShowIf
                    condition={!isLoading && categoryProducts.length}
                    render={() => {
                        return (
                            <div className={`grid ${classes.gridColumns}`}>
                                {categoryProducts.map((product, index) => (
                                    <div
                                        key={index}>
                                        <Container
                                            style={{ //these styles must be inline to be applied to the container
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",

                                            }}>
                                            <NavLink
                                                to={`/product/${product.zid}`}>
                                                <div
                                                    style={{
                                                        alignSelf: "center",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "center"
                                                    }}
                                                    className={`${touchedIndex === index ? classes.touched : ""}`}
                                                    onMouseDown={() => handleTouchStart(index)}
                                                    onMouseEnter={() => handleTouchStart(index)}
                                                    onMouseLeave={handleTouchEnd}
                                                    onMouseUp={handleTouchEnd}
                                                    onTouchStart={() => handleTouchStart(index)}
                                                    onTouchEnd={handleTouchEnd}>
                                                    <img
                                                        alt={product.name}
                                                        src={product.images.lg}
                                                        className={classes.image}
                                                    />
                                                </div>
                                            </NavLink>
                                            <div className={classes.detailsContainer}>
                                                <div className={classes.detailsTitle}>
                                                    <h3 className={`${classes.heading} ${classes.limitTitle}`}>
                                                        {product.name}
                                                    </h3>
                                                    <p
                                                        className={classes.price}
                                                        style={{ textShadow: "none" }}>
                                                        ${product.price}
                                                    </p>
                                                </div>
                                                <p
                                                    className={`${classes.details} ${classes.limitLines}`}
                                                    style={{ textShadow: "none" }}>
                                                    {product.description}
                                                </p>

                                            </div>
                                            <div
                                                className={classes.buttonContainer}>
                                                <AddToCartButton
                                                    onClick={() => addItemToCartHandler(product)} />
                                            </div>
                                        </Container>
                                    </div>
                                ))}
                            </div>
                        );
                    }}
                />
                <ShowIf
                    condition={!isLoading && !categoryProducts.length}
                    render={() => {
                        return (
                            <div
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: `${100}vh`
                                }}>
                                <p className={classes.noItemsMessage}>No items found!</p>
                                <NavLink
                                    to="/genres"
                                    className={classes.link}>
                                    <span>&larr;</span>Back to Genres
                                </NavLink>
                            </div>
                        );
                    }}
                />
            </section>
        </main>
    );
};

export default Products;