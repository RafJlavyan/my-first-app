import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./Routes";

const App = () => {
  return (
   <BrowserRouter>
   <MyRoutes />
   </BrowserRouter>
  );
};

export default App;
