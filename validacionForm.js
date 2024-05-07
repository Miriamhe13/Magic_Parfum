             function validarFormulario() {
                var nombre = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var telefono = document.getElementById('tel').value;
                var asunto = document.getElementById('asunto').value;
                var mensaje = document.getElementById('message').value;
        
                // Verificar que los campos no estén vacíos
                if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || asunto.trim() === '' || mensaje.trim() === '') {
                    alert('Por favor complete todos los campos.');
                    return false;
                }
        
                // Validar el formato del correo electrónico
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Por favor ingrese un correo electrónico válido.');
                    return false;
                }
        
                // Validar que el número de teléfono tenga 9 dígitos
                var telefonoRegex = /^[0-9]{9}$/;
                if (!telefonoRegex.test(telefono)) {
                    alert('Por favor ingrese un número de teléfono válido (9 dígitos).');
                    return false;
                }
        
                // Si todas las validaciones pasan, el formulario se puede enviar
                return true;
            }
        