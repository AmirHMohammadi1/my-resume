'use client';

import { Skill } from '@/types';
import { useEffect, useState, useCallback, useMemo } from 'react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  // استفاده از useMemo برای جلوگیری از تغییر در هر رندر 
  const skills = useMemo((): Skill[] => [
    // Frontend
    { name: 'JavaScript', level: 90, category: 'frontend', icon: '⚡' },
    { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
    { name: 'React', level: 88, category: 'frontend', icon: '⚛️' },
    { name: 'Next.js', level: 85, category: 'frontend', icon: '▲' },
    { name: 'React Native', level: 80, category: 'mobile', icon: '📱' },
    
    // Backend
    { name: 'Node.js', level: 87, category: 'backend', icon: '🟢' },
    { name: 'Express.js', level: 85, category: 'backend', icon: '🚀' },
    { name: 'NestJS', level: 82, category: 'backend', icon: '🪹' },
    { name: 'Python', level: 78, category: 'backend', icon: '🐍' },
    { name: 'Django', level: 75, category: 'backend', icon: '🎸' },
    
    // Tools
    { name: 'Git', level: 88, category: 'tools', icon: '📚' },
    { name: 'GitHub', level: 90, category: 'tools', icon: '🐙' },
    { name: 'WordPress', level: 80, category: 'tools', icon: '💠' },
  ], []);

  const initializeSkills = useCallback(() => {
    setAnimatedSkills(skills);
  }, [skills]);

  useEffect(() => {
    const timer = setTimeout(() => {
      initializeSkills();
    }, 100);
    return () => clearTimeout(timer);
  }, [initializeSkills]);

  const categories = {
    frontend: '💻 Frontend',
    backend: '🚀 Backend & Full Stack',
    mobile: '📱 Mobile',
    tools: '🛠️ Tools & Platforms'
  };

  const getSkillsByCategory = (category: string) => {
    return animatedSkills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Technologies</span>
          <h2 className="main-title">Skills & Expertise</h2>
          <ul className="title-line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="space-y-12">
          {Object.entries(categories).map(([categoryKey, categoryName]) => (
            <div key={categoryKey}>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">{categoryName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getSkillsByCategory(categoryKey).map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-blue-600 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;