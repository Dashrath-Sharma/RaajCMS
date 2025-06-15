import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '@assets/logo.png';
import { Link } from 'react-router-dom';

const commonDropdown = [
  {
    category: 'Bookkeeping',
    items: [
      { name: 'Accounting', description: 'Your Accounting Experts' },
      { name: 'Tax Preparation', description: 'Stress-Free Tax Filing' },
      { name: 'Accounts Payable', description: 'Efficient Payment Management' },
    ],
  },
  {
    category: 'Business Services',
    items: [
      { name: 'Administrative Tasks', description: 'Reliable Administrative Supports' },
      { name: 'Business Formation', description: 'Start Your Business Right' },
      { name: 'Payroll', description: 'Accurate Payroll Made Easy' },
    ],
  },
];

// const resourcesDropdown = [
//   { name: 'Tax Resources', description: 'Helpful tax information' },
//   { name: 'Business Guides', description: 'Expert business advice' },
//   { name: 'FAQs', description: 'Frequently asked questions' },
// ];

const recentNews = [
  {
    title: 'Accounting & Data in Modern Family Office',
    type: 'DEADLINE',
    date: 'June 16, 2025',
    bgColor: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Calculate estimated refunds & taxes.',
    type: 'FREE Download',
    subtitle: '2024-2025 Tax Estimator',
    bgColor: 'from-blue-500 to-cyan-500',
  },
];

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = dropdown => {
    setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
  };

  return (
    <>
      {/* Add custom styles for smooth transitions */}
      <style jsx>{`
        .mobile-menu-enter {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-10px);
        }

        .mobile-menu-open {
          max-height: 100vh;
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-content {
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-enter {
          max-height: 0;
          opacity: 0;
          transform: translateY(-5px);
        }

        .dropdown-open {
          max-height: 1000px;
          opacity: 1;
          transform: translateY(0);
        }

        .chevron-transition {
          transition: transform 0.2s ease-in-out;
        }
      `}</style>

      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center py-6 lg:h-20">
            {/* Logo */}
            <Link to="/">
              <img className="max-h-[40px] md:max-h-[60px] w-auto" src={logo} alt="logo" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            >
              <div className="relative w-[35px] h-[35px]">
                <Menu
                  className={`w-[35px] h-[35px] absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-0 rotate-90 scale-75'
                      : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`w-[35px] h-[35px] absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-100 rotate-0 scale-100'
                      : 'opacity-0 -rotate-90 scale-75'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`bg-white border-t border-gray-200 px-4 absolute w-full ${
            isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-enter'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {/* SERVICES */}

            <div>
              <button
                onClick={() => toggleDropdown('services')}
                className={`flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2 px-2 font-medium transition-colors duration-200 border-l-3 ${activeDropdown === 'services' ? 'border-main' : 'border-transparent'}`}
              >
                <a href="/services" className="text-3xl">
                  SERVICES
                </a>
                <ChevronDown
                  className={`w-[20px] h-[20px] chevron-transition ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`dropdown-content ${
                  activeDropdown === 'services' ? 'dropdown-open' : 'dropdown-enter'
                }`}
              >
                <div className="mt-2 ml-8 space-y-3">
                  {/* Recent News */}
                  <div>
                    <h3 className="font-medium text-gray-900 text-3xl mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Recent News
                    </h3>
                    <div className="ml-2 space-y-2">
                      {recentNews.map((news, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                          <div className="flex items-start space-x-2">
                            <div
                              className={`w-8 h-8 bg-gradient-to-br ${news.bgColor} rounded-md flex-shrink-0 flex items-center justify-center`}
                            >
                              <span className="text-white text-xs">
                                {news.type === 'DEADLINE' ? '📅' : '📊'}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-2xl font-semibold text-gray-600 uppercase mb-1">
                                {news.type}
                              </div>
                              {news.subtitle && (
                                <div className="text-xl font-medium text-gray-900 mb-1">
                                  {news.subtitle}
                                </div>
                              )}
                              <div className="text-xl text-gray-700">{news.title}</div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Other services */}
                  <div className="border-t border-gray-100 pt-2">
                    <div className="mt-2 ml-8 space-y-3">
                      {commonDropdown.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="font-medium text-gray-900 text-3xl">
                            {category.category}
                          </h3>
                          <div className="mt-1 ml-2 space-y-1">
                            {category.items.map((item, itemIdx) => (
                              <a key={itemIdx} href="#" className="block py-1 px-2">
                                <div className="text-2xl text-gray-700">{item.name}</div>
                                <div className="text-xl text-gray-500">{item.description}</div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Links */}
            <a
              href="/career"
              className="block text-gray-700 hover:text-blue-600 py-2 px-2 text-3xl font-medium transition-colors duration-200  border-l-3 border-transparent"
            >
              CAREERS
            </a>
            <a
              href="/payout"
              className="block text-gray-700 hover:text-blue-600 py-2 px-2 text-3xl font-medium transition-colors duration-200  border-l-3 border-transparent"
            >
              PAYOUT
            </a>

            {/* RESOURCES */}
            <div>
              <button
                onClick={() => toggleDropdown('resources')}
                className={`flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2 px-2 font-medium transition-colors duration-200 border-l-3 ${activeDropdown === 'resources' ? 'border-main' : 'border-transparent'}`}
              >
                <a href="/resources" className="text-3xl">
                  RESOURCES
                </a>
                <ChevronDown
                  className={`w-[20px] h-[20px] chevron-transition ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`dropdown-content ${
                  activeDropdown === 'resources' ? 'dropdown-open' : 'dropdown-enter'
                }`}
              >
                <div className="mt-2 ml-8 space-y-3">
                  {/* Recent News */}
                  <div>
                    <h3 className="font-medium text-gray-900 text-3xl mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Recent News
                    </h3>
                    <div className="ml-2 space-y-2">
                      {recentNews.map((news, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                          <div className="flex items-start space-x-2">
                            <div
                              className={`w-8 h-8 bg-gradient-to-br ${news.bgColor} rounded-md flex-shrink-0 flex items-center justify-center`}
                            >
                              <span className="text-white text-xs">
                                {news.type === 'DEADLINE' ? '📅' : '📊'}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-2xl font-semibold text-gray-600 uppercase mb-1">
                                {news.type}
                              </div>
                              {news.subtitle && (
                                <div className="text-xl font-medium text-gray-900 mb-1">
                                  {news.subtitle}
                                </div>
                              )}
                              <div className="text-xl text-gray-700">{news.title}</div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Other Resources */}
                  <div className="border-t border-gray-100 pt-2">
                    <div className="mt-2 ml-8 space-y-3">
                      {commonDropdown.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="font-medium text-gray-900 text-3xl">
                            {category.category}
                          </h3>
                          <div className="mt-1 ml-2 space-y-1">
                            {category.items.map((item, itemIdx) => (
                              <a key={itemIdx} href="#" className="block py-1 px-2">
                                <div className="text-2xl text-gray-700">{item.name}</div>
                                <div className="text-xl text-gray-500">{item.description}</div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 py-2 px-2 text-3xl font-medium transition-colors duration-200  border-l-3 border-transparent"
            >
              CONTACT US
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:text-blue-600 py-2 px-2 text-3xl font-medium transition-colors duration-200  border-l-3 border-transparent"
            >
              ABOUT US
            </a>

            {/* Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <button className="flex items-center justify-center space-x-2 w-full text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-4xl font-medium transition-colors duration-200">
                LET'S MEET!
              </button>
              <button className="flex items-center justify-center space-x-2 w-full bg-green-700 text-white px-4 py-3 rounded-lg text-4xl font-medium transition-colors duration-200">
                CLIENT PORTAL
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
