import React, { useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import AddToCartButton from "../components/ui/AddToCartButton";
import { useScreenSize } from "../hooks/useScreenSize";

import classes from "./Products.module.css";
import "../general.css";


const Products = () => {
    
    const { category } = useParams();
    const screenSize = useScreenSize();
    const store = useSelector(state => state.store);
    const products = store.products;
 
    const [touchedIndex, setTouchedIndex] = useState(-1);
    const [imageHeight, setImageHeight] = useState(0);
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        const setProducts = () => {
            if (category === "all") {
                setCategoryProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                setCategoryProducts(filteredProducts);
            }
        };
        setProducts();
    }, [category]);


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



    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    const handleTouchEnd = () => {
        setTimeout(() => {
            setTouchedIndex(-1);
        }, 1000);
    };


    return (
        <main>
            <section id="gallery" className={classes.section}>
                <div className={classes.headingContainer}>
                    <Heading title="GALLERY" />
                </div>
                <div
                    className={`grid ${classes.gridColumns}`}>

                    {categoryProducts.map((product, index) => (
                        <div
                            key={index}>

                            <Container
                                style={{
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
                                        onTouchStart={() => handleTouchStart(index)}
                                        onTouchEnd={handleTouchEnd}
                                        onMouseDown={() => handleTouchStart(index)}
                                        onMouseUp={handleTouchEnd}
                                        onMouseEnter={() => handleTouchStart(index)}
                                        onMouseLeave={handleTouchEnd}
                                        className={`${touchedIndex === index ? classes.touched : ""}`}>

                                        <img
                                            src={product.images.lg}
                                            alt={product.name}
                                            style={{
                                                alignSelf: "center",
                                                margin: "5%",
                                                borderRadius: 7,
                                                height: `${imageHeight}rem`,
                                                resizeMode: "contain",
                                            }}
                                        />
                                    </div>
                                </NavLink>
                                <div
                                    className={classes.detailsContainer}>
                                    <div
                                        className={classes.detailsTitle}>
                                        <h3
                                            className={`${classes.heading} ${classes.limitTitle}`}>
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
                                    style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                    <AddToCartButton />
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