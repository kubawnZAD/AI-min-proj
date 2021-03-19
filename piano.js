var klawisze = document.querySelectorAll(".klawisz");


klawisze.forEach(klawisz =>{
 klawisz.addEventListener("click", () => zagraj(klawisz))
})


function zagraj(klawisz){
    let nuta = document.getElementById(klawisz.dataset.nuta);
    nuta.currentTime = 0;
    nuta.play();
    console.log(nuta);
}