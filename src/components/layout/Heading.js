import classes from "./Heading.module.css";

/**
 * Represents a heading component.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.style - The inline style of the heading.
 * @param {string} props.title - The title of the heading.
 * @param {string} props.id - The ID of the heading element.
 * @param {string} props.className - The additional CSS class name(s) for the heading.
 * @returns {JSX.Element} The rendered heading component.
 */
const Heading = (props) => {
  const { style, title } = props;
  return (
    <h1
      aria-label="Heading"
      className={`${classes.heading} ${props.className}`}
      id={props.id}
      role="heading"
      style={style}
      tabIndex={0}
    >
      {title}
    </h1>
  );
};

export default Heading;
