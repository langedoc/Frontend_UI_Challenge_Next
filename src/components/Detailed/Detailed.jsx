import React from 'react';
import './Detailed.scss';
import { useSearchParams } from 'next/navigation';
import { useMovieContext } from '../../contexts/MovieContext';
import CustomButton from '../CustomButton/CustomButton';

export default function Detailed() {
    const searchParams = useSearchParams();
    const movie = JSON.parse(searchParams.get('movie') || 'null');
    const { setWishlist, wishlist, listType } = useMovieContext();
    
    if (!movie) {
        return (
            <div className="detailed">
                <h3>Please select a movie from the home page</h3>
            </div>
        );
    }

    const handleAddMovie = () => {
        if (!wishlist.some(item => item.id === movie.id)) {
            setWishlist([...wishlist, movie]);
        }
    }

    const handleRemoveMovie = () => {
        setWishlist(wishlist.filter(item => item.id !== movie.id));
    }

    const getListStyle = () => {
        if (listType === "popular") {
            return "popular";
        } else if (listType === "upcoming") {
            return "upcoming";
        } else if (listType === "topRated") {
            return "topRated";
        }
    }
    
    return (
        <div className={`detailed ${getListStyle()}`} data-testid="detailed-page">
            <div className="detailed_main">
                <div className="detailed_main_poster">
                    <img
                        src={
                            movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder
                        }
                        alt="movie poster"
                    />
                </div>
                <div className="detailed_main_info">
                    {wishlist.some(item => item.id === movie.id) ? (
                        <CustomButton onClick={handleRemoveMovie}>Remove from Wishlist</CustomButton>
                    ) : (
                        <CustomButton onClick={handleAddMovie}>Add to Wishlist</CustomButton>
                    )}
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className="detailed_additional">
                <p><strong>Language:</strong><br/> {movie.original_language.toUpperCase()}</p>
                <p><strong>Release Date:</strong><br/> {movie.release_date}</p>
                <p><strong>Rating:</strong><br/> {movie.vote_average} ({movie.vote_count} votes)</p>
            </div>
        </div>
    );
};