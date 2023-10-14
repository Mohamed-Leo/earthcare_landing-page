// list nav------
let listIcon = document.querySelector('.list');
let nav = document.querySelector('nav');
let closeIcon = document.querySelector('.close');
let header = document.querySelector('header');
let links = document.querySelectorAll('nav a');
let earthLink = document.querySelector('.earth-link');


// active contact us
let contactLink = document.querySelector('[data-link="contact"]');
contactLink.addEventListener('click' , () => contactLink.classList.toggle('active'));


// list nav---------------
listIcon.addEventListener('click' , () => {
    nav.style.cssText = `
        visibility: visible;
        opacity: 1;
    `;
});

closeIcon.addEventListener('click' , () => {
    nav.style.cssText = `
        visibility: hidden;
        opacity: 0;
    `;
});


// nav scroll effect--------
window.addEventListener('scroll' , () => {
    if(scrollY >= 200)  header.style.backgroundColor = '#000000d6';
    else header.style.backgroundColor = 'transparent';
});



// scroll efect , activelinks , upbtn----------------
let sections = document.querySelectorAll("section");
let stars = document.querySelector('.stars');
let moon = document.querySelector('.moon');
let upbtn = document.getElementById("upbtn");

window.onscroll = () => {
    // sections effect and active links------------------
    sections.forEach( sec  => {
        // adding animations--
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show-animate");

            // active links----
            links.forEach(link => {
                if (link.dataset.link === sec.id) link.classList.add('active');
                else link.classList.remove('active');
            });

            // adding parallex effect section forests---
            if(sec.id == 'forests') {
                stars.style.left = top * 0.1005 + 'px';
                moon.style.top = top * 0.1005 + 'px';
            }
            else {
                stars.style.left = 0 ;
                moon.style.top =  0 ;
            }
        }
        else sec.classList.remove("show-animate");
    });

    //up button page ------------------
    if (scrollY >= 700) upbtn.style.display = "block";
    else upbtn.style.display = "none";

    upbtn.onclick = () => {
        scroll({
            top : 0
        });
    };
};





// loader
window.onload = () => {
    $('.loader').fadeOut(1500);
}





// nav videos--------------------
let spans = document.querySelectorAll('.nav-videos span');
let videos = document.querySelectorAll('.lands-section video');
let head = document.querySelector('.lands-section .head h2');
let info = document.querySelector('.lands-section .head p');

spans.forEach(sp => {
    // adding click event to spans---
    sp.addEventListener('click' , () => {
        // remove active class from spans
        spans.forEach(span => {
            span.classList.remove('active');
        });
        // adding active class to clicked span--
        sp.classList.add('active');

        // condition to choose video and content---
        videos.forEach(video => {
            // remove active class from videos 
            video.classList.remove('active');

            // condition to check if clicked span related to wanted video or not--
            if(sp.innerHTML == video.dataset.video) {
                video.classList.add('active');
                // change head to clicked span innerHtml
                head.innerHTML = sp.innerHTML;
                // condetion to change info cases------
                switch (sp.innerHTML){
                    case 'Lands':
                        info.innerHTML = `
                        Land, also known as dry land, ground, or earth, is the solid terrestrial surface of Earth not 
                        submerged by the ocean or another body of water. It makes up 29.2% of Earth's surface and 
                        includes all continents and islands.
                        noun. any part of the earth's surface not covered by a body of water; the part of the earth's 
                        surface occupied by continents and islands: Land was sighted from the crow's nest.
                        `;
                    break;

                    case 'Island':
                        info.innerHTML = `
                        An island or isle is a piece of subcontinental land completely surrounded by water. 
                        Very small islands such as emergent land features on atolls can be called islets, 
                        skerries, cays or keys. An island in a river or a lake island may be called an eyot or 
                        ait, and a small island off the coast may be called a holm.t.
                        `;
                    break;

                    case 'Continents':
                        info.innerHTML = `
                        A continent is a large continuous mass of land conventionally regarded as a collective region. 
                        There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, 
                        and Australia (listed from largest to smallest in size). Sometimes Europe and Asia are 
                        considered one continent called Eurasia.
                        `;
                    break;
                }
            }
        });
    });
});