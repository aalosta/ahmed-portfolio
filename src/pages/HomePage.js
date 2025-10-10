// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import EducationSection from '../components/sections/EducationSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {

  return (
    <>
      <HeroSection />
      
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