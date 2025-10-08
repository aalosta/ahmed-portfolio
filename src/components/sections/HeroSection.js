// src/components/sections/HeroSection.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePDF } from '../../utils/cvGenerator';
import { resumeData } from '../../data/resumeData';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    // Optional: Add print styles for browser print
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body > *:not(.cv-print-area) {
          display: none;
        }
        .cv-print-area {
          display: block !important;
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          width: 100% !important;
          padding: 20mm !important;
          margin: 0 !important;
          z-index: 9999 !important;
        }
        .no-print {
          display: none !important;
        }
        @page {
          size: A4;
          margin: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePrint = () => {
    // Create a temporary element to hold the printable content
    const printContent = document.createElement('div');
    printContent.className = 'cv-print-area';
    
    // Build the printable content using the same data as your CV generator
    printContent.innerHTML = `
      <div style="font-family: Inter, sans-serif; color: #1e293b; line-height: 1.5; max-width: 210mm; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
          <h1 style="font-size: 22pt; color: #1e40af; margin: 0 0 3px 0; font-weight: 700; line-height: 1.2;">${resumeData.personalInfo.name}</h1>
          <h2 style="font-size: 14pt; color: #3b82f6; margin: 0; font-weight: 600;">${resumeData.personalInfo.title}</h2>
          
          <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; margin-top: 12px; font-size: 9.5pt;">
            <div style="display: flex; align-items: center; gap: 5px;">
              <span>${resumeData.personalInfo.email}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
              <span>${resumeData.personalInfo.location}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
              <span>linkedin.com/in/ahmed-alosta-064143175</span>
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
              <span style="font-weight: 600;">Nationality:</span>
              <span>${resumeData.personalInfo.nationality}</span>
            </div>
          </div>
        </div>

        <!-- Professional Summary -->
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1e40af; font-size: 14pt; font-weight: 600; margin: 0 0 8px 0;">Professional Summary</h3>
          <p style="margin: 0; text-align: justify; line-height: 1.6; color: #475569;">${resumeData.personalInfo.description}</p>
        </div>

        <!-- Work Experience -->
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1e40af; font-size: 14pt; font-weight: 600; margin: 0 0 12px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6; width: fit-content;">Work Experience</h3>
          
          ${resumeData.experience.map(exp => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                <h4 style="font-weight: 600; color: #1e293b; font-size: 11.5pt; margin: 5px 0 3px 0; flex: 1; ${isArabic ? 'text-align: right;' : 'text-align: left;'}">${exp.title}</h4>
                <div style="text-align: ${isArabic ? 'left' : 'right'}; white-space: nowrap; margin-${isArabic ? 'right' : 'left'}: 10px;">
                  <div style="color: #64748b; font-size: 9.5pt; margin-bottom: 2px;">${exp.period}</div>
                  <div style="color: #64748b; font-size: 9.5pt;">${exp.location}</div>
                </div>
              </div>
              <h5 style="font-weight: 500; color: #1e40af; margin: 0 0 5px 0; font-size: 10.5pt; ${isArabic ? 'text-align: right;' : ''}">${exp.company}</h5>
              <p style="margin: 5px 0 0 0; text-align: ${isArabic ? 'right' : 'justify'}; line-height: 1.55; color: #475569; font-size: 9.8pt;">${exp.description}</p>
            </div>
          `).join('')}
        </div>

        <!-- Education -->
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1e40af; font-size: 14pt; font-weight: 600; margin: 0 0 12px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6; width: fit-content;">Education</h3>
          
          ${resumeData.education.map(edu => `
            <div style="margin-bottom: 15px;">
              <h4 style="font-weight: 600; color: #1e293b; font-size: 11.5pt; margin: 5px 0; ${isArabic ? 'text-align: right;' : ''}">${edu.degree}</h4>
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                <span style="color: #1e40af; font-size: 10.5pt; ${isArabic ? 'text-align: right;' : ''}">${edu.institution}</span>
                <div style="text-align: ${isArabic ? 'left' : 'right'}; white-space: nowrap;">
                  <div style="color: #64748b; font-size: 9.5pt; margin-bottom: 2px;">${edu.period}</div>
                  <div style="color: #64748b; font-size: 9.5pt;">${edu.location}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- Skills -->
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1e40af; font-size: 14pt; font-weight: 600; margin: 0 0 12px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6; width: fit-content;">Skills</h3>
          
          <div style="margin-bottom: 15px;">
            <h4 style="color: #1e40af; font-size: 12pt; font-weight: 500; margin: 0 0 8px 0; ${isArabic ? 'text-align: right;' : ''};">Technical Skills</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; ${isArabic ? 'direction: rtl;' : ''}">
              ${resumeData.skills.technical.map(skill => `
                <span style="background-color: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-size: 9.5pt; border: 1px solid #bfdbfe;">${skill}</span>
              `).join('')}
            </div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <h4 style="color: #1e40af; font-size: 12pt; font-weight: 500; margin: 0 0 8px 0; ${isArabic ? 'text-align: right;' : ''};">Professional Strengths</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; ${isArabic ? 'direction: rtl;' : ''}">
              ${resumeData.skills.soft.map(strength => `
                <span style="background-color: #f0f9ff; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-size: 9.5pt;">${strength}</span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Additional Sections -->
        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px;">
          <!-- Languages -->
          <div style="flex: 1; min-width: 200px;">
            <h4 style="color: #1e40af; font-size: 12pt; font-weight: 500; margin: 0 0 8px 0; ${isArabic ? 'text-align: right;' : ''};">Languages</h4>
            <ul style="padding-${isArabic ? 'right' : 'left'}: 18px; margin: 0;">
              ${resumeData.personalInfo.languages.map(lang => `
                <li style="margin-bottom: 8px; font-size: 9.5pt; ${isArabic ? 'text-align: right;' : ''}">
                  <strong>${lang.language}:</strong> ${lang.proficiency}
                </li>
              `).join('')}
            </ul>
          </div>
          
          <!-- Training -->
          <div style="flex: 1; min-width: 200px;">
            <h4 style="color: #1e40af; font-size: 12pt; font-weight: 500; margin: 0 0 8px 0; ${isArabic ? 'text-align: right;' : ''};">Training & Certifications</h4>
            <ul style="padding-${isArabic ? 'right' : 'left'}: 18px; margin: 0;">
              ${resumeData.training.map(cert => `
                <li style="margin-bottom: 7px; font-size: 9.5pt; ${isArabic ? 'text-align: right;' : ''}">${cert}</li>
              `).join('')}
            </ul>
          </div>
        </div>
        
        <!-- Interests -->
        <div style="margin-bottom: 15px;">
          <h4 style="color: #1e40af; font-size: 12pt; font-weight: 500; margin: 0 0 8px 0; ${isArabic ? 'text-align: right;' : ''};">Interests</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; ${isArabic ? 'direction: rtl;' : ''}">
            ${resumeData.interests.map(interest => `
              <span style="background-color: #e0f2fe; color: #0c4a6e; padding: 2px 7px; border-radius: 4px; font-size: 9.5pt;">${interest}</span>
            `).join('')}
          </div>
        </div>
        
        <!-- Footer -->
        <div style="margin-top: 25px; padding-top: 12px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 8.5pt;">
          Printed from ${window.location.origin} on ${new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
    `;

    // Add the print content to the body
    document.body.innerHTML = '';
    document.body.appendChild(printContent);
    
    // Trigger print dialog
    window.print();
    
    // Restore the original page after printing
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
    

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex ${isArabic ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'} items-center`}>
          {/* Left side - Text content */}
          <div className={`md:w-1/2 mb-10 md:mb-0 ${isArabic ? 'md:pl-12' : 'md:pr-12'} animate-slide-up`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('hero.title')}</h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">{t('hero.subtitle')}</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t('hero.description')}
            </p>
            <div className={`flex ${isArabic ? 'flex-col-reverse' : 'flex-col'} sm:flex-row gap-4`}>
              {/* Corrected CV Download Button - No routing components */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  generatePDF();
                  
                  // Track download
                  if (window.gtag) {
                    window.gtag('event', 'download', {
                      'event_category': 'CV',
                      'event_label': 'Hero_Download'
                    });
                  }
                }}
                className="btn-gradient px-6 py-3 rounded-xl text-lg font-medium flex items-center justify-center"
              >
                <svg className={`w-5 h-5 ${isArabic ? 'mr-2' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                {t('hero.downloadCV')}
              </button>

              <div className={`flex ${isArabic ? 'flex-col-reverse' : 'flex-col'} sm:flex-row gap-4`}>
                {/* Corrected CV Print Button - No routing components */}
                <button 
                  onClick={handlePrint}
                  className="btn-gradient px-6 py-3 rounded-xl text-lg font-medium flex items-center justify-center"
                >
                  <svg className={`w-5 h-5 ${isArabic ? 'mr-2' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4m0 0h8m-8 0a2 2 0 01-2-2v-4a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2m-8 0h4"></path>
                  </svg>
                  {t('hero.printCV')}
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Professional image */}
          <div className="md:w-1/2 flex justify-center animate-slide-up delay-100">
            <div className="relative">
              {/* Professional headshot container */}
              <div className="glass-card p-2 shadow-soft hover:shadow-xl transition-all duration-300">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800">
                  <img 
                    src="/img/Ahmed.jpg" 
                    alt="Ahmed Alosta - Embedded Systems Engineer" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <span class="text-white text-5xl font-bold">AA</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl float-element opacity-70"></div>
              </div>
              
              {/* Current position indicator */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-1 rounded-full shadow-md current-position-badge">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('hero.currentPosition')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;