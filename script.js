//evento boton formulario orador
const botonFormOrador = document.querySelector('#formOrador');

//problemas de seguridad y no se puede agregar varias escuchas al mismo boton
// botonFormOrador.onclick = ()=> {
//     alert('Funcion javascript formulario');
// };

function mostrarAlerta(event) {
    event.preventDefault();//evita el envio por el submit y reseteo del formulario
    //El valor de los input se toman desde dentro de las funciones
    alert('Hello world!');
}

botonFormOrador.addEventListener('click',mostrarAlerta);

//boton compraTicket
const botonCompraTicket = document.querySelector('#formResumenTicket');
const inputNombre = document.querySelector('#nombreVenta');
const inputApellido = document.querySelector('#apellidoVenta');
const inputCorreo = document.querySelector('#correo');
const inputCantidad = document.querySelector('#cantidad');
const selectTipo = document.querySelector('#categoria');
const textMonto = document.querySelector('#montoTicket');
const valorTicket = 200;

function resumenTicket(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let correo = inputCorreo.value;
    let cantidad = parseInt(inputCantidad.value);
    let tipo = selectTipo.value;

    inputCantidad.classList.remove('errorInput');

    if (isNaN(cantidad )) {
        inputCantidad.value = '';
        alert('Debe ingresar un numero en el campo cantidad');
        inputCantidad.classList.add('errorInput');
    }else{
        let descuento;
        let total;
        let totalDescuento;

        total = cantidad * valorTicket; 
        if (tipo == 'estudiante') {
            descuento = 80;
        }else if(tipo == 'trainee'){
            descuento = 50;
        }else{
            descuento = 15;
        }

        totalDescuento = (total * descuento)/ 100; 

        // alert(total - totalDescuento);

        textMonto.innerText = (total - totalDescuento);
    }

}

botonCompraTicket.addEventListener('click',resumenTicket);

// Boton reset

const formularioTicket = document.querySelector('#formularioTicket');
const botonBorrar = document.querySelector('#formResetTicket');

function resetFormulario(event){
    event.preventDefault();
    textMonto.innerText = '';
    formularioTicket.reset();
}

botonBorrar.addEventListener('click', resetFormulario);