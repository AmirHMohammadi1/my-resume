"use client"
import Link from "next/link";
import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Task Management App',
      category: 'React & Node.js',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Weather Dashboard',
      category: 'Frontend Development',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Mobile Banking App',
      category: 'React Native',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Social Media App',
      category: 'React Native',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Admin Dashboard',
      category: 'Frontend Development',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'REST API Service',
      category: 'Full Stack Development',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Real-time Chat App',
      category: 'React & Node.js',
      image: '/api/placeholder/400/300'
    }
  ];

  // استخراج دسته‌بندی‌های منحصربفرد
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  // فیلتر کردن پروژه‌ها بر اساس دسته‌بندی فعال
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="project_area pt-20 lg:pt-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col lg:flex-row justify-between items-center mb-10">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <div className="section-title text-left animate-slideInLeft">
              <h5 className="sub-title">Portfolio</h5>
              <h3 className="main-title">Latest Projects</h3>
              <ul className="title-line justify-start">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          {/* <div className="lg:w-1/2 text-right">
            <div className="project_btn animate-slideInRight">
              <Link className="main-btn main-btn-2" href="#">
                All Works
              </Link>
            </div>
          </div> */}
        </div>

        {/* دکمه‌های دسته‌بندی */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeIn">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* نمایش پروژه‌های فیلتر شده */}
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="single_project group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project_image relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 aspect-video flex items-center justify-center">
                <span className="text-4xl text-white">📱</span>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>
              <div className="project_content p-6">
                <h4 className="project_title text-xl font-bold text-gray-800 mb-2">
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    {project.title}
                  </Link>
                </h4>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* پیام زمانی که پروژه‌ای در دسته‌بندی انتخاب شده وجود ندارد */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-fadeIn">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;