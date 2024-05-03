let items = [
    {
        "nombre":"Colonia de ben 10",
        "precio":9000,
        "imagen":"imagenes/ColoniaSprayBen10.jpg"
    },
    {
        "nombre":"Perfume de unicornio",
        "precio":5990,
        "imagen":"imagenes/PerfumeUnicorni.jpg"
    },
    {
        "nombre":"Perfume Paw Patrol",
        "precio":5000,
        "imagen":"imagenes/PerroPatrol.jpg"
    },
    {
        "nombre":"Perfume Hombre araña",
        "precio":8000,
        "imagen":"imagenes/Spider.jpg"
    },
    {
        "nombre":"Perfume De Ariel",
        "precio":5000,
        "imagen":"imagenes/Ariel.jpg"
    },
    {
        "nombre":"Perfume De Frozen",
        "precio":8000,
        "imagen":"imagenes/Frozen.jpg"
    },
    {
        "nombre":"Perfume De Thor",
        "precio":7990,
        "imagen":"imagenes/ThorPerfume.jpg"
    },
]

function cargar(){
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(dailyIndicators) {
        let dolar = parseFloat(dailyIndicators.dolar.valor);
        let productos = document.querySelector("#productos");
        for(let item of items){
            let producto = document.createElement("div");
            producto.classList.add("producto");

            let imagen = document.createElement("div");
            imagen.classList.add("imagen");
            imagen.style.backgroundImage = 'url('+ item.imagen +')';
            producto.appendChild(imagen);

            let nombre = document.createElement("div");
            nombre.classList.add("nombre");
            nombre.innerHTML = item.nombre;
            producto.appendChild(nombre);

            let precio = document.createElement("div");
            precio.classList.add("precio");
            precio.innerHTML = "$"+item.precio + " (USD "+ (item.precio/dolar).toFixed(1) +")";
            producto.appendChild(precio);

            let boton = document.createElement("button");
            boton.classList.add("boton");
            boton.innerHTML = "boton";
            producto.appendChild(boton);
            productos.appendChild(producto);
        }
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}