<footer>
    <p>&copy; 2025 Olivia Le. All rights reserved.</p>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const htmlElement = document.querySelector('html');
            const savedTheme = localStorage.getItem('theme') || 'light';
            htmlElement.setAttribute('data-bs-theme', savedTheme);

            const themeToggle = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-icon');

            // Set icon on page load
            if (savedTheme === 'light') {
                themeIcon.className = 'bi bi-moon';
            } else {
                themeIcon.className = 'bi bi-sun';
            }

            themeToggle.addEventListener('click', function() {
                const currentTheme = htmlElement.getAttribute('data-bs-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                htmlElement.setAttribute('data-bs-theme', newTheme);
                localStorage.setItem('theme', newTheme);

                // Change icon
                if (newTheme === 'light') {
                    themeIcon.className = 'bi bi-moon';
                } else {
                    themeIcon.className = 'bi bi-sun';
                }
            });
        });
    </script>

</footer>