const URL_API ="https://api-colombia.com/api/v1/TouristicAttraction"
const contenedor = document.getElementById("contenedor");
const mensaje = document.getElementById("mensaje");

//Respadldo de la imegen del API
const IMAGEN_RESPLANDOR = ""

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

    img.src = atraccion.image
}