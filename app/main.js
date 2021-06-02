import '../assets/sass/main.scss'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


window.addEventListener('load', () => {
    initEventsInSidebar();
    initAllSwiper();
    secondaryNavScrollEvents();
    initSecondaryNav();
    buttonEvents();
})

window.addEventListener("scroll", () => {
    secondaryNavScrollEvents();
})

let terms = [];


const initEventsInSidebar = () => {

    const sideItems = document.querySelectorAll('.menu_item');
    
    sideItems.forEach(sideItem => {
        sideItem.addEventListener('click', (ev) => {
        
            // close all
            sideItems.forEach(sideItem_ => {
                if (!ev.composedPath().includes(sideItem)) {
                    sideItem_.classList.remove('opened');
                }
            })
            if (sideItem.querySelector('.submenu')) {
                sideItem.classList.toggle('opened');
            }
        })
    })
}


const initAllSwiper = () => {
    const sectionsSwiper = document.querySelectorAll('.section_swiper');
    sectionsSwiper.forEach(ss => {
        const swiperContainer = ss.querySelector('.swiper-container');
        const swiper = new Swiper(swiperContainer, {
            direction: 'horizontal',
            loop: true,
            simulateTouch: false,
            pagination: {
                el: ss.querySelector('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: ss.querySelector('.swiper-button-next'),
                prevEl: ss.querySelector('.swiper-button-prev'),
            },

            //con el teclado

            keyboard: {
                enabled: true,
            },

            
        });
    })
}


const initSecondaryNav = () => {
    const h2s = document.querySelectorAll('h2');
    h2s.forEach((h2, i) => {
        terms.push({
            id: i,
            text: h2.innerText, 
            scrollPoint: h2.offsetTop
        })
    })
    renderSecondaryNav(terms)
    secondaryNavEvents(terms)
};

const renderSecondaryNav = (terms) => {
    let htmlString = "";
    const tiny = document.querySelector('.tiny_items');
    terms.forEach(term => {
        htmlString += `
            <div class="tiny_item" data-id="${term.id}">${term.text}</div>
        `;
    })
    tiny.innerHTML = htmlString;
}

const secondaryNavEvents = (terms) => {
    const termsList = document.querySelectorAll(".tiny_items .tiny_item");
    termsList.forEach(termListItem => {
        termListItem.addEventListener("click", () => {
            const id = +termListItem.dataset.id;
            const scrollPoint = terms[id].scrollPoint - 30;
            scrollTo(0, scrollPoint);
        })
    })
};

const secondaryNavScrollEvents = () => {
    const isIn = terms.map(term => (term.scrollPoint - innerHeight/2) < scrollY);
    const lastIn = isIn.lastIndexOf(true);
    const h2s = document.querySelectorAll('h2');
    const tiny = document.querySelectorAll('.tiny_items .tiny_item');

    tiny.forEach(tinyItem => {
        tinyItem.classList.remove("active")
    });
    if (tiny[lastIn]) tiny[lastIn].classList.add("active")    
}



const buttonEvents = () => {
    const button1 = document.querySelector(".button1")
    const button2 = document.querySelector(".button2")
    const button3 = document.querySelector(".button3")
    const button4 = document.querySelector(".button4")
    const button5 = document.querySelector(".button5")
    const button6 = document.querySelector(".button6")



    button1.addEventListener("mousedown", () => {
        button1.classList.add("clicked")
    })

    button1.addEventListener("mouseup", () => {
        button1.classList.remove("clicked")
    })

    button2.addEventListener("mousedown", () => {
        button2.classList.add("clicked")
    })

    button2.addEventListener("mouseup", () => {
        button2.classList.remove("clicked")
    })

    button3.addEventListener("mousedown", () => {
        button3.classList.add("clicked")
    })

    button3.addEventListener("mouseup", () => {
        button3.classList.remove("clicked")
    })

    button4.addEventListener("mousedown", () => {
        button4.classList.add("clicked")
    })

    button4.addEventListener("mouseup", () => {
        button4.classList.remove("clicked")
    })

    button5.addEventListener("mousedown", () => {
        button5.classList.add("clicked")
    })

    button5.addEventListener("mouseup", () => {
        button5.classList.remove("clicked")
    })

    button6.addEventListener("mousedown", () => {
        button6.classList.add("clicked")
    })

    button6.addEventListener("mouseup", () => {
        button6.classList.remove("clicked")
        button6.style.backgroundColor="#E13B65"
        button6.style.color="white"
        button6.innerHTML="Guardado"
    })


    
}