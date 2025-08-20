document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    hamburgerBtn.addEventListener('click', function() {
        mobileMenuOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    closeMenuBtn.addEventListener('click', function() {
        mobileMenuOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Mobile dropdown toggle for Sister Concern
const sisterConcernToggle = document.getElementById('sisterConcernToggle');
const mobileSisterConcernMenu = document.getElementById('mobileSisterConcernMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

sisterConcernToggle.addEventListener('click', function(e) {
    e.preventDefault();
    const icon = this.querySelector('i');

    // Toggle dropdown menu
    mobileSisterConcernMenu.classList.toggle('show');

    // Toggle overlay
    mobileOverlay.classList.toggle('show');

    // Change icon
    if (mobileSisterConcernMenu.classList.contains('show')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});

// Clicking overlay closes dropdown
mobileOverlay.addEventListener('click', function() {
    mobileSisterConcernMenu.classList.remove('show');
    this.classList.remove('show');
    sisterConcernToggle.querySelector('i').classList.remove('fa-chevron-up');
    sisterConcernToggle.querySelector('i').classList.add('fa-chevron-down');
});
});