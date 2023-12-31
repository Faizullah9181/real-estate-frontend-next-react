import React from "react";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const StarRating = ({
  rating,
  reviews,
  justify,
}: {
  rating: number;
  reviews: number;
  justify: string;
}) => {
  return (
    <div className={`ratings flex items-center ${justify}`}>
      <StarRatings
        rating={rating}
        starRatedColor="pink"
        starDimension="25px"
        starSpacing="1px"
      />
      <span className="ml-2 poppins mt-1 text-pink-500">
        ({reviews} Reviews)
      </span>
    </div>
  );
};

export default StarRating;
