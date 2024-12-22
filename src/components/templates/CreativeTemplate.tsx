import React from 'react';
import { TemplateProps } from '@/types/resume';

export const CreativeTemplate: React.FC<TemplateProps> = ({ resumeData }) => {
  const { personalInfo, experience, education, skills, projects, customization } = resumeData;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-gray-100 to-white shadow-lg rounded-lg">
      <header className={`text-${customization.nameAlignment} mb-6`}>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl font-semibold mt-2" style={{ color: customization.secondaryColor }}>{personalInfo.title}</p>
      </header>

      <section className={`text-${customization.infoAlignment} mb-6`}>
        <p className="font-medium">{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>
        <div className="flex justify-center space-x-4 mt-2">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">GitHub</a>
          )}
          {personalInfo.portfolio && (
            <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Portfolio</a>
          )}
        </div>
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className={`text-2xl font-bold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>About Me</h2>
        <p className="text-justify">{personalInfo.summary}</p>
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className={`text-2xl font-bold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4 border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold">{exp.position}</h3>
            <p className="font-medium text-blue-600">{exp.company}</p>
            <p className="text-sm" style={{ color: customization.secondaryColor }}>{exp.startDate} - {exp.endDate} | {exp.location}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className={`text-2xl font-bold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-2 border-l-4 border-purple-500 pl-4">
            <h3 className="text-lg font-semibold">{edu.degree} in {edu.field}</h3>
            <p className="font-medium text-purple-600">{edu.school}</p>
            <p className="text-sm" style={{ color: customization.secondaryColor }}>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className={`text-2xl font-bold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.flatMap((skillCategory) => 
            skillCategory.items.map((skill, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {skill}
              </span>
            ))
          )}
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className={`text-2xl font-bold mb-2 text-${customization.sectionTitleAlignment}`} style={{ color: customization.primaryColor }}>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4 border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <p className="text-sm font-medium mt-1">Technologies: {project.technologies.join(', ')}</p>
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
      </section>
    </div>
  );
};

