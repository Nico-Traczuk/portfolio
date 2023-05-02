const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#subject');
const inputMensaje = document.querySelector('#message');
const inputSubmit = document.querySelector('#sendMessageButton');
const formulario = document.querySelector('#contactForm');
const divAlerta = document.querySelector('#alerta');

document.addEventListener('DOMContentLoaded', enviarEmail)


function enviarEmail() { 
    formulario.addEventListener('submit', e => {
        e.preventDefault()

        validacion()

        const datos = new FormData()
        datos.append('name', inputName.value);
        datos.append('email', inputEmail.value);
        datos.append('subject', inputAsunto.value);
        datos.append('message', inputMensaje.value);

        fetch('email.php' , {
            method: "post", 
            body: datos
        })
        .then(function(response) {
            if(response.ok) {
                console.log('Se envio el email');
            } else {
                console.log('no se envio el email');
            }
        })
        .catch(function(error) {
            alert('Error al enviar email')
        });


    })
}



function validacion() {
    if(inputName.value === '' || inputEmail.value === '' || inputAsunto.value === '' || inputMensaje.value === '') {
       mostrarAlerta('Por favor, complete todos los campos', 'error')
    } else{
        mostrarAlerta('Mensaje enviado con exito, en breve nos estaremos contactando');
    }

}


function mostrarAlerta (mensaje,tipo) {
    limpiarHTML()
    const divMensaje = document.createElement('div');
    divMensaje.textContent = mensaje

    if(tipo === 'error') {
        divMensaje.classList.add('alert','alert-danger', 'border', 'border-danger','rounded-pill', 'mt-5' )
    } else {
        divMensaje.classList.add('alert','alert-success', 'border', 'border-success', 'rounded-pill','mt-5')
    }
    divAlerta.appendChild(divMensaje)


    setTimeout(() => {
        divMensaje.remove()
        inputName.value = '';
        inputEmail.value = '';
        inputAsunto.value = '';
        inputMensaje.value = '';
    }, 3000);
}



function limpiarHTML() {
    while(divAlerta.firstChild) {
        divAlerta.removeChild(divAlerta.firstChild);
    }
};

