const butterfly = document.getElementById("butterfly");

let x = window.innerWidth * 0.2;
let y = window.innerHeight * 0.5;

let targetX = x;
let targetY = y;

document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

document.addEventListener("touchmove", (e) => {
    targetX = e.touches[0].clientX;
    targetY = e.touches[0].clientY;
});

function animate() {

    x += (targetX - x) * 0.02;
    y += (targetY - y) * 0.02;

    butterfly.style.left = x + "px";
    butterfly.style.top = y + "px";

    const angle =
        Math.atan2(targetY - y, targetX - x) *
        180 / Math.PI;

    butterfly.style.transform =
        `translate(-50%,-50%) rotate(${angle}deg)`;

    requestAnimationFrame(animate);
}

animate();

setInterval(() => {

    targetX = Math.random() * window.innerWidth;

    targetY = Math.random() * (window.innerHeight - 200) + 100;

}, 4000);
