
import React from 'react';
import { Code, Layout, BarChart3 } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { 
      category: 'UI/UX Design',
      items: ['User Research', 'Wireframing', 'Prototyping', 'Figma', 'Canva', 'User Testing']
    },
    { 
      category: 'AI & ML',
      items: ['TensorFlow','Natural Language Processing', 'Python', 'Prompt Engineering', 'NumPy', 'Pandas', 'Matplotlib']
    },
    { 
      category: 'Data Analysis',
      items: ['Python', 'SQL', 'Tableau', 'Excel Charts', 'Data Visualization', 'Jupyter Notebook', 'Git & Github']
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-title opacity-0 animate-fade-in">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 opacity-0 animate-fade-in animation-delay-100">
            <h3 className="section-subtitle">My Journey</h3>
            <div className="space-y-4 text-white/80">
              <p>
                I am a 6th-semester undergraduate student majoring in Informatics Engineering at ITERA and a recipient of the 2024 Pertamina Sobat Bumi Scholarship.
                I am deeply passionate and committed to learning about technology and information systems. Currently, I am focused on sharpening my skills in Artificial Intelligence and Data Engineering, while also applying my UI/UX design expertise using Figma.
                I continuously strive to expand my knowledge, stay updated with the latest technological trends, and actively engage in innovative projects to grow within the tech industry.
              </p>
              {/* <p>
                I am deeply passionate and committed to learning about technology and information systems. Currently, I am focused on sharpening my skills in Artificial Intelligence and Data Engineering, while also applying my UI/UX design expertise using Figma.
              </p>
              <p>
                I continuously strive to expand my knowledge, stay updated with the latest technological trends, and actively engage in innovative projects to grow within the tech industry.
              </p> */}
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card flex flex-col items-center text-center p-6">
                <Layout className="w-12 h-12 text-accent-purple mb-4" />
                <h4 className="font-medium text-lg mb-2">UI/UX Design</h4>
                <p className="text-white/70 text-sm">~ Designing user-centric and visually engaging interfaces</p>
                <p className="text-white/70 text-sm">~ Crafting seamless and aesthetic user experiences</p>
              </div>
              
              <div className="card flex flex-col items-center text-center p-6">
                <Code className="w-12 h-12 text-accent-cyan mb-4" />
                <h4 className="font-medium text-lg mb-2">AI Exploration</h4>
                <p className="text-white/70 text-sm">~ Exploring possibilities through artificial intelligence</p>
                <p className="text-white/70 text-sm">~ Innovating with the power of AI</p>
              </div>
              
              <div className="card flex flex-col items-center text-center p-6">
                <BarChart3 className="w-12 h-12 text-accent-purple mb-4" />
                <h4 className="font-medium text-lg mb-2">Data Analysis</h4>
                <p className="text-white/70 text-sm">~ Uncovering patterns and insights from data</p>
                <p className="text-white/70 text-sm">~ crafting effective data visualizations</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1  opacity-0 animate-fade-in animation-delay-200">
            <h3 className="section-subtitle">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="card">
                  <h4 className="text-lg font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
