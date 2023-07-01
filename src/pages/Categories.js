
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import { useScreenSize } from "../hooks/useScreenSize";
import classes from "./Categories.module.css";
import "../general.css";



const categoryImages = {
    "All Products": require("../assets/allProducts.jpg"),
    "Emojis": require("../assets/emoji.jpg"),
    "Services": require("../assets/services.jpg"),
    "Shapes": require("../assets/shapes.jpg"),
    "Test": require("../assets/allProducts.jpg"),
    // add more categories and their corresponding image URLs here ~ category image from server would be best!
};



const Categories = () => {

    const screenSize = useScreenSize();
    const store = useSelector(state => state.store);
    const categories = store.categories;


    const [headingFontSize, setHeadingFontSize] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [touchedIndex, setTouchedIndex] = useState(-1);


    console.log("screenSize: ", screenSize);
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
            <section id="categories" className={classes.section}>
                <div className={classes.headingContainer}>
                    <Heading fontSize={headingFontSize} title="CATEGORIES" />
                </div>
                <div
                    className={`grid ${screenSize === "xs" || screenSize === "default"
                        ? "grid--1-cols"
                        : "grid--2-cols"
                        }`}
                >
                    {categories.map((category, index) => (
                        <div
                            key={index}>
                            <NavLink to="/products" className={classes.title}>
                                <h3 className={classes.heading}>{category}</h3>
                                <div
                                    onTouchStart={() => handleTouchStart(index)}
                                    onTouchEnd={handleTouchEnd}
                                    onMouseDown={() => handleTouchStart(index)}
                                    onMouseUp={handleTouchEnd}
                                    onMouseEnter={() => handleTouchStart(index)}
                                    onMouseLeave={handleTouchEnd}
                                    className={`${touchedIndex === index ? classes.touched : ""
                                        }`}>
                                    <Container 
                                        className={classes.container}
                                        style={{alignItems: "center", justifyContent:"center"}}>
                                        <img
                                            src={categoryImages[category]}
                                            alt={category}
                                            style={{
                                                margin: "5%",
                                                borderRadius: 15,
                                                height: `${imageHeight}rem`,
                                                width: "75%",
                                                resizeMode: "cover",
                                                resize: "both",
                                            }}
                                        />
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


export default Categories;
