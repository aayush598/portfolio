import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Agent Intern',
      company: 'Clone Futura Education Pvt. Ltd.',
      period: 'Feb 2025 – March 2025',
      location: 'Remote',
      description: 'Built an AI-driven marketing automation agent using Gemini, GPT, Flask, and Streamlit.',
      achievements: [
        'Automated blog creation, social media posts, and ad copy generation',
        'Implemented campaign strategy automation using AI models',
        'Integrated multiple APIs for email, YouTube, Twitter, and image generation',
        'Developed comprehensive analytics dashboard for campaign monitoring',
        'Created scalable architecture supporting multiple AI providers'
      ],
      tech: ['Python', 'Flask', 'Streamlit', 'Gemini API', 'GPT', 'API Integration']
    },
    {
      role: 'Data Science Intern',
      company: 'NullClass',
      period: 'Jan 2025 – Feb 2025',
      location: 'Remote',
      description: 'Developed a modular AI chatbot with advanced sentiment analysis capabilities.',
      achievements: [
        'Built sentiment analysis system using VADER and BERT models',
        'Created scalable NLP modules with modular architecture',
        'Developed interactive UI using Streamlit framework',
        'Implemented comprehensive documentation and testing',
        'Designed extensible system for future feature integration'
      ],
      tech: ['Python', 'BERT', 'VADER', 'NLP', 'Streamlit', 'Transformers']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on experience in AI development, data science, and automation across innovative companies
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">{exp.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Currently Seeking</h3>
            <p className="text-xl text-gray-600 mb-6">
              Full-time opportunities in AI Engineering, Hardware Design, or Software Development
            </p>
            <a
              href="mailto:aayushgid598@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;