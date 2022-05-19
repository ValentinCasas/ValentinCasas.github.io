/*8888888888888888888888888888888888888888888 FORMULARIO 1 88888888888888888888888888888888888888888888888*/
let countIntentos = 0;
function valida_envia() {
    //valido el nombre
    if (countIntentos == 0) {
        if (document.fvalida.nombre.value.length == 0) {
            alert("Tiene que escribir su nombre")
            document.fvalida.nombre.focus()
            return 0;
        }
        //valido el mail

        let buscoarroba = false
        let buscopunto = false
        let posicionarroba = -1
        let posicionpunto = -1
        for (let i = 0; i <= document.fvalida.direccionCorreo.value.length; i++) {
            if (document.fvalida.direccionCorreo.value.charAt(i) == "@") {
                buscoarroba = true
                posicionarroba = i
            }
            else if (document.fvalida.direccionCorreo.value.charAt(i) == ".") {
                buscopunto = true
                posicionpunto = i
            }
        }
        if ((buscoarroba && buscopunto) && (posicionarroba < posicionpunto)) {
            alert("mail valido")
        }
        else {
            alert("mail invalido")
        }

        //valido q se escriba algo
        if (document.fvalida.mensage.value.length == 0) {
            alert("no se encontro ningun mensage")
            document.fvalida.mensage.focus()
            return 0;
        }

        //el formulario se envia
        let name = document.fvalida.nombre.value;
        let mensage = document.fvalida.mensage.value;
        let mail = document.fvalida.direccionCorreo.value;

        if (mensage.length > 0 && name.length > 0 && mail.length > 0 && buscoarroba == true && buscopunto == true) {
            alert("Muchas gracias por enviar el formulario");
            document.mostrar.innerHTML += "<p>" + "Nombre: " + name + "</p>";
            document.mostrar.innerHTML += "<p>" + "E-mail: " + mail + "</p>";
            document.mostrar.innerHTML += "<p>" + "Opinion:</p>";
            document.mostrar.innerHTML += "<p>" + mensage + "</p>";
            document.fvalida.innerHTML += "<center><p>recibido</p>   <input type=checkbox checked> </center>";
            countIntentos = countIntentos + 1;
        } else {
            alert("campo incompleto o mal llenado");

        }

        document.fvalida.submit();
        return true;

    } else {
        alert("Campos ya completados");
    }
}






let countIntentos2 = 0;
function valida_envia2() {
    if (countIntentos2 == 0) {

        //valido el mail

        let buscoarroba = false
        let buscopunto = false
        let posicionarroba = -1
        let posicionpunto = -1
        for (let i = 0; i <= document.fvalida2.direccionCorreo.value.length; i++) {
            if (document.fvalida2.direccionCorreo.value.charAt(i) == "@") {
                buscoarroba = true
                posicionarroba = i
            }
            else if (document.fvalida2.direccionCorreo.value.charAt(i) == ".") {
                buscopunto = true
                posicionpunto = i
            }
        }
        if ((buscoarroba && buscopunto) && (posicionarroba < posicionpunto)) {
            alert("mail valido")
        }
        else {
            alert("mail invalido")
        }

        //valido q se escriba algo
        if (document.fvalida2.mensage.value.length == 0) {
            alert("no se encontro ningun mensage")
            document.fvalida2.mensage.focus()
            return 0;
        }

        //el formulario se envia
        let edad = document.fvalida2.edad.value;
        let mensage = document.fvalida2.mensage.value;
        let mail = document.fvalida2.direccionCorreo.value;

        if (mensage.length > 0 && edad >= 10 && mail.length > 0 && buscoarroba == true && buscopunto == true) {
            alert("Muchas gracias por enviar el formulario");
            document.mostrar2.innerHTML += "<p>" + "Edad: " + edad + "</p>";
            document.mostrar2.innerHTML += "<p>" + "E-mail: " + mail + "</p>";
            document.mostrar2.innerHTML += "<p>" + "Opinion:</p>";
            document.mostrar2.innerHTML += "<p>" + mensage + "</p>";
            document.fvalida2.innerHTML += "<center><p>recibido</p>   <input type=checkbox checked> </center>";
            countIntentos2 = countIntentos2 + 1;
        } else {
            alert("campo incompleto o mal llenado");

        }

        document.fvalida2.submit();
        return true;

    } else {
        alert("Campos ya completados");
    }
}

/*8888888888888888888888888888888888888888888 GALERIA 888888888888888888888888888888888888888888888888*/


const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
const carrousel = document.querySelector('.carrousel');
const img = document.querySelector('.carrousel .img');  //manipular las imagenes



// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click', () => {

        // Guardar la posición de ese PUNTO
        let posicion = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -14.28 //100 dividido cantidad de imagenes

        // MOVEMOS el grand
        grande.style.transform = `translateX(${operacion}%)`
        if (posicion % 2 == 0) {
            carrousel.style.background = `#282727`
            
        } else {
            carrousel.style.background = `rgb(80, 78, 78)`
        }

     
        

        // Recorremos TODOS los punto
        punto.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
            punto[i].style.borderRadius = "4%"
        })
        // Añadir la clase activo en el punto que se hizo CLICK
        punto[i].classList.add('activo')
        punto[i].style.borderRadius = "100%"
        
    })
  

})

