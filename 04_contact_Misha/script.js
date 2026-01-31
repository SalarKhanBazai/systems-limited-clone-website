// ============================================
// SYSTEMS LIMITED CLONE - BASE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVBAR SCROLL EFFECT - Dynamic Color Change
    // ============================================
    const navbar = document.getElementById('mainNavbar');
    const logoWhite = document.getElementById('logoWhite');
    const logoDark = document.getElementById('logoDark');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial check
    handleNavbarScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ============================================
    // SEARCH OVERLAY FUNCTIONALITY
    // ============================================
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            searchOverlay.classList.add('active');
            setTimeout(() => {
                searchInput.focus();
            }, 400);
        });
        
        closeSearch.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        });
        
        // Close on click outside
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ============================================
    // DROPDOWN HOVER EFFECT (Desktop)
    // ============================================
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.add('show');
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.remove('show');
            }
        });
    });
    
    // ============================================
    // ACTIVE NAV LINK HIGHLIGHT
    // ============================================
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
    
});

// ============================================
// Misha - Contact Page Specific JavaScript
// ============================================

