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

    const [touchedIndex, setTouchedIndex] = useState(-1);
    const [gridColumns, setGridColumns] = useState("");
    const [imageHeight, setImageHeight] = useState(0);


    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setGridColumns("grid--1-cols");
                setImageHeight(25);
            } else if (screenSize === "xs") {
                setGridColumns("grid--1-cols");
                setImageHeight(25);
            } else if (screenSize === "sm") {
                setGridColumns("grid--1-cols");
                setImageHeight(25);
            } else if (screenSize === "md") {
                setGridColumns("grid--2-cols");
                setImageHeight(25);
            } else if (screenSize === "lg") {
                setGridColumns("grid--2-cols");
                setImageHeight(25);
            } else if (screenSize === "xl") {
                setGridColumns("grid--2-cols");
                setImageHeight(50);
            } else if (screenSize === "xxl") {
                setGridColumns("grid--3-cols");
                setImageHeight(50);
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
                    <Heading title="GALLERY" />
                </div>
                <div
                    className={`grid ${gridColumns}`}
                >

                    {products.map((product, index) => (
                        <div
                            key={index}>
                            <NavLink
                                to={`/product/${product.zid}`}
                                className={classes.title}>
                                <Container
                                    style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
                                    <div
                                        style={{ alignSelf: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}
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
                                            // className={classes.image}
                                            style={{
                                                alignSelf: "center",
                                                margin: "5%",
                                                borderRadius: 7,
                                                height: `${imageHeight}rem`,
                                                width: "100%",
                                                resizeMode: "cover",
                                                resize: "both",
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={classes.detailsContainer}>
                                        <div
                                            className={classes.detailsTitle}>
                                            <h3
                                                className={classes.heading}>
                                                {product.name}
                                            </h3>
                                            <p
                                                className={classes.price}
                                                style={{ textShadow: "none" }}>
                                                ${product.price}
                                            </p>
                                        </div>
                                        <p
                                            className={classes.details}
                                            style={{ textShadow: "none" }}>
                                            {product.description}
                                        </p>
                                    </div>
                                </Container>

                            </NavLink>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Products;