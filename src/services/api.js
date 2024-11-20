/*
    Get your API key from [The Movie Database](https://www.themoviedb.org/settings/api)
    Create `.env` file in the root of the project and add your API key to it
*/

export const apiKey = `api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const BASE_URL = "https://api.themoviedb.org/3/movie";

export async function fetchRequest(url) {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export async function getPopularMovies() {
    return fetchRequest(`/popular?${apiKey}`);
}

export async function getTopRatedMovies() {
    return fetchRequest(`/top_rated?${apiKey}`);
}

export async function getUpcomingMovies() {
    return fetchRequest(`/upcoming?${apiKey}`);
}
