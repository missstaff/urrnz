import classes from "./Heading.module.css";

const Heading = (props) => {
  const { style, title } = props;
  return (
    <h2
      id={props.id}
      className={`${classes.heading} ${props.className}`}
      style={style}
    >
      {title}
    </h2>
  );
};

export default Heading;
