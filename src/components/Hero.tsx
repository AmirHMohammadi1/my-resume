import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CodeAnimation from "./CodeAnimation";

const Hero = () => {
  return (
    <section id="home" className="header_hero pt-32 pb-20 lg:pt-40 lg:pb-40 bg-gradient-to-br from-blue-50 to-indigo-200 relative overflow-hidden">
      {/* Social Links */}
      <div className="header_social hidden lg:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-10 flex-col space-y-4">
        <Link href="https://github.com/AmirHMohammadi1" className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank"><FaGithub size={30} /></Link>
        <Link href="https://linkedin.com/in/AmirHMohammadi/" className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank"><FaLinkedin size={30} /></Link>
        <Link href="https://t.me/mr_amir_developer" className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank"><FaTelegram size={30} /></Link>
        <Link href="mailto:a.h.mohammadi5@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors"><MdEmail size={30} /></Link>
      </div>

      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="header_hero_content">
              <h5 className="sub-title animate-fadeIn">Hello I&apos;m</h5>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 animate-slideInUp">
                Amir Hosein Mohammadi
              </h1>
              <p className="text-xl text-gray-600 mb-6 animate-fadeIn">
                Full Stack Developer
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed animate-fadeIn">
                I create beautiful, responsive websites and applications that help businesses 
                grow and succeed in the digital world. Building ideas with code is my passion.
              </p>
              <Link href="#contact" className="btn btn-primary animate-fadeIn">
                Hire Me
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2">
            <div className="header_hero_image relative animate-slideInRight">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-1">
                  <div className="bg-white rounded-lg p-8 text-center">
                    {/* <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl text-white">👨‍💻</span>
                    </div> */}
                    <CodeAnimation />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Full Stack Developer</h3>
                    <p className="text-gray-600">Nodejs . Nextjs . React . NestJs . ExpressJs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;