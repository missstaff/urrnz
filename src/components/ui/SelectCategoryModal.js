import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { setCategoryHandler } from "../../store/store-actions";
import { ALL } from "../../config/constants";
import classes from "./SelectCategoryModal.module.css";

/**
 * A modal component for selecting a category.
 * @param {Object} setCategoryProducts - Function to set the category products.
 * @returns {JSX.Element} The SelectCategoryModal component.
 */
const SelectCategoryModal = ({ setCategoryProducts }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);
  const allProducts = store.products;
  const allCategories = store.categories;
  const category = store.category;

  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [hidden, setHidden] = useState(classes.hidden);

  const handleToggleSelect = () => {
    setDisplayDropdown((previous) => !previous);
    ReactGA.event({
      category: "User",
      action: "User toggled the category dropdown",
    });
  };

  const handleChangeCategory = (category) => {
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

    setHidden(classes.hidden);
    nav(`/products/${category.name}`);
  };

  useEffect(() => {
    if (displayDropdown) {
      setHidden("");
      window.scrollTo(0, 0);
    } else {
      setHidden(classes.hidden);
    }
  }, [displayDropdown]);

  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>SELECT A CATEGORY:</h3>
      <div
        onClick={handleToggleSelect}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className={classes.selected}
      >
        <h3>
          {category === ALL
            ? category.toUpperCase() + " URRNZ"
            : category.toUpperCase()}
        </h3>
        <FontAwesomeIcon icon={faChevronDown} style={{ paddingLeft: 15 }} />
      </div>
      <div
        aria-label="category-dropdown"
        className={hidden}
        onClick={handleToggleSelect}
        role="dropdown menu"
        style={{ position: "absolute", top: 0 }}
        tabIndex={0}
      >
        <ul>
          {allCategories.map((category, index) => {
            return (
              <li key={index} onClick={() => handleChangeCategory(category)}>
                {category.name === ALL
                  ? category.name.toUpperCase() + " URRNZ"
                  : category.name.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectCategoryModal;
