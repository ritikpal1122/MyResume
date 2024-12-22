import React from "react";
import { TemplateProps } from "@/types/resume";
import { RichTextEditor } from "../rich-text-editor";

export const ModernTemplate: React.FC<TemplateProps> = ({ resumeData }) => {
  const {
    personalInfo,
    experience,
    education,
    skills,
    projects,
    customization,
  } = resumeData;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <header
        className={`text-${customization.nameAlignment.replace(
          "/",
          "\\/"
        )} mb-6`}
      >
        <h1
          className="text-4xl font-bold"
          style={{ color: customization.primaryColor }}
        >
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl" style={{ color: customization.secondaryColor }}>
          {personalInfo.title}
        </p>
      </header>

      <section
        className={`text-${customization.infoAlignment.replace(
          "/",
          "\\/"
        )} mb-6`}
      >
        <p>
          {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {personalInfo.portfolio && (
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Portfolio
            </a>
          )}
        </div>
      </section>

      <section className="mb-6">
        <h2
          className={`text-2xl font-semibold mb-2 text-${customization.sectionTitleAlignment.replace(
            "/",
            "\\/"
          )}`}
          style={{ color: customization.primaryColor }}
        >
          Summary
        </h2>
        <RichTextEditor
          initialValue={personalInfo.summary}
          toolbar={false}
          readOnly={true}
          className="break-words border-0"
        />
      </section>

      <section className="mb-6">
        <h2
          className={`text-2xl font-semibold mb-2 text-${customization.sectionTitleAlignment.replace(
            "/",
            "\\/"
          )}`}
          style={{ color: customization.primaryColor }}
        >
          Experience
        </h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">
              {exp.position} at {exp.company}
            </h3>
            <p
              className="text-sm"
              style={{ color: customization.secondaryColor }}
            >
              {exp.startDate} - {exp.endDate} | {exp.location}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2
          className={`text-2xl font-semibold mb-2 text-${customization.sectionTitleAlignment.replace(
            "/",
            "\\/"
          )}`}
          style={{ color: customization.primaryColor }}
        >
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-semibold">
              {edu.degree} in {edu.field}
            </h3>
            <p>{edu.school}</p>
            <p
              className="text-sm"
              style={{ color: customization.secondaryColor }}
            >
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2
          className={`text-2xl font-semibold mb-2 text-${customization.sectionTitleAlignment.replace(
            "/",
            "\\/"
          )}`}
          style={{ color: customization.primaryColor }}
        >
          Skills
        </h2>
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-semibold">{skillCategory.category}</h3>
            <p>{skillCategory.items.join(", ")}</p>
          </div>
        ))}
      </section>

      <section>
        <h2
          className={`text-2xl font-semibold mb-2 text-${customization.sectionTitleAlignment.replace(
            "/",
            "\\/"
          )}`}
          style={{ color: customization.primaryColor }}
        >
          Projects
        </h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <p className="text-sm">
              Technologies: {project.technologies.join(", ")}
            </p>
            <div className="flex space-x-2 mt-1">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link.type === "github" ? "GitHub" : "Live Demo"}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
