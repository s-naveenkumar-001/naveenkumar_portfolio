import { FolderOpen, ExternalLink, Calendar, Heart, Package, Cloud, Globe, Mountain, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "An Artificial Intelligence-Based Climbing Assistant for Advanced Athletes",
      date: "Jan 2026",
      icon: <Mountain className="text-purple-400" size={28} />,
      description: "Final year project designed to assist advanced climbing athletes using AI-driven analysis. Applied computer vision and machine learning techniques to evaluate climbing technique, track movement patterns, and provide performance feedback to support athlete training. Published as an IEEE research paper.",
      tags: ["Python", "Artificial Intelligence", "Computer Vision", "Machine Learning", "IEEE Publication"],
      color: "purple",
      githubLink: "https://github.com/s-naveenkumar-001/An-Artificial-Intelligence-Based-Climbing-Assistant-for-Advanced-Athletes",
      link: "https://ieeexplore.ieee.org/document/11486216",
      linkLabel: "View IEEE Publication"
    },
    {
      title: "Heart Disease Prediction System",
      date: "Mar 2023",
      icon: <Heart className="text-red-400" size={24} />,
      description: "Developed a predictive model using Random Forest to assess heart disease risk based on clinical data. Performed exploratory data analysis and preprocessing using Pandas and NumPy. Applied hyperparameter tuning to optimize model performance. Designed a user interface for medical professionals to input patient metrics and receive real-time predictions.",
      tags: ["Python", "Random Forest", "Pandas", "NumPy", "Machine Learning"],
      color: "red",
      githubLink: "https://github.com/s-naveenkumar-001/Heart-disease-prediction-using-machine-learning"
    },
    {
      title: "Inventory Management System",
      date: "May 2024",
      icon: <Package className="text-blue-400" size={24} />,
      description: "Created a Python-based inventory management system for a small retail store (Harvard CS50 Final Project). Enabled real-time stock tracking, order validation, and price calculation using CSV files. Integrated unit tests to ensure code reliability and robustness. Improved user experience through a menu-driven console interface.",
      tags: ["Python", "CSV", "Unit Testing", "Harvard CS50"],
      color: "blue",
      githubLink: "https://github.com/s-naveenkumar-001/Harvard-CS50-Courses"
    },
    {
      title: "Weather Forecast Application",
      date: "May 2022",
      icon: <Cloud className="text-cyan-400" size={24} />,
      description: "Designed a desktop weather forecast app using Python and OpenWeatherMap API. Fetched and displayed live weather data like temperature, humidity, and wind speed. Used Python libraries to parse API responses and handle errors. Designed layout for intuitive user interaction with real-time updates.",
      tags: ["Python", "OpenWeatherMap API", "Desktop App", "API Integration"],
      color: "cyan",
      githubLink: "https://github.com/s-naveenkumar-001/Weather-Forecast-Application"
    },
    {
      title: "Responsive Restaurant Website",
      date: "Jan 2022",
      icon: <Globe className="text-green-400" size={24} />,
      description: "Built a responsive front-end web interface using HTML, CSS, and JavaScript. Developed dynamic food menu layout and smooth navigation with 'Back to Top' functionality. Practiced front-end skills learned through Johns Hopkins University course on Coursera. Showcased web development fundamentals and best practices in layout and usability.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Coursera"],
      color: "green",
      githubLink: "https://github.com/s-naveenkumar-001/Frontend-Fast-Food-Restaurant-Project"
    }
  ];

  const getGradientClasses = (color: string) => {
    const gradients = {
      red: "from-red-500/20 to-pink-500/20 border-red-500/30",
      blue: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
      cyan: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
      purple: "from-purple-500/20 to-indigo-500/20 border-purple-500/30"
    };
    return gradients[color as keyof typeof gradients];
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <FolderOpen className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gradient-to-br ${getGradientClasses(project.color)} bg-gray-800 rounded-2xl p-8 shadow-2xl border transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-3xl`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {project.icon}
                    <h3 className="text-xl font-semibold ml-3">{project.title}</h3>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-300 hover:text-white text-sm font-medium transition-colors"
                    >
                      <Github size={14} className="mr-1" />
                      View Code
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      {project.linkLabel || "View Link"}
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;