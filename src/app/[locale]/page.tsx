import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BriefcaseBusiness, ChevronRight, MapPin, Search, Star, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GradientText from "@/MyComponents/GradientText";

export default function ImprovedHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-20 md:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: "24px" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-white">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 border-none text-white py-1.5 px-3 text-xs font-medium">
                Better than Indeed • Low Competition
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
             
                Find Remote  <GradientText> Dev Jobs </GradientText> With Fewer Applicants
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg">
                Only jobs with fewer than 50 applicants. Perfect for junior developers, career changers, and indie hackers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-base py-6" asChild>
                  <Link href="/jobs">Browse All Jobs</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base py-6" asChild>
                  <Link href="/post-job">Post a Job <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Find your next opportunity</h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input 
                        type="text" 
                        placeholder="Job title, skill or keyword" 
                        className="pl-10 h-12 rounded-lg w-full"
                      />
                    </div>
                    <div className="relative flex-1">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input 
                        type="text" 
                        placeholder="Remote, Worldwide, or location" 
                        className="pl-10 h-12 rounded-lg w-full"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700 rounded-lg">
                    Search Jobs
                  </Button>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      Remote
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      Entry Level
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      No Experience
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
                Latest Opportunities
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
            </div>
            <Link href="/jobs" className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium">
              View all jobs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Card 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                    AB
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Senior React Developer</h3>
                    <p className="text-gray-500 text-sm">Acme Brands Inc.</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-500">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">Full-time</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">$120k-150k</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Remote</Badge>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-2">Join our team to build innovative solutions using React, TypeScript, and Next.js. Competitive salary and benefits package.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Posted 2 days ago</span>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    <span className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      12 applicants
                    </span>
                  </Badge>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-2">
                <Button asChild className="w-full">
                  <Link href="/jobs/senior-react-developer">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Job Card 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-md flex items-center justify-center text-purple-600 font-bold">
                    SC
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Frontend Engineer</h3>
                    <p className="text-gray-500 text-sm">StartCorp</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-500">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">Contract</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">$70-90/hr</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Hybrid</Badge>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-2">We're looking for a talented frontend engineer to help build our design system. Experience with component libraries preferred.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Posted 5 days ago</span>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    <span className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      28 applicants
                    </span>
                  </Badge>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-2">
                <Button asChild className="w-full">
                  <Link href="/jobs/frontend-engineer">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Job Card 3 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center text-green-600 font-bold">
                    TD
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Junior Developer</h3>
                    <p className="text-gray-500 text-sm">TechDev Solutions</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-500">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">Full-time</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">$60k-80k</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Entry Level</Badge>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-2">Great opportunity for recent graduates. Learn and grow with a supportive team. React and JavaScript knowledge a plus.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Posted 1 day ago</span>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    <span className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      8 applicants
                    </span>
                  </Badge>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-2">
                <Button asChild className="w-full">
                  <Link href="/jobs/junior-developer">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
              Our Impact
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Better Jobs, Less Competition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're focused on quality over quantity, ensuring you spend time on opportunities that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
                <BriefcaseBusiness size={28} />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-900">200+</h3>
              <p className="text-gray-600">Curated Jobs Weekly</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-900">12,000+</h3>
              <p className="text-gray-600">Active Job Seekers</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-900">4x</h3>
              <p className="text-gray-600">Higher Response Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've simplified the job search process to help you find opportunities with less competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-6 text-xl font-bold">
                1
              </div>
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5 bg-blue-200"></div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Curated Selection</h3>
              <p className="text-gray-600">
                We manually review each job posting to ensure quality and verify low competition.
              </p>
            </div>
            <div className="relative text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-6 text-xl font-bold">
                2
              </div>
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5 bg-blue-200"></div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Apply With Confidence</h3>
              <p className="text-gray-600">
                Every job has fewer than 50 applicants, giving you a real chance to stand out.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Direct Connection</h3>
              <p className="text-gray-600">
                Apply directly to employers with no middlemen or complicated application processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
              Simple Pricing
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Plans That Work For Everyone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs, whether you're looking for a job or hiring talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-300">
              <Badge className="mb-2 bg-gray-100 text-gray-700">For Companies</Badge>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Employer Plan</h3>
              <p className="text-gray-600 mb-6">Post your job and reach thousands of qualified developers</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">$79</span>
                <span className="text-lg font-normal text-gray-500 ml-1">/ post</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Featured in our job board for 30 days</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Included in our weekly newsletter</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Limited to under 50 applications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Detailed analytics and insights</span>
                </li>
              </ul>
              <Button className="w-full py-6 text-base" asChild>
                <Link href="/post-job">Post a Job</Link>
              </Button>
            </div>
            
            <div className="bg-blue-600 text-white rounded-xl p-8 shadow-md">
              <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 mb-2 border-none">Most Popular</Badge>
              <h3 className="text-2xl font-bold mb-2">Job Seeker Pro</h3>
              <p className="text-blue-100 mb-6">Get early access to jobs and premium features</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-lg font-normal text-blue-200 ml-1">/ month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-50">24-hour early access to new job postings</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-50">AI-powered resume and cover letter review</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-50">Priority application status</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-50">Job application tracking dashboard</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 py-6 text-base" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from job seekers and employers who've found success on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  MB
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Michael Brown</h4>
                  <p className="text-sm text-gray-600">Junior Developer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                "After months of applying on major job sites with no responses, I got 3 interviews within my first week here. The low competition makes all the difference!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  SK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Kim</h4>
                  <p className="text-sm text-gray-600">Startup Founder</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                "We found an amazing developer in just 3 days. The quality of applicants was much higher than what we got from the larger platforms."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  DP
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">David Patel</h4>
                  <p className="text-sm text-gray-600">Frontend Developer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                "The Pro subscription is worth every penny. I landed a contract that paid for a full year of membership within my first month."
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}