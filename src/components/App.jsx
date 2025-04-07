import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {
  return (
    <div>
      {/* <Header /> */}

      <div className={s.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
