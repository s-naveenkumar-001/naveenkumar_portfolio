import { Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Target className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Objective</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              A 2026 graduate in B.Tech Computer Science and Engineering (AI & ML), with a solid foundation in
              machine learning, Python development, and data analysis, backed by hands-on project work and a
              published IEEE research paper. Skilled in building end-to-end AI/ML solutions, from data
              preprocessing and model development to deployment-ready applications. Seeking to begin my career as an
              <span className="text-green-400 font-semibold"> AI Engineer</span>,
              <span className="text-blue-400 font-semibold"> AI Developer</span>, or
              <span className="text-purple-400 font-semibold"> Machine Learning Engineer</span>, applying strong analytical
              skills and research experience to deliver data-driven, intelligent solutions to real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;