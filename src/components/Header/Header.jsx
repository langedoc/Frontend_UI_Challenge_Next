import React from 'react';
import './Header.scss';
import Link from 'next/link';
import { useMovieContext } from '../../contexts/MovieContext';
import CustomButton from '../CustomButton/CustomButton';

export default function Header() {

    const {setIsWishlistOpen} = useMovieContext();

    return (
        <header className="header" data-testid="header" >
            <Link href="/" onClick={()=>setIsWishlistOpen(false)}>
                <h1>MyMovie</h1>
            </Link>
            <CustomButton onClick={()=>setIsWishlistOpen(true)}>MY WISHLIST</CustomButton>
        </header>
    );
}