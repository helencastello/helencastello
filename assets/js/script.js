document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    // You may need to have an element with id="year" in the HTML
    document.getElementById('year').textContent = new Date().getFullYear();

    // Toggle theme
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
    	document.body.classList.replace('theme-light', 'theme-dark');
    	themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
    	let theme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
    	document.body.classList.replace(`theme-${theme === 'dark' ? 'light' : 'dark'}`, `theme-${theme}`);
    	localStorage.setItem('theme', theme);
    	themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });


    // Toggle navigation menu
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
    	navLinks.classList.toggle('show-nav');
    });
});
