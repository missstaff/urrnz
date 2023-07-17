import classes from "./LoadingMessage.module.css";


const LoadingMessage = () => {
    return (
        <div className={classes.container}>
        <p className={classes.message}>Loading...</p>
    </div>
    );
};

export default LoadingMessage;