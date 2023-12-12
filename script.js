const pistaUno = document.querySelector("#pistaUno");
const pistaDos = document.querySelector("#pistaDos");
const pistaTres = document.querySelector("#pistaTres");
const pistaCuatro = document.querySelector("#pistaCuatro");
const pistaFinal = document.querySelector("#pistaCinco");
let uno, dos, tres, cuatro = false;

pistaUno.addEventListener('click', ()=>{
    pistaUno.src = "img/talleres.png";
    uno = true;
});

pistaDos.addEventListener('click', ()=>{
    if (uno) {
        pistaDos.src = "img/shiquito.png";
        dos = true;
    }
});

pistaTres.addEventListener('click', ()=>{
    if (uno && dos) {
        pistaTres.  src = "img/pc.png";
        tres = true;
    }
});

pistaCuatro.addEventListener('click', ()=>{
    if (uno && dos && tres) {
        pistaCuatro.src = "img/lentes.png";
        cuatro = true;
    }
});

pistaFinal.addEventListener('click', ()=>{
    if (uno && dos && tres && cuatro) {
        pistaFinal.src = "img/vani.png";
    }
});