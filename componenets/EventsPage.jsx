export default EventsPage = () => (
    <PageContainer title="Upcoming Events" icon={<CalendarIcon className="w-8 h-8 text-teal" />}>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Join our workshops, guest speaker sessions, and weekly meetings. All events are free for members.
        </p>
        <div className="space-y-8">
            {EVENTS_DATA.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    </PageContainer>
);
