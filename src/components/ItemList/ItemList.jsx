import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.scss';

export default function ItemList({movies, listType}) {
    return (
        <div className="item-list" data-testid="item-list">
            {!movies ? (
                <div className="loading">Loading...</div>
            ) : (
                movies.map((movie) => (
                    <ItemCard key={movie.id} movie={movie} listType={listType} />
                ))
            )}
        </div>
    );
};