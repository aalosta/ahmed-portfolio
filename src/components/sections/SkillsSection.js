// src/components/sections/SkillsSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { resumeData } from '../../data/resumeData';

const SkillsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-header">
          {t('sections.skills')}
        </h2>
        
        <div className="glass-card p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('cv.technicalSkills')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.technical.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-5 py-2.5 rounded-xl bg-blue-50 text-blue-700 
                              border border-blue-100 hover:bg-blue-100 transition-colors
                              dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800/50
                              dark:hover:bg-blue-800/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('cv.professionalStrengths')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.soft.map((strength, index) => (
                  <span 
                    key={index}
                    className="px-5 py-2.5 rounded-xl bg-blue-50 text-blue-700 
                              border border-blue-100 hover:bg-blue-100 transition-colors
                              dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800/50
                              dark:hover:bg-blue-800/40"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('cv.languages')}
              </h3>
              <ul className="space-y-4">
                {resumeData.personalInfo.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">{lang.language}</span>
                    <span className="text-gray-600 dark:text-gray-400">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('cv.training')}
              </h3>
              <ul className="space-y-4">
                {resumeData.training.map((cert, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('cv.interests')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-1.5 rounded-lg bg-gray-100 text-gray-800 
                              dark:bg-gray-800 dark:text-gray-200 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;