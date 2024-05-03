function generateUser() {
    const nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Luisa', 'Carlos', 'Sofía', 'Miguel', 'Fernanda', 'Diego'];
    const apellidos = ['García', 'Rodríguez', 'Martínez', 'Hernández', 'López', 'González', 'Pérez', 'Sánchez', 'Ramírez', 'Torres'];
    const correos = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@outlook.com', '@example.com'];
    const telefonos = ['3001234567', '3105678901', '3207890123', '3112345678', '3209876543'];
  
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
    const correoAleatorio = nombreAleatorio.toLowerCase() + 
    apellidoAleatorio.toLowerCase() + correos[Math.floor(Math.random() * correos.length)];
    const telefonoAleatorio = telefonos[Math.floor(Math.random() * telefonos.length)];
  
    const fotoAleatoria = `https://randomuser.me/api/portraits/${Math.floor(Math.random() * 2) ? 'men' :
     'women'}/${Math.floor(Math.random() * 100)}.jpg`;
  
    document.getElementById('nombre').textContent = `${nombreAleatorio} ${apellidoAleatorio}`;
    document.getElementById('correo').textContent = correoAleatorio;
    document.getElementById('telefono').textContent = telefonoAleatorio;
    document.getElementById('foto').src = fotoAleatoria;
  }