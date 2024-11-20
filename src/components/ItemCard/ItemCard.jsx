import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import placeholder from '../../assets/coming_soon.png';
import './ItemCard.scss';
import { useMovieContext } from '../../contexts/MovieContext';

export default function ItemCard({movie, listType}) {
    const {setListType} = useMovieContext();
    
    return (
        <div className="item-card" data-testid="item-card">
            <Link 
                href={{
                    pathname: '/detailed',
                    query: { movie: JSON.stringify(movie) }
                }} 
                onClick={() => setListType(listType)}
            >
                <Image
                    src={
                        movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                            : placeholder
                    }
                    alt="movie poster"
                    width={500}
                    height={750}
                    priority
                />
            </Link>
            <h3>{movie.title}</h3>
        </div>
    );
};