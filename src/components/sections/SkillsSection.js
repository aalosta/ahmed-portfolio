// src/components/sections/SkillsSection.js
import React from 'react';
import { resumeData } from '../../data/resumeData';

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-header">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.technical.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-tag bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 
                             border border-blue-100 dark:border-blue-800/50 
                             px-4 py-2 rounded-xl text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Professional Strengths</h3>
            <div className="space-y-4">
              {resumeData.skills.soft.map((strength, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-600 dark:bg-blue-400 w-2 h-2 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-6">Professional Training</h3>
            <ul className="space-y-3">
              {resumeData.training.map((training, index) => (
                <li key={index} className="flex items-start border-l-4 border-blue-600 dark:border-blue-400 pl-3 py-1">
                  <span className="text-gray-700 dark:text-gray-300">{training}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;