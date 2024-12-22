'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import type { ResumeTemplate, TemplateId } from '@/types/resume'
import { useNavigate } from 'react-router-dom'
import resume1 from  "@/assets/resume1.png"

const TEMPLATES: ResumeTemplate[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional design with a modern touch',
    preview: resume1
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Timeless design suitable for traditional industries',
    preview: '/placeholder.svg?height=400&width=300&text=Classic'
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and elegant design focusing on essential information',
    preview: '/placeholder.svg?height=400&width=300&text=Minimalist'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Polished look for experienced professionals',
    preview: '/placeholder.svg?height=400&width=300&text=Professional'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Eye-catching design for creative professionals',
    preview: '/placeholder.svg?height=400&width=300&text=Creative'
  },
  {
    id: 'two-column',
    name: 'Two Column',
    description: 'Efficient layout with two columns for easy scanning',
    preview: '/placeholder.svg?height=400&width=300&text=Two+Column'
  }
]

export function ResumeTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId | null>(null)
  const navigate = useNavigate()

  const handleTemplateClick = (templateId: TemplateId) => {
    setSelectedTemplate(templateId)
  }

  const handleSelectTemplate = () => {
    if (selectedTemplate) {
      navigate(`/builder?templateId=${selectedTemplate}`)
    } else {
      alert('Please select a template to continue.')
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Select a Resume Template</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((template) => (
          <div
            key={template.id}
            className={`p-4 border rounded-lg shadow-md cursor-pointer transition ${
              selectedTemplate === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => handleTemplateClick(template.id)}
          >
            <img
              src={template.preview}
              alt={`${template.name} Preview`}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-4">{template.name}</h2>
            <p className="text-gray-600 mt-2">{template.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          onClick={handleSelectTemplate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          Use Selected Template
        </Button>
      </div>
    </div>
  )
}
