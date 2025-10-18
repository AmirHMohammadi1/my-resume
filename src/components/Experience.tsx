const Experience = () => {
  const experiences = [
    {
      number: '01',
      title: 'Full Stack Developer',
      company: 'TechCorp',
      period: 'March 2022 - Present',
      description: 'Led the development of multiple web applications using React, Next.js, and Node.js. Implemented responsive designs and optimized application performance.'
    },
    {
      number: '02',
      title: 'Frontend Developer',
      company: 'WebSolutions Inc',
      period: 'June 2020 - February 2022',
      description: 'Developed user interfaces for various clients using modern JavaScript frameworks. Collaborated with design teams to implement pixel-perfect designs.'
    },
    {
      number: '03',
      title: 'Web Developer',
      company: 'StartUpXYZ',
      period: 'January 2019 - May 2020',
      description: 'Built and maintained company websites and web applications. Worked with various technologies including React, Vue.js, and traditional web stacks.'
    }
  ];

  return (
    <section id="experience" className="work_experience_area py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="row justify-center">
          <div className="lg:w-2/3">
            <div className="section-title animate-fadeIn">
              <h5 className="sub-title">Experience</h5>
              <h3 className="main-title">Work Experience</h3>
              <ul className="title-line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="work_experience space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.number}
              className={`single_experience flex flex-col lg:flex-row items-start lg:items-center animate-slideInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`experience_content lg:w-1/2 mb-6 lg:mb-0 ${index % 2 === 0 ? 'lg:order-3 lg:text-right' : ''}`}>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>

              <div className="experience_number flex-shrink-0 mx-6 mb-6 lg:mb-0">
                <span className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {exp.number}
                </span>
              </div>

              <div className={`experience_title lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:text-right'}`}>
                <h3 className="title text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                <span className="text-gray-500">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;