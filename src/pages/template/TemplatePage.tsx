import { ResumeTemplates } from '@/components/resume-templates'

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">Choose Your Resume Template</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Select from our collection of 10 professionally designed, ATS-friendly resume templates.
      </p>
      <ResumeTemplates />
    </div>
  )
}

