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
    },    {
      "nombre": "perfume",
      "precio": 26000,
      "imagen": "https://editorialist.com/wp-content/uploads/2023/06/Editorialist2023_Unisex-Fragrances_Holding_-Social-Media.jpg"
    },
    {
      "nombre": "perfume",
      "precio": 105000,
      "imagen": "imagenes/unisex2.avif"
    },
    {
      "nombre": "perfume",
      "precio": 85000,
      "imagen": "imagenes/unisex3.avif"
    },
    {
      "nombre": "perfume",
      "precio": 35000,
      "imagen": "https://www.perfumedirect.com/cdn/shop/articles/floral_blog_1024x1024.png?v=1566571318"
    },
    {
      "nombre": "perfume",
      "precio": 85000,
      "imagen": "imagenes/unisex4.webp"
    },
    {
      "nombre": "perfume",
      "precio": 75000,
      "imagen": "imagenes/unisex5.jpg"
    },
    {
      "nombre": "perfume",
      "precio": 25000,
      "imagen": "imagenes/unisex2.avif"
    },
    {
      "nombre": "perfume",
      "precio": 85000,
      "imagen": "https://i.pinimg.com/originals/ce/af/7d/ceaf7d99aafebf3dadeb890835d1cdba.jpg"
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