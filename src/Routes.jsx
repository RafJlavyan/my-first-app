import { useRoutes } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import BookDetails from "./components/BookDetails/BookDetails";
import BookList from "./components/BookList/BookList";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

export const MyRoutes = () => {
  const routing = useRoutes([
    {
      element: <Home />,
      path: "",
    },
    {
      element: <NavBar />,
      path: "books",
      children: [
        { path: "", element: <BookList /> },
        { path: "add", element: <AddBook /> },
        { path: "item/:id", element: <BookDetails /> },
      ],
    },
    {
      element: <h1>Page not found</h1>,
      path: "*",
    },
  ]);
  return routing;
};
