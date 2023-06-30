import classes from './Heading.module.css';


const Heading = (props) => {

    const { fontSize, title } = props;

    return (
        <div>
            <h1 className={classes.heading} style={{fontSize: `${fontSize}rem`}}>{title}</h1>
        </div>
    );
};

export default Heading;