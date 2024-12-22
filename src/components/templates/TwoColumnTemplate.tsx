import React from 'react';
import { TemplateProps } from '@/types/resume';

export const TwoColumnTemplate: React.FC<TemplateProps> = ({ resumeData }) => {
  const { personalInfo, experience, education, skills, projects, customization } = resumeData;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-4xl mx-auto bg-white text-gray-800" style={{ fontSize: customization.fontSize === 'small' ? '14px' : customization.fontSize === 'large' ? '18px' : '16px' }}>
      {/* Left Column */}
      <div className="md:w-1/3 space-y-6">
        {/* Personal Info */}
        <div className={`text-${customization.nameAlignment}`}>
          <h1 className="text-3xl font-bold" style={{ color: customization.primaryColor }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-lg" style={{ color: customization.secondaryColor }}>{personalInfo.title}</p>
        </div>

        {/* Contact Info */}
        <div className={`text-${customization.infoAlignment} space-y-1`}>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
        </div>

        {/* Links */}
        <div className={`text-${customization.infoAlignment} space-y-1`}>
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:underline">LinkedIn</a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="block hover:underline">GitHub</a>
          )}
          {personalInfo.portfolio && (
            <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" className="block hover:underline">Portfolio</a>
          )}
        </div>

        {/* Skills */}
        <div>
          <h2 className={`text-xl font-semibold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Skills</h2>
          {skills.map((skillCategory, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold">{skillCategory.category}</h3>
              <p>{skillCategory.items.join(', ')}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className={`text-xl font-semibold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p>{edu.school}</p>
              <p className="text-sm" style={{ color: customization.secondaryColor }}>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-2/3 space-y-6">
        {/* Summary */}
        <div>
          <h2 className={`text-xl font-semibold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Professional Summary</h2>
          <p>{personalInfo.summary}</p>
        </div>

        {/* Experience */}
        <div>
          <h2 className={`text-xl font-semibold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{exp.position}</h3>
              <p className="italic">{exp.company}</p>
              <p className="text-sm" style={{ color: customization.secondaryColor }}>{exp.startDate} - {exp.endDate} | {exp.location}</p>
              <p className="mt-1">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <h2 className={`text-xl font-semibold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p className="text-sm mt-1">Technologies: {project.technologies.join(', ')}</p>
              <div className="flex space-x-2 mt-1">
                {project.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.type === 'github' ? 'GitHub' : 'Live Demo'}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

