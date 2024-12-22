"use client";

import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps {
  initialValue: string;
  toolbar?: boolean | any; //eslint-disable-line
  readOnly?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export function RichTextEditor({
  initialValue,
  onChange,
  toolbar = [
    ["bold", "italic", "underline", "strike"], // Text formatting
    [{ align: [] }], // Alignment
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    [{ color: [] }, { background: [] }], // Text color and background
    ["clean"], // Remove formatting
  ],
  readOnly,
  className,
}: RichTextEditorProps) {
  const [value, setValue] = useState(initialValue);

  // Sync the editor with initialValue when it changes
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (content: string) => {
    setValue(content);
    if (onChange) onChange(content);
  };

  return (
    <div className="space-y-2 ">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: toolbar,
        }}
        readOnly={readOnly || false}
        className={className}
      />
    </div>
  );
}
