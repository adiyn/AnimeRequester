let form=document.getElementById("request-form");
form.addEventListener("submit",function(event){
    event.preventDefault();


    try{
        if(validerFormulaire()){
        document.form.submit()
        }
    }catch(erreur){
        alert("Une erreur est survenue:"+erreur.message);
    }
});