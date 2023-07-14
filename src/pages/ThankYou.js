import Heading from "../components/layout/Heading";
import classes from "./ThankYou.module.css";


const ThankYou = () => {
    return (
        <div className={classes.wrapper}>
             <div className="headingContainer">
                <Heading title="THANK YOU" />
            </div>
            <div className={classes.container}>
                <p style={{textAlign: "center", fontSize: `${2.8}rem`}}>Your order has been placed!</p>
            </div>
        </div>
    );
};

export default ThankYou;