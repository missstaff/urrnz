import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";
import Heading from "../components/layout/Heading";
import { cartActions } from "../store/cart-slice";
import classes from "./Cart.module.css";
import "../general.css";


const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const items = cart.items;
    const totalQuantity = cart.totalQuantity;
    const totalAmount = cart.totalAmount;
    const shipping = cart.shipping;
    const changed = cart.changed;


    const increaseItemQuantityHandler = (item) => {
        dispatch(cartActions.addItemToCart(item));
    }

    const decreaseItemQuantityHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    }


    return (
        <section>
            <div className="headingContainer">
                <Heading title="CART" />
            </div>
            <main>
                {items.map(item => (
                    <div
                        key={item.cid}
                        className={`container ${classes.container}`} >
                        <div
                            className={`${classes.itemContainer} ${classes.gridColumns}`}>

                            <img
                                className={classes.itemImage}
                                src={item.image}
                                alt={item.name}
                            />

                            <div style={{ alignSelf: "flex-start" }}>
                                <h2 style={{ fontSize: `${5}rem` }}>{item.name}</h2>
                                <p style={{ fontSize: `${2.5}rem` }}>Price ${item.price * item.quantity}</p>
                                <p style={{ fontSize: `${2.5}rem` }}>Qty: {item.quantity}</p>
                                <div style={{ alignSelf: "flex-end", justifySelf: "flex-end", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <div onClick={() => increaseItemQuantityHandler(item)} style={{backgroundColor:"white", paddingTop: `${1}rem`, paddingBottom: `${1}rem`, paddingLeft: `${5}rem`, paddingRight: `${5}rem`, margin: `${0.5}rem`, borderStyle: "solid", borderRadius: 7.5, borderWidth: 1, borderColor: "rgba(255, 71, 0, 1)"}} ><FaPlus size={`${2}rem`} color="rgba(255, 71, 0, 1)" /></div>
                                    <div onClick={() => decreaseItemQuantityHandler(item.cid)} style={{backgroundColor:"white",  paddingTop: `${1}rem`, paddingBottom: `${1}rem`, paddingLeft: `${5}rem`, paddingRight: `${5}rem`, margin: `${0.5}rem`, borderStyle: "solid", borderRadius: 7.5, borderWidth: 1, borderColor: "rgba(255, 71,0, 1)"}}><FaMinus size={`${2}rem`} color="rgba(255, 71, 0, 1)" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
};

export default Cart;