const canvas = document.getElementById("mycanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");



// Arcs and circles
context.beginPath();
context.arc(300, 300, 30, 0, Math.PI * 2, false);
context.stroke();

context.beginPath();
context.arc(400, 400, 30, 0, Math.PI, false);
context.stroke();

context.beginPath();
context.arc(200, 400, 30, 0, Math.PI / 2, false);
context.stroke();

// Random circles
for (var i = 0; i < 10; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2, false);
    const colors = ["red", "blue", "green", "orange", "purple", "teal"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    context.strokeStyle = randomColor;
    context.stroke();
}