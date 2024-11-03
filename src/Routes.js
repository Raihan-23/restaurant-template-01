import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Home1 from "./pages/Home1";
// import RecipeDetails from "./pages/RecipeDetails";
// import BlogList from "./pages/BlogList";
// import BlogPost from "./pages/BlogPost";
// import Contact from "./pages/Contact";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        { path: "/home1", element: <Home1 /> },
        // { path: "/recipedetails", element: <RecipeDetails /> },
        // { path: "/bloglist", element: <BlogList /> },
        // { path: "/blogpost", element: <BlogPost /> },
        // { path: "/contact", element: <Contact /> },
    ]);

    return element;
};

export default ProjectRoutes;
