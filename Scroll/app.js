

/*Set Date*/
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
/*Close links*/
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

/*  */
navToggle.addEventListener{"click", function(){
    // linksContainer.classList.toggle("show-links);"

const containerHeight = linksContainer.getBoundingClientRect();
const linksHeight = links.getBoundingClientRect().height;

if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
}else {
    linksContainer.style.height = 0;
}
}}

const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link");

/*Fixed NavBar*/
window.addEventListener('scroll', function) {
    console.log(window.pageYOffset);
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove("show-links");
    }
});

/*Smooth Scroll*/

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks/forEach(function(link)) {
    link.addEventListener("clink", function(e) {
        // stop default 
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect(), height;
        const containerHeight = linksContainer.getBoundingClientRect();
        let position = element.offsetTop - navHeight;

         if(!fixedNav){
            position = position - navHeight;

         }

         if(navHeight > 82) {
            position = position + containerHeight;
         }
         
        console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

