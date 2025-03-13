document.getElementById("celebrateBtn").addEventListener("click", () => {
    let video = document.getElementById("bgVideo");

    // Play the video when Celebrate is clicked
    if (video.paused) {
        video.play();
    }

    // Create Holi Color Splashes
    for (let i = 0; i < 50; i++) {
        createColorSplash();
    }
});

function createColorSplash() {
    const splash = document.createElement("div");
    splash.classList.add("splash");

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    splash.style.left = `${x}px`;
    splash.style.top = `${y}px`;

    let colors = ["red", "yellow", "green", "blue", "pink", "purple", "orange"];
    splash.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("colorSplash").appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 1000);
}
