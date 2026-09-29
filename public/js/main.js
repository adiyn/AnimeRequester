import { searchByTitle } from 'api.js';

let form=document.getElementById("request-form");
form.addEventListener("submit",async function(event){
    event.preventDefault();
    const formData = new FormData(form);
    
    for(const[name,value] of formData.entries()){
        console.log(`${name}:${value}`);
    }
    console.log("coucou");
    let titreAnime= formData.get("search");
    console.log("Resultat pour: ",titreAnime);

    const resultatAnime=await searchByTitle(titreAnime);
    console.log(resultatAnime);
   
    

});

