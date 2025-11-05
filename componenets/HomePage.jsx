export default HomePage = ({ onNavClick }) => {
    const groupmeLink = "https://groupme.com/join_group/110257950/WJX63DOF";

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-navy text-white relative overflow-hidden">
                <GridBackground />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter mb-6">
                            Build. Monitor. <span className="text-teal">Protect.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Our current mission: Launching <strong className="text-white">Aqua Guardian</strong>, an open-source buoy to monitor and protect the Chesapeake Bay watershed.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button href={groupmeLink} target="_blank" variant="primary" className="text-lg">
                                Join the Club
                            </Button>
                            <Button onClick={() => onNavClick('projects')} variant="secondary" className="text-lg">
                                Explore Projects
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* IoT Demo Section */}
            <div className="bg-gray-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <AquaGuardianPanel />
                </div>
            </div>

            {/* Featured Projects Section */}
            <div className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-display text-navy">What We Build</h2>
                        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                            From community-focused environmental monitoring to student-led prototypes, our projects are designed to make an impact.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PROJECTS_DATA.slice(0, 1).map(project => (
                            <ProjectCard key={project.id} project={project} onClick={() => onNavClick('projects', { project: project.id })} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
