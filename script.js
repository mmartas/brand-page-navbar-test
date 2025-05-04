let arrowField = document.querySelector(".arrow-right")

let arrowAlone = document.querySelector(".fa-solid.fa-arrow-right")

let sideBarContainer = document.querySelector(".side_bar_container")


arrowField.addEventListener("click", function(event){
    sideBarContainer.classList.toggle("side_bar_container_wider")
    arrowAlone.classList.toggle("flip")
    arrowField.classList.toggle("black")
})


window.addEventListener("load", function () {
    sideBarContainer.classList.add("visible");
});