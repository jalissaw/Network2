// menu js

const showNav = document.querySelector('.show-nav');
const icon = document.querySelector('.fas');
const showLink = document.querySelectorAll('.show-link a');


function toggleMenu() {
    icon.addEventListener('click', () => {
        console.log('clicked')
        showNav.classList.toggle("menu-appear");
    });
}

toggleMenu()

// showLink.forEach(link => link.addEventListener('click'), () => {
//     showNav.classList.remove('.menu-appear')
// });



//gsap 

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

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


barba.init({

    transitions: [{
        sync: true,
        async leave(data) {
            const done = this.async();
            animateLeave();
            await delay(1200);
            done();
        },
        async enter(data) {

            animateEnter()
        }
    }]
});