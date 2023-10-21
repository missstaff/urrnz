import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategoryHandler } from "../../store/store-actions";
import { ALL } from "../../config/constants";
import classes from "./SelectCategoryModal.module.css";


const SelectCategoryModal = ({ setCategoryProducts }) => {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const store = useSelector(state => state.store);
    const allProducts = store.products;
    const allCategories = store.categories;
    const category = store.category;

    const [displayDropdown, setDisplayDropdown] = useState(false);
    const [dropdDownOptionsClassName, setDropdDownOptionsClassName] = useState(classes.hidden);

    const handleToggleSelect = () => {
        setDisplayDropdown((previous) => !previous);

        if (displayDropdown) {
            setDropdDownOptionsClassName("");
        } else {
            setDropdDownOptionsClassName(classes.hidden);
        }
    };

    const handleChangeCategory = (category) => {
        console.log("changes", category.name)
        if (category.name === ALL) {
            setCategoryProducts(allProducts);

            dispatch(setCategoryHandler(ALL));
        } else {
            const filteredProducts = allProducts.filter(
                (product) => product.category === category.name
            );
            dispatch(setCategoryHandler(category.name));
            setCategoryProducts(filteredProducts);
        }

        setDropdDownOptionsClassName(classes.hidden);
        nav(`/products/${category.name}`);
    };

    return (
        <div className={classes.container}>
            <h2 className={classes.heading}>SELECT A CATEGORY:</h2>
            <div>
                <h4
                    className={classes.selected}
                    onClick={handleToggleSelect}>
                    {category === ALL ?
                        category.toUpperCase() + " URRNZ"
                        :
                        category.toUpperCase()
                    }
                </h4>
            </div>
            <ul>
                {allCategories.map((category, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => handleChangeCategory(category)}
                            className={dropdDownOptionsClassName}>
                            {category.name}
                        </li>
                    );
                })}

            </ul>
        </div>
    );
};

export default SelectCategoryModal;