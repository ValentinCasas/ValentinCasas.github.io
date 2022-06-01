/*8888888888888888888888888888888888888888888 FORMULARIO 1 88888888888888888888888888888888888888888888888*/

let intentos=1;

function valida_envia(e) {
    e.preventDefault();

    let name=document.fvalida.nombre.value;
    let edad = document.fvalida.edad.value;
    let mensage = document.fvalida.mensage.value;
    let mail = document.fvalida.direccionCorreo.value
    
    let errores=["Agregar un nombre","Error en el mail","La edad debe ser mayor o igual a 10","No se encontró el texto"];
    let muestroErrores="";
    const para = document.createElement("p");

    if (name.length == 0) {
        document.fvalida.nombre.classList.add('invalid')
        
        muestroErrores = document.createTextNode(errores[0]);
        para.appendChild(muestroErrores);
        document.getElementById("mostrar").appendChild(para);

        document.fvalida.nombre.focus();
        return false;
    }else{
        document.fvalida.nombre.classList.remove('invalid')
        
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
        document.fvalida.email.classList.remove('invalid')
    }
    else {
        document.fvalida.email.classList.add('invalid')

        muestroErrores = document.createTextNode(errores[1]);
        para.appendChild(muestroErrores);
        document.getElementById("mostrar").appendChild(para);
        
        return false;
    }

    //valido la edad
    if(edad < 10 || edad.length == 0){
        document.fvalida.edad.classList.add('invalid')

            muestroErrores = document.createTextNode(errores[2]);
            para.appendChild(muestroErrores);
            document.getElementById("mostrar").appendChild(para);
         
        return false;
    }else{
        document.fvalida.edad.classList.remove('invalid')
    }


    
    
    //valido textArea
    if (mensage.length == 0) {
        document.fvalida.mensage.classList.add('invalid')

           muestroErrores = document.createTextNode(errores[3]);
           para.appendChild(muestroErrores);
            document.getElementById("mostrar").appendChild(para);
         
   return false;
    }else{
        document.fvalida.mensage.classList.remove('invalid')
    }



    document.getElementById("mostrar").parentNode.removeChild(para);
    // document.getElementById("mostrar").removeChild(mostrarErrores);
   // document.getElementById("mostrar").removeChild(errores[i]);
   
        
   // document.getElementById("mostrar").removeChild(errores);
//AAAAAAAAAAAAAAAAAA
    


// Creo un nodo texto:
const muestroNombre = document.createTextNode("Nombre: " + name+" - ");
const muestroEdad = document.createTextNode("Edad: "+edad+" - ");
const muestroMail = document.createTextNode("Email: "+mail+" - ");
const muestroMensage = document.createTextNode("Mensaje: "+mensage);

//le agrego a <p> el nodo texto
para.appendChild(muestroNombre);
document.getElementById("mostrar").appendChild(para);

para.appendChild(muestroEdad);
document.getElementById("mostrar").appendChild(para);

para.appendChild(muestroMail);
document.getElementById("mostrar").appendChild(para);

para.appendChild(muestroMensage);
document.getElementById("mostrar").appendChild(para);

document.fvalida.innerHTML += "<p> mensajes recibidos: " + intentos + "</p>";

 intentos++;




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

        // Recorremos TODOS los punto
        punto.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
            
        })
        // Añadir la clase activo en el punto que se hizo CLICK
        punto[i].classList.add('activo')
       
        
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
        })
        // Añadir la clase activo en el punto que se hizo CLICK
        punto2[i].classList.add('activo2')
        
    })
  

})

/*8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/

