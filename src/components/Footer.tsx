import Link from "next/link";

const Footer = () => {
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
                {[
                  { name: 'GitHub', url: 'https://github.com/AmirHMohammadi1' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/AmirHMohammadi/' },
                  { name: 'Telegram', url: 'https://t.me/mr_amir_developer' },
                  { name: 'Email', url: 'mailto:a.h.mohammadi5@gmail.com' }
                ].map((social) => (
                  <li key={social.name}>
                    <Link 
                      href={social.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <span className="email text-gray-400 mb-8 block">
                <Link href="mailto:a.h.mohammadi5@gmail.com" className="hover:text-white transition-colors">
                  a.h.mohammadi5@gmail.com
                </Link>
              </span>

              <ul className="footer_menu flex flex-wrap justify-center space-x-6 mb-8">
                {['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Experience'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors"
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