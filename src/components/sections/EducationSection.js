// src/components/sections/EducationSection.js
import React from 'react';
import { resumeData } from '../../data/resumeData';
import { useTranslation } from 'react-i18next';

const EducationSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-header">{t('sections.education')}</h2>
        
        <div className="glass-card p-8">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('education.degree')}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">{t('education.university')}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.period}</p>
              <p className="text-gray-600 dark:text-gray-400">{t('education.location')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;