import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import JobForm from './components/JobForm'
import JobList from './components/JobList'
import StatusFilter from './components/StatusFilter'

const STATUS_OPTIONS = ['Interested', 'Applied', 'Assessment', 'Interview', 'Offer', 'Rejected', 'Withdrawn']

function App() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('jobTracker')
    return saved ? JSON.parse(saved) : [
      { id: 1, company: 'Webmax Solution', role: 'Junior Full-Stack Developer', location: 'South Africa', workArrangement: 'Remote', dateApplied: '2026-09-15', status: 'Applied', jobLink: '', notes: 'Waiting for response' },
      { id: 2, company: 'YO IT Consulting', role: 'Document Reviewer', location: 'Johannesburg', workArrangement: 'Onsite', dateApplied: '2026-09-20', status: 'Interview', jobLink: '', notes: 'Interview scheduled' },
      { id: 3, company: 'Micro1', role: 'Generalist', location: 'Remote', workArrangement: 'Remote', dateApplied: '2026-09-25', status: 'Interview', jobLink: '', notes: 'AI interview completed' },
      { id: 4, company: 'Alignerr', role: 'Generalist', location: 'Remote', workArrangement: 'Hybrid', dateApplied: '2026-10-01', status: 'Applied', jobLink: '', notes: '' },
      { id: 5, company: 'Hire Feed', role: 'AI Trainer', location: 'Remote', workArrangement: 'Remote', dateApplied: '2026-10-05', status: 'Applied', jobLink: '', notes: '' },
      { id: 6, company: 'Jobgether', role: 'Data Annotation Analyst', location: 'Cape Town', workArrangement: 'Onsite', dateApplied: '2026-10-08', status: 'Applied', jobLink: '', notes: '' },
      { id: 7, company: 'Assist World', role: 'Virtual Assistant', location: 'Remote', workArrangement: 'Remote', dateApplied: '2026-10-10', status: 'Applied', jobLink: '', notes: '' },
      { id: 8, company: 'Alirian', role: 'AI Developer Intern', location: 'Remote', workArrangement: 'Remote', dateApplied: '2026-09-28', status: 'Interview', jobLink: '', notes: 'Interview was scheduled' },
    ]
  })

  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [workFilter, setWorkFilter] = useState('All')
  const [currentView, setCurrentView] = useState('dashboard')
  const [editingJob, setEditingJob] = useState(null)

  useEffect(() => {
    localStorage.setItem('jobTracker', JSON.stringify(jobs))
  }, [jobs])

  const addJob = (job) => {
    if (editingJob) {
      updateJob(editingJob.id, job)
    } else {
      setJobs([...jobs, { ...job, id: Date.now() }])
    }
  }

  const updateJob = (id, updatedJob) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, ...updatedJob } : job))
  }

  const handleEditJob = (job) => {
    setEditingJob(job)
  }

  const handleCancelEdit = () => {
    setEditingJob(null)
  }

  const updateStatus = (id, newStatus) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: newStatus } : job))
  }

  const deleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job application?')) {
      setJobs(jobs.filter(job => job.id !== id))
    }
  }

  const filteredJobs = jobs.filter(job => {
    const matchesFilter = filter === 'All' || job.status === filter
    const matchesWork = workFilter === 'All' || job.workArrangement === workFilter
    const matchesSearch = job.company.toLowerCase().includes(search.toLowerCase()) || 
                         job.role.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesWork && matchesSearch
  })

  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {currentView === 'dashboard' && (
            <>
              <Dashboard jobs={jobs} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Status Summary</h3>
                    <div className="space-y-2">
                      {STATUS_OPTIONS.map(status => (
                        <div key={status} className="flex justify-between text-gray-800">
                          <span>{status}</span>
                          <span className="font-bold">{statusCounts[status] || 0}</span>
                        </div>
                      ))}
                      <div className="flex justify-between border-t pt-2 mt-2 text-gray-800">
                        <span>Total</span>
                        <span className="font-bold">{jobs.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <StatusFilter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} workFilter={workFilter} setWorkFilter={setWorkFilter} />
                  <JobList 
                    jobs={filteredJobs} 
                    onUpdateStatus={updateStatus} 
                    onDelete={deleteJob}
                    onEdit={handleEditJob}
                  />
                </div>
              </div>
            </>
          )}
          {currentView === 'applications' && (
            <>
              <StatusFilter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} workFilter={workFilter} setWorkFilter={setWorkFilter} />
              <JobList 
                jobs={filteredJobs} 
                onUpdateStatus={updateStatus} 
                onDelete={deleteJob}
                onEdit={handleEditJob}
              />
            </>
          )}
          {currentView === 'add' && (
            <div className="max-w-2xl mx-auto">
              <JobForm onSubmit={addJob} editJob={editingJob} onCancelEdit={handleCancelEdit} />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
