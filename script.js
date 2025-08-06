// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    console.log('Menu button:', menuBtn);
    console.log('Navbar:', navbar);

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Menu button clicked');
            navbar.classList.toggle('active');
            console.log('Navbar active class:', navbar.classList.contains('active'));
        });

        // Close menu when clicking on a link (but not the Services dropdown toggle or submenu toggle)
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // If this is the Services dropdown toggle or submenu toggle, do not close the navbar
                if (link.classList.contains('dropbtn') || link.classList.contains('submenu-toggle')) return;
                navbar.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
                navbar.classList.remove('active');
            }
        });
    } else {
        console.error('Menu button or navbar not found');
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Dropdown menu accessibility and mobile support
// This ensures the dropdown works on click for mobile and keyboard users

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.navbar .dropdown');
    
    dropdowns.forEach(function(dropdown) {
        var dropbtn = dropdown.querySelector('.dropbtn');
        var dropdownContent = dropdown.querySelector('.dropdown-content');

        if (dropbtn && dropdownContent) {
            dropbtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('open');
            });

            // Close other dropdowns when opening a new one
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('open');
                }
            });
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('open');
            });
        }
    });
});

// (No dropdown JS for desktop, only CSS handles hover dropdown)

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.leadership-grid');
    const leftArrow = document.querySelector('.leadership-arrow.left');
    const rightArrow = document.querySelector('.leadership-arrow.right');
    const cards = grid ? Array.from(grid.querySelectorAll('.leader-card')) : [];
    let startIdx = 0;
    function updateVisibleCards() {
        if (window.innerWidth > 900) {
            cards.forEach((card, i) => {
                card.classList.toggle('visible', i >= startIdx && i < startIdx + 3);
            });
        } else {
            cards.forEach((card, i) => {
                card.classList.toggle('visible', i === startIdx);
            });
        }
    }
    function scrollLeft() {
        if (window.innerWidth > 900) {
            startIdx = Math.max(0, startIdx - 3);
            updateVisibleCards();
        } else {
            startIdx = Math.max(0, startIdx - 1);
            updateVisibleCards();
        }
    }
    function scrollRight() {
        if (window.innerWidth > 900) {
            startIdx = Math.min(cards.length - 3, startIdx + 3);
            updateVisibleCards();
        } else {
            startIdx = Math.min(cards.length - 1, startIdx + 1);
            updateVisibleCards();
        }
    }
    function getCardWidth() {
        const card = grid.querySelector('.leader-card');
        if (!card) return 0;
        const style = window.getComputedStyle(card);
        const margin = parseFloat(style.marginRight) + parseFloat(style.marginLeft);
        return card.offsetWidth + margin;
    }
    function getScrollAmount() {
        if (window.innerWidth > 900) {
            return grid.offsetWidth;
        } else {
            return getCardWidth();
        }
    }
    if (grid && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', scrollLeft);
        rightArrow.addEventListener('click', scrollRight);
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900) {
                startIdx = 0;
            }
            updateVisibleCards();
        });
        updateVisibleCards();
    }

    // Nested submenu toggle for mobile
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                const parent = toggle.closest('.dropdown-submenu');
                parent.classList.toggle('open');
            }
        });
    });
});

// FAQ Accordion Functionality

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((btn) => {
        btn.addEventListener('click', function() {
            // Close all answers
            faqQuestions.forEach((otherBtn) => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove('active');
                    otherBtn.querySelector('.faq-toggle').textContent = '+';
                    if (otherBtn.parentElement.querySelector('.faq-answer')) {
                        otherBtn.parentElement.querySelector('.faq-answer').style.display = 'none';
                    }
                }
            });
            // Toggle this answer
            const answer = btn.parentElement.querySelector('.faq-answer');
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                btn.querySelector('.faq-toggle').textContent = '+';
                answer.style.display = 'none';
            } else {
                btn.classList.add('active');
                btn.querySelector('.faq-toggle').textContent = '–';
                answer.style.display = 'block';
            }
        });
    });
});

document.querySelectorAll('.asset-class-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Prevent toggling when clicking inside the info area
    if (e.target.classList.contains('asset-class-info')) return;
    card.classList.toggle('open');
  });
});

// Footer Services Dropdown (Click to Open)
document.addEventListener('DOMContentLoaded', function() {
    var dropbtn = document.querySelector('.footer-dropbtn');
    var dropdown = document.querySelector('.footer-dropdown');
    if (dropbtn && dropdown) {
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        });
        // Close dropdown if clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    }
});
