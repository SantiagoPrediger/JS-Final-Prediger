// INICIO SESION USUARIO BUSCANDO TORNEO

const jugador1 = localStorage.getItem('jugador1')
const jugador2 = localStorage.getItem('jugador2')
const emailJugadores = localStorage.getItem('emailJugadores')
console.log(jugador1, jugador2, emailJugadores)

const datosUsuario = document.querySelector('#cardBody')

if(datosUsuario){
    if (jugador1 == null || jugador2 == null || emailJugadores == null){
        datosUsuario.innerHTML = `
        <a href="./iniciar-sesion.html"><button class="buttonSesion">Iniciar Sesion</button></a>
    `
    } else {
        datosUsuario.innerHTML = `
        <p class="card-text">Jugador 1: ${jugador1}</p>
        <p class="card-text">Jugador 2: ${jugador2}</p>
        <p class="card-text">Email: ${emailJugadores}</p>
        <div class="botones"><button class="buttonSesion" id="logout">Cerrar Sesion</button></div>
    `
    const logout = document.querySelector('#logout')

    const logoutUser = () => {
        localStorage.removeItem('jugador1')
        localStorage.removeItem('jugador2')
        localStorage.removeItem('emailJugadores')
        datosUsuario.innerHTML = `
        <a href="./iniciar-sesion.html"><button class="buttonSesion">Iniciar Sesion</button></a>
    `
    }

    logout.addEventListener('click', logoutUser)
    }
    
}



// INICIO SESION CLUB CREANDO TORNEO

const nombreApellido = localStorage.getItem('nombreApellido')
const nombreClub = localStorage.getItem('nombreClub')
const emailClub = localStorage.getItem('emailClub')
console.log(nombreApellido, nombreClub, emailClub)

const datosClub = document.querySelector('#datosClub')

if(datosClub){
    if (nombreApellido == null || nombreClub == null || emailClub == null){
        datosClub.innerHTML = `
        <a href="./iniciar-sesion.html"><button class="buttonSesion">Iniciar Sesion</button></a>
    `
    } else {
        datosClub.innerHTML = `
        <p class="card-text">Nombre: ${nombreApellido}</p>
        <p class="card-text">Nombre del Club: ${nombreClub}</p>
        <p class="card-text">Email: ${emailClub}</p>
        <div class="botones"><button class="buttonSesion" id="logOut">Cerrar Sesion</button></div>
    `
    const logOut = document.querySelector('#logOut')
    
    const logOutClub = () => {
        localStorage.removeItem('nombreApellido')
        localStorage.removeItem('nombreClub')
        localStorage.removeItem('emailClub')
        datosClub.innerHTML = `
        <a href="./iniciar-sesion.html"><button class="buttonSesion">Iniciar Sesion</button></a>
    `
    }
    
    logOut.addEventListener('click', logOutClub)
    }
    
}

// RENDERIZACION DE TORNEOS 

const tournaments = document.querySelector('#tournaments')


if(tournaments){
    fetch('../torneos.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(torneo => {
            const nuevoTorneo = document.createElement('div')
            nuevoTorneo.className = 'card'
            nuevoTorneo.innerHTML = `
            <div class="imgTorn"><img src="${torneo.foto}" class="card-img-top" alt="${torneo.nombre}"></div>
            <div class="card-body">
                <h3 class="card-title">${torneo.nombre}</h3>
                <div class="descripcionEvento">
                    <div class="iconos">
                        <i class="fa-solid fa-location-dot"></i>
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                        <i class="fa-solid fa-calendar-days"></i>
                        <i class="fa-solid fa-dollar-sign"></i>
                        <i class="fa-solid fa-sack-dollar"></i>
                    </div>
                    <div class="textos">
                        <p class="card-text">  ${torneo.club}</p>
                        <p class="card-text">  Categoria ${torneo.categoria}</p>
                        <p class="card-text">  Dia ${torneo.dia}</p>
                        <p class="card-text">  Precio Inscripcion $${torneo.precio}</p>
                        <p class="card-text">  Premio $${torneo.premio}</p>
                    </div>
                </div>
                <a href="#" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Inscribirse</a>
            </div>
            `
            tournaments.append(nuevoTorneo);
        })
    })
}





// FILTRADO DE TORNEOS

let filtroClubes = document.querySelector('#club')
let filtroCategorias = document.querySelector('#cat')

if(filtroClubes , filtroCategorias) {
    const clubes = () => {
        fetch('../torneos.json')
        .then(response => response.json())
        .then(data => {
            data.map(club => {
                filtroClubes.innerHTML += `<option value="${club.club}">${club.club}</option>`
            })
        })
    }
    clubes()
}

function renderizarTorneos(torneosBase){
    torneosBase.forEach((torneo) => {
        const nuevoTorneo = document.createElement('div')
        nuevoTorneo.className = 'card'
        nuevoTorneo.innerHTML = `
        <div class="imgTorn"><img src="${torneo.foto}" class="card-img-top" alt="${torneo.nombre}"></div>
        <div class="card-body">
            <h3 class="card-title">${torneo.nombre}</h3>
            <div class="descripcionEvento">
                <div class="iconos">
                    <i class="fa-solid fa-location-dot"></i>
                    <i class="fa-solid fa-arrow-up-wide-short"></i>
                    <i class="fa-solid fa-calendar-days"></i>
                    <i class="fa-solid fa-dollar-sign"></i>
                    <i class="fa-solid fa-sack-dollar"></i>
                </div>
                <div class="textos">
                    <p class="card-text">  ${torneo.club}</p>
                    <p class="card-text">  Categoria ${torneo.categoria}</p>
                    <p class="card-text">  Dia ${torneo.dia}</p>
                    <p class="card-text">  Precio Inscripcion $${torneo.precio}</p>
                    <p class="card-text">  Premio $${torneo.premio}</p>
                </div>
            </div>
            <a href="#" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Inscribirse</a>
        </div>
        `
        tournaments.append(nuevoTorneo);
    })
}


const filtrar = document.querySelector('#filtrarResultados')

const filtrarResultados = (e) => {
    e.preventDefault()
    const clubes = filtroClubes.value;
    const categorias = filtroCategorias.value;
    console.log(clubes);
    console.log(categorias);

    const resultados = fetch('../torneos.json')
    .then(response => response.json())
    .then(data => {data.filter(torneo => torneo.club + torneo.categoria === clubes + categorias)});

    console.log(resultados)

    renderizarTorneos(resultados)
}

filtrar.addEventListener('click', filtrarResultados)


// LIMPIAR PARAMETROS DE BUSQUEDA TORNEOS

const limpiarFiltros = document.querySelector('#limpiar')

const renderizar = () => {
    fetch('../torneos.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(torneo => {
            const nuevoTorneo = document.createElement('div')
            nuevoTorneo.className = 'card'
            nuevoTorneo.innerHTML = `
            <div class="imgTorn"><img src="${torneo.foto}" class="card-img-top" alt="${torneo.nombre}"></div>
            <div class="card-body">
                <h3 class="card-title">${torneo.nombre}</h3>
                <div class="descripcionEvento">
                    <div class="iconos">
                        <i class="fa-solid fa-location-dot"></i>
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                        <i class="fa-solid fa-calendar-days"></i>
                        <i class="fa-solid fa-dollar-sign"></i>
                        <i class="fa-solid fa-sack-dollar"></i>
                    </div>
                    <div class="textos">
                        <p class="card-text">  ${torneo.club}</p>
                        <p class="card-text">  Categoria ${torneo.categoria}</p>
                        <p class="card-text">  Dia ${torneo.dia}</p>
                        <p class="card-text">  Precio Inscripcion $${torneo.precio}</p>
                        <p class="card-text">  Premio $${torneo.premio}</p>
                    </div>
                </div>
                <a href="#" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Inscribirse</a>
            </div>
            `
            tournaments.append(nuevoTorneo);
        })
    })
}
limpiarFiltros.addEventListener('click', renderizar) 