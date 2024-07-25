const form = document.getElementById("elementosFormulario")
form.onsubmit = recogerDatos
let nuevoDiv = document.getElementById("listaPrincipal")

let datosProductos = []
let producto = ""

function mostrarPrecios() {
    // console.log("hola");
    // suma = suma + num
    let total = 0;
    let valorTotal = document.querySelector('.precioTotal')
    for (i = 0; i < datosProductos.length; i++) {
        total = total + parseFloat(datosProductos[i].precio)
    }

    valorTotal.innerHTML = `${total} €`
}

function recogerDatos(ev) {
    ev.preventDefault()
    let nombre = document.getElementById("name").value;
    let precio = document.getElementById("precio").value;
    let imagen = document.getElementById("imagen").value;
    let descripcion = document.getElementById("descripcion").value;
    let id = generateUUID();
    datosProductos.push({ id, nombre, precio, imagen, descripcion })


    producto = document.createElement('div')

    producto.className = 'boxProducto'
    producto.innerHTML = `
        <div class="imagen">
            <img src="${imagen}" alt="">
        </div>
        <div class ="nomDes">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
        </div>
        <div>
            <p class="euros">${precio}€</p>
            <button onclick="borrar(event)" class="borrar">X</button>
        </div>
        `
    // console.log(datosProductos)
    producto.id = id;
    nuevoDiv.append(producto)
    form.reset()

    mostrarPrecios()


}

function borrar(ev) {
    let divBorrar = ev.target.parentNode.parentNode;
    // console.log(divBorrar);
    divBorrar.remove();
    datosProductos = datosProductos.filter(p => p.id !== divBorrar.id);
    // console.log(datosProductos);
    mostrarPrecios()
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}



