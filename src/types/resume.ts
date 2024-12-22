export type TemplateId = 
  'modern' | 'classic' | 'minimalist' | 'professional' | 'creative' | 'two-column';

export interface ResumeTemplate {
  id: TemplateId;
  name: string;
  description: string;
  preview: string;
}

export interface ResumeCustomization {
  nameAlignment: 'left' | 'center' | 'right';
  infoAlignment: 'left' | 'center' | 'right';
  sectionTitleAlignment: 'left' | 'center' | 'right';
  primaryColor: string;
  secondaryColor: string;
  fontSize: 'small' | 'medium' | 'large';
}

export interface ProjectLink {
  type: 'github' | 'live';
  url: string;
}

export interface ResumeData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    title: string;
    summary: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  experience: {
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    links: ProjectLink[];
  }[];
  customization: ResumeCustomization;
}

export interface TemplateProps {
  resumeData: ResumeData;
}
