const heading = document.querySelector('.header__texto .h2')
heading.textContent = "Probando selectores";
console.log(heading);

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = "Nuevo Texto";
// enlaces[0].href = "https://google.com"; ejemplo
//Agregar nueva clase
enlaces[0].classList.add('nueva-clase');
//Eliminar clases
// enlaces[0].classList.remove('navegacion__enlace')

// Otra forma de hacerlo
// document.querySelectorAll('.navegacion a')[1].textContent = "Nuevo Texto2"

// getElement by ID
const heading2 = document.getElementById('heading');
console.log(heading2)

//Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A')
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = "Tienda Virtual";
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);



console.log(nuevoEnlace)



// Eventos
// console.log(1);

// window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML estén listos
//     console.log(2)
// });

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function() {
//     console.log('scrolling...');
// }

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();

//     Validar un formulario

//     console.log('enviando formulario')
// });


// Eventos de los input y TextArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar el formulario

    const { nombre, email, mensaje } = datos;
    
    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios', true);
        return;
    }

    // Crear la alerta de Enviar correctamente
    mostrarMensaje('Mensaje enviado correctamente');

    //Enviar el formulario

    console.log('Enviando Formulario');
});

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    //Desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
}, 5000)
}

//Muestra una alerta de que se envió corectamente
// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto')
//     formulario.appendChild(alerta);

//     // desaparezca despúes de 5 segundos
//     setTimeout(() => {
//         alerta.remove();
//     }, 5000)
// }

// Muestra un error en pantalla
// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild( error );

//     // Desaparezca después de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000)
// }