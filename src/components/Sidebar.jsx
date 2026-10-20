function Sidebar({ currentView, setCurrentView }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'applications', label: 'Applications', icon: '💼' },
    { id: 'add', label: 'Add Job', icon: '➕' },
  ]

  return (
    <aside className="bg-white shadow-lg w-64 min-h-screen p-6 hidden lg:block">
      <h2 className="text-xl font-bold text-teal-600 mb-6">Menu</h2>
      <nav className="space-y-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              currentView === item.id
                ? 'bg-teal-100 text-teal-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
