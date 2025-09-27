// Animation and statistics functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate statistics on scroll
    const observerOptions = {
        threshold: 0.7,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const finalValue = stat.textContent;
                    animateValue(stat, 0, parseInt(finalValue) || finalValue, 2000);
                });
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    function animateValue(element, start, end, duration) {
        if (typeof end === 'string') return; // Skip if not a number
        
        const range = end - start;
        const startTime = performance.now();
        
        function updateValue(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (range * easeOutQuart));
            
            element.textContent = current + (end === 100 ? '%' : '+');
            
            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        }
        
        requestAnimationFrame(updateValue);
    }
});

// AOS Animation initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});