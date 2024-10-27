const colorLight = "#fff"
const colorDark = "#3d3d3d"


let cambio = window.document.getElementById('light-mode-toggle');
let camfondo = window.document.getElementById('Cfondo');

cambio.addEventListener('input', cambiaFondo);


function cambiaFondo(){
    let cuerpo = window.document.body;

    cuerpo.style.backgroundColor = colorDark ;

}
