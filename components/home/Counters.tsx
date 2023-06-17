import React from "react";
import Counter from "../common/Counter";

const Counters = () => {
  return (
    <div className="counters bg-slate-200 py-24 lg:px-40 md:px-12">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-6 md:col-span-3">
            <Counter
              end={5600}
              text="Total Area Sq"
              icon="fa-solid fa-sheet-plastic"
            />
          </div>
          <div className="col-span-6 md:col-span-6">
            <Counter
              end={90}
              text="Land Sold"
              icon="fa-solid fa-landmark"
            />
          </div>
          <div className="col-span-6 md:col-span-3 mt-8 md:mt-0">
            <Counter
              end={20}
              text="Total Constructions"
              icon="fa-solid fa-truck"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
