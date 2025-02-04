import { useState } from "react";
import yogaRoutine from "../yoga.data.js";

const Yoga = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDayClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Yoga Routine</h1>
      
      {/* Days Navigation */}
      <div className="flex space-x-3 mb-6">
        {yogaRoutine.map((day, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${currentIndex === index ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => handleDayClick(index)}
          >
            {day.days}
          </button>
        ))}
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {yogaRoutine[currentIndex].yoga.map((yogaItem, index) => (
          <div key={index} className="relative bg-white p-4 rounded-lg shadow-lg overflow-hidden group">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={yogaItem.videoUrl}
                title={yogaItem.yoga_title}
                allowFullScreen
              ></iframe>
            </div>
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-bold">{index + 1}</span>
              <h4 className="text-lg text-white font-semibold">{yogaItem.yoga_title}</h4>
              <p className="text-sm text-gray-300">Duration: {yogaItem.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yoga;