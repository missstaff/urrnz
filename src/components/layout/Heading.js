import classes from "./Heading.module.css";

const Heading = (props) => {
  const { style, title } = props;
  return (
    <h1
      id={props.id}
      className={`${classes.heading} ${props.className}`}
      style={style}
      role="heading"
      tabIndex={0}
      aria-label="Heading"
    >
      {title}
    </h1>
  );
};

export default Heading;
