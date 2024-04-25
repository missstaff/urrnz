import classes from "./PageContent.module.css";
import { NavLink } from "react-router-dom";

/**
 * Renders the content of a page.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the page.
 * @param {string} props.message - The message to be displayed on the page.
 * @param {string} props.link - The link to navigate back to Home Page.
 * @returns {JSX.Element} The rendered page content.
 */
const PageContent = ({ title, message, link }) => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.message}>{message}</p>
      </div>
      <NavLink className={classes.link} to={link}>
        {<span>&larr;</span>} To Home
      </NavLink>
    </div>
  );
};

export default PageContent;
