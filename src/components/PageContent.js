import classes from "./PageContent.module.css";
import { NavLink } from "react-router-dom";

const PageContent = ({ title, message, link }) => {

  return (
   <div style={{width: "100%"}}>
      <NavLink className={classes.link} to={link}>
        {<span>&larr;</span>}Back
      </NavLink>
    <div>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.message}>{message}</p>
    </div>
   </div>
  );
};

export default PageContent;
