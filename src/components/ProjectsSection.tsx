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
      title: "Awardee of the 2024 Pertamina Sobat Bumi Scholarship",
      description: " As a recipient of the 2024 Pertamina Sobat Bumi Scholarship, I actively contribute to environmental organizations with a focus on energy sustainability. My initiatives include advocating for renewable energy transition, organizing educational workshops on energy efficiency, and participating in community projects such as solar panel installations and urban greening.",
      image: "/sobi.png",
      tags: ["MyActivity", "Pertamina", "Scholarship", "ITERA"],
      link: "https://www.instagram.com/sobatbumi.lampung?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==", 
    },
    {
      id: 2,
      title: "DEB: Pertamina-Funded Village Empowerment in Karang Anyar by Sobat Bumi ITERA",
      description: "Sobat Bumi ITERA successfully secured IDR 100 million in funding from Pertamina through the Energy Independent Village (DEB) program to develop a mentored village in Karang Anyar, South Lampung. This initiative empowers the local community through renewable energy adoption, training in managing local resources, and implementation of eco-friendly technologies such as biogas and solar panels.",
      image: "/deb.png",
      tags: ["MyActivity", "DEB", "Lampung", "Pertamina"],
      link: "https://drive.google.com/file/d/19wJU2sRQWlgzZOGDDGQvd9x73cBbNFBm/view?usp=sharing",
    },
    {
      id: 3,
      title: "KiddieSafe by Intuify",
      description: "KiddieSafe is a digital safety application designed to protect children from harmful online content and cyberbullying through AI-based content filtering, mood tracking, and interactive digital literacy education. Developed using Figma and Maze, the prototype was evaluated through usability testing and showed high user satisfaction, supporting safer and more responsible internet.",
      image: "/safekids2.png",
      tags: ["UI/UX", "Dashboard", "Mobile App", "Prototyping"],
      link: "https://drive.google.com/drive/folders/1nDOMvPXt6VCwuWZpiMeWuDwMCaB3XCB2?usp=sharing", 
      figma: "https://www.figma.com/proto/VkM0yzZ0gVXpZWHqauSNxR/Intuify---KiddieSafe?node-id=43-9&p=f&t=MJgnrSzD5qvbecYO-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A5&starting-point-node-id=36%3A420&show-proto-sidebar=1", 
    },
    {
      id: 4,
      title: "RentUrStyle",
      description: "RentUrStyle is a web platform developed by Group 14 for LKKMO HMIF, aimed at helping pop culture enthusiasts and traditional fashion lovers easily rent their dream costumes. As the UI/UX Designer, I focused on creating an intuitive and visually appealing interface to ensure a smooth and enjoyable user experience.",
      image: "/renturstyle.png",
      tags: ["UI/UX", "Website", "E-commerce", "Prototyping"],
      link: "https://drive.google.com/drive/folders/1x9IXwosPt0vb6h6hfSDrGP-y76Y4XsmV?usp=sharing",
      figma: "https://www.figma.com/design/22NGllyMUXjOsGs7Xi9gXE/TEAM-DEV-ONE-UI-UX?node-id=1-6&t=iR3xswycS70tXset-1"
    },
    {
      id: 5,
      title: "Empowering Dreams: Scholarship Insights with Sobat Bumi Pertamina",
      description: "As a speaker at Informatics Goes to TPB (organized by HMIF ITERA 2024), I shared my experience as a Sobat Bumi Pertamina scholarship awardee, offering practical advice on securing competitive scholarships. The talk covered application strategies, academic & leadership balance, and maximizing opportunities, followed by an interactive Q&A to inspire informatics students in pursuing higher education goals.",
      image: "/speaker.png",
      tags: ["MyActivity", "SobatBumi", "Pertamina"],
      link: "#",
    },
    {
      id: 6,
      title: "Green Legacy: 100 Trembesi & Bungur Trees for a Sustainable ITERA",
      description: "As a Pertamina Sobat Bumi Scholarship awardee, I initiated a tree-planting project at the Institut Teknologi Sumatera (ITERA), planting 100 trembesi (rain tree) and bungur (Lagerstroemia) seedlings. This effort serves as a tangible commitment to environmental conservation, combating climate change through carbon sequestration, and enhancing campus biodiversity.",
      image: "/penanamanpohon.png",
      tags: ["MyActivity", "Productivity", "Pertamina", "SobatBumi"],
      link: "https://www.instagram.com/p/DF4gXkXT06T/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==",
    },
    {
      id: 7,
      title: "Scholarship Outreach 2025: Unlocking Opportunities Beyond Government Aid",
      description: "Organized by the Student Affairs Division of Institut Teknologi Sumatera (ITERA), this initiative aims to empower students by providing comprehensive information on non-government scholarship opportunities for 2025.",
      image: "/sosialisasi beasiswa.png",
      tags: ["MyActivity", "ITERA", "Scholarhip"],
      link: "#"
    },
    {
      id: 8,
      title: "FitGuide ITERA | UI/UX Design for an Integrated Gym Facility Guide",
      description: "FitGuide ITERA is a user-centered mobile app designed to optimize gym usage for students at Institut Teknologi Sumatera (ITERA), solving key pain points like unclear workout goals, lack of equipment tutorials, and disjointed facility schedules. ",
      image: "/fitguide.png",
      tags: ["UI/UX", "FitnessApp", "MobileApp", "Prototyping"],
      link: "https://drive.google.com/drive/folders/1Kiz-kpxIxcxKD5r0KMh3BDM_3TRUWMNj?usp=sharing",
      figma: "https://www.figma.com/proto/Ea77oneirSCPDITKGMauZ4/Project-IMK?page-id=10%3A3&node-id=477-2446&node-type=frame&viewport=1690%2C614%2C0.55&t=IWY7Q81B1saGZa0K-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=597%3A4522",
    },
    {
      id: 9,
      title: "ComingSoon",
      description: "Stay tuned for more exciting projects and updates!",
      image: "/comingsoon.png",
      tags: ["Data Analysis & AI", "ComingSoon"],
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'MyActivity', label: 'MyActivity' },
    { id: 'UI/UX', label: 'UI/UX' },
    { id: 'Data Analysis & AI', label: 'Data Analysis & AI' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.some(tag => tag.includes(activeFilter)));
  
  return (
    <section id="projects" className="py-20">
      <div className="container">
        {/* Update judul "Projects" menjadi "MyWork" */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          My<span className="text-accent-purple">Work</span>
        </h2>
        
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
                  className="w-full h-64 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
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
                      title="View Figma Prototype"
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
                      title="View Project Details"
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
                      title="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
