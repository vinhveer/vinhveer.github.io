document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleMode');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.navbar a, .btn-outline-success');

    function updateTheme(theme) {
        if (theme === 'dark') {
            body.setAttribute('data-bs-theme', 'dark');
            body.style.color = '#ffffff';
            navbar.style.color = '#ffffff';
            links.forEach(link => link.style.color = '#ffffff');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else if (theme === 'light') {
            body.setAttribute('data-bs-theme', 'light');
            body.style.color = '#000000';
            navbar.style.color = '#000000';
            links.forEach(link => link.style.color = '#000000');
            toggleBtn.innerHTML = '<i class="fas fa-moon ms-1 me-1"></i>';
        } else {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const newTheme = prefersDarkScheme ? 'dark' : 'light';
            updateTheme(newTheme);
        }
    }

    function toggleTheme() {
        const currentTheme = body.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            localStorage.setItem('theme', 'light');
            updateTheme('light');
        } else if (currentTheme === 'light') {
            localStorage.setItem('theme', 'auto');
            updateTheme('auto');
        } else {
            localStorage.setItem('theme', 'dark');
            updateTheme('dark');
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'auto';
    updateTheme(savedTheme);

    toggleBtn.addEventListener('click', toggleTheme);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', function() {
        if (localStorage.getItem('theme') === 'auto') {
            updateTheme('auto');
        }
    });
});
