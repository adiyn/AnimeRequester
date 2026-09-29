let form=document.getElementById("request-form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const formData = new FormData(form);

    for(const[name,value] of formData.entries()){
        console.log(`${name}:${value}`);
    }
   
    

});

