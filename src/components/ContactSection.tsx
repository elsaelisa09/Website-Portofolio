
import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const socialLinks = [
    { icon: Mail, href: "mailto:elsaelisayohana05@gmail.com", label: "Email" },
    { icon: Linkedin, href: "www.linkedin.com/in/elsa-elisa-yohana-sianturi-054668287", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/elsaelisa09", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/elsaelisaaaaa", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-highlight">
      <div className="container">
        <h2 className="section-title opacity-0 animate-fade-in">Say Hello</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in animation-delay-100">
            <p className="text-white/80 mb-6">
              Have a project in mind or want to collaborate? Feel free to reach out through the form or connect with me on social media.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-dark-card hover:bg-dark-card/80 text-white/80 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            
            <div className="p-6 glassmorphism">
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-3 text-white/80">
                <p>Based in San Francisco, California</p>
                <p>Available for remote work worldwide</p>
                <p>Open to freelance opportunities and collaborations</p>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in animation-delay-200">
            <form onSubmit={handleSubmit} className="card">
              <div className="mb-4">
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-dark-bg border border-white/10 text-white italic focus:border-accent-purple focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-dark-bg border italic border-white/10 text-white focus:border-accent-purple focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-dark-bg border border-white/10 text-white italic focus:border-accent-purple focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
