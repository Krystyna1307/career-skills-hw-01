import { Route, Routes } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import Details from "./Details/Details";
import Header from "./Header/Header";
import Home from "./Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Homepage</h2>} />
        <Route path="/catalog" element={<h2>Catalog</h2>} />
        <Route path="/catalog/:id" element={<h2>Details</h2>} />
      </Routes>
      {/* <Home /> */}
      {/* <Catalog /> */}
      {/* <Details /> */}
    </div>
  );
};

export default App;
