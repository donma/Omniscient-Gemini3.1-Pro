// Main JavaScript for template
document.addEventListener('DOMContentLoaded', function() {
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Fake Handling
    const contactForm = document.querySelector('.needs-validation');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (contactForm.checkValidity()) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>送出中...';
                
                setTimeout(() => {
                    alert('感謝您的詢問，我們將盡快與您聯繫。');
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 1500);
            }
            contactForm.classList.add('was-validated');
        });
    }
});
