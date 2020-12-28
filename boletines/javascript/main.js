
let links = document.querySelectorAll(".close");
//arreglos
links.forEach(function(link){

    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        content.classList.remove("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href= '/boletines';
        },600);

        return false;
});
});
