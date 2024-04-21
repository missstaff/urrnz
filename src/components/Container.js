import classes from "./Container.module.css";

/**
 * A reusable container component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.className - The additional CSS class name for the container.
 * @param {Object} props.style - The inline CSS styles for the container.
 * @param {ReactNode} props.children - The content to be rendered inside the container.
 * @returns {JSX.Element} The rendered container component.
 */
const Container = (props) => {
  return (
    <div
      className={`${classes.container} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Container;
