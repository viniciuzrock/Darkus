//Variáveis Globais
let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = 
    `calc(1200px * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

//Animação do Menu Lateral
function AbreMenu(){
    let MenuAberto = document.getElementById('BotaoMenu');
    let ListaMenu = document.getElementById('lista');

    if(MenuAberto.style.width == "180px"){
        MenuAberto.style.width = "0px"
        ListaMenu.style.display = "none" /*none */
    }else /*if(MenuAberto.style.width == "0px")*/{
        MenuAberto.style.width = "180px"
        ListaMenu.style.display = "inline"
        ListaMenu.style.transition = "0.3s all"
    }
}
//Movimentação para o próximo slide através do evento click
function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
//Movimentação para o slide anterior através do evento click
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}
//Manipulação da DIV principal para alteração de imagens
function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth)
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}
