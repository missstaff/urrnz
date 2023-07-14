import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddToCartButton from "../components/ui/AddToCartButton";
import Container from "../components/Container";
import Heading from "../components/layout/Heading";

import { addToCartHandler } from "../store/cart-actions";
import { storeActions } from "../store/store-slice";
import { useScreenSize } from "../hooks/useScreenSize";

import classes from "./Products.module.css";
import "../general.css";


const Products = () => {

    const { category } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const screenSize = useScreenSize();
    const store = useSelector(state => state.store);

    const [categoryProducts, setCategoryProducts] = useState([]);
    const [imageHeight, setImageHeight] = useState(0);
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

        const setProducts = () => {
            if (category === "all") {
                setCategoryProducts(products);
            } else {
                const filteredProducts = products.filter(product => product?.category === category);
                setCategoryProducts(filteredProducts);
            }
        };

        setProducts();
        dispatch(storeActions.setCategory(category));

    }, [category, dispatch, products]);

    useEffect(() => {
        if (!products.length && !categoryProducts.length) {
            navigate('/error');
        }
    }, [categoryProducts, products, navigate]);    


    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setImageHeight(25);
            } else if (screenSize === "xs") {
                setImageHeight(30);
            } else if (screenSize === "sm") {
                setImageHeight(30);
            } else if (screenSize === "md") {
                setImageHeight(32);
            } else if (screenSize === "lg") {
                setImageHeight(40);
            } else if (screenSize === "xl") {
                setImageHeight(45);
            } else if (screenSize === "xxl") {
                setImageHeight(50);
            }
        };
        setSizes();
    }, [screenSize]);

    if (!products.length) {
        navigate('/error');
    }

    return (
        <main>
            <section
                className={`${classes.section} wrapper`}
                id="gallery">
                <div className={classes.headingContainer}>
                    <Heading title="GALLERY" />
                </div>
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
                                            style={{
                                                alignSelf: "center",
                                                borderRadius: 7.5,
                                                height: `${imageHeight}rem`,
                                                imageResolution: "from-image",
                                                margin: "5%",
                                                objectFit: "cover",
                                                resize: "both",
                                                resizeMode: "cover",
                                                width: "auto",
                                            }}
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
                                    className={classes.buttonContainer}
                                    style={{
                                        alignItems: "center",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center"
                                    }}>
                                    <AddToCartButton
                                        onClick={() => addItemToCartHandler(product)} />
                                </div>
                            </Container>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Products;