# SantiGO055.github.io
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- SCRIPT CONTROL DE COOKIES -->
    <script type="text/javascript">
      function controlcookies() {
          // si variable no existe se crea (al clicar en Aceptar)
          localStorage.controlcookie = (localStorage.controlcookie || 0);
          localStorage.controlcookie++; // incrementamos cuenta de la cookie
          cookie1.style.display='none'; // Esconde la política de cookies
      }
    </script>

    <title>VuelvaPronto</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

  </head>
  <body>
    <div class="cookiesms" id="cookie1">
      Esta web utiliza cookies, puedes ver nuestra  <a href="tu-url-donde-explicas-la-politica-de-cookies">la política de cookies, aquí</a> 
      Si continuas navegando estás aceptándola
      <button onclick="controlcookies()">Aceptar</button>
      <div  class="cookies2" onmouseover="document.getElementById('cookie1').style.bottom = '0px';">Política de cookies + </div>
      </div>
      <script type="text/javascript">
      if (localStorage.controlcookie>0){ 
      document.getElementById('cookie1').style.bottom = '-50px';
      }
      </script>
    <header>
      <script type="text/javascript" src="js/menu.js"></script>
      
      <div
        class="cover d-flex justify-content-center align-items-center flex-column">
        <h1>
          Vuelva Pronto
        </h1>
        <p>
          Banda de rock nacional y popular
        </p>
        <a href="contenido.html"><button type="button" class="btn btn-secondary">
            Conoce más
        </button>
          </a>
      </div>
    </header>
  </body>
</html>
