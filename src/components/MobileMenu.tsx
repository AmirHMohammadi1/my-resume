'use client';

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className={`absolute top-20 right-4 w-64 bg-white rounded-lg shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block btn-primary text-center mt-4"
            onClick={onClose}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;