export default Footer = ({ onNavClick }) => (
    <footer className="bg-navy-dark text-gray-400 border-t border-teal/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* About */}
                <div>
                    <div className="flex items-center mb-4">
                        <ChipIcon className="w-8 h-8 text-teal" />
                        <span className="text-white text-lg font-bold font-display ml-2">Atholton Electronics Club</span>
                    </div>
                    <p className="text-sm">
                        Engineering solutions for our community.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://github.com/atholton-e-club" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <GithubIcon className="w-6 h-6" />
                        </a>

                        <a href="https://instagram.com/ahselectronic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        {/* Add Discord/Slack icons here */}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => onNavClick('about')} className="hover:text-white">About Us</button></li>
                        <li><button onClick={() => onNavClick('projects')} className="hover:text-white">Projects</button></li>
                        <li><button onClick={() => onNavClick('resources')} className="hover:text-white">Resources</button></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>E172, Atholton High School</li>
                        <li><a href="mailto:ahselectronicsclubteam@gmail.com" className="hover:text-white">ahselectronicsclubteam@gmail.com</a></li>
                        <li><button onClick={() => onNavClick('contact')} className="hover:text-white">Contact Mentors</button></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Info</h4>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => onNavClick('about')} className="hover:text-white">Code of Conduct</button></li>
                        <li><a href="#" className="hover:text-white">AHS Activity Portal</a></li>
                    </ul>
                </div>

            </div>
            <div className="mt-8 pt-8 border-t border-navy-light text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Atholton Electronics Club. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
