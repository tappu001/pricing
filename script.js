document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
        
        // Close menu when a link is clicked
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                }
            });
        });
    }
    
    // --- Update Footer Year Dynamically ---
    const yearSpan = document.querySelector('.app-footer p');
    if (yearSpan) {
        yearSpan.innerHTML = `© ${new Date().getFullYear()} Tapasvi Dudhrejiya. All Rights Reserved.`;
    }

    // --- Pricing Page Logic ---
    if (document.getElementById('pricing-page')) {
        const btnInr = document.getElementById('btn-inr');
        const btnUsd = document.getElementById('btn-usd');
        const btnPackages = document.getElementById('btn-packages');
        const btnHourly = document.getElementById('btn-hourly');
        const packagesView = document.getElementById('packages-view');
        const hourlyView = document.getElementById('hourly-view');

        let currentCurrency = 'inr';
        let currentView = 'packages';

        function updateView() {
            // Toggle view (Packages vs Hourly)
            packagesView.style.display = currentView === 'packages' ? 'block' : 'none';
            hourlyView.style.display = currentView === 'hourly' ? 'block' : 'none';

            // Toggle currency within the visible view
            const activeView = currentView === 'packages' ? packagesView : hourlyView;
            const allCards = activeView.querySelectorAll('.pricing-card');
            
            allCards.forEach(card => {
                if (card.dataset.currency === currentCurrency) {
                    card.style.display = 'flex'; // Use flex for proper layout
                } else {
                    card.style.display = 'none';
                }
            });
        }

        btnInr.addEventListener('click', () => {
            currentCurrency = 'inr';
            btnInr.classList.add('active');
            btnUsd.classList.remove('active');
            updateView();
        });

        btnUsd.addEventListener('click', () => {
            currentCurrency = 'usd';
            btnUsd.classList.add('active');
            btnInr.classList.remove('active');
            updateView();
        });

        btnPackages.addEventListener('click', () => {
            currentView = 'packages';
            btnPackages.classList.add('active');
            btnHourly.classList.remove('active');
            updateView();
        });

        btnHourly.addEventListener('click', () => {
            currentView = 'hourly';
            btnHourly.classList.add('active');
            btnPackages.classList.remove('active');
            updateView();
        });

        // Initial call to set the correct view
        updateView();
    }


    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // IMPORTANT: Replace this with your actual Google Apps Script Web App URL
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzyWi-IYyQgZmD1RfjBNu98reWQu40B2I9C7pMff6FxBpAfw-RclRPDt1nNp8xjpSPX/exec';
        
        const submitBtn = document.getElementById('submit-btn');
        const statusContainer = document.getElementById('form-status-container');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            statusContainer.innerHTML = '';

            fetch(SCRIPT_URL, {
                method: 'POST',
                body: new FormData(contactForm)
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    statusContainer.innerHTML = `<p class="form-status success">Thank you! Your message has been sent.</p>`;
                    contactForm.reset();
                } else {
                    throw new Error(data.error || 'An unknown error occurred.');
                }
            })
            .catch(error => {
                statusContainer.innerHTML = `<p class="form-status error">Oops! Something went wrong. Please try again.</p>`;
                console.error('Error!', error.message);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
        });
    }
