const STATUS_OPTIONS = ['All', 'Interested', 'Applied', 'Assessment', 'Interview', 'Offer', 'Rejected', 'Withdrawn']
const WORK_ARRANGEMENTS = ['All', 'Remote', 'Onsite', 'Hybrid']

function StatusFilter({ filter, setFilter, search, setSearch, workFilter, setWorkFilter }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by company or job title..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 bg-white"
            style={{ color: '#111827', backgroundColor: '#ffffff' }}
          >
            {STATUS_OPTIONS.map(status => (
              <option key={status} value={status} style={{ color: '#111827', backgroundColor: '#ffffff' }}>{status}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Arrangement</label>
          <select
            value={workFilter}
            onChange={(e) => setWorkFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 bg-white appearance-none"
            style={{ color: '#111827', backgroundColor: '#ffffff' }}
          >
            {WORK_ARRANGEMENTS.map(arr => (
              <option key={arr} value={arr} style={{ color: '#111827', backgroundColor: '#ffffff' }}>{arr}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default StatusFilter
