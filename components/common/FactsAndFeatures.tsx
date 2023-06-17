import React from "react";
import IconWithTextHeading from "./IconWithTextHeading";

const FactsAndFeatures = () => {
  return (
    <div className="features py-10 grid gap-6 grid-cols-12">
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Park"
          Icon="fa-solid fa-tree"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Playground"
          Icon="fa-solid fa-football-ball"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Garden"
          Icon="fa-solid fa-tree"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Parking"
          Icon="fa-solid fa-car"
        />
      </div>
    </div>
  );
};

export default FactsAndFeatures;
