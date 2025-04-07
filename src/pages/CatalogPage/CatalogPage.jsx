import React, { useState } from "react";
import Catalog from "../../components/Catalog/Catalog";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

const CatalogPage = () => {
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  return (
    <div>
      <Header />
      <Form onFilterChange={setFilters} />
      <Catalog filters={filters} />
    </div>
  );
};

export default CatalogPage;
