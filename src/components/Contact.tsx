import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      label: "Email",
      value: "nk0232997@gmail.com",
      href: "mailto:nk0232997@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: "Phone",
      value: "+91 97516 46688",
      href: "tel:+919751646688"
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      label: "Location",
      value: "Abiramam, Tamil Nadu - 623601",
      href: ""
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/naveenkumar-s-a905472bb",
      color: "blue"
    },
    {
      icon: <Github className="text-gray-400" size={24} />,
      label: "GitHub",
      href: "https://github.com/s-naveenkumar-001",
      color: "gray"
    },
    {
      icon: <Code className="text-green-400" size={24} />,
      label: "HackerRank",
      href: "https://hackerrank.com/profile/nk0232997",
      color: "green"
    }
  ];

  const getHoverColor = (color: string) => {
    const colors = {
      blue: "hover:bg-blue-600 hover:border-blue-500",
      gray: "hover:bg-gray-600 hover:border-gray-500",
      green: "hover:bg-green-600 hover:border-green-500"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Mail className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm actively seeking AI/ML opportunities and would love to discuss how I can contribute 
            to your team's success. Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col items-center">
                  {info.icon}
                  <h3 className="text-lg font-semibold mt-4 mb-2">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-center"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-center">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-700 border border-gray-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${getHoverColor(link.color)}`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;