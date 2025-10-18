'use client';

import Link from 'next/link';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'a.h.mohammadi5@gmail.com',
      link: 'mailto:a.h.mohammadi5@gmail.com'
    },
    {
      icon: '📱',
      title: 'Telegram',
      value: '@mr_amir_developer',
      link: 'https://t.me/mr_amir_developer'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'AmirHMohammadi',
      link: 'https://linkedin.com/in/AmirHMohammadi/'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Contact</span>
          <h2 className="main-title">Let&apos;s Work Together</h2>
          <ul className="title-line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/AmirHMohammadi1"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  G
                </Link>
                <Link
                  href="https://linkedin.com/in/AmirHMohammadi/"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  L
                </Link>
                <Link
                  href="https://t.me/mr_amir_developer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  T
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;