// Sundae Funday - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const dataManager = new DataManager();
    
    // Load all content
    loadMenu();
    loadPromotions();
    loadEvents();
    loadGallery();
    
    // Setup mobile navigation toggle
    setupMobileNavigation();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                closeMobileMenu();
            }
        });
    });
});

// Setup mobile navigation toggle
function setupMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');
    
    if (navToggle && navMobile) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMobile.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMobile.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

// Close mobile menu
function closeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');
    
    if (navToggle && navMobile) {
        navToggle.classList.remove('active');
        navMobile.classList.remove('active');
    }
}

// Load menu items
function loadMenu() {
    const dataManager = new DataManager();
    const menu = dataManager.getAllMenu();
    
    // Define all menu categories
    const categories = [
        'icecream',
        'icecreamPricing',
        'snacks',
        'desserts',
        'drinks',
        'dailySpecials',
        'foodMenu'
    ];
    
    // Load each category
    categories.forEach(category => {
        const container = document.getElementById(`${category}-items`);
        if (container) {
            container.innerHTML = '';
            const items = menu[category] || [];
            
            if (items.length === 0) {
                container.innerHTML = '<div class="empty-state">No items available at the moment.</div>';
            } else {
                items.forEach(item => {
                    container.innerHTML += createMenuItemHTML(item);
                });
            }
        }
    });
}

// Create menu item HTML
function createMenuItemHTML(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div class="menu-item-price">${item.price}</div>
        </div>
    `;
}

// Load promotions
function loadPromotions() {
    const dataManager = new DataManager();
    const promotions = dataManager.getPromotions().filter(p => p.active);
    const container = document.getElementById('promotions-container');
    
    if (container) {
        container.innerHTML = '';
        
        if (promotions.length === 0) {
            container.innerHTML = '<div class="empty-state">No active promotions at the moment. Check back soon!</div>';
        } else {
            promotions.forEach(promo => {
                container.innerHTML += `
                    <div class="promotion-card">
                        <h3>${promo.title}</h3>
                        <p>${promo.description}</p>
                    </div>
                `;
            });
        }
    }
}

// Load events
function loadEvents() {
    const dataManager = new DataManager();
    const events = dataManager.getEvents().filter(e => e.active);
    const container = document.getElementById('events-container');
    
    if (container) {
        container.innerHTML = '';
        
        if (events.length === 0) {
            container.innerHTML = '<div class="empty-state">No upcoming events at the moment. Check back soon!</div>';
        } else {
            events.forEach(event => {
                const eventDate = new Date(event.date);
                const formattedDate = eventDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                container.innerHTML += `
                    <div class="event-card">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <span class="event-date">${formattedDate}</span>
                    </div>
                `;
            });
        }
    }
}

// Load gallery
function loadGallery() {
    const dataManager = new DataManager();
    const gallery = dataManager.getGallery();
    const container = document.getElementById('gallery-container');
    
    if (container) {
        container.innerHTML = '';
        
        if (gallery.length === 0) {
            container.innerHTML = '<div class="empty-state">Gallery coming soon!</div>';
        } else {
            gallery.forEach(image => {
                container.innerHTML += `
                    <div class="gallery-item">
                        <img src="${image.url}" alt="${image.alt}" loading="lazy">
                    </div>
                `;
            });
        }
    }
}