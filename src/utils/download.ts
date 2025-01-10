import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import type { ResumeData } from '@/types/resume'

export async function downloadResume(resumeElement: HTMLElement, resumeData: ResumeData) {
  try {
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
    })

    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${resumeData.personalInfo.firstName}-${resumeData.personalInfo.lastName}-resume.pdf`)
  } catch (error) {
    console.error('Error generating PDF:', error)
    
  }
}

