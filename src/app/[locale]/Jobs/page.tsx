'use client'

import { useState } from 'react'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import JobCard from '@/components/jobs/JobCard'
import { ArrowUpDown, Search, Briefcase, MapPin, DollarSign, Filter, X, UserPlus } from 'lucide-react'

// Import the mock data
import { MOCK_FEATURED_JOBS } from '@/lib/data/mock-jobs'

// Extend the mock data for more variety
const ALL_JOBS = [
  ...MOCK_FEATURED_JOBS,
  // Add more jobs here
  {
    id: '7',
    title: 'WordPress Developer',
    company: {
      name: 'WebSolutions',
      logo: '/images/companies/websolutions.svg'
    },
    location: 'Remote (US)',
    type: 'FREELANCE' as const,
    experience: 'MIDLEVEL' as const,
    salary: '$40 - $50 / hour',
    applicantCount: 28,
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    featured: false,
    slug: 'wordpress-developer-websolutions',
    tags: [
      { id: '23', name: 'WordPress' },
      { id: '24', name: 'PHP' },
      { id: '25', name: 'jQuery' }
    ]
  },
  {
    id: '8',
    title: 'Python Data Scientist',
    company: {
      name: 'AnalyticsPro',
      logo: '/images/companies/analyticspro.svg'
    },
    location: 'Remote (EU)',
    type: 'FULLTIME' as const,
    experience: 'SENIOR' as const,
    salary: '€70,000 - €90,000',
    applicantCount: 32,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    featured: false,
    slug: 'python-data-scientist-analyticspro',
    tags: [
      { id: '26', name: 'Python' },
      { id: '27', name: 'Machine Learning' },
      { id: '28', name: 'TensorFlow' },
      { id: '29', name: 'SQL' }
    ]
  },
  {
    id: '9',
    title: 'Junior QA Tester',
    company: {
      name: 'QualityHive',
      logo: '/images/companies/qualityhive.svg'
    },
    location: 'Remote (Worldwide)',
    type: 'PARTTIME' as const,
    experience: 'ENTRY' as const,
    salary: '$20 - $25 / hour',
    applicantCount: 9,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    featured: false,
    slug: 'junior-qa-tester-qualityhive',
    tags: [
      { id: '30', name: 'QA Testing' },
      { id: '31', name: 'Selenium' },
      { id: '32', name: 'Jira' }
    ]
  },
  {
    id: '10',
    title: 'Ruby on Rails Developer',
    company: {
      name: 'RailsRocket',
      logo: '/images/companies/railsrocket.svg'
    },
    location: 'Remote (US)',
    type: 'FULLTIME' as const,
    experience: 'MIDLEVEL' as const,
    salary: '$80,000 - $100,000',
    applicantCount: 18,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    featured: true,
    slug: 'ruby-on-rails-developer-railsrocket',
    tags: [
      { id: '33', name: 'Ruby' },
      { id: '34', name: 'Rails' },
      { id: '35', name: 'PostgreSQL' },
      { id: '36', name: 'Heroku' }
    ]
  }
];

// All available tech tags for filtering
const ALL_TAGS = [
  { id: '1', name: 'React' },
  { id: '2', name: 'JavaScript' },
  { id: '3', name: 'TypeScript' },
  { id: '4', name: 'CSS' },
  { id: '5', name: 'Node.js' },
  { id: '6', name: 'Express' },
  { id: '7', name: 'MongoDB' },
  { id: '8', name: 'REST API' },
  { id: '9', name: 'PostgreSQL' },
  { id: '10', name: 'AWS' },
  { id: '11', name: 'Docker' },
  { id: '12', name: 'Kubernetes' },
  { id: '13', name: 'Python' },
  { id: '14', name: 'Django' },
  { id: '15', name: 'Ruby' },
  { id: '16', name: 'Rails' },
  { id: '17', name: 'PHP' },
  { id: '18', name: 'Laravel' },
  { id: '19', name: 'WordPress' }
];

export default function JobsPage() {
  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [maxApplicants, setMaxApplicants] = useState(50);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort jobs
  const filteredJobs = ALL_JOBS.filter(job => {
    // Search query filter
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.company.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }

    // Job type filter
    if (selectedJobTypes.length > 0 && !selectedJobTypes.includes(job.type)) {
      return false;
    }

    // Experience level filter
    if (selectedExperience.length > 0 && !selectedExperience.includes(job.experience)) {
      return false;
    }

    // Tags filter
    if (selectedTags.length > 0 && !job.tags.some(tag => selectedTags.includes(tag.name))) {
      return false;
    }

    // Max applicants filter
    if (job.applicantCount > maxApplicants) {
      return false;
    }

    // Featured only filter
    if (showFeaturedOnly && !job.featured) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch(sortBy) {
      case 'newest':
        return b.createdAt.getTime() - a.createdAt.getTime();
      case 'oldest':
        return a.createdAt.getTime() - b.createdAt.getTime();
      case 'applicants_low':
        return a.applicantCount - b.applicantCount;
      case 'applicants_high':
        return b.applicantCount - a.applicantCount;
      default:
        return 0;
    }
  });

  // Toggle job type selection
  const toggleJobType = (type: string) => {
    setSelectedJobTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  // Toggle experience level selection
  const toggleExperience = (level: string) => {
    setSelectedExperience(prev => 
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedJobTypes([]);
    setSelectedExperience([]);
    setSelectedTags([]);
    setMaxApplicants(50);
    setShowFeaturedOnly(false);
    setSortBy('newest');
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || 
    selectedJobTypes.length > 0 || 
    selectedExperience.length > 0 || 
    selectedTags.length > 0 || 
    maxApplicants < 50 || 
    showFeaturedOnly;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Browse Jobs</h1>
        <p className="text-gray-600 text-lg">
          Find remote developer jobs with fewer than 50 applicants
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex justify-between items-center">
                Filters
                {hasActiveFilters && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="h-8 px-2 text-blue-600"
                  >
                    Clear All
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Job Type Filter */}
              <div>
                <h3 className="font-medium mb-3 flex items-center">
                  <Briefcase size={16} className="mr-2" /> Job Type
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="fulltime" 
                      checked={selectedJobTypes.includes('FULLTIME')}
                      onCheckedChange={() => toggleJobType('FULLTIME')}
                    />
                    <label htmlFor="fulltime" className="text-sm cursor-pointer">Full-time</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="parttime"
                      checked={selectedJobTypes.includes('PARTTIME')}
                      onCheckedChange={() => toggleJobType('PARTTIME')}
                    />
                    <label htmlFor="parttime" className="text-sm cursor-pointer">Part-time</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="contract"
                      checked={selectedJobTypes.includes('CONTRACT')}
                      onCheckedChange={() => toggleJobType('CONTRACT')}
                    />
                    <label htmlFor="contract" className="text-sm cursor-pointer">Contract</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="freelance"
                      checked={selectedJobTypes.includes('FREELANCE')}
                      onCheckedChange={() => toggleJobType('FREELANCE')}
                    />
                    <label htmlFor="freelance" className="text-sm cursor-pointer">Freelance</label>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Experience Level Filter */}
              <div>
                <h3 className="font-medium mb-3 flex items-center">
                  <UserPlus size={16} className="mr-2" /> Experience Level
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="entry"
                      checked={selectedExperience.includes('ENTRY')}
                      onCheckedChange={() => toggleExperience('ENTRY')}
                    />
                    <label htmlFor="entry" className="text-sm cursor-pointer">Entry Level</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="midlevel"
                      checked={selectedExperience.includes('MIDLEVEL')}
                      onCheckedChange={() => toggleExperience('MIDLEVEL')}
                    />
                    <label htmlFor="midlevel" className="text-sm cursor-pointer">Mid Level</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="senior"
                      checked={selectedExperience.includes('SENIOR')}
                      onCheckedChange={() => toggleExperience('SENIOR')}
                    />
                    <label htmlFor="senior" className="text-sm cursor-pointer">Senior Level</label>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Max Applicants Filter */}
              <div>
                <h3 className="font-medium mb-3 flex items-center">
                  <Users size={16} className="mr-2" /> Max Applicants: {maxApplicants}
                </h3>
                <Slider 
                  value={[maxApplicants]} 
                  min={5} 
                  max={50} 
                  step={5} 
                  onValueChange={(value) => setMaxApplicants(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>

              <Separator />

              {/* Featured Jobs Filter */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <label htmlFor="featured" className="text-sm cursor-pointer">Featured Jobs Only</label>
                </div>
                <Switch 
                  id="featured"
                  checked={showFeaturedOnly}
                  onCheckedChange={setShowFeaturedOnly}
                />
              </div>

              <Separator />

              {/* Skills/Tags Filter */}
              <div>
                <h3 className="font-medium mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {ALL_TAGS.slice(0, 12).map(tag => (
                    <Badge 
                      key={tag.id}
                      variant={selectedTags.includes(tag.name) ? "default" : "outline"}
                      className={`cursor-pointer ${selectedTags.includes(tag.name) ? 'bg-blue-600' : 'hover:bg-blue-50'}`}
                      onClick={() => toggleTag(tag.name)}
                    >
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort Bar */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search job title, company, or skills..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="applicants_low">Fewest Applicants</SelectItem>
                  <SelectItem value="applicants_high">Most Applicants</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                <span className="ml-2">Filters</span>
              </Button>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="mb-6 lg:hidden">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex justify-between items-center">
                    Filters
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowFilters(false)}
                    >
                      <X size={18} />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Job Type Filter */}
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Briefcase size={16} className="mr-2" /> Job Type
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-fulltime" 
                          checked={selectedJobTypes.includes('FULLTIME')}
                          onCheckedChange={() => toggleJobType('FULLTIME')}
                        />
                        <label htmlFor="mobile-fulltime" className="text-sm cursor-pointer">Full-time</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-parttime"
                          checked={selectedJobTypes.includes('PARTTIME')}
                          onCheckedChange={() => toggleJobType('PARTTIME')}
                        />
                        <label htmlFor="mobile-parttime" className="text-sm cursor-pointer">Part-time</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-contract"
                          checked={selectedJobTypes.includes('CONTRACT')}
                          onCheckedChange={() => toggleJobType('CONTRACT')}
                        />
                        <label htmlFor="mobile-contract" className="text-sm cursor-pointer">Contract</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-freelance"
                          checked={selectedJobTypes.includes('FREELANCE')}
                          onCheckedChange={() => toggleJobType('FREELANCE')}
                        />
                        <label htmlFor="mobile-freelance" className="text-sm cursor-pointer">Freelance</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Experience Level Filter */}
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <UserPlus size={16} className="mr-2" /> Experience Level
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-entry"
                          checked={selectedExperience.includes('ENTRY')}
                          onCheckedChange={() => toggleExperience('ENTRY')}
                        />
                        <label htmlFor="mobile-entry" className="text-sm cursor-pointer">Entry Level</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-midlevel"
                          checked={selectedExperience.includes('MIDLEVEL')}
                          onCheckedChange={() => toggleExperience('MIDLEVEL')}
                        />
                        <label htmlFor="mobile-midlevel" className="text-sm cursor-pointer">Mid Level</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-senior"
                          checked={selectedExperience.includes('SENIOR')}
                          onCheckedChange={() => toggleExperience('SENIOR')}
                        />
                        <label htmlFor="mobile-senior" className="text-sm cursor-pointer">Senior Level</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Max Applicants Filter */}
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Users size={16} className="mr-2" /> Max Applicants: {maxApplicants}
                    </h3>
                    <Slider 
                      value={[maxApplicants]} 
                      min={5} 
                      max={50} 
                      step={5} 
                      onValueChange={(value) => setMaxApplicants(value[0])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>5</span>
                      <span>50</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Featured Jobs Filter */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <label htmlFor="mobile-featured" className="text-sm cursor-pointer">Featured Jobs Only</label>
                    </div>
                    <Switch 
                      id="mobile-featured"
                      checked={showFeaturedOnly}
                      onCheckedChange={setShowFeaturedOnly}
                    />
                  </div>

                  {hasActiveFilters && (
                    <div className="mt-4 flex justify-end">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={clearFilters}
                        className="text-blue-600"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-600">Active filters:</span>
                
                {selectedJobTypes.map(type => (
                  <Badge 
                    key={type}
                    variant="secondary"
                    className="pl-2"
                  >
                    {type === 'FULLTIME' ? 'Full-time' : 
                     type === 'PARTTIME' ? 'Part-time' : 
                     type === 'CONTRACT' ? 'Contract' : 'Freelance'}
                    <button 
                      className="ml-1 hover:bg-gray-200 rounded-full p-1" 
                      onClick={() => toggleJobType(type)}
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                ))}

                {selectedExperience.map(exp => (
                  <Badge 
                    key={exp}
                    variant="secondary"
                    className="pl-2"
                  >
                    {exp === 'ENTRY' ? 'Entry Level' : 
                     exp === 'MIDLEVEL' ? 'Mid Level' : 'Senior Level'}
                    <button 
                      className="ml-1 hover:bg-gray-200 rounded-full p-1" 
                      onClick={() => toggleExperience(exp)}
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                ))}

                {selectedTags.map(tag => (
                  <Badge 
                    key={tag}
                    variant="secondary"
                    className="pl-2"
                  >
                    {tag}
                    <button 
                      className="ml-1 hover:bg-gray-200 rounded-full p-1" 
                      onClick={() => toggleTag(tag)}
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                ))}

                {maxApplicants < 50 && (
                  <Badge 
                    variant="secondary"
                    className="pl-2"
                  >
                    Max {maxApplicants} applicants
                    <button 
                      className="ml-1 hover:bg-gray-200 rounded-full p-1" 
                      onClick={() => setMaxApplicants(50)}
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                )}

                {showFeaturedOnly && (
                  <Badge 
                    variant="secondary"
                    className="pl-2"
                  >
                    Featured Only
                    <button 
                      className="ml-1 hover:bg-gray-200 rounded-full p-1" 
                      onClick={() => setShowFeaturedOnly(false)}
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="bg-white rounded-lg border p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any jobs matching your current filters.
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredJobs.length > 0 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-blue-50 text-blue-700 border-blue-200">
                  1
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  3
                </Button>
                <span className="text-gray-500">...</span>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  10
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}