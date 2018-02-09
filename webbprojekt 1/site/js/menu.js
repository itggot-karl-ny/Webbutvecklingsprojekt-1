function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show");

    element = document.querySelector(".menudiv");
    element.classList.toggle("expandDiv")

    element = document.querySelector("main");
    element.classList.toggle("fade")
}