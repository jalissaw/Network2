//gsap 

const animateLinks = () => {
    gsap.to('li', {
        alpha: 1,
        y: 20,
        stagger: 0.2,
    })
}

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

const animateLeave = (container) => {
    const tl = gsap.timeline()
    tl.to('.load-page', {
        background: '#4C49EC',
        width: "100%",
        left: "0%",
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
        .to('.animate-index', { opacity: 1, y: 0, stagger: 0.2 }, "-=1")
    return tl

}

const animateEnter = (container) => {
    const tl = gsap.timeline()
    tl.to('.animate-index', {
        opacity: 0,
        y: 40,
        stagger: 0.2
    })

    return tl
}


barba.init({
    transitions: [{
        name: 'opacity-transition',
        sync: true,
        async leave(data) {
            const done = this.async()
            animateLeave()
            await delay(1200)
            done()
        },
        async enter(data) {

            animateEnter()
        }
    }]
});