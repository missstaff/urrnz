import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddToCartButton from "../components/ui/AddToCartButton";
import Heading from "../components/layout/Heading";

import { addToCartHandler } from "../store/cart-actions";
import { loadingActions } from "../store/loading-slice";

import classes from "./Product.module.css";
import { useEffect } from "react";
import ShowIf from "../components/ShowIf";
import PageContent from "../components/PageContent";
import LoadingMessage from "../components/LoadingMessage";
import Footer from "../components/layout/Footer";
import SEO from "../components/SEO";
import ReactGA from "react-ga";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const store = useSelector((state) => state.store);
  const products = store.products;

  let product = products.find((product) => product.zid === id);
  let category = store.category;

  const addItemToCartHandler = (product) => {
    dispatch(addToCartHandler(product));
    ReactGA.event({
      category: "User",
      action: `User added ${product.name} to the cart`,
    });
  };

  useEffect(() => {
    dispatch(loadingActions.setLoading(true));
    const id = setTimeout(() => {
      dispatch(loadingActions.setLoading(false));
    }, 1000);
    return () => clearTimeout(id);
  }, [id]);
  console.log(product);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: `User visited the ${product.name} details page`,
    });
  }, []);

  if (isLoading) return <div>Loading ... </div>;

  return (
    <div>
      <SEO
        title="Urrnz Custom 3D Printed Keepsakes product details."
        description={`Product: ${product}`}
        name="Urrnz."
        type="website"
        imageUrl="../assets/logo192.png"
      />

      <div className={classes.container}>
        <Heading title="PRODUCT DETAILS" />
        <div className={classes.card}>
          {!isLoading && product && (
            <div className={classes.row}>
              {product.images.lg ? (
                <>
                  {product.images.lg ? (
                    <img
                      className={classes.image}
                      src={product.images.lg}
                      alt={product.name}
                    />
                  ) : (
                    <div className={classes.emptyImage}></div>
                  )}
                  <div>
                    <h3 className={classes.productName}>{product.name}</h3>
                    <div className={classes.price}>${product.price}</div>
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
                </>
              ) : (
                <div className={classes.emptyImage}></div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
