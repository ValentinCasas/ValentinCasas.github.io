function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
    //valido el mail

        let buscoarroba = false
        let buscopunto = false
        let posicionarroba = -1
        let posicionpunto = -1
        for (let i=0; i<=document.fvalida.direccionCorreo.value.length; i++) {
        if (document.fvalida.direccionCorreo.value.charAt(i) == "@" ) {
        buscoarroba = true
        posicionarroba = i}
        else if (document.fvalida.direccionCorreo.value.charAt(i) == ".") {
        buscopunto = true
        posicionpunto = i}
       }
        if ((buscoarroba && buscopunto) && (posicionarroba < posicionpunto )) {
        alert("mail valido")
        }
        else {
        alert("mail invalido")}
     

    //valido q se escriba algo
    if (document.fvalida.mensage.value.length==0){
        alert("no se encontro ningun mensage")
        document.fvalida.mensage.focus()
        return 0;
 }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
return true;
}


function mostrarDatos(){

       let name=document.fvalida.nombre.value;
       let mensage=document.fvalida.mensage.value;
       let mail=document.fvalida.direccionCorreo.value;

  if (mensage.length>0 && (name.length>0 && mail.length>0)){
 alert("nombre:"+ name + " -mail: "+mail+" -mensage: "+mensage);
              }else{
                    alert("campos incompletos"); 
              }

}


