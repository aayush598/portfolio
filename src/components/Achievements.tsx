import React from 'react';
import { Trophy, Award, Medal, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      position: '🥇 1st Place',
      event: 'Clash Hackathon 1.0',
      organizer: 'IndoreCoders',
      project: 'Budget Tracker with Flask & Streamlit',
      date: 'March 2025',
      icon: <Trophy className="text-yellow-500" size={32} />,
      color: 'yellow'
    },
    {
      position: '🥈 2nd Place',
      event: 'NoCode Low Code Hackathon',
      organizer: 'SCSIT DAVV',
      project: 'Google Drive AI Agent using Langflow',
      date: 'April 2025',
      icon: <Award className="text-gray-400" size={32} />,
      color: 'gray'
    },
    {
      position: '🥈 2nd Place',
      event: 'Dev Hacks Hackathon',
      organizer: 'CDGI',
      project: 'AI-based Resume Shortlisting System',
      date: 'March 2025',
      icon: <Award className="text-gray-400" size={32} />,
      color: 'gray'
    },
    {
      position: '🏅 Finalist',
      event: 'Smart India Hackathon (SIH)',
      organizer: 'Government of India',
      project: 'Encryption Tool using TPM & RSA',
      date: '2024',
      icon: <Medal className="text-orange-500" size={32} />,
      color: 'orange'
    },
    {
      position: '🏅 Finalist',
      event: 'Devbhoomi Cyber Hackathon',
      organizer: 'Government Initiative',
      project: 'Crime Monitoring with Map Interface',
      date: '2022',
      icon: <Medal className="text-orange-500" size={32} />,
      color: 'orange'
    },
    {
      position: '🎖️ Top 5',
      event: 'CodeCode Zonal - Techfest',
      organizer: 'Technical Competition',
      project: 'Competitive Coding Round',
      date: 'December 2023',
      icon: <Target className="text-blue-500" size={32} />,
      color: 'blue'
    }
  ];

  const getBgColor = (color: string) => {
    const colors = {
      yellow: 'bg-yellow-50 border-yellow-200',
      gray: 'bg-gray-50 border-gray-200',
      orange: 'bg-orange-50 border-orange-200',
      blue: 'bg-blue-50 border-blue-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Competition victories and recognition showcasing problem-solving abilities and innovative thinking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 ${getBgColor(achievement.color)} hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {achievement.icon}
                  <span className="text-2xl font-bold text-gray-900">{achievement.position}</span>
                </div>
                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                  {achievement.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.event}</h3>
              <p className="text-gray-600 mb-3 font-medium">{achievement.organizer}</p>
              <p className="text-gray-700 text-sm bg-white rounded-lg p-3">
                <strong>Project:</strong> {achievement.project}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Competition Track Record</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="text-blue-100">Major Competitions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-blue-100">Podium Finishes</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-blue-100">National Level</div>
              </div>
              {/* <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Certificate Rate</div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Strengths Demonstrated</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Innovation & Creativity</h4>
              <p className="text-gray-600 text-sm">Consistently developing unique solutions for complex problems across different domains</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Technical Excellence</h4>
              <p className="text-gray-600 text-sm">Strong implementation skills across AI, web development, and hardware design</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2022</div>
              <div className="text-blue-100">Since Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;