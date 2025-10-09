//Navbar mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            const isExpanded = navMenu.classList.contains('show-menu');
            navToggle.setAttribute('aria-expanded', isExpanded);
            

            const icon = navToggle.querySelector('i');
            if (isExpanded) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
        

        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
                navToggle.setAttribute('aria-expanded', 'false');
                const icon = navToggle.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            });
        });
    } 
});