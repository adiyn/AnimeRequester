import { searchByTitle } from './api.js';
import { renderCards, renderMessage } from './cards.js';

const form = document.getElementById("request-form");
const responseContainer = document.getElementById("response-content");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const titreAnime = formData.get("search");

    if (!titreAnime) return;

    renderMessage(responseContainer, "Recherche en cours...");

    try {
        const resultatAnime = await searchByTitle(titreAnime);

        if (!resultatAnime || resultatAnime.length === 0) {
            renderMessage(responseContainer, "Aucun anime trouvé.");
            return;
        }

        renderCards(responseContainer, resultatAnime);
    } catch (error) {
        console.error(error);
        renderMessage(responseContainer, `Erreur: ${error.message}`);
    }
});