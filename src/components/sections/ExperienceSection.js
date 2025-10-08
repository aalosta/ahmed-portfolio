// src/components/sections/ExperienceSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { resumeData } from '../../data/resumeData';

const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-header ${isArabic ? 'text-right' : ''}`}>
          {isArabic ? 'الخبرة العملية' : 'Work Experience'}
        </h2>
        
        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="glass-card p-8">
              <div className={`flex ${isArabic ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'} md:justify-between md:items-start mb-4`}>
                <div className={isArabic ? 'text-right' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {isArabic && exp.title_ar ? exp.title_ar : exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {isArabic && exp.company_ar ? exp.company_ar : exp.company}
                  </p>
                </div>
                <div className={`mb-2 md:mb-0 ${isArabic ? 'text-left md:text-right' : 'text-right'}`}>
                  <p className="text-gray-600 dark:text-gray-400">
                    {isArabic && exp.period_ar ? exp.period_ar : exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {isArabic && exp.location_ar ? exp.location_ar : exp.location}
                  </p>
                </div>
              </div>
              <p className={`text-gray-700 dark:text-gray-300 ${isArabic ? 'text-right' : ''}`}>
                {isArabic && exp.description_ar ? exp.description_ar : exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;