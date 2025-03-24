function changeBackgroundColor() {
    // Cambia el color de fondo de la página cada vez que se hace clic
    const colors = ["#FF69B4", "#FFD700", "#32CD32", "#FF6347", "#8A2BE2"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Muestra un mensaje especial al hacer clic
    document.getElementById("specialMessage").innerHTML = "¡Gracias por ser un velatacú! ✨";
}
