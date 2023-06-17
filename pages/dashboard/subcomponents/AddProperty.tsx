import React from "react";
import PropertyForm from "../../../components/common/PropertyForm";
import { AddPropertySchema } from "../../../yupSchemas";

const AddProperty = () => {
  const initialValues = {
    title: "",
    description: "",
    area: "",
    status: "",
    type: "",
    listing_media: [],
    property_address: {
      address: "",
    },
    property_size: "",
    property_lot_size: "",
    property_year_built: "",
    property_amenities: [],
  };

  return (
    <>
      <h1 className="text-3xl mx-5 poppins font-bold my-5">Add Property</h1>
      <PropertyForm
        initialValues={initialValues}
        yupSchema={AddPropertySchema}
        state="add"
        property_id={undefined}
      />
    </>
  );
};

export default AddProperty;

