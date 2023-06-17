import React from "react";

const IconCircle = ({ icon }: { icon: string }) => {
  return (
    <div className="rounded-full bg-pink-50 p-5">
      <i className={`${icon} text-semilarge text-pink-500`}></i>
    </div>
  );
};

export default IconCircle;
