document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        if (a === "" || b === "") {
            alert("💡 Por favor, ingresa ambos valores.");
            event.preventDefault();
        } else {
            animarBoton();
        }
    });
});

function animarBoton() {
    let btn = document.querySelector("button");
    btn.innerHTML = "✨ Calculando... ✨";
    btn.style.transform = "scale(1.2)";
    setTimeout(() => {
        btn.innerHTML = "💫 Calcular 💫";
        btn.style.transform = "scale(1)";
    }, 1000);
}
