/*8888888888888888888888888888888888888888888 FORMULARIO 1 88888888888888888888888888888888888888888888888*/
let countIntentos = 0;

function valida_envia() {

    let name=document.fvalida.nombre.value;
    let edad = document.fvalida.edad.value;
    let mensage = document.fvalida.mensage.value;
    let mail = document.fvalida.direccionCorreo.value

    //valido el nombre
    if (countIntentos == 0) {
        if (name.length == 0) {
            alert("Tiene que escribir su nombre")
            document.fvalida.nombre.focus()
            return 0;
        }
        //valido el mail

        let buscoarroba = false
        let buscopunto = false
        let posicionarroba = -1
        let posicionpunto = -1
        for (let i = 0; i <= mail.length; i++) {
            if (mail.charAt(i) == "@") {
                buscoarroba = true
                posicionarroba = i
            }
            else if (mail.charAt(i) == ".") {
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
        if (mensage.length == 0) {
            alert("no se encontro ningun mensage")
            document.fvalida.mensage.focus()
            return 0;
        }

        //el formulario se envia


        if (edad >=10 && mensage.length > 0 && name.length > 0 && mail.length > 0 && buscoarroba == true && buscopunto == true) {
            alert("Muchas gracias por enviar el formulario");
            document.mostrar.innerHTML += "<p>" + "Nombre: " + name + "</p>";
            document.mostrar.innerHTML += "<p>" + "Edad: " + edad + "</p>";
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
            carrousel.style.background = `#3d3b3b`
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

/*8888888888888888888888888888888888888888888 GALERIA 2 888888888888888888888888888888888888888888888888*/


const grande2 = document.querySelector('.grande2')
const punto2 = document.querySelectorAll('.punto2')
const carrousel2 = document.querySelector('.carrousel2');
const img2 = document.querySelector('.carrousel2 .img');  //manipular las imagenes



// Recorrer TODOS los punto
punto2.forEach((cadaPunto, i) => {
    // Asignamos un CLICK a cadaPunto
    punto2[i].addEventListener('click', () => {

        // Guardar la posición de ese PUNTO
        let posicion = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.33 //100 dividido cantidad de imagenes

        // MOVEMOS el grand
        grande2.style.transform = `translateX(${operacion}%)`
        if (posicion % 2 == 0) {
            carrousel2.style.background = `#282727`
            
        } else {
            carrousel2.style.background = `#3d3b3b`
        }


        // Recorremos TODOS los punto
        punto2.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            punto2[i].classList.remove('activo2')
            punto2[i].style.borderRadius = "4%"
        })
        // Añadir la clase activo en el punto que se hizo CLICK
        punto2[i].classList.add('activo2')
        punto2[i].style.borderRadius = "100%"
        
    })
  

})


