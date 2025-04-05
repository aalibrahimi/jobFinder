import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Bookmark, Clock, MapPin, Users, ExternalLink } from 'lucide-react'

type JobCardProps = {
  job: {
    id: string
    title: string
    company: {
      name: string
      logo?: string
    }
    location: string
    type: 'FULLTIME' | 'PARTTIME' | 'CONTRACT' | 'FREELANCE'
    experience: 'ENTRY' | 'MIDLEVEL' | 'SENIOR'
    salary?: string
    applicantCount: number
    createdAt: Date
    featured: boolean
    slug: string
    tags: { id: string; name: string }[]
  }
  compact?: boolean
}

export default function JobCard({ job, compact = false }: JobCardProps) {
  const jobTypeColor = {
    FULLTIME: 'bg-blue-100 text-blue-800',
    PARTTIME: 'bg-purple-100 text-purple-800',
    CONTRACT: 'bg-orange-100 text-orange-800',
    FREELANCE: 'bg-green-100 text-green-800',
  }

  const experienceColor = {
    ENTRY: 'bg-green-100 text-green-800',
    MIDLEVEL: 'bg-blue-100 text-blue-800',
    SENIOR: 'bg-purple-100 text-purple-800',
  }

  const jobTypeLabel = {
    FULLTIME: 'Full-time',
    PARTTIME: 'Part-time',
    CONTRACT: 'Contract',
    FREELANCE: 'Freelance',
  }

  const experienceLabel = {
    ENTRY: 'Entry Level',
    MIDLEVEL: 'Mid Level',
    SENIOR: 'Senior Level',
  }

  return (
    <Card className={`overflow-hidden ${job.featured ? 'border-2 border-blue-500' : ''}`}>
      {job.featured && (
        <div className="bg-blue-500 text-white py-1 px-4 text-xs font-medium text-center">
          Featured Opportunity
        </div>
      )}
      <CardContent className={compact ? 'p-4' : 'p-6'}>
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
            {job.company.logo ? (
              <Image
                src={job.company.logo}
                alt={job.company.name}
                width={48}
                height={48}
                className="object-contain"
              />
            ) : (
              <div className="text-gray-400 font-semibold text-xl">
                {job.company.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                <Link href={`/jobs/${job.slug}`} className="hover:text-blue-600 focus:outline-none">
                  {job.title}
                </Link>
              </h3>
              {job.salary && !compact && (
                <div className="text-green-600 font-medium whitespace-nowrap">
                  {job.salary}
                </div>
              )}
            </div>
            <p className="text-gray-600 mt-1">{job.company.name}</p>
            
            <div className="mt-2 flex flex-wrap items-center gap-y-2 gap-x-3 text-sm">
              <div className="flex items-center text-gray-500">
                <MapPin size={16} className="mr-1" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-500">
                <Clock size={16} className="mr-1" />
                {formatDistanceToNow(job.createdAt, { addSuffix: true })}
              </div>
              <div className="flex items-center text-gray-500">
                <Users size={16} className="mr-1" />
                {job.applicantCount} {job.applicantCount === 1 ? 'applicant' : 'applicants'}
              </div>
            </div>

            {!compact && (
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge className={jobTypeColor[job.type]}>
                  {jobTypeLabel[job.type]}
                </Badge>
                <Badge className={experienceColor[job.experience]}>
                  {experienceLabel[job.experience]}
                </Badge>
                {job.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag.id} variant="outline" className="bg-gray-100">
                    {tag.name}
                  </Badge>
                ))}
                {job.tags.length > 3 && (
                  <Badge variant="outline" className="bg-gray-100">
                    +{job.tags.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      {!compact && (
        <CardFooter className="bg-gray-50 px-6 py-4 flex flex-wrap gap-3 justify-between">
          <div className="flex gap-2">
            <Button variant="default" asChild>
              <Link href={`/jobs/${job.slug}`}>View Details</Link>
            </Button>
            <Button variant="outline" className="w-10 px-0">
              <Bookmark size={18} />
              <span className="sr-only">Save job</span>
            </Button>
          </div>
          <Button variant="outline" size="sm" className="text-blue-600" asChild>
            <Link href={`/jobs/${job.slug}/apply`}>
              Quick Apply <ExternalLink size={16} className="ml-1" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}