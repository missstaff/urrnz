import { useSelector } from 'react-redux';
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import "../general.css";


const Cart = () => {

    const cart = useSelector(state => state.cart);
    const items = cart.items;
    const totalQuantity = cart.totalQuantity;
    const totalAmount = cart.totalAmount;
    const shipping = cart.shipping;
    const changed = cart.changed;
    console.log("cart", cart);
    console.log("items", items);
    console.log("totalQuantity", totalQuantity);
    console.log("totalAmount", totalAmount);
    console.log("shipping", shipping);
    console.log("changed", changed);

    return (
       <section>
         <div className="headingContainer">
            <Heading title="CART" />
        </div>
        <main>
        <Container>
        <div className="container" >
           <p>lorem ipsum</p>
        </div>
    </Container>
        </main>
       </section>
    );
};

export default Cart;