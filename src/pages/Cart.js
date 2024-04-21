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
    <main>
      <ShowIf
        condition={isLoading}
        render={() => {
          return (
            <div className={classes.absoluteCenter}>
              <LoadingMessage />
            </div>
          );
        }}
      />
      <ShowIf
        condition={!isLoading && items.length}
        render={() => {
          return (
            <section className={classes.section}>
              <div className={classes.container}>
                <div className={classes.headingMargin}>
                  <Heading title="CART" />
                </div>
              <div className={classes.card}>
                <div className={classes.grid}>
                  <div>
                    {items.map((item, i) => {
                      return (
                        <div className={classes.row} key={item.cid}>
                          <div className={classes.col}>
                            {item.image ? (
                              <img
                                alt={item.name}
                                aria-label="product image"
                                className={`${classes.image}`}
                                role="img"
                                src={item.image}
                                tabIndex={0}
                              />
                            ) : (
                              <div className={`${classes.emptyImage}`}></div>
                            )}
                          </div>
                          <p className={`${classes.text}`}>{item.name}</p>

                          <div className={classes.quantityContainer}>
                            <p className={classes.text}>
                              ${item.price * item.quantity}{" "}
                              <span className={classes.x}>x</span>{" "}
                              {item.quantity}
                            </p>
                            <div className={classes.quantityButtonContainer}>
                              <div
                                aria-label="button"
                                className={classes.quantityButton}
                                onClick={() =>
                                  increaseItemQuantityHandler(item)
                                }
                                role="button"
                                tabIndex={0}
                              >
                                <FaPlus
                                  aria-label="increase quantity"
                                  color="rgba(255, 71, 0, 1)"
                                  size={`${1.2}rem`}
                                />
                              </div>
                              <div
                                className={classes.quantityButton}
                                onClick={() =>
                                  decreaseItemQuantityHandler(item.cid)
                                }
                                role="button"
                                tabIndex={0}
                              >
                                <FaMinus
                                  aria-label="decrease quantity"
                                  color="rgba(255, 71, 0, 1)"
                                  size={`${1.2}rem`}
                                />
                              </div>
                            </div>
                          </div>

                          <div className={classes.textAreaContainer}>
                            <label
                              aria-label="inscription label"
                              className={classes.label}
                              htmlFor="message"
                            >
                              Inscription
                            </label>
                            <div>
                              <input
                                aria-label="inscription input"
                                className={`${classes.textAreaField}`}
                                id="message"
                                name="message"
                                placeholder="Optional inscription"
                                role="textbox"
                                tabIndex={0}
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
                          <div className={classes.pickerContainer}>
                            <CustomPicker cid={item.cid} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className={`${classes.col}`}
                    style={{ alignSelf: "flex-end", padding: 1 }}
                  >
                    <p
                      className={`${classes.text}`}
                      style={{ fontWeight: "600" }}
                    >
                      Subtotal<span> ${subTotal}</span>
                    </p>
                    <StoreButton
                      buttonClass={classes.storeBtn}
                      title={"CHECKOUT"}
                      to={"/checkout"}
                    />
                  </div>
                </div>
              </div>
              </div>
            </section>
          );
        }}
      />
      <ShowIf
        condition={!isLoading && !items.length}
        render={() => {
          return (
            <div className={classes.emptyCartContainer}>
              <div className={classes.absoluteCenter}>
                <div className={classes.emptyCartTextContainer}>
                  <p className={classes.text}>Your cart is empty</p>
                  <StoreButton
                    buttonClass={classes.storeBtn}
                    title={"SHOP URRNZ"}
                    to={"/products/All"}
                  />
                </div>
              </div>
            </div>
          );
        }}
      />
    </main>
  );
};

export default Cart;
