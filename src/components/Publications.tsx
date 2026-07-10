import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "An Artificial Intelligence-Based Climbing Assistant for Advanced Athletes",
      venue: "IEEE",
      date: "April 2026",
      description: "Final year research project presenting an AI-based climbing assistant for advanced athletes. Applied computer vision and machine learning techniques to analyze climbing technique, track movement patterns, and generate performance feedback to support athlete training. Published as an IEEE conference paper.",
      link: "https://ieeexplore.ieee.org/document/11486216"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">Publications</h2>
          </div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:translate-y-[-4px]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">
                    {publication.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                    <Calendar size={16} className="mr-1" />
                    {publication.date}
                  </div>
                </div>

                <span className="inline-block bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-sm mb-4">
                  {publication.venue}
                </span>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {publication.description}
                </p>

                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  View Publication
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
