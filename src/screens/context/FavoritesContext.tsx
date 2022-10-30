import * as React from "react";

export type FavoritesContextType = {
  favorites: string[];
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
};

export const FavoriteContext = React.createContext<FavoritesContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

const FavoriteProvider: React.FC<Props> = ({ children }) => {
  function getSavedFavorites() {
    const savedFavorites = localStorage.getItem("favoriteLaunches");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }

  const [favorites, setFavorites] = React.useState<string[]>(
    getSavedFavorites()
  );

  const addToFavorites = (id: string) => {
    setFavorites([...favorites, id]);
    localStorage.setItem(
      "favoriteLaunches",
      JSON.stringify([...favorites, id])
    );
  };

  const removeFromFavorites = (id: string) => {
    const newFavorites = favorites.filter((item: string) => item !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favoriteLaunches", JSON.stringify(newFavorites));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
