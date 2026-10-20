import JobCard from './JobCard'

function JobList({ jobs, onUpdateStatus, onDelete, onEdit }) {
  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
        <p>No jobs found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <JobCard 
          key={job.id} 
          job={job} 
          onUpdateStatus={onUpdateStatus} 
          onDelete={onDelete} 
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default JobList
