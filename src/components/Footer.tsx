import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/AmirHMohammadi1', 
      icon: <FaGithub className="text-2xl" /> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/AmirHMohammadi/', 
      icon: <FaLinkedin className="text-2xl" /> 
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/mr_amir_developer', 
      icon: <FaTelegram className="text-2xl" /> 
    },
    { 
      name: 'Email', 
      url: 'mailto:a.h.mohammadi5@gmail.com', 
      icon: <MdEmail className="text-2xl" /> 
    }
  ];

  const menuItems = ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Pricing', 'Experience'];

  return (
    <footer id="footer" className="footer_area py-20 lg:py-28 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="lg:w-full">
            <div className="footer_content text-center">
              <Link href="#home" className="text-2xl font-bold text-white mb-8 inline-block">
                Amir.M
              </Link>
              
              <ul className="footer_social flex justify-center space-x-6 mb-8">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <Link 
                      href={social.url} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  </li>
                ))}
              </ul>

              <span className="email text-gray-400 mb-8 block">
                <Link 
                  href="mailto:a.h.mohammadi5@gmail.com" 
                  className="hover:text-white transition-colors duration-300 text-lg"
                >
                  a.h.mohammadi5@gmail.com
                </Link>
              </span>

              <ul className="footer_menu flex flex-wrap justify-center space-x-6 mb-8">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 py-2 px-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="credit text-gray-500">
                © {new Date().getFullYear()} Amir Hosein Mohammadi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;