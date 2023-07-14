import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";

import CustomPicker from "../components/ui/ColorPicker";
import Heading from "../components/layout/Heading";
import ShowIf from "../components/ShowIf";
import StoreButton from "../components/ui/StoreButton";

import { cartActions } from "../store/cart-slice";

import classes from "./Cart.module.css";
import "../general.css";


const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const items = cart.items;
    const subTotal = cart.subTotal;


    const increaseItemQuantityHandler = (item) => {
        dispatch(cartActions.addItemToCart(item));
    };

    const decreaseItemQuantityHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    };


    return (
        <section
            className={`wrapper`}
            style={{
                height: !items.length ? `${100}vh` : `${100}%`
            }}>
            <div className="headingContainer">
                <Heading title="CART" />
            </div>
            <main>
                <ShowIf
                    condition={items.length}
                    render={() => (
                        <>
                            {items.map((item) => (
                                <div
                                    className={`${classes.container}`}
                                    key={item.cid}>
                                    <div className={`${classes.gridColumns} ${classes.itemContainer}`}>
                                        <div className={classes.imageContainer}>
                                            <img
                                                alt={item.name}
                                                className={classes.itemImage}
                                                src={item.image}
                                            />
                                        </div>
                                        <div style={{ alignSelf: "center" }}>
                                            <div className={classes.itemHeader}>
                                                <h2 className={classes.itemName}>
                                                    {item.name}
                                                </h2>
                                                <div className={classes.itemDetails}>
                                                    <p
                                                        className={classes.itemPrice}>
                                                        Price: ${item.price * item.quantity}
                                                    </p>
                                                    <p
                                                        className={classes.itemPrice}>
                                                        Quantity: {item.quantity}
                                                    </p>
                                                    <div className={classes.itemButtons}>
                                                        <div
                                                            onClick={() => increaseItemQuantityHandler(item)}
                                                            className={classes.quantityButton}>
                                                            <FaPlus
                                                                color="rgba(255, 71, 0, 1)"
                                                                size={`${1}rem`}
                                                            />
                                                        </div>
                                                        <div
                                                            onClick={() => decreaseItemQuantityHandler(item.cid)}
                                                            className={classes.quantityButton}>
                                                            <FaMinus
                                                                color="rgba(255, 71, 0, 1)"
                                                                size={`${1}rem`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p
                                                className={classes.itemDescription}>
                                                {item.description}
                                            </p>
                                            <div
                                                className={classes.pickerContainer}>
                                                <CustomPicker
                                                    cid={item.cid}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                <hr className={classes.horizontalLine} />
                                <div
                                    style={{
                                        marginRight: "15%",
                                        alignSelf: "flex-end"
                                    }}>
                                    <p
                                        className={classes.subTotal}>
                                        Subtotal: ${subTotal}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                    renderElse={() => (
                        <h3
                            className={classes.message}>
                            Your cart is empty
                        </h3>
                    )}
                />
                <div className={classes.cartButton}>
                    <StoreButton
                        title={!items.length ? "SHOP URRNZ" : "CHECKOUT"}
                        to={!items.length ? "/products/all" : "/checkout"}
                    />
                </div>
            </main>
        </section>
    );
};

export default Cart;