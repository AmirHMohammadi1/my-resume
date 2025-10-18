import { Project } from '@/types';
import Link from 'next/link';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      githubUrl: "https://github.com/LinkmirHMohammadi1/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/LinkmirHMohammadi1/taskmanager",
      liveUrl: "https://taskmanager-demo.vercel.app"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      githubUrl: "https://github.com/LinkmirHMohammadi1/weather-app",
      liveUrl: "https://weather-demo.vercel.app"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Portfolio</span>
          <h2 className="main-title">Latest Projects</h2>
          <ul className="title-line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 aspect-video flex items-center justify-center">
                <span className="text-4xl text-white">📱</span>
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                    <div className="flex space-x-4 mt-4">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/LinkmirHMohammadi1"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;