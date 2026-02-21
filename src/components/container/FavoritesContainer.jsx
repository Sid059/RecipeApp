import { useFavorites } from "../../context/FavoritesContext";

import FavoritesPage from "../presentational/FavoritesPage";


export default function FavoritesContainer(){
    const { favorites } = useFavorites();

    return (
        <FavoritesPage 
            recipes={favorites}
        />
    )
}