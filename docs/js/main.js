import { searchAdvanced } from './api.js';
import { renderCards, renderMessage } from './cards.js';

const form = document.getElementById("request-form");
const responseContainer = document.getElementById("response-content");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const queryParams = Object.fromEntries(formData.entries());

    renderMessage(responseContainer, "Recherche en cours...");

    try {
        const resultatAnime = await searchAdvanced(queryParams);

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