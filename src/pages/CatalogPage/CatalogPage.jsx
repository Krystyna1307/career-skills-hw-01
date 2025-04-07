import React, { useState } from "react";
import Catalog from "../../components/Catalog/Catalog";
import Form from "../../components/Form/Form";

const CatalogPage = () => {
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  return (
    <div>
      <Form onFilterChange={setFilters} />
      <Catalog filters={filters} />
    </div>
  );
};

export default CatalogPage;
