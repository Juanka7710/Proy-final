let imagenes = [
    "./imagen/baner 01.jpg",
    "./imagen/baner 02.jpg",
    "./imagen/baner 03.jpg",
    "./imagen/baner 04.jpg"
];

document.getElementById("Imagen").src = imagenes[0];
//document.Imagen.src = imagenes[0];

let SliderIzquierda = document.querySelector('.slider__izquierdo');
let SliderDerecha = document.querySelector('.slider__derecho');
let contador = 0;


function MoverDerecha() {

    contador++;
    if (contador > imagenes.length - 1) {
        contador = 0;
    }
    //document.Imagen.src = imagenes[contador];
    document.getElementById("Imagen").src = imagenes[contador];
}

let Intervalo = setInterval(MoverDerecha, 3000);

SliderDerecha.addEventListener('click', function () {
    clearInterval(Intervalo);
    MoverDerecha();
    Intervalo = setInterval(MoverDerecha, 3000);
});

function MoverIzquierda() {
    contador--;
    if (contador < 0) {
        contador = imagenes.length - 1;
    }
    //document.Imagen.src = imagenes[contador]
    document.getElementById("Imagen").src = imagenes[contador];
}

SliderIzquierda.addEventListener('click', function () {
    clearInterval(Intervalo);
    MoverIzquierda();
    Intervalo = setInterval(MoverIzquierda, 3000);
});