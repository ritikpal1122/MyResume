'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

export default function ATSCheckerPage() {
  const [resumeText, setResumeText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<{ score: number; suggestions: string[] } | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleCheck = async () => {
    // In a real application, you would send the file or resumeText to your backend
    // and use an AI service to analyze it. For this example, we'll use a
    // simple placeholder response.
    setResult({
      score: 75,
      suggestions: [
        "Use more industry-specific keywords",
        "Quantify your achievements with metrics",
        "Ensure your contact information is at the top of the resume",
        "Use action verbs to start your bullet points",
        "Tailor your resume to the specific job description"
      ]
    })
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">ATS Resume Checker</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload your resume or paste the text</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resume-upload">Upload Resume (PDF or Image)</Label>
            <Input
              id="resume-upload"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume-text">Or paste your resume text here</Label>
            <Textarea
              id="resume-text"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste the text content of your resume here..."
              rows={10}
            />
          </div>
          <Button onClick={handleCheck}>Check Resume</Button>
        </CardContent>
      </Card>
      {result && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>ATS Check Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">ATS Compatibility Score</h3>
              <Progress value={result.score} className="w-full" />
              <p className="text-sm text-muted-foreground mt-1">{result.score}/100</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Improvement Suggestions</h3>
              <ul className="list-disc pl-5 space-y-1">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

