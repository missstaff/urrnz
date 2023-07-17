
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import LoadingMessage from "../components/LoadingMessage";
import ShowIf from "../components/ShowIf";

import { loadingActions } from "../store/loading-slice";

import classes from "./Genres.module.css";
import "../general.css";


const Genres = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useSelector(state => state.store);
    const isLoading = useSelector(state => state.loading);

    const [touchedIndex, setTouchedIndex] = useState(-1);
    const categories = store.categories;

    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    const handleTouchEnd = () => {
        setTouchedIndex(-1);
    };


    useEffect(() => {
        dispatch(loadingActions.setLoading(true));
        const id = setTimeout(() => {
            dispatch(loadingActions.setLoading(false));
            if (!isLoading && !categories.length) {
                dispatch(loadingActions.setLoading(false));
                navigate("/error");
            }
        }, 250);

        return () => {
            clearTimeout(id);
        }
    }, []);


    return (
        <main style={{ height: isLoading ? `${100}vh` : "" }}>
            <section
                className={classes.section}
                id="categories">
                <div className="headingContainer">
                    <Heading
                        title="Genres" />
                </div>
                <ShowIf
                    condition={isLoading}
                    render={() => {
                        return (
                            <LoadingMessage />
                        );
                    }}
                />
                <div
                    className={`grid ${classes.gridColumns}`}>
                    {!isLoading && categories.map((category, index) => (
                        <div
                            key={index}>
                            <NavLink
                                className={classes.title}
                                to={`/products/${category.name}`}>
                                <h3
                                    className={classes.heading}>
                                    {category.name}
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
                                            alt={category.name + " image"}
                                            className={classes.image}
                                            src={category.images?.header || "https://via.placeholder.com/300x300"}
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

export default Genres;
