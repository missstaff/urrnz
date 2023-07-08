import classes from "./Heading.module.css";


const Heading = (props) => {

    const { style, title } = props;

    return (
        <h1
            className={classes.heading}
            style={style}>
            {title}
        </h1>
    );
};

export default Heading;