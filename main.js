// menu js
const showNav = document.querySelector('.show-nav');
const icon = document.querySelector('.fas');
const showLink = document.querySelectorAll('.show-link a');


function toggleMenu() {
    icon.addEventListener('click', (e) => {
        showNav.classList.toggle("menu-appear");
    });
}


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


// barba.hooks.enter(() => {
//     toggleMenu()
//     console.log('enter')
// });


barba.init({
    preventRunning: true,
    views: [{
        namespace: 'home',
        beforeEnter({ next }) {
            // update the menu based on user navigation
            function load_js() {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.src = '/main.js';
                head.appendChild(script);
            }
            load_js();
        },
        afterEnter() {
            // refresh the parallax based on new page content
            console.log('after')
        }
    }],
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
            animateEnter();
        }
    }]
});