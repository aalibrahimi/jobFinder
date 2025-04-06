"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { ArrowRight, BriefcaseBusiness, Code, DollarSign, Search, Users, Building, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("companies")

  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$120k - $150k",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$130k - $160k",
      tags: ["JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "DesignStudio",
      location: "New York, NY",
      salary: "$90k - $120k",
      tags: ["React", "CSS", "UI/UX"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
     
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="">
            <Tabs defaultValue="companies" className="mb-12 grid grid-cols-2 px-5 md:px-0 justify-center items-center" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8 col-span-2">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="companies">For Companies</TabsTrigger>
                  <TabsTrigger value="developers">For Developers</TabsTrigger>
                </TabsList>
              </div>

              <div className="col-span-2 px-5 lg:px-20 2xl:px-75">
                <TabsContent value="companies">
                  <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <motion.div
                      className="flex flex-col justify-center space-y-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                    >
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                          Connect with top developer talent
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Post your job listings and reach thousands of qualified developers. Find the perfect match for
                          your team.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="lg" className="gap-1.5">
                            Post a Job <ArrowRight className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="lg" variant="outline">
                            Learn More
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative w-full max-w-sm overflow-hidden rounded-xl border bg-background p-6 shadow-lg">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold">Find the perfect developer</h3>
                            <p className="text-sm text-muted-foreground">
                              Post your job and start receiving applications from qualified candidates.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <div className="relative">
                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                            <div className="relative">
                              <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <select className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                <option value="">Select experience level</option>
                                <option value="junior">Junior (1-2 years)</option>
                                <option value="mid">Mid-level (3-5 years)</option>
                                <option value="senior">Senior (5+ years)</option>
                              </select>
                            </div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                              <Button className="w-full">Search Developers</Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>

                <TabsContent value="developers">
                  <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <motion.div
                      className="flex flex-col justify-center space-y-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                    >
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                          Find your dream developer job
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Browse thousands of developer opportunities from top companies. Take the next step in your
                          career.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="lg" className="gap-1.5">
                            Browse Jobs <ArrowRight className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="lg" variant="outline">
                                Upload Resume
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Upload your resume</DialogTitle>
                                <DialogDescription>
                                  Upload your resume to apply for jobs with a single click.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="name">Full Name</Label>
                                  <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="email">Email</Label>
                                  <Input id="email" type="email" placeholder="johndoe@example.com" />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="resume">Resume</Label>
                                  <Input id="resume" type="file" />
                                </div>
                              </div>
                              <Button type="submit" className="w-full">
                                Submit
                              </Button>
                            </DialogContent>
                          </Dialog>
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative w-full max-w-sm overflow-hidden rounded-xl border bg-background p-6 shadow-lg">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold">Find your next role</h3>
                            <p className="text-sm text-muted-foreground">
                              Search for jobs that match your skills and experience.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <div className="relative">
                              <Briefcase className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                            <div className="relative">
                              <Building className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <input
                                type="text"
                                placeholder="Location or Remote"
                                className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                              <Button className="w-full">Find Jobs</Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {activeTab === "developers" && (
          <motion.section
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <motion.div variants={fadeIn} className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Job Opportunities</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Explore our latest job listings from top tech companies.
                  </p>
                </motion.div>
              </div>
              <div className="grid gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3">
                {featuredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    variants={fadeIn}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="flex flex-col md:min-w-[400px] 2xl:min-w-[700px] max-w-[700px] rounded-lg border bg-background p-6 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                        New
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Building className="mr-1 h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="mr-1 h-4 w-4" />
                        {job.salary}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-4">
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button className="w-full">Apply Now</Button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    View All Jobs
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ display: activeTab === "developers" ? "none" : "block" }}
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div variants={fadeIn} className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why companies choose DevJobs</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of companies that use our platform to find their perfect developer match.
                </p>
              </motion.div>
            </div>
            <div className="grid w-full gap-4 md:gap-5 2xl:gap-0 items-center py-12 lg:grid-cols-3">
              <motion.div
                variants={fadeIn}
                className="flex flex-col justify-self-center md:min-w-[400px] 2xl:min-w-[500px] max-w-[700px] items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Targeted Reach</h3>
                <p className="text-center text-muted-foreground">
                  Connect with developers who have the exact skills your company needs.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex flex-col justify-self-center md:min-w-[400px] 2xl:min-w-[500px] max-w-[700px] items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BriefcaseBusiness className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Quality Candidates</h3>
                <p className="text-center text-muted-foreground">
                  Our platform attracts skilled developers actively looking for new opportunities.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex flex-col justify-self-center md:min-w-[400px] 2xl:min-w-[500px] max-w-[700px] items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cost Effective</h3>
                <p className="text-center text-muted-foreground">
                  Save on recruitment costs with our affordable job posting plans.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 2xl:grid-cols-1">
            <div className="space-y-2 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {activeTab === "developers" ? "Ready to find your dream job?" : "Ready to find your next developer?"}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {activeTab === "developers"
                  ? "Create your profile today and start applying to top tech companies."
                  : "Post your job listing today and start receiving applications from qualified candidates."}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end 2xl:justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gap-1.5">
                  {activeTab === "developers" ? "Create Profile" : "Post a Job"} <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline">
                  {activeTab === "developers" ? "Browse Jobs" : "View Pricing"}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    
    </div>
  )
}

