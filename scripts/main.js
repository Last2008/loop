document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(targetId).classList.add('active');
        });
    });

    const claimForm = document.getElementById('claimForm');
    claimForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = document.getElementById('claimMessage').value;
        // Aquí iría el código para enviar el mensaje por correo electrónico
        alert('Tu reclamo ha sido enviado. Gracias por tu feedback.');
        claimForm.reset();
    });
});