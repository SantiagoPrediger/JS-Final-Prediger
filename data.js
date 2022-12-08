class Torneo {
    constructor(nombre, club, categoria, dia, precio, foto, id, premio) {
        this.nombre = nombre;
        this.club = club;
        this.categoria = categoria;
        this.dia = dia;
        this.precio = precio;
        this.foto = foto;
        this.id = id;
        this.premio = premio;
    }
}

// ARMADO DE OBJETOS


const torneo1 = new Torneo('Ajpp', 'Matchpoint', 4 , 'Lunes', 1000, '../img/tor1.jpg',1,20000);
const torneo2 = new Torneo('New Green Padel', 'La Fabrica', 3 ,  'Martes', 2000, '../img/tor2.jpg',2,40000);
const torneo3 = new Torneo('Yuka Sports', 'Flow Sports', 2 ,  'Miercoles', 3000 ,'../img/tor3.jpg',3,6000);
const torneo4 = new Torneo('Chiqui Torneo', 'Efecto Padel', 1 , 'Jueves', 4000, '../img/tor4.jpg',4,80000);
const torneo5 = new Torneo('Ajpp', 'Matchpoint', 1 , 'Viernes', 1000, '../img/tor5.jpg',5,80000);
const torneo6 = new Torneo('New Green Padel', 'La Fabrica', 2 , 'Domingo', 2000, '../img/tor6.jpg',6,60000);
const torneo7 = new Torneo('Yuka Sports', 'Flow Sports', 3 , 'Sabado', 3000, '../img/tor7.jpg',7,40000);
const torneo8 = new Torneo('Chiqui Torneo', 'Efecto Padel', 4 , 'Domingo', 4000, '../img/tor8.jpg',8,20000);
const producto1 = new Torneo('Protectores','','','',1600,'../img/protectores.jpg',10,'');
const producto2 = new Torneo('Gorra','','','',6000,'../img/gorra.jpg',11,'');
const producto3 = new Torneo('Cubregrip','','','',800,'../img/cubregrips.jpg',12,'');

const listaTorneos = [torneo1, torneo2, torneo3, torneo4, torneo5, torneo6, torneo7, torneo8 ]
const listaProductos = [producto1, producto2, producto3]
