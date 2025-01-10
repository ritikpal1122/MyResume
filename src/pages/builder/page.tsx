import { ResumeBuilder } from "@/components/resume-builder";

interface ResumeBuilderProps {
  templateId: string;
}

export default function BuilderPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const template = typeof searchParams.template === 'string' ? searchParams.template : 'modern'

  const resumeBuilderProps: ResumeBuilderProps = {
    templateId: template,
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">Build Your Resume</h1>
      <ResumeBuilder {...resumeBuilderProps} />
    </div>
  )
}