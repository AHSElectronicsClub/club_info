import React, { useState, useMemo, useEffect } from 'react';

// --- Main App ---
export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [pageProps, setPageProps] = useState({});

    const styles = {
        '--color-navy': '#072A40',
        '--color-navy-light': '#0A3A5A',
        '--color-navy-dark': '#051E2E',
        '--color-teal': '#00B7C2',
        '--color-orange': '#FF7A3D',
        '--color-gray-light': '#F6F7F9',
        backgroundColor: {
            navy: '#072A40',
            'navy-light': '#0A3A5A',
            'navy-dark': '#051E2E',
            teal: '#00B7C2',
            orange: '#FF7A3D',
            'gray-light': '#F6F7F9',
        },
        textColor: {
            navy: '#072A40',
            teal: '#00B7C2',
            orange: '#FF7A3D',
        },
        borderColor: {
            teal: '#00B7C2',
            orange: '#FF7A3D',
        },
        ringColor: {
            teal: '#00B7C2',
            orange: '#FF7A3D',
        }
    };

    const handleNavClick = (page, props = {}) => {
        setCurrentPage(page);
        setPageProps(props);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavClick={handleNavClick} />;
            case 'about':
                return <AboutPage />;
            case 'projects':
                return <ProjectsPage initialProjectId={pageProps.project} />;
            case 'resources':
                return <ResourcesPage />;
            case 'join':
            case 'contact':
                return <JoinAndContactPage />;
            default:
                return <HomePage onNavClick={handleNavClick} />;
        }
    };

    return (
        <div style={styles} className="min-h-screen flex flex-col font-sans bg-gray-light text-gray-800">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700;800&display=swap');
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        .font-display {
          font-family: 'Poppins', sans-serif;
        }

        .bg-navy { background-color: var(--color-navy); }
        .bg-navy-light { background-color: var(--color-navy-light); }
        .bg-navy-dark { background-color: var(--color-navy-dark); }
        .bg-teal { background-color: var(--color-teal); }
        .bg-orange { background-color: var(--color-orange); }
        .bg-gray-light { background-color: var(--color-gray-light); }
        
        .text-navy { color: var(--color-navy); }
        .text-teal { color: var(--color-teal); }
        .text-orange { color: var(--color-orange); }
        
        .border-teal { border-color: var(--color-teal); }
        .border-orange { border-color: var(--color-orange); }

        .ring-teal { --tw-ring-color: var(--color-teal); }
        .ring-orange { --tw-ring-color: var(--color-orange); }
        
        .text-teal {
          --tw-text-opacity: 1;
          color: rgb(0 183 194 / var(--tw-text-opacity));
        }
        .border-teal\/20 {
            border-color: rgb(0 183 194 / 0.2);
        }
        .border-teal\/30 {
            border-color: rgb(0 183 194 / 0.3);
        }
        .bg-teal\/10 {
            background-color: rgb(0 183 194 / 0.1);
        }
        .bg-orange\/10 {
            background-color: rgb(255 122 61 / 0.1);
        }
        
        .text-teal.focus\:ring-teal {
            --tw-ring-color: rgb(0 183 194 / var(--tw-ring-opacity));
        }
        .rounded.text-teal.focus\:ring-teal {
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            box-shadow: var(--tw-shadow, 0 0 #0000), var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000);
            --tw-ring-opacity: 1;
            --tw-ring-color: rgb(0 183 194 / var(--tw-ring-opacity));
            --tw-ring-offset-width: 2px;
        }
        .ring-teal\/50 {
            --tw-ring-color: rgb(0 183 194 / 0.5);
        }
      `}</style>

            <Header onNavClick={handleNavClick} currentPage={currentPage} />

            <main className="flex-grow">
                {renderPage()}
            </main>

            <Footer onNavClick={handleNavClick} />
        </div>
    );
}



