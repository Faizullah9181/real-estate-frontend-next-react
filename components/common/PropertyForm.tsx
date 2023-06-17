import React, { ChangeEvent, RefObject, useRef, useState } from "react";
import TextInput from "./TextInput";
import { useFormik } from "formik";
import SpinnerSmall from "./SpinnerSmall";
import TextArea from "./Textarea";
import MaterialSelectWithValidation from "./MaterialSelectWithValidation";
import { AreaMenu, PropertyStatus, PropertyType } from "../../menus";
import FileUpload from "./FileUpload";
import MaterialCheckbox from "./MaterialCheckbox";
import { AminitiesCheckbox } from "../../checkboxes";
import { Button } from "@material-tailwind/react";
import ButtonRedWithIcon from "./ButtonRedWithIcon";
import FloorFields from "./FloorFields";
import { addProperty, editProperty } from "../../functions";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface PropTypes {
  initialValues: {
    title: string;
    description: string;
    area: string;
    status: string;
    type: string;
    listing_media: string[];
    property_address: {
      address: string;
    };
    property_size: string;
    property_lot_size: string;
    property_year_built: string;
    property_amenities: string[];
  };
  state: "update" | "add";
  property_id: string | string[] | undefined;
  yupSchema: any;
}

const PropertyForm = ({
  initialValues,
  state,
  property_id,
  yupSchema,
}: PropTypes) => {
  const handleAddressChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFieldValue("property_address.address", e.target.value);
  };
  // ?Reference To File Inputs --------------->
  const uploadMediaRef = useRef<HTMLInputElement>(null);
  // !Reference To File Inputs --------------->

  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  const router = useRouter();

  // ?Configurations For Formik -------------------------->

  // ?Handle When Values Of Material Select With Validation Changes -------------->
  const handleChangeMaterialSelectArea = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setFieldValue("area", e);
  };
  const handleChangeMaterialSelectStatus = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setFieldValue("status", e);
  };
  const handleChangeMaterialSelectType = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setFieldValue("type", e);
  };
  // !Handle When Values Of Material Select With Validation Changes -------------->

  // ?Handle When Value Of Google Places Autocomplete Change -------------->

  // !Handle When Value Of Google Places Autocomplete Change -------------->

  // ?Handle When Listing Media Changes -------------->

  const previewFiles = (files: FileList | null) => {
    let filesArray: any = [];
    if (files !== null) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend = () => {
          filesArray.push(reader.result);
          setFieldValue("listing_media", filesArray);
        };
      }
    }
  };

  const handleChangeListingMedia = (e: ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;

    previewFiles(files);
  };

  // !Handle When Listing Media Changes -------------->

  // ?Handle When Floor Media Changes -------------->

  // !Handle When Floor Media Changes -------------->

  // ?Handle When Someone Clicks On Plus Icon To Add Floor -------------->
  // !Handle When Someone Clicks On Plus Icon To Add Floor -------------->

  // ?Handle When Someone Clicks On Cross Icon To Remove Floor -------------->

  // !Handle When Someone Clicks On Cross Icon To Remove Floor -------------->

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values, action) => {
      setIsLoading(true);

      if (state === "add") {
        const isPropertyAdded = await addProperty(values);

        if (isPropertyAdded.error) {
          toast.error(isPropertyAdded.msg);
          setIsLoading(false);
          return;
        }

        toast.success(isPropertyAdded.msg, {
          position: "bottom-center",
        });
        setIsLoading(false);
        router.push("/dashboard?route=myProperties");
      } else {
        const isPropertyUpdated = await editProperty(values, property_id);

        if (isPropertyUpdated.error) {
          toast.error(isPropertyUpdated.msg);
          setIsLoading(false);
          return;
        }

        toast.success(isPropertyUpdated.msg, {
          position: "bottom-center",
        });
        setIsLoading(false);
        router.push("/dashboard?route=myProperties");
      }
    },
  });
  // !Configurations For Formik -------------------------->

  return (
    <>
      <div className="m-4 shadow-xl sm:rounded-lg p-10">
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit}
          action="#"
        >
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-12">
              <TextInput
                id="title"
                type="text"
                name="title"
                label="Property Title"
                value={values.title}
                error={errors.title && touched.title}
                errorText={errors.title}
                onBlur={handleBlur}
                placeholder="Title*"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <TextArea
                id="description"
                name="description"
                label="Property Description"
                value={values.description}
                error={errors.description && touched.description}
                errorText={errors.description}
                onBlur={handleBlur}
                placeholder="Description*"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <TextArea
                label="Property Address"
                id="property_address.address"
                name="property_address.address"
                value={values.property_address?.address}
                error={
                  errors.property_address?.address &&
                  touched.property_address?.address
                }
                errorText={errors.property_address?.address}
                onBlur={handleBlur}
                placeholder="Address*"
                onChange={handleAddressChange} // Fixed: changed from handleAddressChange to handleChange
              />
            </div>

            <div className="col-span-4">
              <MaterialSelectWithValidation
                variant="outlined"
                color="pink"
                size="lg"
                label="Select Area"
                disabled={false}
                value={values.area}
                onChange={handleChangeMaterialSelectArea}
                error={errors.area && touched.area}
                errorText={errors.area}
                options={AreaMenu}
              />
            </div>
            <div className="col-span-4">
              <MaterialSelectWithValidation
                variant="outlined"
                color="pink"
                size="lg"
                label="Select Status"
                disabled={false}
                value={values.status}
                onChange={handleChangeMaterialSelectStatus}
                error={errors.status && touched.status}
                errorText={errors.status}
                options={PropertyStatus}
              />
            </div>
            <div className="col-span-4">
              <MaterialSelectWithValidation
                variant="outlined"
                color="pink"
                size="lg"
                label="Select Type"
                disabled={false}
                value={values.type}
                onChange={handleChangeMaterialSelectType}
                error={errors.type && touched.type}
                errorText={errors.type}
                options={PropertyType}
              />
            </div>

            <div className="col-span-4">
              <TextInput
                id="property_size"
                type="number"
                name="property_size"
                label="Property Size* (In SQFT)"
                value={values.property_size}
                error={errors.property_size && touched.property_size}
                errorText={errors.property_size}
                onBlur={handleBlur}
                placeholder="Property Size"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_lot_size"
                type="number"
                name="property_lot_size"
                label="Property Lot Size* (In SQFT)"
                value={values.property_lot_size}
                error={errors.property_lot_size && touched.property_lot_size}
                errorText={errors.property_lot_size}
                onBlur={handleBlur}
                placeholder="Property Lot Size"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_year_built"
                type="number"
                name="property_year_built"
                label="Property Year Built*"
                value={values.property_year_built}
                error={
                  errors.property_year_built && touched.property_year_built
                }
                errorText={errors.property_year_built}
                onBlur={handleBlur}
                placeholder="Year Built"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12 pt-1"></div>
            <div className="col-span-12">
              <h1 className="text-3xl my-5 font-bold">Amenities</h1>
              <div className="amenities-checkboxes -ml-3 grid grid-cols-12">
                {AminitiesCheckbox.map((checkbox) => {
                  const checked =
                    values.property_amenities &&
                    values.property_amenities.includes(checkbox.value);

                  return (
                    <div
                      className="col-span-12 md:col-span-4"
                      key={checkbox.value}
                    >
                      <MaterialCheckbox
                        name="property_amenities"
                        value={checkbox.value}
                        checked={checked}
                        handleChange={handleChange}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="col-span-12">
                {errors.property_amenities && touched.property_amenities && (
                  <p className="text-pink-500 text-sm">
                    {errors.property_amenities}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-12">
              <Button
                size="md"
                className="poppins"
                onClick={() => uploadMediaRef.current?.click()}
              >
                Upload Pictures
              </Button>

              <FileUpload
                id="listing_media"
                name="listing_media"
                multiple={true}
                reference={uploadMediaRef}
                previewSource={values.listing_media}
                onChange={handleChangeListingMedia}
                error={errors.listing_media && touched.listing_media}
                errorText={errors.listing_media}
              />
            </div>
          </div>
          {isLoading ? (
            <div className="text-start">
              <SpinnerSmall />
            </div>
          ) : (
            <button
              type="submit"
              className="text-white bg-pink-500 hover:bg-pink-600 focus:outline-none font-medium rounded-lg text-sm px-8 py-2.5 text-center flex items-center gap-2"
              onClick={() => {
                handleSubmit();
                console.log("sdsdsdsd", values);
              }}
            >
              {state === "add" ? (
                <>
                  <span>Add Property</span>
                  <i
                    className="fa fa-plus-circle mt-0.5"
                    aria-hidden="true"
                  ></i>
                </>
              ) : (
                <>
                  <span>Update Property</span>
                  <i
                    className="fa fa-check-circle mt-0.5"
                    aria-hidden="true"
                  ></i>
                </>
              )}
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default PropertyForm;

