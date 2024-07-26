# Para empezar

Hacer un repositorio en github y conectarlo con el codigo local.
Cada dia al terminar de programar, subir los cambios con git add, git commit, git push

# API que usaremos

https://rickandmortyapi.com/documentation/

# Paginas de la app

1. HOME: Una seccion donde se vean todos los characters que llegan cuando uno hace un GET a https://rickandmortyapi.com/api/character. Esta seccion tiene que tener todos los personajes en cards
   a. Cada Card tiene que tener Nombre y la foto

2. CHARACTER: Una pagina separada por cada character. Esto tiene que tener nombre, foto, status, species y gender.

3. ABOUT: pagina presentacional con informacion sobre Chichina y el proyecto (solo texto y a lo sumo alguna imagen y CSS)

4. CONTACT US: pagina donde hay un formulario donde poner nombre, email y mensaje y que permita enviar mails de consulta

# Otros componentes

1. NAVIGATION: ls paginas deben tener un menu de navegacion que permita ir a HOME, CONTACT US y a ABOUT

2. FOOTER: las paginas deben tener un footer con iconos de redes sociales y con el copyright escrito (e.g. "Rick & Morty, copyright)

# Funcionalidad

1. HOME:
   a. Al clickear en una tarjeta me debe llevar a la pagina detallada de ese personaje
   b. Debo tener una barra de busqueda que me permite escribir, y al escribir un nombre me muestra solo las tarjetas que coinciden con ese nombre. Tambien debe tener un boton para "limpiar" la busqueda y que quede vacia

2. CHARACTER:
   a. Debe tener un botton "back" que lleve a HOME

3. CONTACT US:
   a. Debe enviar mails a tu casilla de correo

# Estructura de Carpetas y archivos, y otros

1. APP: este componente tiene que hacer el pedido principal a la API y tiene que tener react router

2. HOME: hacer aqui el map y tener un componente separado para la card

3. Utilizar componente.module.scss en cada componente, asi no se mezclan los CSS a lo largo del proyecto. Esto va a implicar utilizar {} para el CSS en los componentes. Investigar con ChatGPT como funciona module.css y como aplicar esto.

4. Utilizar SASS. No es necesario usar BEM. Utilizar variables y anidamiento. Revisar proyectos de brain station en react para ver la estructura de carpetas y refrescar como funcionaba.
