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
  console.log(items);
  return (
    <section className={classes.section}>
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
              <>
                <Heading
                  title="CART"
                  style={{ marginTop: "19.2rem", marginBottom: "9.6rem" }}
                />
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
                                  className={`${classes.image}`}
                                  src={item.image}
                                />
                              ) : (
                                <div className={`${classes.emptyImage}`}></div>
                              )}
                            </div>
                            <p className={`${classes.text}`}>{item.name}</p>

                            <div className={classes.quantityContainer}>
                              <p className={classes.text}>
                                ${item.price * item.quantity} <span className={classes.x}>x</span> {item.quantity}
                              </p>
                             <div className={classes.quantityButtonContainer}>
                             <div
                                onClick={() =>
                                  increaseItemQuantityHandler(item)
                                }
                                className={classes.quantityButton}
                              >
                                <FaPlus
                                  color="rgba(255, 71, 0, 1)"
                                  size={`${1.2}rem`}
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
                                  size={`${1.2}rem`}
                                />
                              </div>
                             </div>
                            </div>

                            <div className={classes.textAreaContainer}>
                              <label className={classes.label} htmlFor="message">Inscription</label>
                              <div>
                                <input
                                  className={`${classes.textAreaField}`}
                                  id="message"
                                  name="message"
                                  placeholder="Optional inscription"
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
                    <div>
                      <div className={classes.col}>
                        <div className={classes.textRow}>
                          <p>Subtotal</p>
                          <p>${subTotal}</p>
                        </div>
                        <div
                          style={{ alignSelf: "center", paddingTop: "1rem" }}
                        >
                          <StoreButton title={"CHECKOUT"} to={"/checkout"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        />
        <ShowIf
          condition={!isLoading && !items.length}
          render={() => {
            return (
              <div className={classes.absoluteCenter}>
                <p>Your cart is empty</p>
                <StoreButton title={"SHOP URRNZ"} to={"/products/All"} />
              </div>
            );
          }}
        />
      </main>
    </section>
    // <section className={classes.cartContainer}>
    //   <div className={classes.headingContainer}>
    // <div style={{marginTop: "9.6rem", marginBottom: "9.6rem"}}>
    // <Heading title="CART" />
    // </div>
    //   </div>
    //   <main>
    //     <ShowIf
    //       condition={isLoading}
    //       render={() => {
    //         return <LoadingMessage />;
    //       }}
    //     />
    //     <ShowIf
    //       condition={!isLoading && items.length}
    //       render={() => (
    //         <>
    //           {items.map((item, i) => (
    //             <div className={`${classes.container}`} key={item.cid}>
    //               <h3 className={classes.title}>{item.name}</h3>
    //               <div className={`${classes.itemContainer}`}>
    //                 <div className={classes.imageContainer}>
    //                   <div className={classes.imageContainerColumn}>
    //                     {item.image ? (
    //                       <img
    //                       alt={item.name}
    //                       className={classes.image}
    //                       src={item.image}
    //                     />
    //                     ) : (<div className={classes.emptyImage}></div>)}
    //                     <div
    //                       className={`${
    //                         (classes.pickerContainer,
    //                         classes.lgScreenPickerContainer)
    //                       }`}
    //                     >
    //                       {/* <CustomPicker cid={item.cid} /> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   {/* <h3 className={classes.title}>{item.name}</h3> */}

    //                   <div>
    //                     <div className={classes.detailsContainer}>
    //                       <div>
    //                         <p className={classes.itemPrice}>
    //                           Price: ${item.price * item.quantity}
    //                         </p>
    //                         <p className={classes.itemPrice}>
    //                           Quantity: {item.quantity}
    //                         </p>
    //                       </div>

    //                       <div className={classes.quantityButtonContainer}>
    // <div
    //   onClick={() => increaseItemQuantityHandler(item)}
    //   className={classes.quantityButton}
    // >
    //   <FaPlus
    //     color="rgba(255, 71, 0, 1)"
    //     size={`${1}rem`}
    //   />
    // </div>
    // <div
    //   onClick={() =>
    //     decreaseItemQuantityHandler(item.cid)
    //   }
    //   className={classes.quantityButton}
    // >
    //   <FaMinus
    //     color="rgba(255, 71, 0, 1)"
    //     size={`${1}rem`}
    //   />
    // </div>
    //                       </div>
    //                     </div>
    //                     <p className={classes.itemDescription}>
    //                       {item.description}
    //                     </p>
    //                     <div>
    //                       <div className={classes.textAreaContainer}>
    //                         <label className={classes.text} htmlFor="message">
    //                           Inscription:
    //                         </label>
    //                         <div>
    //                           <input
    //                             className={`${classes.textAreaField}`}
    //                             id="message"
    //                             name="message"
    //                             placeholder="Name or text to inscribe"
    //                             type="text"
    //                             onChange={(e) =>
    //                               dispatch(
    //                                 cartActions.setItemInscription({
    //                                   id: item.cid,
    //                                   inscription: e.target.value,
    //                                 })
    //                               )
    //                             }
    //                             value={item.inscription}
    //                           />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div
    //                       className={`${
    //                         (classes.pickerContainer,
    //                         classes.smScreenPickerContainer)
    //                       }`}
    //                     >
    //                       {/* <CustomPicker cid={item.cid} /> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}

    //           <div
    //             style={{
    //               display: "flex",
    //               flexDirection: "column",
    //             }}
    //           >
    //             <hr className={classes.horizontalLine} />
    //             <div
    //               style={{
    //                 marginRight: "15%",
    //                 alignSelf: "flex-end",
    //               }}
    //             >
    //               <p className={classes.subTotal}>Subtotal: ${subTotal}</p>
    //             </div>
    //           </div>
    //         </>
    //       )}
    //     />
    // <ShowIf
    //   condition={!isLoading && !items.length}
    //   render={() => {
    //     return <h3 className={classes.message}>Your cart is empty</h3>;
    //   }}
    // />
    // <ShowIf
    //   condition={!isLoading}
    //   render={() => {
    //     return (
    //       <div className={classes.cartButton}>
    //         <StoreButton
    //           title={!items.length ? "SHOP URRNZ" : "CHECKOUT"}
    //           to={!items.length ? "/products/All" : "/checkout"}
    //         />
    //       </div>
    //     );
    //   }}
    // />
    //   </main>
    // </section>
  );
};

export default Cart;
