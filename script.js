const canvas = document.getElementById("butterflyCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;  // Time variable to animate

function drawButterfly() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width / 2, canvas.height / 2);  // Center the butterfly
    ctx.scale(50, -50);  // Scale for better visibility and flip upside down

    ctx.beginPath();
    ctx.lineWidth = 0.03;
    ctx.strokeStyle = "hsl(" + (t * 10 % 360) + ", 100%, 50%)";  // Color animation

    for (let i = 0; i < t; i += 0.01) {
        let x = Math.sin(i) * (Math.exp(Math.cos(i)) - 2 * Math.cos(4 * i) - Math.pow(Math.sin(i / 12), 5));
        let y = Math.cos(i) * (Math.exp(Math.cos(i)) - 2 * Math.cos(4 * i) - Math.pow(Math.sin(i / 12), 5));

        ctx.lineTo(x, y);
    }

    ctx.stroke();
    ctx.resetTransform();  // Reset transformations for next frame
    t += 0.01;

    requestAnimationFrame(drawButterfly);  // IDK if its smooth or not but anyways who cares
}

// Adjust the canvas size if the window is resized
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

drawButterfly();
