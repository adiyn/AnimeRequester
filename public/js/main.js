let form=document.getElementById("request-form");
form.addEventListener("submit",function(event){
    event.preventDefault();


    try{
        if(validerFormulaire()){
            let valRecup=document.querySelector('input[name="search"]').value;
            console.log(valRecup);
        }
    }catch(erreur){
        alert("Une erreur est survenue:"+erreur.message);
    }
});

function validerFormulaire(){
    var nom=document.querySelector('input[name="search"]').value;
    if(nom==""){
        throw new Error("Le champ ne peut pas etre vide");
    }
    return true;
}