// Add simple animation to phase cards when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const phases = document.querySelectorAll('.phase');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            phases.forEach(phase => {
                phase.style.opacity = 0;
                phase.style.transform = 'translateY(20px)';
                phase.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(phase);
            });
        });
