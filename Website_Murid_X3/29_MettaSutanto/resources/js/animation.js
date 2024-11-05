
document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({})
    .add({
        targets: '.cover',
        left: ['-100%', '100%'],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (_, i)=> i * 200
    })
    anime.timeline({}).add({
        targets: '.cover_text',
        position: 'static',
        top: ['75%', '50%'],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
        offset: '-=1600',
        delay: 350
    });

    ScrollReveal({reset: true}).reveal('.scroll_animation', {
        delay: 100,
        distance: '50px',
        origin: 'bottom',
        duration: 450,
        easing: 'ease-in-out',
        interval: 100,
      });

      ScrollReveal({reset: true}).reveal('.scroll_animation_left', {
        delay: 100,
        distance: '50px',
        origin: 'left',
        duration: 450,
        easing: 'ease-in-out',
        interval: 100,
      });

      ScrollReveal({reset: true}).reveal('.scroll_animation_right', {
        delay: 100,
        distance: '50px',
        origin: 'right',
        duration: 450,
        easing: 'ease-in-out',
        interval: 100,
      });
});

