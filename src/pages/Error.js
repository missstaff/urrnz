import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import PageContent from "../components/PageContent";


const Error = () => {

  const error = useRouteError();

  let title = "An error occured.";
  let message = "Sorry, something went wrong.";

  if (error.status === 401) {
    title = "Unauthorized!";
    message = "You do not have access to this resource.";
  }

  if (error.status === 403) {
    title = "Forbidden!";
    message = "This action isnot allowed.";
  }

  if (error.status === 404) {
    title = "Page not found!";
    message = "Sorry, the page you were looking for does not exist.";
  }

  if (error.status === 500) {
    title = "Server error";
    message = "Sorry, the server is not responding";
  }

  return (
    <main>
      <MainNavigation />
      <PageContent
        title={title}
        message={message}>
      </PageContent>
    </main>
  );
};

export default Error;