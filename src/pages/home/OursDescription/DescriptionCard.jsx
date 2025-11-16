import React from "react";

const DescriptionCard = ({ feature }) => {
  return (
    <div className="flex flex-col md:flex-row items-start py-8 px-6 lg:px-10 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      {/* Image / Divider Section */}
      <div
        className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center md:items-start mb-6 md:mb-0 
        md:border-r md:border-dashed md:border-gray-300 md:pr-10"
      >
        <div className="w-34 h-34 md:w-40 md:h-40 p-1    flex items-center justify-center overflow-hidden">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow md:pl-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {feature.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
