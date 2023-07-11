

import classes from "./FormButton.module.css";


const FormButton = (props) => {
    return (
        <button
            className={`${classes.button} ${props.className}}`}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}>
            <p
                className={props.fontClassName}>
                {props.title}
            </p>
        </button>
    );
};

export default FormButton;