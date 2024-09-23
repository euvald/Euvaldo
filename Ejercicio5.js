// JavaScript Document
var datos = {};
var misDatos = info => {
    console.log(info);
    datos.usuarios = info;
    var html = "";
    html += "<h2>Productos</h2>";
    html += "<table border='1'>";
    html += "<tr><th>folio</th><th>descripcion</th><th>talla</th><th>precio</th></tr>";
    datos.usuarios.map(usuario => {
        html += "<tr>";
        html += "<td>" + usuario.folio + "</td>";
        html += "<td>" + usuario.descripcion + "</td>";
        html += "<td>" + usuario.talla + "</td>";
        html += "<td>" + usuario.precio + "</td>";
        html += "</tr>";
    });

    html += "</table>";
    document.getElementById("resultados").innerHTML = html;
};