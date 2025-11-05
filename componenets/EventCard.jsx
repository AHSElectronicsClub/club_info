export default EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-40 flex flex-col items-center justify-center bg-navy-light text-white p-6 text-center">
            <span className="text-lg font-semibold block">{event.date.split(',')[0]}</span>
            <span className="text-4xl font-bold block">{event.date.split(',')[1]?.trim().split(' ')[1] || 'TBA'}</span>
            <span className="text-lg font-semibold block">{event.date.split(',')[2]?.trim() || ''}</span>
        </div>
        <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold font-display text-navy mb-2">{event.title}</h3>
            <div className="text-gray-600 text-sm space-y-1 mb-4">
                <p><strong>When:</strong> {event.time}</p>
                <p><strong>Where:</strong> {event.location}</p>
            </div>
            <p className="text-gray-700 text-sm mb-6">{event.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => alert('RSVP modal would open here.')} variant="primary">
                    Reserve Spot
                </Button>
                <Button onClick={() => alert('ICS file download would start here.')} variant="outline">
                    Add to Calendar
                </Button>
            </div>
        </div>
    </div>
);
