export default AboutPage = () => (
    <PageContainer title="About Us" icon={<UsersIcon className="w-8 h-8 text-teal" />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-display text-navy mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our mission is to foster technical creativity, collaboration, and problem-solving skills among students while developing projects that address environmental and community challenges through engineering innovation.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-display text-navy mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Founded in 2025 at Atholton High School, the Atholton Electronics Club was established to provide students with hands-on experience in electrical engineering and applied technology.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        With a growing membership of approximately 35 students, the club focuses on designing and building real-world engineering projects that both educate members and benefit the broader community.
                    </p>
                </section>

                {/* --- NEW TEAM SECTION --- */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-display text-navy mb-6">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {TEAM_DATA.map(member => (
                            <div key={member.id} className="flex items-center space-x-4 bg-gray-light p-4 rounded-lg">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-16 h-16 rounded-full object-cover ring-2 ring-teal/50"
                                />
                                <div>
                                    <h4 className="font-bold text-lg text-navy">{member.name}</h4>
                                    <p className="text-sm text-gray-700 font-medium">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* --- END NEW TEAM SECTION --- */}

                <section>
                    <h2 className="text-2xl font-bold font-display text-navy mb-4">Code of Conduct</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The Atholton Electronics Club is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity, sexual orientation, disability, physical appearance, body size, race, or religion.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Be respectful, inclusive, and collaborative.</li>
                        <li>Be mindful of your speech and actions.</li>
                        <li>Respect lab equipment, tools, and shared spaces. Clean up after yourself.</li>
                        <li>Do not tolerate harassment or intimidation in any form.</li>
                        <li>Ask for help, and offer help when you can.</li>
                    </ul>
                </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold font-display text-navy mb-4">Faculty Advisor</h3>
                    <div className="flex items-center space-x-4">
                        <img
                            src={MENTORS_DATA[0].imageUrl}
                            alt={MENTORS_DATA[0].name}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-gray-800">{MENTORS_DATA[0].name}</h4>
                            <p className="text-sm text-gray-600">{MENTORS_DATA[0].title}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-4">{MENTORS_DATA[0].bio.split('.')[0]}.</p>

                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold font-display text-navy mb-4">Partners & Support</h3>
                    <p className="text-gray-700 mb-4">
                        We're proud to partner with organizations that support our mission.
                    </p>
                    <ul className="space-y-3">
                        <li>
                            <h4 className="font-semibold text-gray-800">DFRobot</h4>
                            <p className="text-sm text-gray-600">Our primary parts supplier.</p>
                        </li>
                        <li>
                            <h4 className="font-semibold text-gray-800">Howard County Sierra Club</h4>
                            <p className="text-sm text-gray-600">Pledged $250 toward the Aqua Guardian project.</p>
                        </li>
                        <li>
                            <h4 className="font-semibold text-gray-800">Chesapeake Bay Seed Foundation</h4>
                            <p className="text-sm text-gray-600">We are seeking funding to complete our prototype.</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold font-display text-navy mb-4">Meeting Schedule</h3>
                    <p className="text-gray-700">
                        <strong>Weekly Meeting:</strong> Wednesdays 2:45–3:30 PM, E172. New members welcome!
                    </p>
                    <p className="text-gray-700 mt-2">
                        <strong>Open Lab Hours:</strong> No open lab hours at this time.
                    </p>
                </div>
            </div>

        </div>
    </PageContainer>
);
