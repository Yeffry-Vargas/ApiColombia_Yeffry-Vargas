const URL_API ="https://api-colombia.com/api/v1/TouristicAttraction"
const contenedor = document.getElementById("contenedor");
const mensaje = document.getElementById("mensaje");

//Respadldo de la imegen del API
const IMAGEN_RESPALDO_TURISMO = "img/turismo-colombia";

mensaje.textContent = "Cargar atracciones turísticas.... "

fetch (URL_API)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error("Error del servidor: " + respuesta.status);
        }
        return respuesta.json();
    })
    .then(datos => {
        console.log(datos[0]);
        mensaje.textContent="";

        const primeras20 =datos.slice(0,20);
        primeras20.forEach(atraccion => {
            contenedor.appendChild(crearTarjeta(atraccion));
        });
    })
    .catch(error => {
        mensaje.textContent="No se pudo cargar los datos. Intenta de nuevo."
        console.error(error);
    });

function crearTarjeta(atraccion) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const img = document.createElement("img");

    img.src = atraccion.images?.[0] || IMAGEN_RESPALDO_TURISMO;
    img.alt = atraccion.name;

   img.onerror = () => {
    img.onerror = null;
    img.src = IMAGEN_RESPALDO_TURISMO;
   }; 

   const titulo = document.createElement("h3");
   titulo.textContent = atraccion.name;

   const lugar = document.createElement("p");
   lugar.classList.add("lugar");
   lugar.textContent = "🗺️" + (atraccion.city?.name || "Ciudad no disponible.");

   const descripcion = document.createElement("p");
   descripcion.textContent = atraccion.description || "Sin descripción.";

   tarjeta.append(img,titulo,lugar,descripcion);

   return tarjeta;
}