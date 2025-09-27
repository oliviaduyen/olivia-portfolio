// Enhanced Typewriter Script
const texts = ["Full-Stack Developer", "UI/UX Enthusiast", "Creative Problem Solver", "CS Graduate Student"];
let count = 0,
    index = 0,
    currentText = "",
    letter = "";

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typewriter").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2500);
    } else {
        setTimeout(type, 80);
    }
})();

// Enhanced JavaScript for single-page scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function highlightActiveSection() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call on page load

    // Simplified and Enhanced Dark mode toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Track current theme state reliably
    let currentThemeState = localStorage.getItem('theme') || 'dark';
    
    console.log('Theme toggle elements:', themeToggle, themeIcon); // Debug
    
    if (!themeToggle || !themeIcon) {
        console.error('Theme toggle elements not found');
        return;
    }
    
    // Clear any existing theme first
    function clearTheme() {
        document.documentElement.removeAttribute('data-bs-theme');
        document.body.className = document.body.className.replace(/\b(dark-mode|light-mode)\b/g, '');
        localStorage.removeItem('theme');
        console.log('Theme cleared');
    }
    
    // Initialize theme - force to light mode first
    function initializeTheme() {
        clearTheme(); // Start fresh
        
        console.log('Initializing theme:', currentThemeState);
        setTheme(currentThemeState);
    }
    
    function setTheme(theme) {
        console.log('Setting theme to:', theme);
        
        // Update state tracker
        currentThemeState = theme;
        
        // Clear existing theme classes
        document.documentElement.removeAttribute('data-bs-theme');
        document.body.classList.remove('dark-mode', 'light-mode');
        document.documentElement.classList.remove('theme-light', 'theme-dark');
        
        // Force a style recalculation
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = '';
        
        // Add small delay to ensure clean state
        setTimeout(() => {
            // Set new theme multiple ways for maximum compatibility
            document.documentElement.setAttribute('data-bs-theme', theme);
            document.body.classList.add(theme + '-mode');
            document.documentElement.classList.add('theme-' + theme);
            
            // Force immediate style application
            if (theme === 'light') {
                document.body.style.backgroundColor = '#ffffff';
                document.body.style.color = '#1e293b';
                themeIcon.className = 'bi bi-moon';
                console.log('Set to light mode with moon icon');
            } else {
                document.body.style.backgroundColor = '#0f172a';
                document.body.style.color = '#f8fafc';
                themeIcon.className = 'bi bi-sun';
                console.log('Set to dark mode with sun icon');
            }
            
            // Save to localStorage
            localStorage.setItem('theme', theme);
            console.log('Theme set successfully to:', theme);
            
            // Force another reflow
            document.body.offsetHeight;
        }, 10);
    }
    
    // Initialize theme on page load
    initializeTheme();
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Use our reliable state tracker instead of DOM inspection
        const newTheme = currentThemeState === 'light' ? 'dark' : 'light';
        
        console.log('Toggle clicked - switching from', currentThemeState, 'to', newTheme);
        setTheme(newTheme);
    });

    // Add smooth scroll behavior to scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Enhanced floating navbar functionality
    let lastScrollTop = 0;
    let isScrollingDown = false;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        // Add floating effect after scrolling past hero section
        if (currentScroll > window.innerHeight * 0.1) {
            navbar.classList.add('floating');
        } else {
            navbar.classList.remove('floating');
        }
        
        // Hide/show navbar based on scroll direction
        if (currentScroll > lastScrollTop && currentScroll > 200) {
            // Scrolling down
            if (!isScrollingDown) {
                navbar.classList.add('hidden');
                isScrollingDown = true;
            }
        } else {
            // Scrolling up
            if (isScrollingDown) {
                navbar.classList.remove('hidden');
                isScrollingDown = false;
            }
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-modern');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});