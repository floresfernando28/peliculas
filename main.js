// Incorporaciones de JavaScript

// Funcionalidad al icono (busqueda) del header

const botonBusqueda = document.getElementById('boton__busqueda')

const busquedaPelicula = document.getElementById('contenedor__busquedas__peliculas')
const otroIcono = document.getElementById('otroIcono')
botonBusqueda.addEventListener('click', ()=>{

    busquedaPelicula.classList.toggle('active')
    otroIcono.classList.toggle('active')
})



// configuramos el  modo oscuro-claro

const botonModoOscuro = document.getElementById('modo__oscuro')

botonModoOscuro.addEventListener('click', ()=>{
    botonModoOscuro.classList.toggle('active')
    const body = document.querySelector('body').classList.toggle('modo__Dark')
}) 

// Funcionalidades al slider echo con clip path

const slider = document.querySelectorAll('.slider__caja');
const btns = document.querySelectorAll('.btn');
let sliderActivo = 1;


var FuncionProceso = function(manual){

    slider.forEach((slis)=>{
        slis.classList.remove('active');
    });
    btns.forEach((bt)=>{
        bt.classList.remove('active');
    });

    // que le añada la clase si no la tiene, al momento de hacer click en el boton
    slider[manual].classList.add('active');
    btns[manual].classList.add('active');
}

// Añadimos el evento --> click

btns.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{
        FuncionProceso(i);
        sliderActivo = i;
    })
});


// Le Agrego el estilos de textos alos span de los h3 de la info
// usando la libreria Typed.js


var typed = new Typed(".span__primario", {
    strings: ["Joseph Cooper", "Amelia Brand", "Murphy Cooper", "Murph Cooper"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})

// typed secundario para la pelicula de venom

var typed__2 = new Typed('.span__secundario',{
    strings: ["Eddie Brock", "Venom", "Anne Weying", "Carlton Drake","Riot","Roland Treece",
    "Dan Lewis","Dr.Skirth", "Mrs. Chen"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

// typed tercero para la pelicula de Ice Age: Las aventuras de Buck

var typed__3 = new Typed('.span__terceario',{
    strings: ["Buck Wild","Crash ","Eddie ", "Orson "],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true
})

// typed cuarto para la pelicula el libro de la selva
var typed__4 = new Typed('.span__cuaternario',{
    strings: ["Frank Wolff","Dr. Lily","Lope Aguirre", "McGregor Houghton","Prince Joachim"],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true
})


// typed quinta para la pelicula Los piratas del caribe
var typed__5 = new Typed('.span__quinto',{
    strings: ["WALL·E / M-O","Captain ","EVE",
     "Forthright","Mary"],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true
})

// Le añado una clase al header --> cuando se hace scroll en el Don --> window

window.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    header.classList.toggle('header__activo', window.scrollY>0);
})


// Añadimos la funcionalidad a los botones --> estando el menu en responsive


const btnCierre = document.querySelector('.btn__menu__responsive')
const btnabrir = document.querySelector('.btn__menu__menu')


const caja__especial__responsive = document.querySelector('.caja__especial__responsive')
btnCierre.addEventListener('click', ()=>{
    caja__especial__responsive.classList.toggle('active')
})
btnabrir.addEventListener('click', ()=>{
    caja__especial__responsive.classList.toggle('active')
})

// Le quitamos la clase al menu cuando este en modo movile first
// Al presionar una opcion del menu y hacer el scroll

window.onscroll = ()=>{
    caja__especial__responsive.classList.remove('active')
    caja__especial__responsive.classList.remove('active')
}


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerview: 1,
    spaceBetween: 10,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },


    breakpoints: {
        400: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        920:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1240:{
            slidesPerView: 3,
            spaceBetween: 15,
        }
    }
  });


//   Añadimos los textos para la seccion -> Peliculas Recomendadas

var peliculasRecomendadas = new Typed('.peliculas__recomendadas', {
    strings: ["VENOM","THE FLASH", "DEADPOOL", "Proyecto A",
    "THE BATMAN", "SPIDER-MAN"],
    backSpeed: 130,
    typeSpeed: 130,
    loop: true
})

// Configuramos con JavaScript el menu de las peliculas de la seccion 3


const botones = document.querySelectorAll('.inono_caja');
const  secciones = document.querySelectorAll('.div__caja');

let cajaActual = 1; // Declaramos esta variable ya que una caja ya tiene la clase activa

var miFuncionMenu = function (i){
    // Si tiene la clase se la eliminamos al dar click en la secciones que deseemos

    botones.forEach((x)=>{
        x.classList.remove('active');
    })
    secciones.forEach((y)=>{
        y.classList.remove('active');
    })

    // Le Añadimos la clase si se da un click en el boton
    // Se le añade una clase al menu y ala seccion para que este activa
    botones[i].classList.add('active');
    secciones[i].classList.add('active');
}

botones.forEach((btn, z)=>{
    btn.addEventListener('click',()=>{
        miFuncionMenu(z);
        cajaActual = z;

    })
});

// Añedimos un modo type ala clase (seccion__peliculas) de la seccion 3

var seccion__peliculas = new Typed('.seccion__peliculas', {
    strings: ["Tendencias", "Favoritas", "Filmes", "Movies"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


const caja__flotante = document.querySelector('.caja__flotante')

window.addEventListener('scroll',()=>{
    caja__flotante.classList.toggle('active', scrollY>400);
})


// Le añadimos la clase (a__a) a algunas peliculas


const botonPelicula = document.getElementById('botonPelicula');
const imagenes = document.querySelectorAll('.a__a');


imagenes.forEach((imgs)=>{
    botonPelicula.addEventListener('click', ()=>{
        imgs.classList.toggle('active')
    })
})

// Funcion para darle display grid alas cajas de la seccion de filmes de la parte de peliculas

const Boton = document.querySelectorAll('.botonCajas');
const Caja = document.querySelectorAll('.caja__contendora__caja__tercearia');
let cajaActualS = 1;

let funcionVerCajas = (slider) =>{
    Boton.forEach((a)=>{
        a.classList.remove('active');
    })
    Caja.forEach((b)=>{
        b.classList.remove('active');
    })

    Boton[slider].classList.add('active')
    Caja[slider].classList.add('active')
}

Boton.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{
        funcionVerCajas(i);
        cajaActualS = i;
    })
})

//  Typed.js


var span_2 = new Typed('.span-2',{
    strings: ["Acción", "Humor", "Suspenso","Series"],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true
});



