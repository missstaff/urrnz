
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Container from "../components/Container";
import Heading from "../components/layout/Heading";

import { CATEGORY_IMAGES } from "../config/constants";

import classes from "./Categories.module.css";
import "../general.css";

 
const Categories = () => {

    const navigate = useNavigate();
    const store = useSelector(state => state.store);
    const categories = store.categories;

    const [touchedIndex, setTouchedIndex] = useState(-1);


    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    const handleTouchEnd = () => {
        setTouchedIndex(-1);
    };

    useEffect(() => {
        if (!categories.length) {
            navigate('/error'); 
        }
    }, [categories, navigate]);


    return (
        <main>
            <section
                className={classes.section}
                id="categories">
                <div className="headingContainer">
                    <Heading
                        title="Genres" />
                </div>
                <div
                    className={`grid ${classes.gridColumns}`}>
                    {categories.map((category, index) => (
                        <div
                            key={index}>
                            <NavLink
                                className={classes.title}
                                to={`/products/${category}`}>
                                <h3
                                    className={classes.heading}>
                                    {category}
                                </h3>
                                <div
                                    className={`${touchedIndex === index ? classes.touched : ""}`}
                                    onMouseDown={() => handleTouchStart(index)}
                                    onMouseEnter={() => handleTouchStart(index)}
                                    onMouseLeave={handleTouchEnd}
                                    onMouseUp={handleTouchEnd}
                                    onTouchStart={() => handleTouchStart(index)}
                                    onTouchEnd={handleTouchEnd}>
                                    <Container className={classes.container}>
                                        <img
                                            alt={category}
                                            className={classes.image}
                                            src={CATEGORY_IMAGES[category]}
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
