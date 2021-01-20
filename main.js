
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


// menu js
function toggleMenu() {
    document.querySelector('.fas').addEventListener('click', (e) => {
        document.querySelector('.show-nav').classList.toggle("menu-appear");
    });
}

function removeMenu() {
    document.querySelectorAll('.show-link a').forEach(link => link.addEventListener('click', () => {
        document.querySelector('.show-nav').classList.remove("menu-appear");
    }));
}


// barba

barba.hooks.after(() => {
    toggleMenu();
    removeMenu();
});

toggleMenu();
removeMenu();


barba.init({
    preventRunning: true,
    transitions: [{
        sync: true,
        async leave(data) {
            const done = this.async();


            animateLeave();
            await delay(1200);
            done();
        },
        async enter(data) {
            animateEnter();
        }
    }]
});