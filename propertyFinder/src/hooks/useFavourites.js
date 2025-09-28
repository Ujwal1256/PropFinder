import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('property-favorites', []);

  const addToFavorites = (propertyId) => {
    setFavorites(prev => [...prev, propertyId]);
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(prev => prev.filter(id => id !== propertyId));
  };

  const isFavorite = (propertyId) => {
    return favorites.includes(propertyId);
  };

  const toggleFavorite = (propertyId) => {
    if (isFavorite(propertyId)) {
      removeFromFavorites(propertyId);
    } else {
      addToFavorites(propertyId);
    }
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite
  };
}