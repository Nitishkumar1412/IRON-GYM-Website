function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    alert('Thank you ' + name + '! We will contact you soon.');
    this.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks').classList.remove('active');
    });
});
