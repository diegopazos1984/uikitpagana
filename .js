// Añadir interactividad a los botones
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn:not([disabled])');
    
    buttons.forEach(button => {
        // Efecto Ripple
        button.addEventListener('click', function(e) {
            if (this.disabled) return;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Efecto Hover con escala
        button.addEventListener('mouseover', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
            }
        });

        button.addEventListener('mouseout', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Animación de entrada para elementos
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });
});