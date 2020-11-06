//gsap 



const animateLeave = (container) => {
    return gsap.from('.load-page', { alpha: 0 })
}

const animateEnter = (container) => {
    return gsap.to('.load-page', {
        alpha: 1,
        width: '100%',
        background: '#4C49EC',
        duration: 1,
        top: 54
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