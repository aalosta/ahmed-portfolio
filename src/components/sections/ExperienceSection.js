// src/components/sections/ExperienceSection.js
import React from 'react';
import { resumeData } from '../../data/resumeData';

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-header">Work Experience</h2>
        
        <div className="space-y-12">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="glass-card p-6 timeline-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400 text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;