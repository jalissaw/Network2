const card = document.querySelectorAll('.card'); 




// card.addEventListener('click', function (){
       
//         for(var i = 0; i < card.length; i++) {
    
//             card[i].style.transform = 'translateY(100px)';
//         }
// });

// function onHover () {
    
//     for(var i = 0; i < card.length; i++) {
//         card.addEventListener('mouseover', () => {
//             console.log(card[i])
//             card[i].style.transform = 'translateX(200px)';
//         });
        
//     }
// }
// onHover()
function onHover (cards) {
    for(var i = 0; i < card.length; i++) {
        card[i].classList.add('slide')
        console.log(card[i])
    }
}

card.addEventListener('mouseover', onHover)

onHover()
// setTimeout(onHover, 2000)
