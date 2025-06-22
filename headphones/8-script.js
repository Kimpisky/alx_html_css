
        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerMenu = document.getElementById('hamburger-menu');
            const navLinksWrapper = document.getElementById('nav-links-wrapper');

            hamburgerMenu.addEventListener('click', function() {
                navLinksWrapper.classList.toggle('active');
                hamburgerMenu.classList.toggle('open');
            });

            // Close menu when a link is clicked (for smoother mobile navigation)
            const navLinks = navLinksWrapper.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navLinksWrapper.classList.remove('active');
                    hamburgerMenu.classList.remove('open');
                });
            });
        });