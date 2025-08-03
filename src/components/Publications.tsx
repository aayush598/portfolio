import React from 'react';
import { BookOpen, ExternalLink, Users, Calendar } from 'lucide-react';

const Publications = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to academic research and advancing the field of AI in healthcare applications
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-16 flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="text-blue-600" size={32} />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  A Deep Learning Approach to Improving Patient Safety in Healthcare Using Real-Time Face Mask Detection
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>September 27-28, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Co-Author</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-semibold mb-2">Published in:</p>
                  <p className="text-blue-700">
                    2024 International Conference on Advances in Computing Research on Science Engineering and Technology (ACROSET)
                  </p>
                  <p className="text-blue-600 text-sm mt-2">
                    IEEE Conference • Indore, India • DOI: 10.1109/ACROSET62108.2024.10743262
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Overview</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  In response to public health challenges like COVID-19, our research proposes a robust real-time face mask 
                  detection system using deep learning and MobileNetV2 CNN architecture. The system was designed for 
                  automated surveillance environments to support patient safety in healthcare facilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'OpenCV', 'TensorFlow', 'Keras', 'MobileNetV2', 'CNN'].map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Research Highlights</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                      High accuracy through advanced preprocessing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                      Real-time monitoring capabilities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                      Automated surveillance integration
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Impact & Applications</h4>
                <p className="text-gray-600 text-sm">
                  This research contributes to automated compliance monitoring during health emergencies, helping healthcare 
                  systems and public authorities reduce manual intervention while improving safety in hospitals, malls, 
                  airports, and other public spaces.
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://doi.org/10.1109/ACROSET62108.2024.10743262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  View Publication
                </a>
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg">
                  <BookOpen size={16} />
                  IEEE Conference Paper
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Interests</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Computer Vision</h4>
                <p className="text-blue-700 text-sm">Real-time object detection, image processing, and automated surveillance systems</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h4 className="font-semibold text-teal-900 mb-2">Healthcare AI</h4>
                <p className="text-teal-700 text-sm">AI applications in patient safety, medical imaging, and healthcare automation</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-2">Hardware-Software Co-design</h4>
                <p className="text-orange-700 text-sm">FPGA implementations, embedded AI, and edge computing solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;