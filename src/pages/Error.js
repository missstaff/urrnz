import { useRouteError, NavLink } from 'react-router-dom';
import PageContent from '../components/PageContent';
import classes from './Error.module.css';


const Error = () => {

    const error = useRouteError();

    let title = "An error occured.";
    let message = "Sorry, something went wrong.";

    
    if (error.status === 404) {
        title = "Page not found!";
        message = "Sorry, the page you were looking for does not exist.";
    }

    if (error.status === 500) {
        title = "Server error";
        message = "Sorry, the server is not responding";
    }


    return (
        <main style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: `${100}vh`, width: "100%" }}>
            <PageContent titleClassName={classes.title} title={title}>
                <p className={classes.message}>{message}</p>
                <NavLink className={classes.link} to="/">{<span>&larr;</span>}Return to Urrnz</NavLink>
            </PageContent>
        </main>
    );
};

export default Error;