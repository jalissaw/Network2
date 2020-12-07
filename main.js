// menu js

const showNav = document.querySelector('.show-nav');
const icon = document.querySelector('.fas');
const showLink = document.querySelectorAll('.show-link a');
var links = document.querySelectorAll('a[href]');

var cbk = function (e) {
    if (e.currentTarget.href === window.location.href) {
        e.preventDefault();
        e.stopPropagation();
    }
};

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', cbk);
}

function toggleMenu() {
    icon.addEventListener('click', () => {
        showNav.classList.toggle("menu-appear");
    });
}
toggleMenu()


// showLink.forEach(link => link.addEventListener('click'), () => {
//     if (showNav) {
//         showNav.classList.remove('.menu-appear');
//     }
// });


//gsap 

const animateLeave = () => {
    const tl = gsap.timeline()
    tl.to('.load-page', {
        background: '#4C49EC',
        width: "100%",
        left: "0",
        duration: 1.2,
        ease: "Expo.easeInOut"
    })
        .to('.load-page', {
            background: '#4C49EC',
            width: "100%",
            left: "100%",
            duration: 1,
            delay: 0.3,
            ease: "Expo.easeInOut"
        })
        .set('.load-page', { left: "-100%" })
        .to(['.animate-index'],
            {
                opacity: 1,
                y: 0,
                stagger: 0.2
            },
            "-=1")
    return tl

}

const animateEnter = () => {
    const tl = gsap.timeline()
    tl.to(['.animate-index'], {
        opacity: 0,
        y: 40,
        stagger: 0.2
    });

    tl.from(['.certs'], {
        opacity: 0,
        stagger: 0.2,
        delay: 0.7
    });

    tl.from('.animate-in', {
        opacity: 0,
        x: 50,
        stagger: 0.2
    })

    return tl
}

function delay(n) {
    n = n || 2000;

    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });

}

barba.init({
    preventRunning: true,
    prevent: ({ el }) => el.classList && el.classList.contains('prevent'),
    transitions: [{
        sync: true,
        async leave(data) {
            const done = this.async();


            animateLeave();
            await delay(1200);
            done();
            console.log(location.href)
        },
        async enter(data) {

            animateEnter()

        }
    }]
});