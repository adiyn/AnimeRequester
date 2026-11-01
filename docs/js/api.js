const BASE_URL = 'https://api.tenrai.org/v1';

export async function searchAdvanced(queryParams) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(queryParams)) {
        if (value && value.trim() !== '') {
            params.append(key, value.trim());
        }
    }

    const response = await fetch(`${BASE_URL}/anime?${params.toString()}`);

    if (response.status === 404) return [];
    if (!response.ok) {
        throw new Error(`Err API (${response.status})`);
    }

    const json = await response.json();
    const list = Array.isArray(json.data) ? json.data : [];

    return list.map(anime => ({
        title: anime.title || anime.title_english || 'Titre inconnu',
        image: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || '',
        synopsis: anime.synopsis || 'Non renseigné',
        genres: Array.isArray(anime.genres) ? anime.genres.map(g => g.name) : [],
        ranking: anime.score ?? anime.rank ?? 'N/A',
        episodes: anime.episodes ?? 'N/A'
    }));
}