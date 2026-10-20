import { useState } from 'react'

const STATUS_OPTIONS = ['Interested', 'Applied', 'Assessment', 'Interview', 'Offer', 'Rejected', 'Withdrawn']

const STATUS_COLORS = {
  Interested: 'bg-gray-100 text-gray-800',
  Applied: 'bg-yellow-100 text-yellow-800',
  Assessment: 'bg-blue-100 text-blue-800',
  Interview: 'bg-purple-100 text-purple-800',
  Offer: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  Withdrawn: 'bg-gray-200 text-gray-600'
}

function JobCard({ job, onUpdateStatus, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)

  const handleStatusChange = (newStatus) => {
    onUpdateStatus(job.id, newStatus)
    setIsEditing(false)
  }

  const handleEdit = () => {
    onEdit(job)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{job.company}</h3>
          <p className="text-gray-600">{job.role}</p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
            <span>📍 {job.location}</span>
            <span>� {job.workArrangement}</span>
            <span>� {job.dateApplied}</span>
          </div>
          {job.jobLink && (
            <a 
              href={job.jobLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              🔗 View Job Posting
            </a>
          )}
          {job.notes && (
            <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
              📝 {job.notes}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {isEditing ? (
            <select
              value={job.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              autoFocus
              onBlur={() => setIsEditing(false)}
            >
              {STATUS_OPTIONS.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          ) : (
            <span
              onClick={() => setIsEditing(true)}
              className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:opacity-80 ${STATUS_COLORS[job.status]}`}
            >
              {job.status}
            </span>
          )}
          <button
            onClick={handleEdit}
            className="text-teal-600 hover:text-teal-800 transition-colors p-1"
            title="Edit job"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(job.id)}
            className="text-red-500 hover:text-red-700 transition-colors p-1"
            title="Delete job"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
