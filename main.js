//gsap 


const animateLeave = (container) => {
    return gsap.to(container, {
        alpha: 0,
        x: 50

    })
}

const animateEnter = (container) => {
    return gsap.from(container, {
        alpha: 0,
        x: -100,
        duration: 0.5,
        ease: 'none',
    })
}


barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave: (data) => animateLeave(data.current.container),
        enter(data) {

            animateEnter(data.next.container)
        }
    }]
});