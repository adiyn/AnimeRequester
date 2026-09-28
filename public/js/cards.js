function createField(label, value) {
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = `${label} : `;
    p.append(strong, String(value ?? 'N/A'));
    return p;
}

export function createCard(anime) {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('h2');
    title.textContent = anime.title;
    card.append(title);

    if (anime.image) {
        const img = document.createElement('img');
        img.src = anime.image;
        img.alt = `Affiche de ${anime.title}`;
        img.loading = 'lazy';
        card.append(img);
    }

    card.append(
        createField('Synopsis', anime.synopsis),
        createField('Genres', anime.genres?.length ? anime.genres.join(', ') : 'N/A'),
        createField('Classement', anime.ranking),
        createField("Nombre d'épisodes", anime.episodes),
    );

    return card;
}

export function renderCards(container, animes) {
    container.replaceChildren(...animes.map(createCard));
}

export function renderMessage(container, message) {
    const p = document.createElement('p');
    p.className = 'message';
    p.textContent = message;
    container.replaceChildren(p);
}