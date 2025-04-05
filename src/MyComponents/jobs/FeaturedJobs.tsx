import { useState, useEffect } from 'react'
import JobCard from './JobCard'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Placeholder data for featured jobs
const MOCK_FEATURED_JOBS = [
  {
    id: '1',
    title: 'Frontend React Developer',
    company: {
      name: 'TechStart Inc',
      logo: '/images/companies/techstart.svg'
    },
    location: 'Remote (US)',
    type: 'FULLTIME' as const,
    experience: 'ENTRY' as const,
    salary: '$70,000 - $90,000',
    applicantCount: 12,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    featured: true,
    slug: 'frontend-react-developer-techstart',
    tags: [
      { id: '1', name: 'React' },
      { id: '2', name: 'JavaScript' },
      { id: '3', name: 'TypeScript' },
      { id: '4', name: 'CSS' }
    ]
  },
  {
    id: '2',
    title: 'Backend Node.js Engineer',
    company: {
      name: 'DataFlow Systems',
      logo: '/images/companies/dataflow.svg'
    },
    location: 'Remote (Worldwide)',
    type: 'CONTRACT' as const,
    experience: 'MIDLEVEL' as const,
    salary: '$60 - $75 / hour',
    applicantCount: 8,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    featured: true,
    slug: 'backend-nodejs-engineer-dataflow',
    tags: [
      { id: '5', name: 'Node.js' },
      { id: '6', name: 'Express' },
      { id: '7', name: 'MongoDB' },
      { id: '8', name: 'REST API' }
    ]
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: {
      name: 'GrowthLabs',
      logo: '/images/companies/growthlabs.svg'
    },
    location: 'Remote (EU)',
    type: 'FULLTIME' as const,
    experience: 'ENTRY' as const,
    salary: '€45,000 - €65,000',
    applicantCount: 19,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    featured: false,
    slug: 'full-stack-developer-growthlabs',
    tags: [
      { id: '9', name: 'React' },
      { id: '10', name: 'Node.js' },
      { id: '11', name: 'PostgreSQL' },
      { id: '12', name: 'Docker' }
    ]
  },
  {
    id: '4',
    title: 'Junior Mobile Developer (React Native)',
    company: {
      name: 'AppWorks',
      logo: '/images/companies/appworks.svg'
    },
    location: 'Remote (APAC)',
    type: 'FULLTIME' as const,
    experience: 'ENTRY' as const,
    salary: '$50,000 - $65,000',
    applicantCount: 7,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    featured: false,
    slug: 'junior-mobile-developer-appworks',
    tags: [
      { id: '13', name: 'React Native' },
      { id: '14', name: 'JavaScript' },
      { id: '15', name: 'Mobile' }
    ]
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: {
      name: 'CloudScale',
      logo: '/images/companies/cloudscale.svg'
    },
    location: 'Remote (US)',
    type: 'FULLTIME' as const,
    experience: 'MIDLEVEL' as const,
    salary: '$90,000 - $120,000',
    applicantCount: 15,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    featured: true,
    slug: 'devops-engineer-cloudscale',
    tags: [
      { id: '16', name: 'AWS' },
      { id: '17', name: 'Docker' },
      { id: '18', name: 'Kubernetes' },
      { id: '19', name: 'CI/CD' }
    ]
  },
  {
    id: '6',
    title: 'UI/UX Designer (Part-Time)',
    company: {
      name: 'DesignMakers',
      logo: '/images/companies/designmakers.svg'
    },
    location: 'Remote (Worldwide)',
    type: 'PARTTIME' as const,
    experience: 'ENTRY' as const,
    salary: '$30 - $45 / hour',
    applicantCount: 21,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    featured: false,
    slug: 'ui-ux-designer-part-time-designmakers',
    tags: [
      { id: '20', name: 'Figma' },
      { id: '21', name: 'UI/UX' },
      { id: '22', name: 'Wireframing' }
    ]
  }
];

export default function FeaturedJobs() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<typeof MOCK_FEATURED_JOBS>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 3;
  const totalPages = Math.ceil(MOCK_FEATURED_JOBS.length / jobsPerPage);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setJobs(MOCK_FEATURED_JOBS);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const currentJobs = jobs.slice(
    currentPage * jobsPerPage,
    (currentPage + 1) * jobsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="flex gap-4">
              <Skeleton className="h-12 w-12 rounded-md" />
              <div className="flex-1">
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/3 mb-3" />
                <div className="flex gap-2 mb-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {currentJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={prevPage}
            disabled={currentPage === 0}
            className="flex items-center gap-1"
          >
            <ArrowLeft size={16} /> Previous
          </Button>
          <div className="text-sm text-gray-500">
            Page {currentPage + 1} of {totalPages}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-1"
          >
            Next <ArrowRight size={16} />
          </Button>
        </div>
      )}
    </div>
  );
}