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
  };

  useEffect(() => {
    dispatch(loadingActions.setLoading(true));
    const id = setTimeout(() => {
      dispatch(loadingActions.setLoading(false));
    }, 1000);
    return () => clearTimeout(id);
  }, [id]);

  return (
    <div>
      <div className={ products ? classes.container : ""}>
        <ShowIf
          condition={isLoading}
          render={() => {
            return (
              <LoadingMessage message="Loading product details..." />
            );
          }}
          renderElse={() => {
            return (
              <ShowIf
                condition={!isLoading && !product}
                render={() => {
                  return (
                    <PageContent
                    titleClassName={classes.title}
                    title={"Page not found!"}
                    message={"Sorry, the page you were looking for does not exist."}
                    link={"/products/all"}
                  >
                  </PageContent>
                  );
                }}
                renderElse={() => {
                  return (
                    <>
                    <Heading title="PRODUCT DETAILS" />
                      <NavLink
                        className={classes.link}
                        to={`/products/${category}`}
                      >
                        {<span>&larr;</span>}
                        Back
                      </NavLink>
                      <div>
                        <div className={`${classes.itemContainer}`}>
                          <div className={classes.item}>
                            <img
                              alt={product.name}
                              className={classes.productImage}
                              src={product.images.lg}
                            />
                            <div className={classes.descriptionContainer}>
                              <h3 className={classes.title}>{product.name}</h3>
                              <div className={classes.detailTextContainer}>
                                <p className={classes.detailText}>
                                  Price: ${product.price}
                                </p>
                                <p className={classes.detailText}>
                                  Category: {product.category}
                                </p>
                              </div>
                              <p className={classes.description}>
                                {product.description}
                              </p>
                            </div>
                          </div>
                          <div className={classes.btnContainer}>
                            <AddToCartButton
                              onClick={() => addItemToCartHandler(product)}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default Product;
