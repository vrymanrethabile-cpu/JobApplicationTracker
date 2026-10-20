import { useState, useEffect } from 'react'

const STATUS_OPTIONS = ['Interested', 'Applied', 'Assessment', 'Interview', 'Offer', 'Rejected', 'Withdrawn']

function JobForm({ onSubmit, editJob, onCancelEdit }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    location: '',
    workArrangement: 'Remote',
    dateApplied: '',
    status: 'Applied',
    jobLink: '',
    notes: ''
  })

  useEffect(() => {
    if (editJob) {
      setFormData(editJob)
    }
  }, [editJob])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.company || !formData.role || !formData.location || !formData.dateApplied) {
      alert('Please fill in all required fields')
      return
    }
    onSubmit(formData)
    setFormData({ 
      company: '', 
      role: '', 
      location: '', 
      workArrangement: 'Remote',
      dateApplied: '', 
      status: 'Applied',
      jobLink: '',
      notes: ''
    })
    if (onCancelEdit) onCancelEdit()
  }

  const handleCancel = () => {
    setFormData({ 
      company: '', 
      role: '', 
      location: '', 
      workArrangement: 'Remote',
      dateApplied: '', 
      status: 'Applied',
      jobLink: '',
      notes: ''
    })
    if (onCancelEdit) onCancelEdit()
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">{editJob ? 'Edit Job' : 'Add New Job'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Job title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Location"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Arrangement</label>
          <select
            name="workArrangement"
            value={formData.workArrangement}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 bg-white"
            style={{ color: '#111827', backgroundColor: '#ffffff' }}
          >
            <option value="Remote" style={{ color: '#111827', backgroundColor: '#ffffff' }}>Remote</option>
            <option value="Onsite" style={{ color: '#111827', backgroundColor: '#ffffff' }}>Onsite</option>
            <option value="Hybrid" style={{ color: '#111827', backgroundColor: '#ffffff' }}>Hybrid</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date Applied</label>
          <input
            type="date"
            name="dateApplied"
            value={formData.dateApplied}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 bg-white"
            style={{ color: '#111827', backgroundColor: '#ffffff' }}
          >
            {STATUS_OPTIONS.map(status => (
              <option key={status} value={status} style={{ color: '#111827', backgroundColor: '#ffffff' }}>{status}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Link (Optional)</label>
          <input
            type="url"
            name="jobLink"
            value={formData.jobLink}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="3"
            placeholder="Any additional notes..."
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium"
          >
            {editJob ? 'Update Job' : 'Add Job'}
          </button>
          {editJob && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors font-medium"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default JobForm
