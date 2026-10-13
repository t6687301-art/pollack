// =====================================================
// 1. PRIMERA PANTALLA: Alerta de bienvenida general
// =====================================================
alert("¡Bienvenido a mi página del colegio!");

// =====================================================
// 2. SEGUNDA PANTALLA: Pedir el nombre con un prompt
// =====================================================
let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// =====================================================
// 3. TERCERA PANTALLA: Saludo personalizado con el nombre
// =====================================================
// Verificamos si escribió un nombre para saludarlo
if (nombreUsuario) {
    alert("¡Bienvenido " + nombreUsuario + " a la página de nuestra institución!");
} else {
    alert("¡Bienvenido a la página de nuestra institución!");
}

// Mensaje interno para la consola de Visual Studio / Navegador
console.log("Script interactivo cargado correctamente.");
