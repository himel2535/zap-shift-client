import React, { useEffect, useState } from "react";
import { FaRocket, FaLock, FaHeadset } from "react-icons/fa";
import DescriptionCard from "./DescriptionCard";

// Reusable Feature Card Component

const OursDescription = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/oursDescription.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Failed to load features:", err));
  }, []);
 
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="h-0.5 w-full bg-gray-200 mb-12"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        {features.map((feature, index) => {
          return <DescriptionCard key={index} feature={feature} />;
        })}
      </div>

      <div className="h-0.5 w-full bg-gray-200 mt-12"></div>
    </div>
  );
};

export default OursDescription;
