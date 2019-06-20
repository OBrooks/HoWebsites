window.addEventListener('scroll', () => {
    
if (window.matchMedia("(max-width: 1024px)").matches) {
    anime({
        targets: '#services li',
        translateX: 50,
        delay: anime.stagger(200, {
            start: 50
        }) // delay starts at 500ms then increase by 100ms for each elements.
    });
}
else {
        anime({
            targets: '#services li',
            translateX: 200,
            delay: anime.stagger(200, {
                start: 50
            }) // delay starts at 500ms then increase by 100ms for each elements.
        });
}
});