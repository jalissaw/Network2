
barba.init({
    transitions: [{
        name: 'opacity-transition',
        namespace: ['home'],
        leave(data) {
            gsap.to(data.container, { rotation: 0, x: 0, duration: 1 })
        },
        enter(data) {
            gsap.to(data.next.container, { rotation: 27, x: 100, duration: 1 })
        }
    }]
});