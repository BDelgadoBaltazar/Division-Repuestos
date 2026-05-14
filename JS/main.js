/* Consigna 2: Validacion del formulario mediante JavaScript */
const formulario_contacto = document.getElementById('formulario-contacto'); 

/* Si encuentro el formulario en el DOM entonces: */
if(formulario_contacto) {
    /* Navegador se queda "escuchando" hasta que el usuario hace clic en el boton de enviar o presiona enter*/
    formulario_contacto.addEventListener('submit', function(e) {
        e.preventDefault(); /* Los formularios intentan recargar la pagina al enviarse. Detengo ese comportamiento para poder validar los datos yo mismo con JS*/

        // .value obtiene el texto que el usuario escribio en el campo de nombre
        //.checked para los checkboxes no nos interesa el valor en texto, sino un booleano que indique si esta marcado
        const nombre = document.getElementById('nombre').value;
        const terminos = document.getElementById('terminos').checked;

        //Validacion de campo obligatorio y longitud
        if(nombre.length < 3) {
            alert('Por favor, ingrese un nombre válido');
            return;
        }

        //Validacion de checkbox obligatorio
        if(!terminos) {
            alert('Debe aceptar los terminos y condiciones.');
            return;
        }

        alert('Formulario enviado con éxito (simulado).');
    });
}

/* Consigna 6: Llamada GET a una API pública */
async function obtenerDatos () { //Con async antes de la funcion, le aviso a JS que se prepare porque dentro de esta funcion va a haber tareas que toman tiempo
    //Elemento donde se inyectaria el JSON si estuvieramos en catalogo.html
    const contenido_catalogo = document.getElementById('contenido-api');
    //if (!contenido_catalogo) return; //Comentado para ver el log en todas las paginas

    try { //Intenta ejecutar este codigo
        //fetch - herramienta nativa del navegador para hacer peticiones HTTP
        //await - le dice a la funcion: "hace una pausa aca, espera que el servidor responda y cuando tengas la respuesta guardala en la variable response". Mientras espera el resto de la pagina sigue funcionando 
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); //La respuesta que viene del servidor es un paquete crudo. Para que JS lo lea como un objeto o un array de datos usamos .json()
        //Mapeo de datos al DOM (Consigna 6 requerida)
        console.log('Datos de API cargados:', data);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

obtenerDatos();