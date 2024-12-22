'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Github, Globe, Trash2 } from 'lucide-react'
import type { ResumeData, TemplateId, ProjectLink } from '@/types/resume'
import { downloadResume } from '@/utils/download'
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalistTemplate } from './templates/MinimalistTemplate';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { TwoColumnTemplate } from './templates/TwoColumnTemplate';
import { useLocation } from 'react-router-dom'
import { RichTextEditor } from './rich-text-editor'

const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
    summary: '',
    linkedin: '',
    github: '',
    portfolio: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  customization: {
    nameAlignment: 'left',
    infoAlignment: 'left',
    sectionTitleAlignment: 'left',
    primaryColor: '#000000',
    secondaryColor: '#666666',
    fontSize: 'medium',
  },
}

// interface ResumeBuilderProps {
//   templateId: TemplateId;
// }

export function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)

  const location = useLocation();
  const [templateId, setTemplateId] = useState<TemplateId>('modern'); // Default template

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('templateId') as TemplateId;
    if (id) {
      setTemplateId(id);
    }
  }, [location.search]);
  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [e.target.name]: e.target.value,
      },
    }))
  }

  const convertCustomTagsToHTML = (text: string) => {
    return text
      .replace(/{bold}/g, '<b>')
      .replace(/{\/bold}/g, '</b>');
  };
  
  const handleSummaryChange = (value: string) => {
    const convertedValue = convertCustomTagsToHTML(value);
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        summary: convertedValue
      }
    }));
  };

  const handleExperienceDescriptionChange = (expIndex: number, value: string) => {
    setResumeData(prev => {
      const newExperience = [...prev.experience]
      newExperience[expIndex].description = value
      return { ...prev, experience: newExperience }
    })
  }

  const handleProjectDescriptionChange = (projectIndex: number, value: string) => {
    setResumeData(prev => {
      const newProjects = [...prev.projects]
      newProjects[projectIndex].description = value
      return { ...prev, projects: newProjects }
    })
  }

  const handleCustomizationChange = (
    key: keyof ResumeData['customization'],
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      customization: {
        ...prev.customization,
        [key]: value,
      },
    }))
  }

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: '',
          position: '',
          location: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }))
  }

  const deleteExperience = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }))
  }

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          school: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
        },
      ],
    }))
  }

  const deleteEducation = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }))
  }

  const addSkillCategory = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          category: '',
          items: [],
        },
      ],
    }))
  }

  const deleteSkillCategory = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: '',
          description: '',
          technologies: [],
          links: [],
        },
      ],
    }))
  }

  const deleteProject = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }))
  }

  const addProjectLink = (projectIndex: number, type: ProjectLink['type']) => {
    setResumeData((prev) => {
      const newProjects = [...prev.projects]
      newProjects[projectIndex].links.push({ type, url: '' })
      return { ...prev, projects: newProjects }
    })
  }

  const handleDownload = () => {
    const resumeElement = document.getElementById('resume-preview')
    if (resumeElement) {
      downloadResume(resumeElement, resumeData)
    }
  }

  const renderTemplate = () => {
    switch (templateId) {
      case 'modern':
        return <ModernTemplate resumeData={resumeData} />;
      case 'classic':
        return <ClassicTemplate resumeData={resumeData} />;
      case 'minimalist':
        return <MinimalistTemplate resumeData={resumeData} />;
      case 'professional':
        return <ProfessionalTemplate resumeData={resumeData} />;
      case 'creative':
        return <CreativeTemplate resumeData={resumeData} />;
      case 'two-column':
        return <TwoColumnTemplate resumeData={resumeData} />;
      default:
        return <ModernTemplate resumeData={resumeData} />;
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 p-[100px]">
      <div>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={resumeData.personalInfo.firstName}
                      onChange={handlePersonalInfoChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={resumeData.personalInfo.lastName}
                      onChange={handlePersonalInfoChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={resumeData.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={resumeData.personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={resumeData.personalInfo.location}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={resumeData.personalInfo.title}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <RichTextEditor
                    initialValue={resumeData.personalInfo.summary}
                    onChange={handleSummaryChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={resumeData.personalInfo.linkedin}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input
                    id="github"
                    name="github"
                    value={resumeData.personalInfo.github}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    value={resumeData.personalInfo.portfolio}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Work Experience</CardTitle>
                <Button onClick={addExperience} variant="outline">
                  Add Experience
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="space-y-4 rounded-lg border p-4">
                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => {
                          const newExperience = [...resumeData.experience]
                          newExperience[index].company = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            experience: newExperience,
                          }))
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Position</Label>
                      <Input
                        value={exp.position}
                        onChange={(e) => {
                          const newExperience = [...resumeData.experience]
                          newExperience[index].position = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            experience: newExperience,
                          }))
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input
                        value={exp.location}
                        onChange={(e) => {
                          const newExperience = [...resumeData.experience]
                          newExperience[index].location = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            experience: newExperience,
                          }))
                        }}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input
                          type="date"
                          value={exp.startDate}
                          onChange={(e) => {
                            const newExperience = [...resumeData.experience]
                            newExperience[index].startDate = e.target.value
                            setResumeData((prev) => ({
                              ...prev,
                              experience: newExperience,
                            }))
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input
                          type="date"
                          value={exp.endDate}
                          onChange={(e) => {
                            const newExperience = [...resumeData.experience]
                            newExperience[index].endDate = e.target.value
                            setResumeData((prev) => ({
                              ...prev,
                              experience: newExperience,
                            }))
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <RichTextEditor
                        initialValue={exp.description}
                        onChange={(value) => handleExperienceDescriptionChange(index, value)}
                      />
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => deleteExperience(index)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Experience
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Education</CardTitle>
                <Button onClick={addEducation} variant="outline">
                  Add Education
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="space-y-4 rounded-lg border p-4">
                    <div className="space-y-2">
                      <Label>School/College</Label>
                      <Input
                        value={edu.school}
                        onChange={(e) => {
                          const newEducation = [...resumeData.education]
                          newEducation[index].school = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            education: newEducation,
                          }))
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Degree</Label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => {
                          const newEducation = [...resumeData.education]
                          newEducation[index].degree = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            education: newEducation,
                          }))
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Field of Study</Label>
                      <Input
                        value={edu.field}
                        onChange={(e) => {
                          const newEducation = [...resumeData.education]
                          newEducation[index].field = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            education: newEducation,
                          }))
                        }}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input
                          type="date"
                          value={edu.startDate}
                          onChange={(e) => {
                            const newEducation = [...resumeData.education]
                            newEducation[index].startDate = e.target.value
                            setResumeData((prev) => ({
                              ...prev,
                              education: newEducation,
                            }))
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input
                          type="date"
                          value={edu.endDate}
                          onChange={(e) => {
                            const newEducation = [...resumeData.education]
                            newEducation[index].endDate = e.target.value
                            setResumeData((prev) => ({
                              ...prev,
                              education: newEducation,
                            }))
                          }}
                        />
                      </div>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => deleteEducation(index)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Education
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Skills</CardTitle>
                <Button onClick={addSkillCategory} variant="outline">
                  Add Skill Category
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.skills.map((skillCategory, index) => (
                  <div key={index} className="space-y-4 rounded-lg border p-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Input
                        value={skillCategory.category}
                        onChange={(e) => {
                          const newSkills = [...resumeData.skills]
                          newSkills[index].category = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            skills: newSkills,
                          }))
                        }}
                        placeholder="e.g., Programming Languages, Frameworks, Tools"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Skills (comma-separated)</Label>
                      <Input
                        value={skillCategory.items.join(', ')}
                        onChange={(e) => {
                          const newSkills = [...resumeData.skills]
                          newSkills[index].items = e.target.value.split(',').map((item) => item.trim())
                          setResumeData((prev) => ({
                            ...prev,
                            skills: newSkills,
                          }))
                        }}
                        placeholder="e.g., JavaScript, React, Node.js"
                      />
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => deleteSkillCategory(index)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Skill Category
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Projects</CardTitle>
                <Button onClick={addProject} variant="outline">
                  Add Project
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="space-y-4 rounded-lg border p-4">
                    <div className="space-y-2">
                      <Label>Project Name</Label>
                      <Input
                        value={project.name}
                        onChange={(e) => {
                          const newProjects = [...resumeData.projects]
                          newProjects[index].name = e.target.value
                          setResumeData((prev) => ({
                            ...prev,
                            projects: newProjects,
                          }))
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <RichTextEditor
                        initialValue={project.description}
                        onChange={(value) => handleProjectDescriptionChange(index, value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Technologies (comma-separated)</Label>
                      <Input
                        value={project.technologies.join(', ')}
                        onChange={(e) => {
                          const newProjects = [...resumeData.projects]
                          newProjects[index].technologies = e.target.value.split(',').map((item) => item.trim())
                          setResumeData((prev) => ({
                            ...prev,
                            projects: newProjects,
                          }))
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Project Links</Label>
                      {project.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="flex items-center space-x-2">
                          <Select
                            value={link.type}
                            onValueChange={(value: ProjectLink['type']) => {
                              const newProjects = [...resumeData.projects]
                              newProjects[index].links[linkIndex].type = value
                              setResumeData((prev) => ({
                                ...prev,
                                projects: newProjects,
                              }))
                            }}
                          >
                            <SelectTrigger className="w-[100px]">
                              <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="github">GitHub</SelectItem>
                              <SelectItem value="live">Live</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            value={link.url}
                            onChange={(e) => {
                              const newProjects = [...resumeData.projects]
                              newProjects[index].links[linkIndex].url = e.target.value
                              setResumeData((prev) => ({
                                ...prev,
                                projects: newProjects,
                              }))
                            }}
                            placeholder="Enter URL"
                          />
                        </div>
                      ))}
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => addProjectLink(index, 'github')}
                          variant="outline"
                          size="sm"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Add GitHub Link
                        </Button>
                        <Button
                          onClick={() => addProjectLink(index, 'live')}
                          variant="outline"
                          size="sm"
                        >
                          <Globe className="mr-2 h-4 w-4" />
                          Add Live Link
                        </Button>
                      </div>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => deleteProject(index)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Project
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customize">
            <Card>
              <CardHeader>
                <CardTitle>Customize Resume</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Name Alignment</Label>
                  <Select
                    value={resumeData.customization.nameAlignment}
                    onValueChange={(value) => handleCustomizationChange('nameAlignment', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select name alignment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Info Alignment</Label>
                  <Select
                    value={resumeData.customization.infoAlignment}
                    onValueChange={(value) => handleCustomizationChange('infoAlignment', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select info alignment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Section Title Alignment</Label>
                  <Select
                    value={resumeData.customization.sectionTitleAlignment}
                    onValueChange={(value) => handleCustomizationChange('sectionTitleAlignment', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select section title alignment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <Input
                    type="color"
                    value={resumeData.customization.primaryColor}
                    onChange={(e) => handleCustomizationChange('primaryColor', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <Input
                    type="color"
                    value={resumeData.customization.secondaryColor}
                    onChange={(e) => handleCustomizationChange('secondaryColor', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Font Size</Label>
                  <Select
                    value={resumeData.customization.fontSize}
                    onValueChange={(value) => handleCustomizationChange('fontSize', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="sticky top-4 h-fit rounded-lg border bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Preview ({templateId} template)</h3>
          <Button onClick={handleDownload}>Download PDF</Button>
        </div>
        <div 
          id="resume-preview" 
          className="aspect-[1/1.4] w-full overflow-auto rounded-lg border bg-white p-8 shadow-sm"
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  )
}

