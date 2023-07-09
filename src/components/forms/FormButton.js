

import classes from "./FormButton.module.css";


const FormButton = (props) => {
    return (
        <button
            className={classes.button}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}>
            {props.title}
        </button>
    );
};

export default FormButton;