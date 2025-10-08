// src/components/sections/ContactSection.js
import React, { useState, useEffect } from 'react';
import { resumeData } from '../../data/resumeData';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    // Update direction when language changes
    document.body.dir = isArabic ? 'rtl' : 'ltr';
  }, [isArabic]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const SERVICE_ID = 'service_3j26u2t';
    const TEMPLATE_ID = 'template_qvsjpid';
    const USER_ID = 'nrfgD0qCkFCTd8_I8';

    // Prepare the data for EmailJS
    const templateParams = {
      from_name: formData.name,
      to_name: "Ahmed Alosta",
      from_email: formData.email,
      to_email: resumeData.personalInfo.email,
      message: formData.message,
      reply_to: formData.email
    };

    // Send the email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsSending(false);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, (error) => {
        console.error('Failed to send email:', error);
        setSubmitStatus('error');
        setIsSending(false);
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      });
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold ${isArabic ? 'text-right' : 'text-center'} text-gray-900 dark:text-white mb-12 section-header`}>
          {t('sections.contact')}
        </h2>
        
        <div className="glass-card p-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isArabic ? 'md:space-x-reverse' : ''}`}>
            <div>
              <h3 className={`text-2xl font-bold ${isArabic ? 'text-right' : ''} text-gray-900 dark:text-white mb-6`}>
                {t('contact.contactInformation')}
              </h3>
              
              <div className={`space-y-6 ${isArabic ? 'text-right' : ''}`}>
                <div className={`flex ${isArabic ? 'flex-row-reverse' : 'flex-row'} items-start`}>
                  <div className="flex-shrink-0">
                    <svg className={`w-6 h-6 text-blue-600 ${isArabic ? 'mr-3' : 'ml-3'} mt-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className={isArabic ? 'text-left' : ''}>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {t('contact.email')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{resumeData.personalInfo.email}</p>
                  </div>
                </div>
                
                <div className={`flex ${isArabic ? 'flex-row-reverse' : 'flex-row'} items-start`}>
                  <div className="flex-shrink-0">
                    <svg className={`w-6 h-6 text-blue-600 ${isArabic ? 'mr-3' : 'ml-3'} mt-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className={isArabic ? 'text-left' : ''}>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {t('contact.location')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{resumeData.personalInfo.location}</p>
                  </div>
                </div>
                
                {/* Updated LinkedIn section - now a clickable link */}
                <a 
                  href={resumeData.personalInfo.linkedin.startsWith('http') ? 
                    resumeData.personalInfo.linkedin : 
                    `https://${resumeData.personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex ${isArabic ? 'flex-row-reverse' : 'flex-row'} items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                >
                  <div className="flex-shrink-0">
                    <svg className={`w-6 h-6 text-blue-600 ${isArabic ? 'mr-3' : 'ml-3'} mt-1`} fill="#0a66c2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className={isArabic ? 'text-left' : ''}>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {t('contact.linkedin')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {resumeData.personalInfo.linkedin.replace('https://', '').replace('http://', '')}
                    </p>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold ${isArabic ? 'text-right' : ''} text-gray-900 dark:text-white mb-6`}>
                {t('contact.sendMessage')}
              </h3>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className={`mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300 ${isArabic ? 'text-right' : ''}`}>
                  <strong>{t('contact.success')}!</strong> {t('contact.successMessage')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={`mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 ${isArabic ? 'text-right' : ''}`}>
                  <strong>{t('contact.error')}:</strong> {t('contact.errorMessage')} {resumeData.personalInfo.email}.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isArabic ? 'text-right' : ''}`}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${isArabic ? 'text-right' : ''}`}
                    placeholder={t('contact.yourName')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isArabic ? 'text-right' : ''}`}>
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${isArabic ? 'text-right' : ''}`}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isArabic ? 'text-right' : ''}`}>
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${isArabic ? 'text-right' : ''}`}
                    placeholder={t('contact.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full btn-gradient px-6 py-3 rounded-xl text-base font-medium flex items-center justify-center ${
                    isSending ? 'opacity-80 cursor-not-allowed' : ''
                  } ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  {isSending ? (
                    <>
                      <svg className={`animate-spin ${isArabic ? 'mr-3' : 'ml-3'} h-5 w-5 text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sending')}
                    </>
                  ) : t('contact.sendMessage')}
                </button>
              </form>
              
              <div className={`mt-4 ${isArabic ? 'text-right' : 'text-center'} text-sm text-gray-500 dark:text-gray-400`}>
                {t('contact.orSendDirectly')}{' '}
                <a 
                  href={`mailto:${resumeData.personalInfo.email}`} 
                  className="link-underline text-blue-600 dark:text-blue-400 hover:text-blue-700"
                >
                  {resumeData.personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default ContactSection;