import React from 'react';
import { TemplateProps } from '@/types/resume';

export const MinimalistTemplate: React.FC<TemplateProps> = ({ resumeData }) => {
  const { personalInfo, experience, education, skills, projects, customization } = resumeData;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      <header className={`text-${customization.nameAlignment} mb-6`}>
        <h1 className="text-2xl font-light" style={{ color: customization.primaryColor }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-lg" style={{ color: customization.secondaryColor }}>{personalInfo.title}</p>
      </header>

      <section className={`text-${customization.infoAlignment} mb-6 text-sm`}>
        <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>
        <div className="flex justify-center space-x-4 mt-2">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          )}
          {personalInfo.portfolio && (
            <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Portfolio</a>
          )}
        </div>
      </section>

      <section className="mb-6">
        <h2 className={`text-lg font-light mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Summary</h2>
        <p className="text-sm">{personalInfo.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className={`text-lg font-light mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-medium">{exp.position} - {exp.company}</h3>
            <p className="text-xs" style={{ color: customization.secondaryColor }}>{exp.startDate} - {exp.endDate} | {exp.location}</p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className={`text-lg font-light mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-base font-medium">{edu.degree} in {edu.field}</h3>
            <p className="text-sm">{edu.school}</p>
            <p className="text-xs" style={{ color: customization.secondaryColor }}>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className={`text-lg font-light mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Skills</h2>
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-base font-medium">{skillCategory.category}</h3>
            <p className="text-sm">{skillCategory.items.join(', ')}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className={`text-lg font-light mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-medium">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
            <p className="text-xs">Technologies: {project.technologies.join(', ')}</p>
            <div className="flex space-x-2 mt-1">
              {project.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-xs"
                >
                  {link.type === 'github' ? 'GitHub' : 'Live Demo'}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

