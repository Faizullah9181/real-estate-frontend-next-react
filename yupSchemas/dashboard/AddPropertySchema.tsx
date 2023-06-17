import * as Yup from "yup";

export const AddPropertySchema = Yup.object({
  title: Yup.string().required("Please Enter Property Title"),
  description: Yup.string().required("Please Enter Property Description"),
  area: Yup.string().required("Please Choose Property Area"),
  status: Yup.string(),
  type: Yup.string(),
  listing_media: Yup.array().min(4, "Please Upload At Least 4 Pictures"),
  property_address: Yup.object().shape({
    address: Yup.string().required("Please Enter Address"),
  }),
  property_size: Yup.number().required("Please Enter Property Size"),
  property_lot_size: Yup.number().required("Please Enter Property Lot Size"),
  property_year_built: Yup.number().required(
    "Please Enter Property Year Built"
  ),
  property_amenities: Yup.array()
});

