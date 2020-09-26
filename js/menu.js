



/*Implementacion de la barra de navegacion para todos los botones*/
//creo un array donde voy almacenando cada etiqueta de html



var navigation  = new Array();
navigation.push('<link rel="stylesheet" href="css/style.css" />');

//agrego iconito de switch modo oscuro
//navigation.push('<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>');
var e1 = '<link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet" />';
var e2 = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>';
var e3 = '<nav class="navbar">';
var e4 = '<a href="index.html"><img class="logoVP" src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2Flogo%20vp.png?v=1584467232730" width="100" height="10" class="d-inline-block align-top" alt="" /></a>';
var e5 = '<ul class="nav">';
var e6 = '<li class="nav-item active"><a class="nav-link" href="index.html">Inicio</a></li>';
var e7 = '<li class="nav-item"><a class="nav-link" href="contenido.html">Contenido</a></li>';
var e8 = '<li class="nav-item"><a class="nav-link" href="acercade.html">Acerca de</a></li>';
var e9 = '<li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>';
var botonDark = '<li class="nav-item"> <button type="button" class="btn btn-dark switch" id="switch" onclick=cambiarModoOscuro()>Modo Oscuro</button></li>';
var e11 = '</ul></nav>';
navigation.push(e1+e2+e3+e4+e5+e6+e7+e8+e9+botonDark+e11);

function cambiarModoOscuro() { 
    var cuerpoweb = document.body; 
    var nav = document.querySelector(".navbar");
    var tarjetas = document.getElementsByClassName("card");
    var tarjetasBody = document.getElementsByClassName("card-body");

    var tarjeta = document.querySelector('.card');

    var tarjetaBody = document.querySelector('.card-body');

    nav.classList.toggle("navBarOscuro");
    if(tarjetas != null){
        for(var i = 0; i < tarjetas.length;i++){
            tarjetas[i].classList.toggle("cardOscuro");
            tarjetasBody[i].classList.toggle("cardBodyOscuro")
            console.log(tarjetas[i]);
            console.log(tarjetasBody[i]);
        }

    }
    cuerpoweb.classList.toggle("oscuro"); 

    if(cuerpoweb.classList == ("oscuro")){
        console.log("entre en modo oscuro");

        var image = document.querySelector(".logoVP");
        if(image!=null){
            image.parentNode.removeChild(image);
            //<a href="index.html"><img class="logoVPBlanco" src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2FlogoBlanco.png?v=1595784297966" width="100" height="10" class="d-inline-block align-top" alt="" /></a>
            e4 = '<a href="index.html"><img class="logoVPBlanco" src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2FlogoBlanco.png?v=1595784297966" width="100" height="10" class="d-inline-block align-top" alt="" /></a>';
            botonDark = '<li class="nav-item"> <button type="button" class="btn btn-light switch" id="switch" onclick=cambiarModoOscuro()>Modo Claro</button></li>';
            nav.innerHTML = e1+e2+e3+e4+e5+e6+e7+e8+e9+botonDark+e11;
        }
        
    }
    else{
        console.log("sali del modo oscuro");
        e4 = '<a href="index.html"><img class="logoVP" src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2Flogo%20vp.png?v=1584467232730" width="100" height="10" class="d-inline-block align-top" alt="" /></a>';
        var botonDark = '<li class="nav-item"> <button type="button" class="btn btn-dark switch" id="switch" onclick=cambiarModoOscuro()>Modo Oscuro</button></li>';
        nav.innerHTML = e1+e2+e3+e4+e5+e6+e7+e8+e9+botonDark+e11;
    }
}


// var navBar = document.getElementById("menu");
// document.body.innerHTML += "
//     <link rel="stylesheet" href="css/style.css"/>
//     <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet" />
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
//     <nav class="navbar navbar-light bg-light">
//         <a href="index.html"><img src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2Flogo%20vp.png?v=1584467232730" width="100" height="10" class="d-inline-block align-top" alt="" /></a>
//         <ul class="nav">
//             <li class="nav-item active"><a class="nav-link" href="index.html">Inicio</a></li>
//             <li class="nav-item"><a class="nav-link" href="contenido.html">Contenido</a></li>
//             <li class="nav-item"><a class="nav-link" href="acercade.html">Acerca de</a></li>
//             <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
//         </ul>
//     </nav>
//     ";

function show(nav)
{
    for (var x in nav)
     {
      document.write(nav[x]+'\n');
     }
}
show(navigation);