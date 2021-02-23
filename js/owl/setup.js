$('.owl-carousel').owlCarousel({
    loop:true, //possibilita navegar de forma "infinita"
    margin:10, //altera a margem entre as imagens dos filmes
    nav:true, //botões de navegação abaixo das imagens
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})