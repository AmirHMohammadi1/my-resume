const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user interfaces that provide exceptional user experiences.'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build responsive and high-performance websites using modern technologies and best practices.'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Develop cross-platform mobile applications that work seamlessly on all devices.'
    },
    {
      icon: '🚀',
      title: 'Frontend Development',
      description: 'Create interactive and dynamic user interfaces with React, Next.js, and modern JavaScript.'
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      description: 'Build robust server-side applications with Node.js, Python, Django, and database management.'
    },
    {
      icon: '⚡',
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment with modern tech stacks.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Services</span>
          <h2 className="main-title">Service I Provide</h2>
          <ul className="title-line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;