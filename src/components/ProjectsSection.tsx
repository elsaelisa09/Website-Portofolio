import React, { useState } from 'react';
import { ExternalLink, Github, Figma } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  figma?: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "KiddieSafe by Intuify",
      description: "KiddieSafe is a digital safety application designed to protect children from harmful online content and cyberbullying through AI-based content filtering, mood tracking, and interactive digital literacy education. Developed using Figma and Maze, the prototype was evaluated through usability testing and showed high user satisfaction, supporting safer and more responsible internet use for children and their parents.",
      image: "/kiddiesafe.png",
      tags: ["UI/UX", "Dashboard", "Mobile App", "Prototyping"],
      link: "https://drive.google.com/drive/folders/1nDOMvPXt6VCwuWZpiMeWuDwMCaB3XCB2?usp=sharing", 
      figma: "https://www.figma.com/proto/VkM0yzZ0gVXpZWHqauSNxR/Intuify---KiddieSafe?node-id=43-9&p=f&t=MJgnrSzD5qvbecYO-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A5&starting-point-node-id=36%3A420&show-proto-sidebar=1", 
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "A machine learning-powered tool that generates unique artwork based on text descriptions using advanced neural networks.",
      image: "https://placehold.co/600x400/1e1e1e/ffffff?text=AI+Image+Generator",
      tags: ["AI", "Machine Learning", "Creative Tools"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Market Analysis Platform",
      description: "Data-driven platform providing market insights and competitive analysis for e-commerce businesses.",
      image: "https://placehold.co/600x400/1e1e1e/ffffff?text=Market+Analysis",
      tags: ["Data Analysis", "E-commerce", "Visualization"],
      link: "#"
    },
    {
      id: 4,
      title: "Minimalist Task Manager",
      description: "A clean, distraction-free task management application with a focus on simplicity and productivity.",
      image: "https://placehold.co/600x400/1e1e1e/ffffff?text=Task+Manager",
      tags: ["UI/UX", "Productivity", "Mobile App"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Sentiment Analysis Tool",
      description: "NLP-powered tool that analyzes customer feedback and social media mentions to gauge brand sentiment.",
      image: "https://placehold.co/600x400/1e1e1e/ffffff?text=Sentiment+Analysis",
      tags: ["AI", "NLP", "Data Analysis"],
      link: "#"
    },
    {
      id: 6,
      title: "Virtual Reality Experience",
      description: "Immersive VR experience showcasing data visualization in three-dimensional space.",
      image: "https://placehold.co/600x400/1e1e1e/ffffff?text=VR+Experience",
      tags: ["UI/UX", "VR", "Data Visualization"],
      github: "#"
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'UI/UX', label: 'UI/UX' },
    { id: 'AI', label: 'AI' },
    { id: 'Data Analysis', label: 'Data Analysis' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.some(tag => tag.includes(activeFilter)));
  
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title opacity-0 animate-fade-in">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10 opacity-0 animate-fade-in animation-delay-100">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent-purple text-white'
                  : 'bg-dark-highlight text-white/70 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card overflow-hidden group opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* Figma Link */}
                  {project.figma && (
                    <a 
                      href={project.figma} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-dark-bg/80 text-white hover:bg-dark-bg transition-colors duration-300"
                      aria-label={`View ${project.title} on Figma`}
                    >
                      <Figma size={20} />
                    </a>
                  )}
                  
                  {/* Regular External Link */}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-dark-bg/80 text-white hover:bg-dark-bg transition-colors duration-300"
                      aria-label={`Visit ${project.title} project`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  
                  {/* GitHub Link */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-dark-bg/80 text-white hover:bg-dark-bg transition-colors duration-300"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="font-medium text-lg mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="badge-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;