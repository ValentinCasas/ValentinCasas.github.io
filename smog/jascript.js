function nota1() {
    alert("Esta pagina contiene el carrousel de imagenes")
}
function marcaAuto() {
    var marca = prompt("ingrese marca de auto:", "fiat, ford, ...");
    if (confirm("¿Seguro que la marca es " + marca + "?")) {
        alert("su marca es: " + marca + ".");
       /* marca = null
        while(marca== null || marca==""){
        marca=prompt("Dime tu marca:","")
        }
        document.write("su marca es, " + marca) */
    }
}

function ImprimeNombre() {
    var nombre = prompt("ingrese nombre");

    document.write("<H1>Tu nombre es <B><I>")
    document.write(nombre)
    document.write("</B></I><H1>")
}
