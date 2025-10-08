// src/pages/HomePage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import EducationSection from '../components/sections/EducationSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  // This line initializes i18n and is required for the app to work
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  
  return (
    <>
      <HeroSection />
      
      {/* Add ID to each section for anchor navigation */}
      <div id="education">
        <EducationSection />
      </div>

           <div id="skills">
        <SkillsSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;