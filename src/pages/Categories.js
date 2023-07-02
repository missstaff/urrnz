
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
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

    const store = useSelector(state => state.store);
    const categories = store.categories;


    const [touchedIndex, setTouchedIndex] = useState(-1);


    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    const handleTouchEnd = () => {
        setTouchedIndex(-1);
    };


    return (
        <main>
            <section
                id="categories"
                className={classes.section}>
                <div
                    className={classes.headingContainer}>
                    <Heading
                        title="CATEGORIES" />
                </div>
                <div
                    className={`grid ${classes.gridColumns}`}>
                    {categories.map((category, index) => (
                        <div
                            key={index}>
                            <NavLink
                                to="/products"
                                className={classes.title}>
                                <h3
                                    className={classes.heading}>
                                    {category}
                                </h3>
                                <div
                                    onTouchStart={() => handleTouchStart(index)}
                                    onTouchEnd={handleTouchEnd}
                                    onMouseDown={() => handleTouchStart(index)}
                                    onMouseUp={handleTouchEnd}
                                    onMouseEnter={() => handleTouchStart(index)}
                                    onMouseLeave={handleTouchEnd}
                                    className={`${touchedIndex === index ? classes.touched : ""}`}>
                                    <Container
                                        className={classes.container}
                                        style={{
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                        <img
                                            src={categoryImages[category]}
                                            alt={category}
                                            className={classes.image}
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
