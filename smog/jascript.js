let count = 0;
function valida_envia() {
    //valido el nombre
    if (count == 0) {
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
        alert("Muchas gracias por enviar el formulario");
        let name = document.fvalida.nombre.value;
        let mensage = document.fvalida.mensage.value;
        let mail = document.fvalida.direccionCorreo.value;

        if (mensage.length > 0 && (name.length > 0 && mail.length > 0)) {
            document.mostrar.innerHTML += "<p>" + "nombre:" + name + "<p>";
            document.mostrar.innerHTML += "<p>" + "e-mail:" + mail + "</p>";
            document.mostrar.innerHTML += "<p>" + "opinion:" + mensage + "</p>";
            document.fvalida.innerHTML += "<center><p>recibido</p>   <input type=checkbox checked> </center>";
            count = count + 1;
        } else {
            alert("campos incompletos");
        }


        document.fvalida.submit();
        return true;

    } else {
        alert("Demasiados intentos");
    }
}



/*
function mostrar(){
    let name=document.fvalida.nombre.value;
    let mensage=document.fvalida.mensage.value;
    let mail=document.fvalida.direccionCorreo.value;

    if (mensage.length>0 && (name.length>0 && mail.length>0)){
        document.fvalida.innerHTML += "<div><p>"+"nombre:"+name+"</p></div>";
    document.fvalida.innerHTML += "<div><p>"+"e-mail:"+mail+"</p></div>";
    document.fvalida.innerHTML += "<div><p>"+"opinion:"+mensage+"</p></div>";
                     }else{
                           alert("campos incompletos"); 
                     }

   
  }*/