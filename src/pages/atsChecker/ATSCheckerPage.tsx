'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function ATSCheckerPage() {
  const [resumeText, setResumeText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<{ score: number; suggestions: string[]; error?: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      setFile(file)
      
      if (file.type === 'application/pdf') {
        setResumeText("PDF content would be extracted here")
      } else if (file.type.startsWith('image/')) {
        setResumeText("Image content would be extracted via OCR here")
      } else {
        const text = await file.text()
        setResumeText(text)
      }
    }
  }

  const handleCheck = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/analyze-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setResult(data)
    } catch (error) {
      console.error('Error analyzing resume:', error)
      setResult({ 
        score: 0, 
        suggestions: ['An error occurred while analyzing the resume. Please try again.'],
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsLoading(false)
    }
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
            <Label htmlFor="resume-upload">Upload Resume (PDF, Image, or Text file)</Label>
            <Input
              id="resume-upload"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.txt"
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
          <Button onClick={handleCheck} disabled={isLoading || !resumeText}>
            {isLoading ? 'Analyzing...' : 'Check Resume'}
          </Button>
        </CardContent>
      </Card>
      {result && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>ATS Check Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{result.error}</AlertDescription>
              </Alert>
            ) : (
              <>
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
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

