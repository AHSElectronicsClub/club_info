export default JoinAndContactPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ fromEmail: '', subject: '', message: '' });

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const to = 'ahselectronicsclubteam@gmail.com';
        const subject = encodeURIComponent(formData.subject || 'Atholton Electronics Club Contact');
        const body = encodeURIComponent(`From: ${formData.fromEmail}

${formData.message}`);

        // Use mailto to open user's email client pre-filled to send to the club address
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setFormSubmitted(true);
    };

    return (
        <PageContainer title="Contact" icon={<RssIcon className="w-8 h-8 text-teal" />}>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold font-display text-navy mb-6">Contact Us</h2>

                    {formSubmitted ? (
                        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg">
                            <h3 className="font-bold text-lg">Thanks — your email client should open to send the message.</h3>
                            <p className="mt-2">If nothing happened, please email us directly at <a className="text-teal underline" href="mailto:ahselectronicsclubteam@gmail.com">ahselectronicsclubteam@gmail.com</a>.</p>
                            <button onClick={() => setFormSubmitted(false)} className="mt-4 text-sm font-semibold text-green-800 hover:underline">
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    required
                                    value={formData.fromEmail}
                                    onChange={(e) => setFormData(prev => ({ ...prev, fromEmail: e.target.value }))}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows="6"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal"
                                ></textarea>
                            </div>
                            <div>
                                <Button type="submit" variant="primary" className="w-full">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Mentor / Contact Info */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold font-display text-navy mb-6">Club Mentors</h2>
                        <div className="space-y-6">
                            {MENTORS_DATA.map(mentor => (
                                <div key={mentor.id}>
                                    <div className="flex items-center space-x-4 mb-3">
                                        <img src={mentor.imageUrl} alt={mentor.name} className="w-16 h-16 rounded-full object-cover" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{mentor.name}</h4>
                                            <p className="text-sm text-gray-600">{mentor.title}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-2">{mentor.bio}</p>
                                    <p className="text-sm text-teal font-medium"><strong>Office Hours:</strong> {mentor.officeHours}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </PageContainer>
    );
};
