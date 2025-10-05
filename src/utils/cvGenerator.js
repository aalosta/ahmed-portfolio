import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { resumeData } from '../data/resumeData';

export const generatePDF = () => {
  // Create a hidden element to render the CV content
  const cvElement = document.createElement('div');
  cvElement.style.position = 'absolute';
  cvElement.style.left = '-9999px';
  cvElement.style.width = '210mm'; // A4 width
  cvElement.style.backgroundColor = 'white';
  cvElement.style.padding = '20mm';
  cvElement.style.fontFamily = 'Inter, sans-serif';
  cvElement.style.color = '#1e293b';
  cvElement.style.fontSize = '11pt';
  cvElement.style.lineHeight = '1.6';
  
  // Build the CV content using the same data as your website
  cvElement.innerHTML = `
    <div style="max-width: 100%;">
      <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 15px;">
        <h1 style="font-size: 24pt; color: #1e40af; margin: 0;">${resumeData.personalInfo.name}</h1>
        <h2 style="font-size: 16pt; color: #3b82f6; margin: 10px 0 5px 0; font-weight: 600;">${resumeData.personalInfo.title}</h2>
        <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; margin-top: 10px;">
          <div style="display: flex; align-items: center; gap: 5px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #3b82f6;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>${resumeData.personalInfo.email}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 5px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #3b82f6;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>${resumeData.personalInfo.location}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 5px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #3b82f6;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.927-1.756 3.353 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.927 0 3.353a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.927 1.756-3.353 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.927 0-3.353a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>linkedin.com/in/ahmed-alosta-064143175</span>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: #3b82f6; border-left: 4px solid #3b82f6; padding-left: 10px; margin: 15px 0 10px 0;">Professional Summary</h3>
        <p>${resumeData.personalInfo.description}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: #3b82f6; border-left: 4px solid #3b82f6; padding-left: 10px; margin: 15px 0 10px 0;">Work Experience</h3>
        ${resumeData.experience.map(exp => `
          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <h4 style="font-weight: 600; color: #1e293b;">${exp.title}</h4>
              <span style="color: #64748b; font-size: 0.9em;">${exp.period}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <h5 style="font-weight: 500; color: #1e40af; margin: 0;">${exp.company}</h5>
              <span style="color: #64748b; font-size: 0.9em;">${exp.location}</span>
            </div>
            <p style="margin: 0; text-align: justify;">${exp.description}</p>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 20px; break-inside: avoid;">
        <h3 style="color: #3b82f6; border-left: 4px solid #3b82f6; padding-left: 10px; margin: 15px 0 10px 0;">Education</h3>
        ${resumeData.education.map(edu => `
          <div style="margin-bottom: 15px;">
            <h4 style="font-weight: 600; color: #1e293b; margin: 5px 0;">${edu.degree}</h4>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #1e40af;">${edu.institution}</span>
              <span style="color: #64748b;">${edu.period}</span>
            </div>
            <div style="color: #64748b; font-size: 0.9em;">${edu.location}</div>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 20px;">
        <div style="flex: 1; min-width: 300px; margin-bottom: 20px;">
          <h3 style="color: #3b82f6; border-left: 4px solid #3b82f6; padding-left: 10px; margin: 15px 0 10px 0;">Technical Skills</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${resumeData.skills.technical.map(skill => `
              <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 0.9em;">${skill}</span>
            `).join('')}
          </div>
        </div>
        
        <div style="flex: 1; min-width: 300px; margin-bottom: 20px;">
          <h3 style="color: #3b82f6; border-left: 4px solid #3b82f6; padding-left: 10px; margin: 15px 0 10px 0;">Professional Strengths</h3>
          <ul style="padding-left: 20px;">
            ${resumeData.skills.soft.map(strength => `
              <li style="margin-bottom: 5px;">${strength}</li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: #3b82f6; border-left: 4px solid #3b82f6; padding-left: 10px; margin: 15px 0 10px 0;">Languages</h3>
          <ul style="padding-left: 20px;">
            ${resumeData.personalInfo.languages.map(lang => `
              <li style="margin-bottom: 8px;">
                <strong>${lang.language}:</strong> ${lang.proficiency}
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: #3b82f6; border-left: 4px solid #3b82f6; padding-left: 10px; margin: 15px 0 10px 0;">Training & Certifications</h3>
          <ul style="padding-left: 20px;">
            ${resumeData.training.map(cert => `
              <li style="margin-bottom: 5px;">${cert}</li>
            `).join('')}
          </ul>
        </div>
      </div>
      
      <div style="margin-top: 20px; text-align: center; color: #64748b; font-size: 0.8em; border-top: 1px solid #e2e8f0; padding-top: 10px;">
        Generated from ${window.location.origin} on ${new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>
  `;

  // Add the element to the DOM
  document.body.appendChild(cvElement);
  
  // Use html2canvas to render the element to canvas
  html2canvas(cvElement, {
    scale: 2,
    useCORS: true,
    logging: false
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Clean up
    document.body.removeChild(cvElement);
    
    // Save the PDF
    pdf.save(`Ahmed_Alosta_CV_${new Date().toISOString().slice(0, 10)}.pdf`);
  });
};