"use client"

import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Check, FileText, CheckCircle, Sliders, Zap, Github, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import RetroGrid from '@/components/ui/retro-grid'
import { ModeToggle } from '@/components/mode-toggle'

export default function HomePage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prevItems) =>
      prevItems.includes(value)
        ? prevItems.filter((item) => item !== value)
        : [...prevItems, value]
    )
  }


  const features = [
    {
      icon: FileText,
      title: "ATS-Optimized Templates",
      description: "Our templates are designed to pass through Applicant Tracking Systems with ease.",
    },
    {
      icon: CheckCircle,
      title: "Industry-Specific Keywords",
      description: "Incorporate relevant tech industry keywords to make your resume stand out.",
    },
    {
      icon: Sliders,
      title: "Customizable Designs",
      description: "Tailor your resume's look and feel to match your personal brand and target company.",
    },
    {
      icon: Zap,
      title: "Instant Preview",
      description: "See changes in real-time as you build your perfect tech resume.",
    },
  ]

  const testimonials = [
    {
      name: "Rahul Patel",
      role: "Senior Software Engineer",
      content: "TechResume Pro helped me land interviews at top tech companies. The ATS-optimized templates are a game-changer!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
   
    {
      name: "Michael Kumar",
      role: "Data Scientist",
      content: "The industry-specific keywords feature ensured my resume highlighted my most relevant skills. Highly recommended!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Ankita Deshpandey",
      role: "UX Designer",
      content: "I love how easy it is to customize my resume. It truly helped me showcase my design skills and portfolio.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    
  ]

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Great for getting started",
      features: ["1 ATS-optimized template", "Basic customization", "Download as PDF"],
    },
    {
      name: "Pro",
      price: "$9.99/month",
      description: "Perfect for job seekers",
      features: ["5 ATS-optimized templates", "Advanced customization", "Multiple download formats", "Priority support"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: ["Unlimited templates", "Custom branding", "Team collaboration", "API access", "Dedicated account manager"],
    },
  ]

  const faqs = [
    {
      question: "What makes TechResume Pro different from other resume builders?",
      answer: "TechResume Pro is specifically designed for the tech industry, offering ATS-optimized templates, industry-specific keywords, and customizable designs tailored for tech professionals.",
    },
    {
      question: "How does the ATS optimization work?",
      answer: "Our templates are built with ATS (Applicant Tracking System) algorithms in mind, ensuring that your resume is easily parsed and ranked highly by these systems.",
    },
    {
      question: "Can I use TechResume Pro for free?",
      answer: "Yes, we offer a free Basic plan that includes one ATS-optimized template and essential features to help you get started.",
    },
    {
      question: "How often can I update my resume?",
      answer: "You can update your resume as often as you like, regardless of your plan. We encourage keeping your resume up-to-date with your latest accomplishments and skills.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
   <RetroGrid/>
      <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 hero-section">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px] [mask-image:linear-gradient(to_bottom,white,transparent,transparent)] dark:bg-grid-slate-100/[0.03]" />
        <div className="container relative">
            <div className='absolute top-0 right-0  px-2'>
              <ModeToggle/>
            </div>
         
          <motion.div
            className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Craft Your Perfect Tech Resume With Resume Builder
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Build ATS-friendly resumes tailored for the tech industry. Stand out from the crowd and land your dream job with our professional resume builder.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/template">
              <Button size="lg" className="text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        
        </div>
      </section>

    
      <section className="py-20 sm:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 text-center">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover:shadow-lg transition-shadow duration-300 hover:scale-105  dark:hover:shadow-slate-700 dark:hover:shadow-md"
              >
                <Card className="shadow-md dark:shadow-slate-700 dark:shadow-md">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg  hover:scale-105 transition-transform duration-300 dark:hover:shadow-slate-700 dark:hover:shadow-md">
                  <CardHeader>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 sm:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 text-center">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-primary">{plan.price}</p>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Started</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>
                  {faq.question}
                </AccordionTrigger>
                <AnimatePresence>
                  {openItems.includes(`item-${index}`) && (
                    <AccordionContent forceMount>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  )}
                </AnimatePresence>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <motion.div
            className="rounded-3xl bg-primary px-6 py-20 sm:py-32 md:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Land Your Dream Tech Job?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90">
                Start building your professional, ATS-friendly resume today and take the first step towards your next career move.
              </p>
              <Button size="lg" variant="secondary" className="mt-8 text-lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">TechResume Pro</h3>
              <p className="text-sm text-muted-foreground">Building careers in tech, one resume at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TechResume Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

