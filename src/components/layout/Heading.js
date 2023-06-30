import classes from './Heading.module.css';



const Heading = (props) => {
    const {title} = props;
    return (
        <div>
        <h1 className={classes.heading}>{title}</h1>
        </div>
    );
};

export default Heading;