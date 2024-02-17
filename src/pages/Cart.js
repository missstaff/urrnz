import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";

import CustomPicker from "../components/ui/ColorPicker";
import Heading from "../components/layout/Heading";
import LoadingMessage from "../components/LoadingMessage";
import ShowIf from "../components/ShowIf";
import StoreButton from "../components/ui/StoreButton";

import { cartActions } from "../store/cart-slice";
import { loadingActions } from "../store/loading-slice";

import classes from "./Cart.module.css";
import { set } from "react-ga";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const subTotal = cart.subTotal;
  let items = cart.items;

  const localStorageCart = JSON.parse(localStorage.getItem("cart"));

  const increaseItemQuantityHandler = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const decreaseItemQuantityHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  useEffect(() => {
    dispatch(loadingActions.setLoading(true));

    if (localStorageCart) {
      dispatch(cartActions.replaceCart(localStorageCart));
    }

    dispatch(loadingActions.setLoading(false));
  }, [dispatch]);

  return (
    <section className={classes.cartContainer}>
      <div className={classes.headingContainer}>
        <Heading title="CART" />
      </div>
      <main>
        <ShowIf
          condition={isLoading}
          render={() => {
            return <LoadingMessage />;
          }}
        />
        <ShowIf
          condition={!isLoading && items.length}
          render={() => (
            <>
              {items.map((item, i) => (
                <div className={`${classes.container}`} key={item.cid}>
                  <div className={`${classes.itemContainer}`}>
                    <div className={classes.imageContainer}>
                      <div className={classes.imageContainerColumn}>
                        <img
                          alt={item.name}
                          className={classes.itemImage}
                          src={item.image}
                        />
                        <div
                          className={`${
                            (classes.pickerContainer,
                            classes.lgScreenPickerContainer)
                          }`}
                        >
                          <CustomPicker cid={item.cid} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className={classes.title}>{item.name}</h3>

                      <div>
                        <div className={classes.detailsContainer}>
                          <div>
                            <p className={classes.itemPrice}>
                              Price: ${item.price * item.quantity}
                            </p>
                            <p className={classes.itemPrice}>
                              Quantity: {item.quantity}
                            </p>
                          </div>

                          <div className={classes.quantityButtonContainer}>
                            <div
                              onClick={() => increaseItemQuantityHandler(item)}
                              className={classes.quantityButton}
                            >
                              <FaPlus
                                color="rgba(255, 71, 0, 1)"
                                size={`${1}rem`}
                              />
                            </div>
                            <div
                              onClick={() =>
                                decreaseItemQuantityHandler(item.cid)
                              }
                              className={classes.quantityButton}
                            >
                              <FaMinus
                                color="rgba(255, 71, 0, 1)"
                                size={`${1}rem`}
                              />
                            </div>
                          </div>
                        </div>
                        <p className={classes.itemDescription}>
                          {item.description}
                        </p>
                        <div>
                          <div className={classes.textAreaContainer}>
                            <label className={classes.text} htmlFor="message">
                              Inscription:
                            </label>
                            <div>
                              <input
                                className={`${classes.textAreaField}`}
                                id="message"
                                name="message"
                                placeholder="Name or text to inscribe"
                                type="text"
                                onChange={(e) =>
                                  dispatch(
                                    cartActions.setItemInscription({
                                      id: item.cid,
                                      inscription: e.target.value,
                                    })
                                  )
                                }
                                value={item.inscription}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${
                            (classes.pickerContainer,
                            classes.smScreenPickerContainer)
                          }`}
                        >
                          <CustomPicker cid={item.cid} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <hr className={classes.horizontalLine} />
                <div
                  style={{
                    marginRight: "15%",
                    alignSelf: "flex-end",
                  }}
                >
                  <p className={classes.subTotal}>Subtotal: ${subTotal}</p>
                </div>
              </div>
            </>
          )}
        />
        <ShowIf
          condition={!isLoading && !items.length}
          render={() => {
            return <h3 className={classes.message}>Your cart is empty</h3>;
          }}
        />
        <ShowIf
          condition={!isLoading}
          render={() => {
            return (
              <div className={classes.cartButton}>
                <StoreButton
                  title={!items.length ? "SHOP URRNZ" : "CHECKOUT"}
                  to={!items.length ? "/products/All" : "/checkout"}
                />
              </div>
            );
          }}
        />
      </main>
    </section>
  );
};

export default Cart;
