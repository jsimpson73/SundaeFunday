// Sundae Funday - Data Management

class DataManager {
    constructor() {
        this.storageKey = 'sundaeFundayData';
        this.initializeData();
    }

    // Initialize default data if none exists
    initializeData() {
        if (!localStorage.getItem(this.storageKey)) {
            const defaultData = {
                menu: {
                    icecream: [
                        {
                            id: 1,
                            name: 'Old Fashioned Vanilla',
                            description: 'An award-winning and all natural classic vanilla ice cream made with Wisconsin cream, cane sugar and pure vanilla.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 2,
                            name: 'This $&@! Just got Serious',
                            description: 'Award-winning, smooth salted caramel ice cream brimming with rich sea salt fudge and salted cashews.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 3,
                            name: 'Strawberry',
                            description: 'Award-winning and deliciously fresh strawberry ice cream loaded to the brim with real, whole strawberries.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 4,
                            name: 'Super Human',
                            description: 'Meet your new kryptonite… Cherry, Blue Moon and Vanilla ice creams combine forces to bring you one super scoop!',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 5,
                            name: 'Chocolate',
                            description: 'All-natural, classic chocolate ice cream made with real, rich cocoas.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 6,
                            name: 'Zanzibar Chocolate',
                            description: 'All-natural and award-winning chocolate ice cream made with three kinds of cocoa for a rich, fudge brownie taste.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 7,
                            name: 'Blue Moon',
                            description: 'Just like the milk in the bottom of a Fruit Loops bowl, this tasty ice cream has a sweet Fruit Loops taste and a wacky blue color.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 8,
                            name: 'Rhubarb Crumble',
                            description: 'Sweet cream cheese frosting ice cream spun with a bright rhubarb jam and a buttery shortbread crumble.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 9,
                            name: 'Mint Chip',
                            description: 'Classic, fresh mint ice cream loaded with melt-in-your-mouth, rich chocolate flakes.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 10,
                            name: 'Exhausted Parent',
                            description: 'Bourbon-spiked espresso ice cream swirled with bittersweet chocolate chunks.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 11,
                            name: 'Peppermint Stick',
                            description: 'Crisp, peppermint ice cream made with boat-loads of peppermint candies and bursting with candy cane flavor in every bite.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 12,
                            name: 'Coconut Almond Bliss',
                            description: 'Tropical coconut-flavored ice cream with tons of melt-in-your-mouth chocolate flakes and crispy almond pieces.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 13,
                            name: 'Carrot Mango Italian Ice',
                            description: 'Non-dairy, non-fat and bursting with sweet, tangy flavor with real carrot (yes, we said carrot!) and fruit juices.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 14,
                            name: 'Butter Pecan',
                            description: 'Buttery pecan ice cream with boat-loads of crispy, lightly roasted and salted pecans.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 15,
                            name: 'PB Hearts Chocolate',
                            description: 'Creamy peanut butter ice cream swirled with a smooth chocolate ripple and kissed with peanut butter cups.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 16,
                            name: 'Caramel Apple Pie',
                            description: 'Spicy cinnamon ice cream mixed with chunks of real apples, crispy cinnamon shortbread pieces and a thick caramel ripple.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 17,
                            name: 'Munchie Madness',
                            description: 'Sweet cake batter ice cream, swirled with a salted caramel ripple and brimming with Oreos, M&M pieces and peanut butter cups.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 18,
                            name: 'Cotton Candy Twist',
                            description: 'Blue and pink cotton candy ice creams spun together for that whimsical carnival sensation!',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 19,
                            name: 'Ultimate Oreo',
                            description: 'Scrumptious Oreo crumb ice cream packed with boat-loads of whole Oreo cookies.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 20,
                            name: 'Apple Cider Donut',
                            description: 'Apple cider ice cream, apple cider donut pieces with a cinnamon sugar swirl',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 21,
                            name: 'Lemon Italian Ice',
                            description: 'Non-dairy, non-fat tart lemon italian ice, for any hot mid-summer day.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 22,
                            name: 'Scotcheroo',
                            description: 'Ope, a twist on your favorite Midwest dessert bar! Butterscotch peanut butter ice cream folded with chocolate-covered rice crisps.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 23,
                            name: 'Turtle',
                            description: 'Classic vanilla ice cream with swirls of rich chocolate fudge and gooey caramel, and bunches of lightly roasted and salted pecans.',
                            price: '',
                            category: 'icecream'
                        },
                        {
                            id: 24,
                            name: "S'more To Love",
                            description: 'Crushed graham cracker ice cream with melty layers of chocolate and marshmallow.',
                            price: '',
                            category: 'icecream'
                        }
                    ],
                    icecreamPricing: [
                        {
                            id: 101,
                            name: '1 Scoop',
                            description: 'Cone or Bowl',
                            price: '$4.95',
                            category: 'icecreamPricing'
                        },
                        {
                            id: 102,
                            name: '2 Scoops',
                            description: 'Cone or Bowl',
                            price: '$7.95',
                            category: 'icecreamPricing'
                        },
                        {
                            id: 103,
                            name: 'Add Topping',
                            description: 'Extra topping',
                            price: '$0.50',
                            category: 'icecreamPricing'
                        },
                        {
                            id: 104,
                            name: 'Waffle Cone',
                            description: 'Upgrade to waffle cone',
                            price: '$0.50',
                            category: 'icecreamPricing'
                        },
                        {
                            id: 105,
                            name: 'Add Extra Scoop',
                            description: 'Additional scoop',
                            price: '$2.50',
                            category: 'icecreamPricing'
                        }
                    ],
                    snacks: [
                        {
                            id: 201,
                            name: 'Elote',
                            description: 'Mexican street corn',
                            price: '$6.00',
                            category: 'snacks'
                        },
                        {
                            id: 202,
                            name: "Flamin' Elote",
                            description: 'Spicy Mexican street corn',
                            price: '$8.95',
                            category: 'snacks'
                        },
                        {
                            id: 203,
                            name: 'Beef Nachos',
                            description: 'Loaded beef nachos',
                            price: '$10.95',
                            category: 'snacks'
                        },
                        {
                            id: 204,
                            name: 'Dorilocos',
                            description: 'Mexican Doritos snack',
                            price: '$10.95',
                            category: 'snacks'
                        },
                        {
                            id: 205,
                            name: 'Chicharon Preparado',
                            description: 'Prepared pork rinds',
                            price: '$10.95',
                            category: 'snacks'
                        },
                        {
                            id: 206,
                            name: 'Walking Taco (Small)',
                            description: 'Taco in a bag',
                            price: '$4.00',
                            category: 'snacks'
                        },
                        {
                            id: 207,
                            name: 'Walking Taco (Large)',
                            description: 'Taco in a bag',
                            price: '$8.00',
                            category: 'snacks'
                        },
                        {
                            id: 208,
                            name: 'Guacamole & Chips',
                            description: 'Fresh guacamole with chips',
                            price: '$7.95',
                            category: 'snacks'
                        },
                        {
                            id: 209,
                            name: 'Fruit Cups (Small)',
                            description: 'Fresh fruit cup',
                            price: '$5.95',
                            category: 'snacks'
                        },
                        {
                            id: 210,
                            name: 'Fruit Cups (Large)',
                            description: 'Fresh fruit cup',
                            price: '$8.50',
                            category: 'snacks'
                        }
                    ],
                    desserts: [
                        {
                            id: 301,
                            name: 'Fresas con Crema (Small)',
                            description: 'Strawberries with cream',
                            price: '$6.50',
                            category: 'desserts'
                        },
                        {
                            id: 302,
                            name: 'Fresas con Crema (Medium)',
                            description: 'Strawberries with cream',
                            price: '$9.50',
                            category: 'desserts'
                        },
                        {
                            id: 303,
                            name: 'Fresas con Crema (Large)',
                            description: 'Strawberries with cream',
                            price: '$12.50',
                            category: 'desserts'
                        },
                        {
                            id: 304,
                            name: 'Churro Bites / Warm Brownie Sundae',
                            description: 'Churro bites or warm brownie sundae',
                            price: '$7.50',
                            category: 'desserts'
                        },
                        {
                            id: 305,
                            name: 'Mini Pancakes',
                            description: 'Mini pancakes',
                            price: '$6.50',
                            category: 'desserts'
                        },
                        {
                            id: 306,
                            name: 'Tres Leches Cake Slice (Small)',
                            description: 'Three milk cake',
                            price: '$7.50',
                            category: 'desserts'
                        },
                        {
                            id: 307,
                            name: 'Tres Leches Cake Slice (Large)',
                            description: 'Three milk cake',
                            price: '$11.50',
                            category: 'desserts'
                        },
                        {
                            id: 308,
                            name: 'Carrot Cake Slice',
                            description: 'Carrot cake slice',
                            price: '$6.00',
                            category: 'desserts'
                        }
                    ],
                    drinks: [
                        {
                            id: 401,
                            name: 'Root Beer Float',
                            description: 'Classic root beer float',
                            price: '$6.50',
                            category: 'drinks'
                        },
                        {
                            id: 402,
                            name: 'Jarritos',
                            description: 'Mexican soda',
                            price: '$3.00',
                            category: 'drinks'
                        },
                        {
                            id: 403,
                            name: 'Fiji Water',
                            description: 'Premium bottled water',
                            price: '$3.00',
                            category: 'drinks'
                        },
                        {
                            id: 404,
                            name: 'Gatorade',
                            description: 'Sports drink',
                            price: '$3.00',
                            category: 'drinks'
                        },
                        {
                            id: 405,
                            name: 'Root Beer',
                            description: 'Root beer',
                            price: '$3.00',
                            category: 'drinks'
                        },
                        {
                            id: 406,
                            name: 'Monster',
                            description: 'Energy drink',
                            price: '$3.00',
                            category: 'drinks'
                        },
                        {
                            id: 407,
                            name: 'Canned Soda',
                            description: 'Assorted sodas',
                            price: '$2.00',
                            category: 'drinks'
                        },
                        {
                            id: 408,
                            name: 'Bottled Water',
                            description: 'Bottled water',
                            price: '$1.50',
                            category: 'drinks'
                        },
                        {
                            id: 409,
                            name: 'Monster Preparado',
                            description: 'Prepared Monster drink',
                            price: '$7.50',
                            category: 'drinks'
                        }
                    ],
                    dailySpecials: [
                        {
                            id: 501,
                            name: 'The "OG" Acai Bowl (Small)',
                            description: 'Acai base, granola, banana, strawberries, blueberries, Nutella',
                            price: '$9.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 502,
                            name: 'The "OG" Acai Bowl (Large)',
                            description: 'Acai base, granola, banana, strawberries, blueberries, Nutella',
                            price: '$12.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 503,
                            name: 'Tropical Bowl (Small)',
                            description: 'Acai base, granola, mango, pineapple, kiwi, coconut flakes, honey',
                            price: '$9.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 504,
                            name: 'Tropical Bowl (Large)',
                            description: 'Acai base, granola, mango, pineapple, kiwi, coconut flakes, honey',
                            price: '$12.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 505,
                            name: 'Peanut Butter Chocolate Chip (Small)',
                            description: 'Acai base, granola, banana, strawberries, peanut butter, chocolate chips',
                            price: '$9.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 506,
                            name: 'Peanut Butter Chocolate Chip (Large)',
                            description: 'Acai base, granola, banana, strawberries, peanut butter, chocolate chips',
                            price: '$12.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 507,
                            name: 'Dubai Chocolate Strawberries (Small)',
                            description: 'Chocolate covered strawberries',
                            price: '$8.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 508,
                            name: 'Dubai Chocolate Strawberries (Medium)',
                            description: 'Chocolate covered strawberries',
                            price: '$11.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 509,
                            name: 'Dubai Chocolate Strawberries (Large)',
                            description: 'Chocolate covered strawberries',
                            price: '$13.95',
                            category: 'dailySpecials'
                        },
                        {
                            id: 510,
                            name: 'Dubai Mini Pancakes (Small)',
                            description: 'Mini pancakes with Dubai chocolate',
                            price: '$10.00',
                            category: 'dailySpecials'
                        },
                        {
                            id: 511,
                            name: 'Dubai Mini Pancakes (Large)',
                            description: 'Mini pancakes with Dubai chocolate',
                            price: '$13.99',
                            category: 'dailySpecials'
                        }
                    ],
                    foodMenu: [
                        {
                            id: 601,
                            name: 'Tacos',
                            description: 'Choice of: Steak, Ground Beef, Pork, Al Pastor, or Chicken',
                            price: '$3.75',
                            category: 'foodMenu'
                        },
                        {
                            id: 602,
                            name: 'Burritos',
                            description: 'Choice of: Steak, Ground Beef, Pork, Al Pastor, or Chicken',
                            price: '$12.50',
                            category: 'foodMenu'
                        },
                        {
                            id: 603,
                            name: 'Tortas',
                            description: 'Choice of: Steak, Ground Beef, Pork, Al Pastor, or Chicken',
                            price: '$10.95',
                            category: 'foodMenu'
                        },
                        {
                            id: 604,
                            name: 'Tostadas',
                            description: 'Choice of: Steak, Ground Beef, Pork, Al Pastor, or Chicken',
                            price: '$5.00',
                            category: 'foodMenu'
                        },
                        {
                            id: 605,
                            name: 'Taco Dinner',
                            description: '2 tacos, rice, and beans. Choice of: Steak, Ground Beef, Pork, Al Pastor, or Chicken',
                            price: '$11.50',
                            category: 'foodMenu'
                        },
                        {
                            id: 606,
                            name: 'Beef Nachos',
                            description: 'Loaded beef nachos',
                            price: '$10.99',
                            category: 'foodMenu'
                        },
                        {
                            id: 607,
                            name: 'Enchilada Dinner',
                            description: '2 beef enchiladas, rice, and beans',
                            price: '$11.99',
                            category: 'foodMenu'
                        }
                    ]
                },
                promotions: [
                    {
                        id: 1,
                        title: 'Happy Hour Special',
                        description: 'Get 20% off all ice cream flavors between 2-4 PM every weekday!',
                        active: true
                    },
                    {
                        id: 2,
                        title: 'Family Bundle',
                        description: '4 scoops of ice cream + 6 churros + 2 horchatas for just $25',
                        active: true
                    }
                ],
                events: [
                    {
                        id: 1,
                        title: 'Ice Cream Social',
                        description: 'Join us for our monthly ice cream social with live music and special flavors!',
                        date: '2025-11-15',
                        active: true
                    },
                    {
                        id: 2,
                        title: 'Churro Making Workshop',
                        description: 'Learn to make authentic churros from our master chef. Limited spots available!',
                        date: '2025-11-22',
                        active: true
                    }
                ],
                gallery: [
                    {
                        id: 1,
                        url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500',
                        alt: 'Delicious ice cream cone'
                    },
                    {
                        id: 2,
                        url: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500',
                        alt: 'Fresh churros'
                    },
                    {
                        id: 3,
                        url: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500',
                        alt: 'Colorful ice cream scoops'
                    },
                    {
                        id: 4,
                        url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500',
                        alt: 'Ice cream sundae'
                    }
                ]
            };
            this.saveData(defaultData);
        }
    }

    // Get all data
    getData() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }

    // Save all data
    saveData(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    // Get menu items by category
    getMenuByCategory(category) {
        const data = this.getData();
        return data.menu[category] || [];
    }

    // Get all menu items
    getAllMenu() {
        const data = this.getData();
        return data.menu;
    }

    // Add menu item
    addMenuItem(item) {
        const data = this.getData();
        const category = item.category;
        
        if (!data.menu[category]) {
            data.menu[category] = [];
        }
        
        // Generate new ID
        const allItems = Object.values(data.menu).flat();
        const maxId = allItems.length > 0 ? Math.max(...allItems.map(i => i.id)) : 0;
        item.id = maxId + 1;
        
        data.menu[category].push(item);
        this.saveData(data);
        return item;
    }

    // Update menu item
    updateMenuItem(id, updatedItem) {
        const data = this.getData();
        const category = updatedItem.category;
        
        const index = data.menu[category].findIndex(item => item.id === id);
        if (index !== -1) {
            data.menu[category][index] = { ...updatedItem, id };
            this.saveData(data);
            return true;
        }
        return false;
    }

    // Delete menu item
    deleteMenuItem(id, category) {
        const data = this.getData();
        data.menu[category] = data.menu[category].filter(item => item.id !== id);
        this.saveData(data);
    }

    // Get promotions
    getPromotions() {
        const data = this.getData();
        return data.promotions || [];
    }

    // Add promotion
    addPromotion(promotion) {
        const data = this.getData();
        const maxId = data.promotions.length > 0 ? Math.max(...data.promotions.map(p => p.id)) : 0;
        promotion.id = maxId + 1;
        promotion.active = true;
        data.promotions.push(promotion);
        this.saveData(data);
        return promotion;
    }

    // Update promotion
    updatePromotion(id, updatedPromotion) {
        const data = this.getData();
        const index = data.promotions.findIndex(p => p.id === id);
        if (index !== -1) {
            data.promotions[index] = { ...updatedPromotion, id };
            this.saveData(data);
            return true;
        }
        return false;
    }

    // Delete promotion
    deletePromotion(id) {
        const data = this.getData();
        data.promotions = data.promotions.filter(p => p.id !== id);
        this.saveData(data);
    }

    // Get events
    getEvents() {
        const data = this.getData();
        return data.events || [];
    }

    // Add event
    addEvent(event) {
        const data = this.getData();
        const maxId = data.events.length > 0 ? Math.max(...data.events.map(e => e.id)) : 0;
        event.id = maxId + 1;
        event.active = true;
        data.events.push(event);
        this.saveData(data);
        return event;
    }

    // Update event
    updateEvent(id, updatedEvent) {
        const data = this.getData();
        const index = data.events.findIndex(e => e.id === id);
        if (index !== -1) {
            data.events[index] = { ...updatedEvent, id };
            this.saveData(data);
            return true;
        }
        return false;
    }

    // Delete event
    deleteEvent(id) {
        const data = this.getData();
        data.events = data.events.filter(e => e.id !== id);
        this.saveData(data);
    }

    // Get gallery images
    getGallery() {
        const data = this.getData();
        return data.gallery || [];
    }

    // Add gallery image
    addGalleryImage(image) {
        const data = this.getData();
        const maxId = data.gallery.length > 0 ? Math.max(...data.gallery.map(g => g.id)) : 0;
        image.id = maxId + 1;
        data.gallery.push(image);
        this.saveData(data);
        return image;
    }

    // Delete gallery image
    deleteGalleryImage(id) {
        const data = this.getData();
        data.gallery = data.gallery.filter(g => g.id !== id);
        this.saveData(data);
    }
}

