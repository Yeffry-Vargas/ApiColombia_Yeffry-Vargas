const URL_API ="https://api-colombia.com/api/v1/TypicalDish"
const contenedor = document.getElementById("contenedor")
const mensaje = document.getElementById("mensaje")
const IMAGEN_RESPALDO_SABORES = "img/sabores-colombia.jpg";

mensaje.textContent = "Cargado platillos tipicos en colombia...."

fetch (URL_API)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error("Error del servidor: "+ respuesta.status)
        }
        return respuesta.json();
    })

    .then(datos => {
        console.log(datos[0]);
        mensaje.textContent="Total de platillos tipicos: " + datos.length;

        datos.forEach(platos => {
            contenedor.appendChild(crearTarjeta(platos));
        });
    })

    .catch(error => {
        mensaje.textContent="No se pudieron cargar los datos. Por favor intenta más tarde. ;)"
        console.error(error);
    });

function crearTarjeta(platos){
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const img = document.createElement("img");

    img.src = platos.imageUrl || IMAGEN_RESPALDO_SABORES;
    img.alt = platos.name;

    img.onerror = () => {
        img.onerror = null;
        img.src = IMAGEN_RESPALDO_SABORES;
    };

    const titulo = document.createElement("h3")
    titulo.textContent = platos.name;

    const lugar = document.createElement("p");
    lugar.classList.add("lugar");
    lugar.textContent = "🍽️ " + (platos.department?.name || "Departamento no disponible Platillo no disponible o aun no se crea. :/");

    const descripcion = document.createElement("p");
    descripcion.textContent = platos.description || "Sin descripción.";

    tarjeta.append(img,titulo,lugar,descripcion);
    return tarjeta;
}