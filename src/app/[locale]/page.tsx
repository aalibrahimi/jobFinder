import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
// import FeaturedJobs from '@/components/jobs/FeaturedJobs'
import { ArrowRight, BriefcaseBusiness, Users, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge className="mb-4 bg-blue-500 text-white hover:bg-blue-600">
                Quality Over Quantity
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Remote Dev Jobs with <span className="text-yellow-300">Low Competition</span>
              </h1>
              <p className="text-xl mb-6">
                Only jobs with fewer than 50 applicants. Perfect for junior devs and indie hackers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/jobs">Browse Jobs</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/post-job">Post a Job <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Find your next opportunity</h2>
                <div className="flex">
                  <Input 
                    type="text" 
                    placeholder="Search jobs by keyword or skill..." 
                    className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button type="submit" className="rounded-l-none">
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800">
                    React
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800">
                    Junior
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                <BriefcaseBusiness size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-gray-600">Curated Jobs Weekly</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">12,000+</h3>
              <p className="text-gray-600">Active Job Seekers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">4x</h3>
              <p className="text-gray-600">Higher Response Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Opportunities</h2>
            <Link href="/jobs" className="text-blue-600 hover:text-blue-800 flex items-center">
              View all jobs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          {/* <FeaturedJobs /> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
              <p className="text-gray-600">
                We manually review and verify each job posting to ensure quality and authenticity.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Competition</h3>
              <p className="text-gray-600">
                We limit applications to under 50 per role, giving you a real chance to stand out.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Directly</h3>
              <p className="text-gray-600">
                Connect straight with employers – no middlemen or complex application processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Pricing Plans</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your needs, whether you're looking for a job or hiring talent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-2">For Companies</h3>
              <p className="text-gray-600 mb-6">Post your job and reach thousands of qualified developers</p>
              <div className="text-4xl font-bold mb-6">$79 <span className="text-lg font-normal text-gray-500">/ post</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Featured in our job board for 30 days
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Included in our weekly newsletter
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Limited to under 50 applications
                </li>
              </ul>
              <Button className="w-full" size="lg" asChild>
                <Link href="/post-job">Post a Job</Link>
              </Button>
            </div>
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-md">
              <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 mb-2">Most Popular</Badge>
              <h3 className="text-2xl font-bold mb-2">For Job Seekers</h3>
              <p className="text-blue-100 mb-6">Get early access to jobs and premium features</p>
              <div className="text-4xl font-bold mb-6">$9 <span className="text-lg font-normal text-blue-200">/ month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24-hour early access to new job postings
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered resume and cover letter review
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority application status
                </li>
              </ul>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50" size="lg" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  MB
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Brown</h4>
                  <p className="text-sm text-gray-600">Junior Developer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "After months of applying on the big job sites with no responses, I got 3 interviews within my first week here. The low competition makes all the difference!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  SK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Kim</h4>
                  <p className="text-sm text-gray-600">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We found an amazing developer in just 3 days. The quality of applicants was much higher than what we got from the larger platforms."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  DP
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">David Patel</h4>
                  <p className="text-sm text-gray-600">Freelance Developer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The subscription is worth every penny. I landed a contract that paid for a full year of membership within my first month."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your next opportunity?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have found their dream jobs through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500" asChild>
              <Link href="/signup">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}