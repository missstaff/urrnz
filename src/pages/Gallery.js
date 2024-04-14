import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddToCartButton from "../components/ui/AddToCartButton";
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import LoadingMessage from "../components/LoadingMessage";
import SelectCategoryModal from "../components/ui/SelectCategoryModal";
import ShowIf from "../components/ShowIf";
import { ALL } from "../config/constants";

import { addToCartHandler } from "../store/cart-actions";
import { loadingActions } from "../store/loading-slice";
import { setCategoryHandler } from "../store/store-actions";

import classes from "./Gallery.module.css";
import SEO from '../components/SEO';
import ReactGA from "react-ga";

const Gallery = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);
  const isLoading = useSelector((state) => state.loading);

  const allProducts = store.products;
  const category = store.category;

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [touchedIndex, setTouchedIndex] = useState(-1);

  const handleTouchStart = (index) => {
    setTouchedIndex(index);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setTouchedIndex(-1);
    }, 1000);
  };

  const addItemToCartHandler = (product) => {
    dispatch(addToCartHandler(product));
  };

  const handleNoItemsFound = (event) => {
    dispatch(setCategoryHandler(ALL));
    setCategoryProducts(allProducts);
  };

  useEffect(() => {
    dispatch(loadingActions.setLoading(true));

    if (allProducts && allProducts.length) {
      if (category === ALL) {
        setCategoryProducts(allProducts);
        nav(`/products/${ALL}`);
      } else {
        const filteredProducts = allProducts.filter(
          (product) => product.category === category
        );
        setCategoryProducts(filteredProducts);
        nav(`/products/${category}`);
      }
    }
    const id = setTimeout(() => {
      dispatch(loadingActions.setLoading(false));
    }, 750);

    return () => {
      clearTimeout(id);
    };
  }, [allProducts]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "User visited the gallery page",
    });
  }, []);

  const sendEventToGoogleAnalytics = () => {
    ReactGA.event({
      category: "User",
      action: "User clicked on a product to view details",
    });
  };

  return (
    <div
      style={{ height: isLoading ? `${100}vh` : "100%" }}
      className={`${classes.section}`}
      id="gallery"
    >
      <SEO
        title='Urrnz Custom 3D Printed Keepsakes gallery'
        description='All Urrnz custom 3D printed keepsakes.'
        name='Urrnz.'
        type='website'
        imageUrl='../assets/logo192.png'
      />
      <ShowIf
        condition={isLoading}
        render={() => {
          return <LoadingMessage />;
        }}
      />
      <ShowIf
        condition={!isLoading && categoryProducts.length}
        render={() => {
          return (
            <>
              <Heading title={"Gallery"} />

              <SelectCategoryModal setCategoryProducts={setCategoryProducts} />

              <div className={`grid ${classes.gridColumns}`}>
                {categoryProducts.map((product, index) => (
                  <div key={index}>
                    <Container
                      style={{
                        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.05)",
                        padding: "0px 25px",
                      }}
                    >
                      <NavLink to={`/product/${product.zid}`}>
                        <div
                          style={{
                            alignSelf: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                          className={`${touchedIndex === index ? classes.touched : ""
                            }`}
                          onMouseDown={() => handleTouchStart(index)}
                          onMouseEnter={() => handleTouchStart(index)}
                          onMouseLeave={handleTouchEnd}
                          onMouseUp={handleTouchEnd}
                          onTouchStart={() => handleTouchStart(index)}
                          onTouchEnd={handleTouchEnd}
                          onClick={sendEventToGoogleAnalytics}
                        >
                          <img
                            alt={product.name}
                            src={product.images.lg}
                            className={classes.image}
                          />
                        </div>
                      </NavLink>
                      <div
                        style={{ zIndex: -1 }}
                        className={classes.detailsContainer}
                      >
                        <div className={classes.detailsTitle}>
                          <h3
                            className={`${classes.heading} ${classes.limitTitle}`}
                          >
                            {product.name}
                          </h3>
                          <p
                            className={classes.price}
                            style={{ textShadow: "none" }}
                          >
                            ${product.price}
                          </p>
                        </div>
                        <p
                          className={`${classes.details} ${classes.limitLines}`}
                          style={{ textShadow: "none" }}
                        >
                          {product.description}
                        </p>
                      </div>
                      <div className={classes.buttonContainer}>
                        <AddToCartButton
                          product={product}
                          onClick={() => addItemToCartHandler(product)}
                        />
                      </div>
                    </Container>
                  </div>
                ))}
              </div>
            </>
          );
        }}
      />
      <ShowIf
        condition={!isLoading && !categoryProducts.length}
        render={() => {
          return (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                height: `${100}vh`,
              }}
            >
              <p className={classes.noItemsMessage}>No items found!</p>
              <NavLink
                to={`/products/${ALL}`}
                onClick={handleNoItemsFound}
                className={classes.link}
              >
                <span>&larr;</span>Back to all urrnz
              </NavLink>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Gallery;
