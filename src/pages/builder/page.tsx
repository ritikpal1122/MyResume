import { ResumeBuilder } from '@/components/resume-builder'

export default function BuilderPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const template = typeof searchParams.template === 'string' ? searchParams.template : 'modern'

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">Build Your Resume</h1>
      <ResumeBuilder templateId={template} />
    </div>
  )
}

