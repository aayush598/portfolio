import React from 'react';
import { Code, Wrench, Cpu, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Verilog', 'SystemVerilog'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database size={24} />,
      skills: ['Flask', 'Express.js', 'React', 'TensorFlow', 'Streamlit', 'OpenCV', 'NumPy'],
      color: 'teal'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: ['Vivado', 'MATLAB', 'GTKWave', 'Git', 'MongoDB', 'Icarus Verilog', 'Yosys', 'QEMU'],
      color: 'orange'
    },
    {
      title: 'Hardware & Embedded',
      icon: <Cpu size={24} />,
      skills: ['LPC55S69', 'ESP32-S2', 'STM32', 'RISC-V', 'FPGA', 'AI on Edge', 'TrustZone'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800'
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      teal: 'text-teal-600 bg-teal-100',
      orange: 'text-orange-600 bg-orange-100',
      purple: 'text-purple-600 bg-purple-100'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning software development, AI/ML, hardware design, and embedded systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${getIconColorClasses(category.color)}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
                <p className="text-gray-600 text-sm">Deep Learning, Computer Vision, NLP, Sentiment Analysis, Transfer Learning</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hardware Design</h4>
                <p className="text-gray-600 text-sm">Digital Design, FPGA Programming, CPU Architecture, Pipeline Design</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">System Programming</h4>
                <p className="text-gray-600 text-sm">Bootloaders, Operating Systems, Real-time Systems, Embedded Programming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;