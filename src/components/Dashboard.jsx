function Dashboard({ jobs }) {
  const total = jobs.length
  const applied = jobs.filter(job => job.status === 'Applied').length
  const interviews = jobs.filter(job => job.status === 'Interview').length
  const offers = jobs.filter(job => job.status === 'Offer').length

  const cards = [
    { label: 'Total Applications', value: total, textColor: 'text-teal-600' },
    { label: 'Applied', value: applied, textColor: 'text-yellow-600' },
    { label: 'Interviews', value: interviews, textColor: 'text-purple-600' },
    { label: 'Offers', value: offers, textColor: 'text-green-600' },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map(card => (
        <div key={card.label} className="bg-white rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-800">{card.label}</p>
          <p className={`text-3xl font-bold mt-2 ${card.textColor}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
