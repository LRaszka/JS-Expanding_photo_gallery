const slides = document.querySelectorAll(".slide");

slides.forEach(function(oneslide){ //cyklus na procházení polem
    oneslide.addEventListener("click", function(){ //"naslouchání" kliknutí
        //active vymaže všem
        deleteActiveClass();
        oneslide.classList.add("active"); //přidání class active
    });
}); 

function deleteActiveClass() {
    slides.forEach(function (mySlide) { //cyklus načtení slide do myslide
        mySlide.classList.remove("active"); //vymazání třídy active
    })
}