import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { PiStarDuotone } from "react-icons/pi";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL, ratings } = review;
  return (
    <div className="p-8 ">
      <div className="card  bg-base-100 shadow-xl rounded-2xl p-6 border-4 border-gray-100/50">
        {/* Quote Section */}
        <div className="mb-6">
          <FaQuoteLeft className="text-5xl text-teal-300  mb-4" />

          <p className="text-gray-700 leading-relaxed">{testimonial}</p>
        </div>

        <div className="border-t border-dashed border-gray-300 my-4"></div>

        <div className="flex items-center mt-4">
          <div className="avatar mr-4">
            <div className="w-14 h-14 bg-teal-800 rounded-full">
              <img src={user_photoURL} alt="" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 text-lg">{userName}</p>
            <p className=" flex items-center gap-1 ">
              {ratings}
              <PiStarDuotone />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
