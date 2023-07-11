import classes from "./Heading.module.css";


const Heading = (props) => {

    const { style, title } = props;

    return (
        <h1
            className={`${classes.heading} ${props.className}`}
            style={style}>
            {title}
        </h1>
    );
};

export default Heading;