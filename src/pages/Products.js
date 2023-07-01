import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import { useScreenSize } from "../hooks/useScreenSize";
import classes from "./Products.module.css";
import "../general.css";


const Products = () => {

    const screenSize = useScreenSize();
    const store = useSelector(state => state.store);
    const products = store.products;

    const [headingFontSize, setHeadingFontSize] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [touchedIndex, setTouchedIndex] = useState(-1);


    console.log("screenSize: ", screenSize);
    console.log("products: ", products)
    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setHeadingFontSize(4.2);
                setImageHeight(15);
            } else if (screenSize === "xs") {
                setHeadingFontSize(5.6);
                setImageHeight(15);
            } else if (screenSize === "sm") {
                setHeadingFontSize(7.2);
                setImageHeight(40);
            } else if (screenSize === "md") {
                setHeadingFontSize(9.6);
                setImageHeight(15);
            } else if (screenSize === "lg") {
                setHeadingFontSize(15);
                setImageHeight(18);
            } else if (screenSize === "xl") {
                setHeadingFontSize(18);
                setImageHeight(50);
            } else if (screenSize === "xxl") {
                setHeadingFontSize(21);
                setImageHeight(75);
            }
        };
        setSizes();
    }, [screenSize]);

    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    const handleTouchEnd = () => {
        setTouchedIndex(-1);
    };


    return (
        <main>
            <section id="gallery" className={classes.section}>
                <div className={classes.headingContainer}>
                    <Heading fontSize={headingFontSize} title="GALLERY" />
                </div>
                <div
                    className={`grid ${screenSize === "xs" || screenSize === "default"
                        ? "grid--1-cols"
                        : "grid--2-cols"
                        }`}>

                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={classes.product}>
                            <NavLink to={`/product/${product.zid}`} className={classes.title}>
                                
                                <div
                                    onTouchStart={() => handleTouchStart(index)}
                                    onTouchEnd={handleTouchEnd}
                                    onMouseDown={() => handleTouchStart(index)}
                                    onMouseUp={handleTouchEnd}
                                    onMouseEnter={() => handleTouchStart(index)}
                                    onMouseLeave={handleTouchEnd}
                                    className={`${touchedIndex === index ? classes.touched : ""
                                        }`}>
                                    <Container className={classes.container}>
                                        <img
                                            src={product.images.lg}
                                            alt={product.name}
                                            style={{
                                                margin: "5%",
                                                borderRadius: 15,
                                                height: `${imageHeight}rem`,
                                                width: "50%",
                                                resizeMode: "cover",
                                                resize: "both",
                                            }}
                                        />
                                         <h3 className={classes.heading}>{product.name}</h3>
                                    </Container>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Products;