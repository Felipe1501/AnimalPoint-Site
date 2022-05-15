 const body = document.querySelector("body"), 
       searchToggle = document.querySelector(".searchToggle"),
       search = document.querySelector(".pesquisar-botao input"),
       titulo = document.querySelectorAll(".card-1",),
       banho = document.querySelectorAll(".card-2");

//função pesquisar
searchToggle.addEventListener("click", () =>{
    searchToggle.classList.toggle("ativar");
});

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searchValue = search.value,
        value = searchValue.toLowerCase();
        titulo.forEach(titulo =>{
            if(value === titulo.dataset.name){
                return titulo.style.display =  "block";
            }
            titulo.style.display = "none"; 
        });

    }
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    titulo.forEach(titulo =>{
        titulo.style.display =  "block";
    });
});

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searchValue = search.value,
        value = searchValue.toLowerCase();
        banho.forEach(banho =>{
            if(value === banho.dataset.name){
                return banho.style.display =  "block";
            }
            banho.style.display = "none"; 
        });

    }
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    banho.forEach(banho =>{
        banho.style.display =  "block";
    });
});