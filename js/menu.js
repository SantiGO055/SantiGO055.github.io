/*Implementacion de la barra de navegacion para todos los botones*/
//creo un array donde voy almacenando cada etiqueta de html
var navigation  = new Array();
navigation.push('<link rel="stylesheet" href="css/style.css" />');
navigation.push('<link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet" />');
navigation.push('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>');
navigation.push('<nav class="navbar navbar-light bg-light">');
navigation.push('<a href="index.html"><img src="https://cdn.glitch.com/d055f014-bb8e-417c-99ac-41aa61652365%2Flogo%20vp.png?v=1584467232730" width="100" height="10" class="d-inline-block align-top" alt="" /></a>');
navigation.push('<ul class="nav">');
navigation.push('<li class="nav-item active"><a class="nav-link" href="index.html">Inicio</a></li>');
navigation.push('<li class="nav-item"><a class="nav-link" href="contenido.html">Contenido</a></li>');
navigation.push('<li class="nav-item"><a class="nav-link" href="acercade.html">Acerca de</a></li>');
navigation.push('<li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>');
navigation.push('</ul></nav>');

function show(nav)
{
    for (var x in nav)
     {
      document.write(nav[x]+'\n');
     }
}
show(navigation);