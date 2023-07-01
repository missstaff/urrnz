import classes from './Heading.module.css';


const Heading = (props) => {

    const { fontSize, title } = props;

    return (
        <h1 className={classes.heading} style={{fontSize: `${fontSize}rem`}}>{title}</h1>
    );
};

export default Heading;