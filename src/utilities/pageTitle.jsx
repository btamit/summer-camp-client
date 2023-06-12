import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeName = location.pathname; // Get the current route path
    let title = "Summer-Camp-School"; // Default title

    // Update the title based on the current route
    if (routeName === "/") {
      title = "Summer-Camp-School | Home";
    } else if (routeName === "/instructors") {
      title = "Summer-Camp-School | Instructors";
    } else if (routeName === "/classes") {
      title = "Summer-Camp-School | Classes";
    }
     else if (routeName === "/login") {
       title = "Summer-Camp-School| Login";
     } else if (routeName === "/register") {
       title = "Summer-Camp-School | Register";
     }

    document.title = title; // Update the document title
  }, [location.pathname]);
};
export default usePageTitle;