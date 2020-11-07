//gsap 



const animateLeave = (container) => {
    return gsap.from('.load-page', { alpha: 1 })
}

const animateEnter = (container) => {
    return gsap.to('.load-page', {
        alpha: 1,
        background: '#4C49EC',
        duration: 2,
        xPercent: 100
    })
}


barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave: (data) => animateLeave(),
        enter(data) {

            animateEnter()
        }
    }]
});