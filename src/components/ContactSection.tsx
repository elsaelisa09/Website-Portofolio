import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:elsaelisayohana05@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/elsa-elisa-yohana-sianturi-054668287", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/elsaelisa09", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/elsaelisaaaaa", label: "Instagram" }
  ];

  return (
    <section id="contact" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Feel free to reach out for collaborations or just to say hello!
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} className="text-gray-700" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;