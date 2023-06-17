import Image from "next/image";
import React from "react";
import img from "../../assets/img/author.jpg";
import styles from "../../styles/TestimonialCard.module.css";
interface PropTypes {
  review: string;
  index: number;
  cardActive: any;
  onCardEnter: any;
}

const TestimonialCard = ({
  review,
  index,
  cardActive,
  onCardEnter,
}: PropTypes) => {
  return (
    <div
      className="card rounded shadow-xl p-8 sm:py-10 sm:px-7 bg-white"
      onMouseEnter={() => onCardEnter(index)}
    >
      <div
        className={`card-item ${
          index === cardActive ? "active" : ""
        } flex flex-col items-start gap-8`}
      >
        <p className="review text-start text-slate-400">{review}</p>
        <div className="author-info">
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
