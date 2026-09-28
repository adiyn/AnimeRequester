const API_KEY = 'b3d9f9d836msh885d26bf25597c1p103184jsnbcd76de3c9da';

const API_HOST = 'anime-db.p.rapidapi.com';
const BASE_URL = `https://${API_HOST}`;
const MAX_RESULTS = 10;

async function request(path) {
    const response = await fetch(`${BASE_URL}${path}`, {
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': API_HOST,
        },
    });

    if (response.status === 404) return [];
    if (!response.ok) {
        throw new Error(`Erreur API (${response.status})`);
    }

    const json = await response.json();
    if (Array.isArray(json.data)) return json.data;
    return json && Object.keys(json).length ? [json] : [];
}

export function searchByTitle(title) {
    const params = new URLSearchParams({ page: 1, size: MAX_RESULTS, search: title });
    return request(`/anime?${params}`);
}

export function searchById(id) {
    return request(`/anime/by-id/${encodeURIComponent(id)}`);
}

export function searchByRanking(rank) {
    return request(`/anime/by-ranking/${encodeURIComponent(rank)}`);
}