import { useState } from "react";
import workoutPlan from "./data.js";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Stylish Logo */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
        Workout
      </h1>

      <div className="flex w-full max-w-5xl">
        {/* Left Sidebar (Workout Menu) */}
        <nav className="w-1/3 border-2 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
          <ul className="space-y-2">
            {workoutPlan.map((workout, index) => (
              <li key={index}>
                <button
                  className="w-full text-left p-2 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg"
                  onClick={() => toggleDropdown(workout.title)}
                >
                  {workout.day} - {workout.title}
                </button>
                {openDropdown === workout.title && (
                  <ul className="bg-blue-500 p-2 mt-1 rounded-lg shadow-md">
                    {workout.exercises.map((exercise, i) => (
                      <li
                        key={i}
                        className="p-1 cursor-pointer hover:bg-blue-400 transition duration-200 rounded-md"
                        onClick={() => setSelectedExercise(exercise)}
                      >
                        {exercise.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section (Display Selected Exercise Video and Duration) */}
        <div className="flex flex-col justify-center items-center w-2/3 bg-gray-300 border-2 p-4 rounded-lg shadow-lg">
          {selectedExercise && (
            <iframe
              src={selectedExercise.videoUrl}
              className="w-[80%] h-[90%] mb-4 rounded-lg border-4 border-blue-500 shadow-md"
              allowFullScreen
            ></iframe>
          )}

          <h1 className="text-2xl font-bold text-gray-800">
            {selectedExercise ? `Duration: ${selectedExercise.duration}` : "Select an Exercise"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
