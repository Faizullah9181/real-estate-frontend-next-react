import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <span className="bg-pink-50 text-pink-500 rounded-full px-7 py-1">
      {text}
    </span>
  );
};

export default Badge;
