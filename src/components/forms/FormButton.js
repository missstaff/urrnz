import classes from "./FormButton.module.css";

const FormButton = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}}`}
      aria-label="Form button"
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      role="button"
      tabIndex={0}
    >
      <p className={props.fontClassName}>{props.title}</p>
    </button>
  );
};

export default FormButton;
