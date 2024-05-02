let items = [
    {
      "nombre": "perfume",
      "precio": 25000,
      "imagen": "https://silkperfumes.cl/cdn/shop/files/800x400.jpg?v=1705497406&width=800"
    },
    {
      "nombre": "perfume",
      "precio": 26000,
      "imagen": "imagenes/unisex1.avif"
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
        productos.appendChild(producto);
      }
    }).catch(function(error) {
      console.log('Request failed', error);
    });
  }