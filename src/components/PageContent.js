import classes from './PageContent.module.css';

{/*needs sizing but overal looks decent */}
const PageContent = ({ titleClassName, title, children }) => {
  return (
    <div className={classes.content}>
      <h1 className={titleClassName}>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default PageContent;