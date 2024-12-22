'use client'

import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface RichTextEditorProps {
  initialValue: string
  onChange: (value: string) => void
}

export function RichTextEditor({ initialValue, onChange }: RichTextEditorProps) {
  const [value, setValue] = useState(initialValue)

  // Sync the editor with initialValue when it changes
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleChange = (content: string) => {
    setValue(content)
    onChange(content)
  }

  return (
    <div className="space-y-2">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // Text formatting
            [{ align: [] }], // Alignment
            [{ list: 'ordered' }, { list: 'bullet' }], // Lists
            [{ color: [] }, { background: [] }], // Text color and background
            ['clean'], // Remove formatting
          ],
        }}
      />
    </div>
  )
}
