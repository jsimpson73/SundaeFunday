// Sundae Funday - Admin Panel JavaScript

// Password for admin access (in production, this should be handled server-side)
const ADMIN_PASSWORD = 'sundaefunday2025';

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!isLoggedIn()) {
        showLoginPage();
    } else {
        showAdminDashboard();
    }
});

// Check login status
function isLoggedIn() {
    return sessionStorage.getItem('adminLoggedIn') === 'true';
}

// Show login page
function showLoginPage() {
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
    
    // Handle login form
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('password').value;
        
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            showAdminDashboard();
        } else {
            document.getElementById('login-error').textContent = 'Incorrect password. Please try again.';
        }
    });
}

// Show admin dashboard
function showAdminDashboard() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    
    // Initialize data manager
    window.dataManager = new DataManager();
    
    // Setup tabs
    setupTabs();
    
    // Setup logout
    document.getElementById('logout-btn').addEventListener('click', logout);
    
    // Setup back to site
    document.getElementById('back-to-site').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // Load all sections
    loadMenuAdmin();
    loadPromotionsAdmin();
    loadEventsAdmin();
    loadGalleryAdmin();
    
    // Setup form handlers
    setupMenuForm();
    setupPromotionForm();
    setupEventForm();
    setupGalleryForm();
}

// Setup tabs
function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// Logout function
function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    location.reload();
}

// Show alert message
function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} show`;
    alert.textContent = message;
    
    const container = document.querySelector('.admin-container');
    container.insertBefore(alert, container.firstChild);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// MENU MANAGEMENT
function loadMenuAdmin() {
    const menu = window.dataManager.getAllMenu();
    const container = document.getElementById('menu-items-list');
    container.innerHTML = '';
    
    // Category name mapping
    const categoryNames = {
        'icecream': 'Ice Cream Flavors',
        'icecreamPricing': 'Ice Cream Pricing',
        'snacks': 'Snacks/Antojitos',
        'desserts': 'Desserts',
        'drinks': 'Drinks',
        'dailySpecials': 'Daily Specials',
        'foodMenu': 'Food Menu'
    };
    
    // Combine all menu items
    const allItems = [];
    Object.keys(menu).forEach(category => {
        if (menu[category] && Array.isArray(menu[category])) {
            menu[category].forEach(item => {
                allItems.push({
                    ...item,
                    categoryName: categoryNames[category] || category
                });
            });
        }
    });
    
    if (allItems.length === 0) {
        container.innerHTML = '<div class="empty-state">No menu items yet. Add your first item!</div>';
    } else {
        allItems.forEach(item => {
            container.innerHTML += `
                <div class="item-card">
                    <div class="item-info">
                        <h3>${item.name}</h3>
                        <p><strong>Category:</strong> ${item.categoryName}</p>
                        <p>${item.description}</p>
                        <div class="item-price">${item.price}</div>
                    </div>
                    <div class="item-actions">
                        <button class="btn btn-danger btn-small" onclick="deleteMenuItem(${item.id}, '${item.category}')">Delete</button>
                    </div>
                </div>
            `;
        });
    }
}

function setupMenuForm() {
    const form = document.getElementById('menu-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const item = {
            name: document.getElementById('item-name').value,
            description: document.getElementById('item-description').value,
            price: document.getElementById('item-price').value,
            category: document.getElementById('item-category').value
        };
        
        window.dataManager.addMenuItem(item);
        showAlert('Menu item added successfully!');
        form.reset();
        loadMenuAdmin();
    });
}

function deleteMenuItem(id, category) {
    if (confirm('Are you sure you want to delete this menu item?')) {
        window.dataManager.deleteMenuItem(id, category);
        showAlert('Menu item deleted successfully!');
        loadMenuAdmin();
    }
}

// PROMOTIONS MANAGEMENT
function loadPromotionsAdmin() {
    const promotions = window.dataManager.getPromotions();
    const container = document.getElementById('promotions-list');
    container.innerHTML = '';
    
    if (promotions.length === 0) {
        container.innerHTML = '<div class="empty-state">No promotions yet. Add your first promotion!</div>';
    } else {
        promotions.forEach(promo => {
            container.innerHTML += `
                <div class="item-card">
                    <div class="item-info">
                        <h3>${promo.title}</h3>
                        <p>${promo.description}</p>
                        <p><strong>Status:</strong> ${promo.active ? 'Active' : 'Inactive'}</p>
                    </div>
                    <div class="item-actions">
                        <button class="btn btn-secondary btn-small" onclick="togglePromotion(${promo.id})">${promo.active ? 'Deactivate' : 'Activate'}</button>
                        <button class="btn btn-danger btn-small" onclick="deletePromotion(${promo.id})">Delete</button>
                    </div>
                </div>
            `;
        });
    }
}

function setupPromotionForm() {
    const form = document.getElementById('promotion-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const promotion = {
            title: document.getElementById('promo-title').value,
            description: document.getElementById('promo-description').value
        };
        
        window.dataManager.addPromotion(promotion);
        showAlert('Promotion added successfully!');
        form.reset();
        loadPromotionsAdmin();
    });
}

function togglePromotion(id) {
    const promotions = window.dataManager.getPromotions();
    const promo = promotions.find(p => p.id === id);
    if (promo) {
        promo.active = !promo.active;
        window.dataManager.updatePromotion(id, promo);
        showAlert('Promotion status updated!');
        loadPromotionsAdmin();
    }
}

function deletePromotion(id) {
    if (confirm('Are you sure you want to delete this promotion?')) {
        window.dataManager.deletePromotion(id);
        showAlert('Promotion deleted successfully!');
        loadPromotionsAdmin();
    }
}

// EVENTS MANAGEMENT
function loadEventsAdmin() {
    const events = window.dataManager.getEvents();
    const container = document.getElementById('events-list');
    container.innerHTML = '';
    
    if (events.length === 0) {
        container.innerHTML = '<div class="empty-state">No events yet. Add your first event!</div>';
    } else {
        events.forEach(event => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            container.innerHTML += `
                <div class="item-card">
                    <div class="item-info">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <p><strong>Date:</strong> ${formattedDate}</p>
                        <p><strong>Status:</strong> ${event.active ? 'Active' : 'Inactive'}</p>
                    </div>
                    <div class="item-actions">
                        <button class="btn btn-secondary btn-small" onclick="toggleEvent(${event.id})">${event.active ? 'Deactivate' : 'Activate'}</button>
                        <button class="btn btn-danger btn-small" onclick="deleteEvent(${event.id})">Delete</button>
                    </div>
                </div>
            `;
        });
    }
}

function setupEventForm() {
    const form = document.getElementById('event-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const event = {
            title: document.getElementById('event-title').value,
            description: document.getElementById('event-description').value,
            date: document.getElementById('event-date').value
        };
        
        window.dataManager.addEvent(event);
        showAlert('Event added successfully!');
        form.reset();
        loadEventsAdmin();
    });
}

function toggleEvent(id) {
    const events = window.dataManager.getEvents();
    const event = events.find(e => e.id === id);
    if (event) {
        event.active = !event.active;
        window.dataManager.updateEvent(id, event);
        showAlert('Event status updated!');
        loadEventsAdmin();
    }
}

function deleteEvent(id) {
    if (confirm('Are you sure you want to delete this event?')) {
        window.dataManager.deleteEvent(id);
        showAlert('Event deleted successfully!');
        loadEventsAdmin();
    }
}

// GALLERY MANAGEMENT
function loadGalleryAdmin() {
    const gallery = window.dataManager.getGallery();
    const container = document.getElementById('gallery-admin-list');
    container.innerHTML = '';
    
    if (gallery.length === 0) {
        container.innerHTML = '<div class="empty-state">No gallery images yet. Add your first image!</div>';
    } else {
        gallery.forEach(image => {
            container.innerHTML += `
                <div class="gallery-admin-item">
                    <img src="${image.url}" alt="${image.alt}">
                    <div class="delete-overlay">
                        <button class="btn btn-danger btn-small" onclick="deleteGalleryImage(${image.id})">Delete</button>
                    </div>
                </div>
            `;
        });
    }
}

function setupGalleryForm() {
    const form = document.getElementById('gallery-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const image = {
            url: document.getElementById('image-url').value,
            alt: document.getElementById('image-alt').value
        };
        
        window.dataManager.addGalleryImage(image);
        showAlert('Gallery image added successfully!');
        form.reset();
        loadGalleryAdmin();
    });
}

function deleteGalleryImage(id) {
    if (confirm('Are you sure you want to delete this image?')) {
        window.dataManager.deleteGalleryImage(id);
        showAlert('Gallery image deleted successfully!');
        loadGalleryAdmin();
    }
}