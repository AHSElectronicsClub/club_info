// --- PAGE COMPONENTS ---
const Header = ({ onNavClick, currentPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', slug: 'home' },
        { name: 'About', slug: 'about' },
        { name: 'Projects', slug: 'projects' },
        { name: 'Resources', slug: 'resources' },
        { name: 'Mentors & Contact', slug: 'contact' },
    ];

    const NavLink = ({ slug, children }) => (
        <button
            onClick={() => {
                onNavClick(slug);
                setIsMobileMenuOpen(false);
            }}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === slug
                ? 'bg-teal text-navy'
                : 'text-gray-300 hover:bg-navy-light hover:text-white'
                } md:text-sm md:bg-transparent md:text-gray-300 md:hover:text-white ${currentPage === slug ? 'md:text-white md:font-bold' : ''
                }`}
        >
            {children}
        </button>
    );

    const groupmeLink = "https://groupme.com/join_group/110257950/WJX63DOF";

    return (
        <nav className="bg-navy sticky top-0 z-40 shadow-lg border-b border-teal/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavClick('home')}>
                        <ChipIcon className="w-10 h-10 text-teal" />
                        <span className="text-white text-xl font-bold font-display ml-3 hidden sm:block">
                            Atholton Electronics Club
                        </span>
                        <span className="text-white text-lg font-bold font-display ml-3 sm:hidden">
                            AEC
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map(item => (
                                <NavLink key={item.slug} slug={item.slug}>{item.name}</NavLink>
                            ))}
                            <Button href={groupmeLink} target="_blank" variant="primary" className="ml-4 !py-2 !px-4">
                                Join the Club
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <Button href={groupmeLink} target="_blank" variant="primary" className="mr-2 !py-2 !px-4">
                            Join
                        </Button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <XIcon className="block h-6 w-6" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-navy-light`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map(item => (
                        <NavLink key={item.slug} slug={item.slug}>{item.name}</NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};
