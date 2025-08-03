import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Indore Institute of Science and Technology',
      duration: '2022 - 2026',
      grade: '7.2 CGPA'
    },
    {
      degree: 'Class 12 (Science)',
      institution: 'Career Academy',
      duration: '2022',
      grade: '88%'
    },
    {
      degree: 'Class 10',
      institution: 'Career Academy',
      duration: '2020',
      grade: '93%'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about bridging the gap between artificial intelligence and hardware engineering, 
            with expertise spanning from low-level system programming to advanced machine learning applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a B.Tech ECE student at Indore Institute of Science and Technology, I've dedicated myself to 
              mastering both hardware and software domains. My passion lies in creating intelligent systems that 
              combine the power of AI with robust hardware implementations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From developing RISC-V processors in Verilog to building AI-powered applications with modern frameworks, 
              I thrive on solving complex technical challenges. My experience spans across multiple internships, 
              hackathon victories, and innovative projects that push the boundaries of technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in continuous learning and contributing to the open-source community, as evidenced by my 
              published tools and research work in the field of healthcare AI and computer vision.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <span className="inline-flex items-center gap-1 text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      <Award size={14} />
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    {edu.duration}
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

export default About;