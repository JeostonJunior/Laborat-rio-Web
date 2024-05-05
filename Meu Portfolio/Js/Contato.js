document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validar campos
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Por favor, preencha todos os campos.");
            form.reset();
            return;
        }

        // Simulação de envio bem-sucedido
        setTimeout(function () {
            form.reset();
            successMessage.classList.remove("hidden");
            setTimeout(function () {
                successMessage.classList.add("hidden");
            }, 3000);
        }, 1000);
    });
});
