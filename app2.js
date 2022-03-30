var arrayViviendas = [
    new Inmueble(1,"crr1 #1sur","111111",100000000, true),
    new Inmueble(1,"crr2 #2sur","222222",150000000, false),
    

function Inmueble(id,direccion,telefono,precio,estado){
    console.log("x");
    this.id = id;
    this.direccion = direccion;
    this.telefono = telefono;
    this.precio = precio;
    this.estado = estado;

    this.inforInmueble = function(){
       var direccion = document.getElementById("direccion");
       var telefono = document.getElementById("telefono");
       var precio = document.getElementById("precio");
       var estado = document.getElementById("estado");

       document.write(direccion);
       document.write(telefono);
       document.write(precio);
       document.write(estado);
    }
}

Inmueble.prototype.ponerEnTabla=function() {
    const table=document.querySelector("table");
    const tr=document.createElement("tr");
    const td=document.createElement("td");
    const txt=document.createTextNode(this.id);
    td.appendChild(txt);
    tr.appendChild(td);
    table.appendChild(tr);
}

window.onload=function() {
    for (i of arrayViviendas) {
        i.ponerEnTabla();
    }
}