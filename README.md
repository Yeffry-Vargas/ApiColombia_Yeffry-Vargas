# Mini Portal de Colombia

## Descripción

Mini Portal de Colombia es un sitio web informativo que consume 
datos de la API pública [API Colombia] y los muestra de forma 
dinámica en la página usando HTML, CSS y JavaScript.

El proyecto tiene dos páginas conectadas mediante hipervínculos:

- **Guía turística de Colombia** (`index.html`): muestra las primeras 20
  atracciones turísticas del país, con su nombre, ciudad, descripción e imagen.
- **Sabores de Colombia** (`sabores.html`): muestra los platos típicos del
  país, con su nombre, departamento, descripción e imagen, y el total de
  platos encontrados.

Los datos se piden con `fetch`, se convierten en tarjetas creadas con el DOM
(`createElement`) y se muestran en una cuadrícula adaptable. Mientras los datos
cargan aparece un mensaje de carga, y si ocurre un error se maneja con `catch`
mostrando un aviso al usuario. Si alguna imagen de la API no funciona, se
reemplaza automáticamente por una imagen de respaldo.