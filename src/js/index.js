
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede recarregar

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // ✅ Validação 1: nome >= 3 letras
        if (name.length < 3) {
            messageDiv.textContent = "O nome deve ter pelo menos 3 caracteres.";
            messageDiv.style.color = "red";
            return;
        }

        // ✅ Validação 2: e-mail contém "@" e "."
        if (!email.includes("@") || !email.includes(".")) {
            messageDiv.textContent = "Por favor, insira um e-mail válido.";
            messageDiv.style.color = "red";
            return;
        }

        // Se passou nas validações:
        messageDiv.textContent = "Mensagem enviada com sucesso!";
        messageDiv.style.color = "green";

        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Mensagem:", message);

        form.reset();
    });
});
