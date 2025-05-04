document.addEventListener('DOMContentLoaded', () => {
    // Inicialización de botones
    const buttons = document.querySelectorAll('.btn:not([disabled])');
    
    buttons.forEach(button => {
        // Efecto Ripple mejorado
        button.addEventListener('click', function(e) {
            if (this.disabled) return;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            this.appendChild(ripple);
            
            // Eliminar el efecto después de la animación
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });

        // Efectos de hover mejorados
        button.addEventListener('mouseover', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }
        });

        button.addEventListener('mouseout', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }
        });

        // Efecto de click
        button.addEventListener('mousedown', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(1px)';
            }
        });

        button.addEventListener('mouseup', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
            }
        });
    });

    // Animaciones de entrada para secciones
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
});