import { useState } from "react";

const FullScreenPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={togglePanel}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Panel
      </button>

      {/* Overlay panel */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={togglePanel} // Click to close the panel
      ></div>

      {/* Sliding panel */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 1000 }} // Ensure it's above the navbar
      >
        <button
          onClick={togglePanel}
          className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Close
        </button>
        <div className="h-full flex items-center justify-center">
          <p className="text-lg">Your images or content go here</p>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPanel;
