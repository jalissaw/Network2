//gsap 

const animateLinks = () => {
    gsap.to('li', {
        alpha: 1,
        y: 20,
        stagger: 0.2,
    })
}

const animateLeave = (container) => {
    console.log('leaving')

}

const animateEnter = (container) => {
    const tl = gsap.timeline()
    return (
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
            .to('h1', {
                opacity: 1,
                y: 20,

            })
    )
}


barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave: (data) => animateLeave(),
        enter(data) {

            animateEnter()
        },

        beforeOnce() {
            // animateLinks()
        }
    }]
});