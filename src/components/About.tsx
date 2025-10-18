// 'use client';

// import { useEffect, useRef } from 'react';

const About = () => {
  // const skillContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!skillContainerRef.current) return;

  //   const skillBars = skillContainerRef.current.querySelectorAll('.progress-line');
    
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const skillBar = entry.target as HTMLDivElement;
  //           const width = skillBar.getAttribute('data-width');
  //           if (width) {
  //             setTimeout(() => {
  //               skillBar.style.width = `${width}%`;
  //             }, 300);
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   skillBars.forEach((bar) => {
  //     observer.observe(bar);
  //   });

  //   return () => {
  //     skillBars.forEach((bar) => {
  //       observer.unobserve(bar);
  //     });
  //   };
  // }, []);

  // const skills = [
  //   { name: 'JavaScript/TypeScript', percentage: 90 },
  //   { name: 'React & Next.js', percentage: 85 },
  //   { name: 'Node.js & Express', percentage: 90 },
  //   { name: 'Node.js & Nest', percentage: 85 },
  //   { name: 'Python & Django', percentage: 65 },
  //   { name: 'React Native', percentage: 70 },
  //   { name: 'UI/UX Design', percentage: 65 },
  // ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="about_image relative animate-slideInLeft">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl w-full h-80 flex items-center justify-center">
                    <span className="text-6xl text-white">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <div className="about_content animate-slideInRight">
              <div className="section-title text-left">
                <span className="sub-title">About</span>
                <h2 className="main-title">Why You Hire Me?</h2>
                <ul className="title-line justify-start">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
                I specialize in creating responsive, high-performance applications that deliver 
                exceptional user experiences and help businesses achieve their goals.
              </p>

              {/* <div className="about_skills space-y-6" ref={skillContainerRef}>
                {skills.map((skill, index) => (
                  <div key={index} className="skill_item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="progress-line" 
                        data-width={skill.percentage}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;