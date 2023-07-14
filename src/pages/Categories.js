
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import { loadingActions } from "../store/loading-slice";
import { CATEGORY_IMAGES } from "../config/constants";

import classes from "./Categories.module.css";
import "../general.css";


const Categories = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useSelector(state => state.store);
    const categories = store.categories;
    const isLoading = useSelector(state => state.loading);
    const [touchedIndex, setTouchedIndex] = useState(-1);


    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    const handleTouchEnd = () => {
        setTouchedIndex(-1);
    };


    useEffect(() => {
        dispatch(loadingActions.setLoading(true));
        const timerId = setTimeout(() => {
            dispatch(loadingActions.setLoading(false)); 
        }, 250);

        return () => {
            clearTimeout(timerId);
        }
    }, [dispatch]);


    useEffect(() => {
        if (!isLoading && !categories.length) {
            dispatch(loadingActions.setLoading(false));
            navigate("/error");
        }
    }, [categories, dispatch, isLoading]);



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
                    {!isLoading && categories.map((category, index) => (
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
