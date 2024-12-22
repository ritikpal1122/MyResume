
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
   <div className="w-full">
     <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Tech Resume Builder</h1>
      <p className="mb-8 text-center text-xl text-gray-600">
        Create a professional, ATS-friendly resume <br />
        tailored for the tech industry in minutes.
      </p>
      <div className="space-y-4">
        <Link to="/template">
          <Button size="lg" className="w-full text-lg">
            Get Started
          </Button>
        </Link>
        <Link to="/ats-checker">
          <Button size="lg" variant="outline" className="w-full text-lg">
            ATS Resume Checker
          </Button>
        </Link>
      </div>
    </div>
   </div>
  )
}

