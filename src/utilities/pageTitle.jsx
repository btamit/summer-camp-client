import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeName = location.pathname; // Get the current route path
    let title = "Martial Arts"; // Default title

    // Update the title based on the current route
    if (routeName === "/") {
      title = "Martial Arts | Home";
    } else if (routeName === "/instructors") {
      title = "Martial Arts | Instructors";
    } else if (routeName === "/classes") {
      title = "Martial Arts | Classes";
    }
     else if (routeName === "/login") {
       title = "Martial Arts| Login";
     } else if (routeName === "/register") {
       title = "Martial Arts | Register";
     }

    document.title = title; // Update the document title
  }, [location.pathname]);
};
export default usePageTitle;