import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddToCartButton from "../components/ui/AddToCartButton";
import Heading from "../components/layout/Heading";
import LoadingMessage from "../components/LoadingMessage";
import SelectCategoryModal from "../components/ui/SelectCategoryModal";
import SEO from "../components/SEO";
import ShowIf from "../components/ShowIf";
import { ALL } from "../config/constants";
import { addToCartHandler } from "../store/cart-actions";
import { loadingActions } from "../store/loading-slice";
import { setCategoryHandler } from "../store/store-actions";
import classes from "./Gallery.module.css";


/**
 * Renders the Gallery component.
 * 
 * @returns {JSX.Element} The rendered Gallery component.
 */
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
        title="Urrnz Custom 3D Printed Keepsakes gallery"
        description="All Urrnz custom 3D printed keepsakes."
        name="Urrnz."
        type="website"
        imageUrl="../assets/logo192.png"
      />
      <ShowIf
        condition={isLoading}
        render={() => {
          return (
            <div className={classes.loadingContainer}>
              <LoadingMessage />
            </div>
          );
        }}
      />
      <ShowIf
        condition={!isLoading && categoryProducts.length}
        render={() => {
          return (
            <>
              <Heading title="GALLERY" />
              <div className={classes.dropdownContainer}>
                <SelectCategoryModal setCategoryProducts={setCategoryProducts} />
              </div>
              <div className={classes.gridContainer}>
                <div className={classes.row}>
                  {categoryProducts.map((product, index) => {
                    return (
                      <div className={classes.cell} key={index}>
                        <div className={classes.itemRow}>
                          <NavLink
                            role="link"
                            to={`/product/${product.zid}`}
                            tabIndex={0}
                          >
                            <div
                              className={`${touchedIndex === index && product.images.lg
                                ? classes.touched
                                : ""
                                }`}
                              onMouseDown={() => {
                                if (!product.images.lg) {
                                  return;
                                }
                                handleTouchStart(index);
                              }}
                              onMouseEnter={() => {
                                if (!product.images.lg) {
                                  return;
                                }
                                handleTouchStart(index);
                              }}
                              onMouseLeave={() => {
                                if (!product.images.lg) {
                                  return;
                                }
                                handleTouchEnd();
                              }}
                              onMouseUp={() => {
                                if (!product.images.lg) {
                                  return;
                                }
                                handleTouchEnd();
                              }}
                              onTouchStart={() => {
                                if (!product.images.lg) {
                                  return;
                                }
                                handleTouchStart(index);
                              }}
                              onTouchEnd={() => {
                                if (!product.images.lg) {
                                  return;
                                }
                                handleTouchEnd();
                              }}
                              onClick={sendEventToGoogleAnalytics}
                              role="button"
                              tabIndex={product.images.lg ? 0 : -1}
                            >
                              {product.images.lg ? (
                                <img
                                  alt={product.name}
                                  aria-label="product-image"
                                  className={classes.image}
                                  role="img"
                                  src={product.images.lg}
                                  tabIndex={product.images.lg ? 0 : -1}
                                />
                              ) : (
                                <div className={classes.emptyImage}></div>
                              )}
                            </div>
                          </NavLink>
                          <div>
                            <h3 className={classes.productName}>
                              {product.name}
                            </h3>
                            <div className={classes.price}>
                              ${product.price}
                            </div>
                            <div className={classes.description}>
                              {product.description}
                            </div>
                            <div className={classes.btnContainer}>
                              <AddToCartButton
                                product={product}
                                onClick={() => addItemToCartHandler(product)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                justifyContent: "center",
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
