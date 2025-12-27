export const LANGUAGES = [
    { code: 'EN', name: 'English' },
    { code: 'AM', name: 'አማርኛ' },
    { code: 'OM', name: 'Afaan Oromo' },
    { code: 'TI', name: 'ትግርኛ' },
];

export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit', href: '#contact' },
];

export const AMENITIES = [
    { icon: 'Wheelchair', title: 'Accessibility', desc: 'Wheelchair-accessible toilet' },
    { icon: 'Coffee', title: 'Premium Drinks', desc: 'Specialty coffee & great tea selection' },
    { icon: 'Users', title: 'Atmosphere', desc: 'Casual, Cosy, trendy - good for solo & groups' },
    { icon: 'Smile', title: 'Kid Friendly', desc: 'Perfect for tourists and families' },
    { icon: 'Car', title: 'Parking', desc: 'Free of charge street parking' },
    { icon: 'ShoppingBag', title: 'Service', desc: 'Dine-in, Takeaway, Table service' },
];

export const MENU_DATA = {
    coffee: [
        { name: 'Signature Espresso', price: '$3.50', desc: 'Rich and bold specialty roast' },
        { name: 'Creamy Latte', price: '$4.50', desc: 'Smooth milk with a velvet finish' },
        { name: 'Pour Over', price: '$5.00', desc: 'Hand-crafted single-origin brew' },
    ],
    tea: [
        { name: 'Traditional Spiced Tea', price: '$3.00', desc: 'Aromatic and warming' },
        { name: 'Green Jasmine', price: '$3.50', desc: 'Floral and refreshing' },
    ],
    bites: [
        { name: 'Fresh Croissant', price: '$4.00', desc: 'Buttery and flaky' },
        { name: 'Avocado Toast', price: '$8.50', desc: 'Sourdough with chili flakes' },
    ],
};

export const CONTACT_INFO = {
    whatsapp: '251000000000', // Placeholder
    phone: '+251000000000',
    googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.5!2d38.75!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24c49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set',
};

export const GALLERY_IMAGES = [
    { url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop', title: 'The Roast' },
    { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop', title: 'Morning Light' },
    { url: '/src/assets/cheesecake.jpg', title: 'Artisan Desserts' },
    { url: '/src/assets/juice.jpg', title: 'Fresh Beverages' },
];
