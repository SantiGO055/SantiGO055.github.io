



/*Implementacion de la barra de navegacion para todos los botones*/
//creo un array donde voy almacenando cada etiqueta de html



var navigation  = new Array();
navigation.push('<link rel="stylesheet" href="css/style.css" />');

//agrego iconito de switch modo oscuro
//navigation.push('<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>');

navigation.push('<link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet" />');
navigation.push('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>');
navigation.push('<nav class="navbar">');
navigation.push('<a href="index.html"><img src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2Flogo%20vp.png?v=1584467232730" width="100" height="10" class="d-inline-block align-top" alt="" /></a>');
navigation.push('<ul class="nav">');
navigation.push('<li class="nav-item active"><a class="nav-link" href="index.html">Inicio</a></li>');
navigation.push('<li class="nav-item"><a class="nav-link" href="contenido.html">Contenido</a></li>');
navigation.push('<li class="nav-item"><a class="nav-link" href="acercade.html">Acerca de</a></li>');
navigation.push('<li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>');

navigation.push('<li class="nav-item"> <button type="button" class="btn switch" id="switch" onclick=cambiarModoOscuro()>Oscuro / Claro</button></li>');


navigation.push('</ul></nav>');

function cambiarModoOscuro() { 
    
    var cuerpoweb = document.body; 
    var nav = document.querySelector(".navbar");
    cuerpoweb.classList.toggle("oscuro"); 
    nav.classList.toggle("navBarOscuro");
    if(cuerpoweb.classList == ("oscuro")){
        console.log("entre en modo oscuro");
        //navigation.push('<a href="index.html"><img src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2FlogoBlanco.png?v=1595784297966" alt="" /></a>');
        
    }
    else{
        console.log("sali del modo oscuro");
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