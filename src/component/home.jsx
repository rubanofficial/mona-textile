import React, { useState } from 'react';

const HomePage = () => {
    // State for mobile menu toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Featured categories data
    const categories = [
        { id: 1, name: 'Sarees', image: 'download.jpg' },
        { id: 2, name: 'Salwar', image: 'download (1).jpg' },
        { id: 3, name: 'Men\'s', image: 'download (2).jpg' },
        { id: 4, name: 'Kids', image: 'download (3).jpg' },
        { id: 5, name: 'Fabrics', image: 'download (4).jpg' },
    ];

    // New arrivals data
    const newArrivals = [
        { id: 1, name: 'Silk Saree', price: '₹2,499', image: 'ss.jpg' },
        { id: 2, name: 'Designer Suit', price: '₹3,299', image: 'DS.jpg' },
        { id: 3, name: 'Men\'s Kurta', price: '₹1,899', image: 'MK.jpg' },
        { id: 4, name: 'Kids Dress', price: '₹1,299', image: 'KI.jpg' },
        { id: 5, name: 'Cotton Saree', price: '₹1,799', image: 'CS.jpg' },
        { id: 6, name: 'Party Wear', price: '₹2,899', image: 'PW.jpg' },
    ];

    // Offers data
    const offers = [
        { id: 1, title: 'Weekend Special', desc: 'Get 40% OFF on all items', code: 'WEEKEND40' },
        { id: 2, title: 'First Purchase', desc: 'Use code WELCOME for 25% OFF', code: 'WELCOME' },
        { id: 3, title: 'Free Shipping', desc: 'On orders above ₹1999', code: 'FREESHIP' },
    ];

    // Testimonials data
    const testimonials = [
        { id: 1, name: 'Priya Sharma', text: 'The quality of fabrics is exceptional. Love their collections!', image: 'https://placehold.co/80x80/f8f3f4/7a1c55?text=P' },
        { id: 2, name: 'Rahul Kapoor', text: 'Great customer service and fast delivery. Highly recommended!', image: 'https://placehold.co/80x80/f8f3f4/7a1c55?text=R' },
        { id: 3, name: 'Sunita Patel', text: 'Beautiful designs and perfect finishing. Will shop again!', image: 'https://placehold.co/80x80/f8f3f4/7a1c55?text=S' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-purple-900">Mona Textiles</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'Collections', 'Offers', 'About Us', 'Contact'].map((item) => (
                            <a key={item} href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
                                {item}
                            </a>
                        ))}
                        <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
                            Wishlist <span className="bg-purple-100 text-purple-700 rounded-full px-2 py-1 text-xs ml-1">0</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-3 px-2">
                            {['Home', 'Collections', 'Offers', 'About Us', 'Contact', 'Wishlist'].map((item) => (
                                <a key={item} href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors py-1">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Banner */}
            <section className="relative bg-gradient-to-r from-purple-50 to-pink-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Festive Saree Collection</h1>
                        <p className="text-xl md:text-2xl text-purple-700 mb-6">Flat 30% OFF</p>
                        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                            Shop Now
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="ChatGPT Image Aug 25, 2025, 03_58_53 PM.png"
                            alt="Festive Saree Collection"
                            className="rounded-lg shadow-xl w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {categories.map((category) => (
                            <div key={category.id} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative overflow-hidden">
                                    <img src={category.image} alt={category.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{category.name}</h3>
                                    <button className="text-purple-700 hover:text-purple-900 font-medium text-sm transition-colors">
                                        Explore &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">New Arrivals</h2>
                    <div className="overflow-x-auto pb-6">
                        <div className="flex space-x-6">
                            {newArrivals.map((item) => (
                                <div key={item.id} className="min-w-[250px] sm:min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                                    <div className="relative overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                                        <p className="text-purple-700 font-bold mb-3">{item.price}</p>
                                        <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 rounded-lg transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Offers */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Top Offers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {offers.map((offer) => (
                            <div key={offer.id} className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white bg-opacity-20"></div>
                                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-white bg-opacity-10"></div>
                                <h3 className="text-xl font-bold mb-2 relative z-10">{offer.title}</h3>
                                <p className="mb-4 relative z-10">{offer.desc}</p>
                                <div className="bg-white bg-opacity-20 p-3 rounded-lg relative z-10">
                                    <span className="font-mono">{offer.code}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-purple-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Mona Textiles</h3>
                            <p className="text-purple-200">Premium quality textiles and clothing for the entire family.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {['About Us', 'Careers', 'Support', 'Shipping Policy', 'Returns'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-purple-200 hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                            <ul className="space-y-2">
                                {['Contact Us', 'FAQ', 'Store Locator', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-purple-200 hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                            <div className="flex space-x-4 mb-4">
                                {['facebook', 'instagram', 'twitter', 'pinterest'].map((platform) => (
                                    <a key={platform} href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                                        <span className="sr-only">{platform}</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                            <p className="text-purple-200">Subscribe to our newsletter</p>
                            <div className="mt-2 flex">
                                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 w-full" />
                                <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-lg transition-colors">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300">
                        <p>© 2023 Mona Textiles. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;