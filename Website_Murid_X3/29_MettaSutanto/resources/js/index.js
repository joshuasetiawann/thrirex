document.addEventListener('DOMContentLoaded', () =>{
const introduction = document.querySelector('#introduction');
const introductionText = document.querySelector('.text_container');

let isEarthImageHidden = true;
let textVisibility = {}; 

let textContentIndex = 0;

const introductionContentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry.intersectionRatio);

        textContentIndex  = textContentIndex > 2 ? 0 : textContentIndex;

        if(entry.isIntersecting && entry.intersectionRatio > 0.55 && !textVisibility[textContentIndex]){
            anime({
                targets: entry.target.querySelector('.text_content'),
                translateX: ['-50%', '0'],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutExpo'
            });
            textVisibility[textContentIndex] = true;
        }
        else if (!entry.isIntersecting || entry.intersectionRatio <= 0.3 && textVisibility[textContentIndex]) {
            anime({
                targets: entry.target.querySelector('.text_content'),
                translateX: ['0', '-50%'],
                opacity: [1, 0],
                duration: 800,
                easing: 'easeOutExpo'
            });
            textVisibility[textContentIndex] = false;
        }
        
    });
}, { threshold: 0.75 });


const introductionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            anime({
                targets: '.earth_image',
                translateY: ['100%', '0'],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo',
                delay: (_, i) => i * 200
            });
            isEarthImageHidden = false;
        }else {

            if(!isEarthImageHidden)
            {
                anime({
                    targets: '.earth_image',
                    translateY: ['0', '100%'],
                    opacity: [1, 0],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });

                isEarthImageHidden = true;
            }
           init = true;
        }
    });
}, { threshold: 0.75  });

introductionObserver.observe(introduction);

introductionContentObserver.observe(introductionText);
});

function scrollToElement(selector) {
    const navbarHeight = 64; // Height of the navbar
    const targetElement = document.querySelector(selector);
    
    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function scrollToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}