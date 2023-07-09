import classes from "./Container.module.css";


const Container = (props) => {
    return (
        <div 
            className={`${classes.container} ${props.className}`}
            style={props.style}>
            {props.children}
        </div>
    );
};

export default Container;