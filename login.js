const formUsuario = document.querySelector('#formUsuario')
formUsuario.addEventListener('submit', validarFormularioUsuario )



function validarFormularioUsuario(e){
    e.preventDefault();
    const jugador1 = document.querySelector('#jugador1').value
    const jugador2 = document.querySelector('#jugador2').value
    const emailJugador = document.querySelector('#emailJugadores').value

    console.log(jugador1, jugador2, emailJugador)
    localStorage.setItem('jugador1', jugador1)
    localStorage.setItem('jugador2', jugador2)
    localStorage.setItem('emailJugadores', emailJugador)

    window.location = "./pages/torneos.html"
}



const formRegistrarEvento = document.querySelector('#formRegristrarEvento')
formRegistrarEvento.addEventListener('submit', validarFormularioEvento)

function validarFormularioEvento(e){
    e.preventDefault();
    const nombreApellido = document.querySelector('#nombreApellido').value
    const nombreClub = document.querySelector('#nombreClub').value
    const emailClub = document.querySelector('#emailClub').value

    console.log(nombreApellido, nombreClub, emailClub)
    localStorage.setItem('nombreApellido', nombreApellido)
    localStorage.setItem('nombreClub', nombreClub)
    localStorage.setItem('emailClub', emailClub)

    window.location = "./pages/carga-torneo.html"
}

