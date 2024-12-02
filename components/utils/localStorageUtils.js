// Utility function to get favorites from localStorage
export const getFavorites = () => {
  // Fetch favorites from localStorage (assuming it's stored as a JSON array)
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : []; // Return an empty array if nothing is found
};

// Utility function to save updated favorites to localStorage
export const saveFavorites = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Failed to save favorites to localStorage:", error);
  }
};

export const setFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

