import React, { useState, useMemo, useEffect } from 'react';

// --- ICONS (Inline SVGs) ---
// All icons forward ...props so you can attach onClick/className/etc.

const MenuIcon = ({ className, ...props }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = ({ className, ...props }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const ChipIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="8" y1="2" x2="8" y2="22"></line>
        <line x1="16" y1="2" x2="16" y2="22"></line>
        <line x1="2" y1="8" x2="22" y2="8"></line>
        <line x1="2" y1="16" x2="22" y2="16"></line>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
        <line x1="9" y1="15" x2="9.01" y2="15"></line>
        <line x1="15" y1="15" x2="15.01" y2="15"></line>
    </svg>
);

const LayersIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
);

const DropletIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
    </svg>
);

const CodeIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const UsersIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const CalendarIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const BookOpenIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

const RssIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 11a9 9 0 0 1 9 9"></path>
        <path d="M4 4a16 16 0 0 1 16 16"></path>
        <circle cx="5" cy="19" r="1"></circle>
    </svg>
);

const GithubIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const SparklesIcon = ({ className, ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.5" stroke="rgba(255, 255, 255, 0.5)" {...props}>
        <path d="M10 3.5a1.5 1.5 0 013 0V0a1.5 1.5 0 01-3 0v3.5zM10 20a1.5 1.5 0 013 0v-3.5a1.5 1.5 0 01-3 0V20zM3.5 10a1.5 1.5 0 000 3H0a1.5 1.5 0 000-3h3.5zM20 10a1.5 1.5 0 000 3h-3.5a1.5 1.5 0 000-3H20zM5.11 5.11a1.5 1.5 0 012.12 0l-2.4 2.4a1.5 1.5 0 010-2.12l2.4-2.4zM14.89 14.89a1.5 1.5 0 01-2.12 0l2.4-2.4a1.5 1.5 0 010 2.12l-2.4 2.4zM5.11 14.89a1.5 1.5 0 010-2.12l2.4 2.4a1.5 1.5 0 01-2.12 0l-2.4-2.4zM14.89 5.11a1.5 1.5 0 010 2.12l-2.4-2.4a1.5 1.5 0 012.12 0l2.4 2.4z" />
    </svg>
);

// Inline Instagram icon (keeps file self-contained)
const InstagramIcon = ({ className, ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.578.42 3.6 1.398 2.622 2.376 2.333 3.573 2.274 4.85 2.215 6.13 2.203 6.539 2.203 12s.012 5.87.071 7.15c.059 1.277.348 2.474 1.326 3.452.978.978 2.175 1.267 3.452 1.326 1.28.059 1.689.071 7.148.071s5.868-.012 7.148-.071c1.277-.059 2.474-.348 3.452-1.326.978-.978 1.267-2.175 1.326-3.452.059-1.28.071-1.689.071-7.148s-.012-5.868-.071-7.148c-.059-1.277-.348-2.474-1.326-3.452C20.827.42 19.63.131 18.352.072 17.072.013 16.663 0 13.404 0H12z" />
        <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8.001a3.999 3.999 0 0 1 0 8z" />
        <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
);

// --- GEMINI API CALLER (left intact) ---
const callGeminiApi = async (systemPrompt, userQuery, maxRetries = 3) => {
    const apiKey = ""; // Canvas or environment should provide this
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    let delay = 1000;
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                if (response.status === 429 || response.status >= 500) {
                    throw new Error(`API Error: ${response.status}`);
                } else {
                    const errorResult = await response.json();
                    console.error('Gemini API client error:', errorResult);
                    return `Error: ${errorResult.error?.message || 'Failed to call API.'}`;
                }
            }

            const result = await response.json();
            const candidate = result.candidates?.[0];

            if (candidate && candidate.content?.parts?.[0]?.text) {
                return candidate.content.parts[0].text;
            } else {
                throw new Error('Invalid API response structure.');
            }
        } catch (error) {
            if (i === maxRetries - 1) {
                console.error('Gemini API call failed after max retries:', error);
                return `Error: ${error.message || 'API call failed.'}`;
            }
            await new Promise(res => setTimeout(res, delay));
            delay *= 2;
        }
    }
    return 'Error: API call failed after all retries.';
};

// --- PROJECTS DATA: keep only Aqua Guardian ---
const PROJECTS_DATA = [
    {
        id: 100,
        title: 'Aqua Guardian: Environmental Buoy',
        slug: 'aqua-guardian',
        tags: ['iot', 'sensors', 'cellular', 'environment', 'ph', 'dissolved-oxygen', 'turbidity', 'temperature', 'ec', 'orp', 'ESP32'],
        shortDescription: 'Student-built, cellular-enabled IoT buoy with an industrial-grade sensor array for real-time water quality monitoring.',
        description: `The Aqua-Guardian is a student-built, cellular-enabled IoT buoy equipped with an industrial-grade sensor array (pH, Dissolved Oxygen, Turbidity, Temperature, EC, and ORP) to provide real-time, continuous monitoring of our local water resources.

The project addresses the existing data gap in water quality monitoring by focusing on three key components:

1. AI-Enhanced Risk Scoring: We process raw sensor data to generate clear, actionable indicators, such as an automatic flag for Nutrient Enrichment (potential sewage) and an Algal Bloom Risk Score.
2. Policy & Advocacy Focus: This system directs human attention to high-risk areas and provides the suitable evidence needed for citizens and officials to advocate for stronger environmental policy.
3. Testing & Validation: We plan to conduct a local pilot program where sensor data from Lake Elkhorn is continuously fed into the system. We will validate the AI's risk scores by cross-referencing them with independent, lab-certified environmental data to confirm accuracy and reliability.

We believe that building a high-impact, open-source technology is a direct way to help the community.`,
        partsList: [
            'Cellular Modem (LTE Cat-M / NB-IoT)',
            'ESP32 (or similar microcontroller)',
            'Industrial pH Probe',
            'Dissolved Oxygen (DO) Probe',
            'Turbidity Sensor (optical)',
            'Temperature Sensor (PT100/DS18B20)',
            'Conductivity (EC) Probe',
            'ORP Probe',
            'Solar Panel & Charge Controller',
            '18650 Battery Pack with Battery Management',
            'Waterproof Buoy Enclosure & Mounting Hardware',
            'Onboard Edge Compute Module (optional for preprocessing)'
        ],
        images: [
            'https://placehold.co/1200x800/00B7C2/072A40?text=Aqua+Guardian+Buoy+Prototype',
            'https://placehold.co/1200x800/072A40/F6F7F9?text=Sensor+Array+Closeup',
            'https://placehold.co/1200x800/FF7A3D/F6F7F9?text=Lake+Elkhorn+Pilot+Deployment'
        ],
        repoLink: 'https://github.com/atholton-e-club/aqua-guardian',
        pdfLink: '#',
        youtubeId: null,
    }
];

const ALL_TAGS = [...new Set(PROJECTS_DATA.flatMap(p => p.tags))].sort();

const EVENTS_DATA = [
    {
        id: 1,
        title: 'Weekly Meeting & Open Lab',
        date: 'Every Thursday',
        time: '3:30 PM – 5:00 PM',
        location: 'E172 (The "Makerspace")',
        description: 'Our regular weekly meeting. We\'ll cover club announcements and Aqua Guardian project updates, followed by open lab time. Work on your projects, ask mentors for help, or just hang out. New members welcome!',
        organizer: 'Dr. Evelyn Reed',
        contact: 'ereed@atholton.edu',
    },
    {
        id: 2,
        title: 'Workshop: Intro to Soldering',
        date: 'Friday, November 14, 2025',
        time: '4:00 PM – 6:00 PM',
        location: 'Electronics Bench (E172)',
        description: 'Learn the fundamentals of through-hole soldering. We\'ll provide practice kits and teach you how to make clean, strong solder joints. No experience necessary. Spots are limited!',
        organizer: 'Jane Doe (Club President)',
        contact: 'jane.doe@student.atholton.edu',
    },
    {
        id: 3,
        title: 'Guest Speaker: Chesapeake Bay Foundation',
        date: 'Tuesday, November 25, 2025',
        time: '1:00 PM (Lunch Period)',
        location: 'Auditorium',
        description: 'A field researcher from the Chesapeake Bay Foundation will discuss the importance of water quality monitoring and how data from projects like Aqua Guardian can help. Pizza provided.',
        organizer: 'Dr. Evelyn Reed',
        contact: 'ereed@atholton.edu',
    },
];

const MENTORS_DATA = [
    {
        id: 1,
        name: 'Arif Khan',
        title: 'Mentor / Software Engineer',
        bio: 'Arif is a software engineer at Dundalk Enterprises with experience in multiple programming languages (Python, JavaScript, C++). He mentors students on software architecture, IoT backends, and coding best practices.',
        officeHours: 'By Appointment',
        imageUrl: 'https://placehold.co/400x400/072A40/F6F7F9?text=Arif+Khan',
    },
    {
        id: 2,
        name: 'Radhika Wijetunge',
        title: "Project Manager, Stormwater Management Division — Howard County DPW, Bureau of Environmental Services",
        bio: "Radhika is a Project Manager with the Stormwater Management Division of Howard County's Department of Public Works' Bureau of Environmental Services. A civil engineer with degrees from Princeton and Yale, graduate work at MIT, and expertise in computer mapping and modeling.",
        officeHours: 'By Appointment',
        imageUrl: 'https://placehold.co/400x400/00B7C2/072A40?text=Radhika+Wijetunge',
    },
];

const TEAM_DATA = [
    {
        id: 1,
        name: 'Austen',
        title: 'President / Electrical Team Lead',
        imageUrl: 'https://placehold.co/400x400/072A40/F6F7F9?text=Austen',
    },
    {
        id: 2,
        name: 'Anwar',
        title: 'President / Mechanical Team Lead',
        imageUrl: 'https://placehold.co/400x400/00B7C2/072A40?text=Anwar',
    },
    {
        id: 3,
        name: 'Simar',
        title: 'Vice President / Electrical Team Lead',
        imageUrl: 'https://placehold.co/400x400/FF7A3D/F6F7F9?text=Simar',
    },
    {
        id: 4,
        name: 'Shalin',
        title: 'Vice President / Software Team Lead',
        imageUrl: 'https://placehold.co/400x400/F6F7F9/072A40?text=Shalin',
    },
    {
        id: 5,
        name: 'Ayaan',
        title: 'Outreach',
        imageUrl: 'https://placehold.co/400x400/072A40/00B7C2?text=Ayaan',
    },
    {
        id: 6,
        name: 'Viviswan',
        title: 'Software Team Lead',
        imageUrl: 'https://placehold.co/400x400/00B7C2/072A40?text=Viviswan',
    },
];

const RESOURCES_DATA = [
    { id: 1, title: 'Club GitHub Organization', description: 'All our open-source projects, code libraries, and design files.', link: '#', type: 'code' },
    { id: 101, title: 'DFRobot', description: 'Our primary parts supplier, offering a huge range of sensors and microcontrollers.', link: 'https://www.dfrobot.com/', type: 'supplier' },
    { id: 2, title: 'Soldering 101 Cheatsheet', description: 'A printable 1-page PDF guide to solder joint inspection and best practices.', link: '#', type: 'cheatsheet' },
    { id: 3, title: 'Recommended Starter Kit (Amazon)', description: 'A link to the Elegoo Arduino kit we recommend for all new members.', link: '#', type: 'kit' },
    { id: 102, title: 'Howard County Sierra Club', description: 'Our local partner in environmental stewardship and a supporter of the Aqua Guardian project.', link: 'https://www.sierraclub.org/maryland/howard-county-group', type: 'partner' },
    { id: 5, title: 'Soldering 101 Cheatsheet (Alternate)', description: 'Quick reference for soldering best practices.', link: '#', type: 'cheatsheet' },
];

const SAMPLE_CODE_SNIPPET = `
/*
 * Aqua Guardian - Data Reading Snippet (ESP32)
 * This is a simplified example of the core logic.
 * Full code available in the project's GitHub repo.
 */

#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 4    // DS18B20 Temp Sensor
#define TURBIDITY_PIN 36  // Analog Turbidity Sensor

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(115200);
  sensors.begin();
  Serial.println("Aqua Guardian Sensor Node Booting...");
}

void loop() {
  // Request temperature
  sensors.requestTemperatures(); 
  float tempC = sensors.getTempCByIndex(0);

  // Read turbidity
  float turbidityVoltage = analogRead(TURBIDITY_PIN) * (3.3 / 4095.0);
  // Simple conversion (requires calibration)
  float ntu = -1120.4 * sq(turbidityVoltage) + 5742.3 * turbidityVoltage - 4352.9;

  Serial.print("Temp: ");
  Serial.print(tempC);
  Serial.print(" °C, ");
  Serial.print("Turbidity: ");
  Serial.print(ntu);
  Serial.println(" NTU");

  // In real code, this data would be sent
  // via WiFi/LoRa to a cloud dashboard.
  
  delay(5000); // Read every 5 seconds
}
`;

// --- HELPER COMPONENTS ---
const GridBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: 'linear-gradient(to right, #00B7C2 1px, transparent 1px), linear-gradient(to bottom, #00B7C2 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: '0.05',
                maskImage: 'radial-gradient(ellipse at center, white 0%, transparent 70%)',
            }}
        ></div>
    </div>
);

const Button = ({ children, onClick, variant = 'primary', className = '', href, target, ...props }) => {
    const baseClasses = 'inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-dark disabled:opacity-50 disabled:cursor-not-allowed';

    const styles = {
        primary: 'bg-teal text-navy hover:bg-orange hover:text-white focus:ring-orange',
        secondary: 'bg-gray-light text-navy hover:bg-navy-light hover:text-white focus:ring-teal',
        outline: 'bg-transparent border-2 border-teal text-teal hover:bg-teal hover:text-navy focus:ring-teal'
    };

    if (href) {
        return (
            <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`${baseClasses} ${styles[variant]} ${className}`} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors z-10"
                    aria-label="Close modal"
                >
                    <XIcon className="w-8 h-8" />
                </button>
                {children}
            </div>
        </div>
    );
};

const ProjectCard = ({ project, onClick }) => (
    <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
        onClick={onClick}
    >
        <div className="relative">
            <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/072A40/F6F7F9?text=Image+Not+Found'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
                {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="inline-block bg-teal text-navy text-xs font-bold px-2 py-1 rounded-full mr-2">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold font-display text-navy mb-2 group-hover:text-teal transition-colors">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.shortDescription}</p>
            <div className="flex justify-between items-center mt-6">
                <span className="text-sm font-semibold text-orange group-hover:underline">View Details</span>
                <GithubIcon
                    className="w-6 h-6 text-gray-400 group-hover:text-navy transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.repoLink, '_blank');
                    }}
                />
            </div>
        </div>
    </div>
);

const ProjectModalContent = ({ project, onClose }) => {
    const [currentImage, setCurrentImage] = useState(project.images[0]);

    // --- Gemini State ---
    const [geminiResponse, setGeminiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGeminiProjectHelper = async () => {
        setIsLoading(true);
        setError(null);
        setGeminiResponse('');

        const systemPrompt = `You are a helpful and creative assistant for a high school electronics club. Be encouraging and provide clear, actionable ideas. Format your response with simple markdown (bolding and newlines).`;
        const userQuery = `
      A student is looking at this project:
      - Title: "${project.title}"
      - Description: "${project.description}"
      - Key Concepts: ${project.tags.join(', ')}

      Please provide the following, formatted nicely for a webpage:
      1.  **Three Potential Next Steps:** What are 3 concrete improvements or advanced features they could add to this project?
      2.  **Two Similar Project Ideas:** What are 2 other projects they might like if they enjoyed this one?
      3.  **Simple Explanation:** Briefly explain the most important concept (like "${project.tags[0]}") in simple terms for a beginner.
    `;

        const response = await callGeminiApi(systemPrompt, userQuery);

        if (response.startsWith('Error:')) {
            setError(response);
        } else {
            setGeminiResponse(response);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Gallery */}
                <div className="relative p-6 bg-gray-light rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                    <img
                        src={currentImage}
                        alt={project.title}
                        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
                        onError={(e) => e.target.src = 'https://placehold.co/600x400/072A40/F6F7F9?text=Image+Not+Found'}
                    />
                    {project.images.length > 1 && (
                        <div className="flex space-x-2 mt-4">
                            {project.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all ${currentImage === img ? 'ring-2 ring-orange' : 'opacity-60 hover:opacity-100'}`}
                                    onClick={() => setCurrentImage(img)}
                                />
                            ))}
                        </div>
                    )}
                    {project.youtubeId && (
                        <div className="mt-4">
                            <iframe
                                className="w-full aspect-video rounded-lg"
                                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>

                {/* Project Info */}
                <div className="p-8 max-h-[85vh] overflow-y-auto">
                    <h2 className="text-3xl font-bold font-display text-navy mb-4">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag} className="inline-block bg-teal text-navy text-sm font-bold px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h4 className="text-lg font-semibold font-display text-navy mt-6 mb-2">Project Summary</h4>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>

                    <h4 className="text-lg font-semibold font-display text-navy mt-6 mb-2">Parts List</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        {project.partsList.map(part => (
                            <li key={part}>{part}</li>
                        ))}
                    </ul>

                    {/* --- AI HELPER SECTION --- */}
                    <div className="bg-gray-light p-6 rounded-lg mt-8 border border-teal/30">
                        <h4 className="text-lg font-semibold text-navy mb-4 flex items-center font-display">
                            <SparklesIcon className="w-5 h-5 text-orange mr-2" />
                            ✨ AI Project Helper
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Stuck? Or want to know where to go next? Get some ideas from our AI assistant!
                        </p>
                        <Button
                            onClick={handleGeminiProjectHelper}
                            variant="outline"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Thinking...' : 'Suggest Next Steps & Ideas'}
                        </Button>

                        <div className="mt-6">
                            <GeminiResponseDisplay
                                isLoading={isLoading}
                                error={error}
                                response={geminiResponse}
                            />
                        </div>
                    </div>
                    {/* --- END AI HELPER --- */}

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button href={project.repoLink} target="_blank" variant="primary" className="w-full sm:w-auto">
                            View on GitHub
                        </Button>
                        <Button href={project.pdfLink} target="_blank" variant="secondary" className="w-full sm:w-auto">
                            Download Build Guide
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EventCard = ({ event }) => (
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

const CodeSnippet = ({ codeString, language = 'cpp' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const ta = document.createElement('textarea');
        ta.value = codeString;
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(ta);
    };

    return (
        <div className="bg-navy-dark rounded-xl shadow-lg my-8">
            <div className="flex justify-between items-center px-4 py-2 border-b border-navy-light">
                <span className="text-sm text-gray-400">Example Code: {language}</span>
                <button
                    onClick={handleCopy}
                    className="text-sm bg-navy-light text-teal px-3 py-1 rounded-md hover:bg-teal hover:text-navy transition-colors"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto text-sm text-gray-200">
                <code className={`language-${language}`}>
                    {codeString.trim()}
                </code>
            </pre>
        </div>
    );
};

const AquaGuardianPanel = () => {
    const [telemetry, setTelemetry] = useState({
        temp: 18.2,
        turbidity: 4.8,
        algae: 120.5,
        status: 'Operational'
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTelemetry(prev => ({
                temp: parseFloat((prev.temp + (Math.random() - 0.5) * 0.2).toFixed(1)),
                turbidity: parseFloat(Math.max(0, prev.turbidity + (Math.random() - 0.5) * 0.5).toFixed(1)),
                algae: parseFloat(Math.max(50, prev.algae + (Math.random() - 0.5) * 5).toFixed(1)),
                status: 'Operational'
            }));
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-navy-dark rounded-xl shadow-2xl p-6 border-2 border-teal/30">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white font-display">Aqua Guardian: Live Data</h3>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">LIVE</span>
                </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">Simulated telemetry from our environmental monitoring buoy.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center bg-navy-light p-4 rounded-lg">
                    <div className="text-sm text-gray-300 mb-1">Water Temp</div>
                    <div className="text-4xl font-bold text-orange tracking-tight">
                        {telemetry.temp}<span className="text-2xl opacity-70">°C</span>
                    </div>
                </div>
                <div className="text-center bg-navy-light p-4 rounded-lg">
                    <div className="text-sm text-gray-300 mb-1">Turbidity</div>
                    <div className="text-4xl font-bold text-teal tracking-tight">
                        {telemetry.turbidity}<span className="text-2xl opacity-70"> NTU</span>
                    </div>
                </div>
                <div className="text-center bg-navy-light p-4 rounded-lg">
                    <div className="text-sm text-gray-300 mb-1">Algae Sensor</div>
                    <div className="text-4xl font-bold text-white tracking-tight">
                        {telemetry.algae}<span className="text-2xl opacity-70"> mV</span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6 text-sm text-gray-500">
                Status: <span className="text-green-400">{telemetry.status}</span>
            </div>
        </div>
    );
};

const GeminiResponseDisplay = ({ isLoading, error, response }) => {
    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-6">
                <SparklesIcon className="w-6 h-6 text-teal animate-spin" />
                <span className="ml-3 text-gray-600">Generating...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
                <p><strong>Error:</strong> {error}</p>
            </div>
        );
    }

    if (!response) {
        return null;
    }

    const formattedResponse = response
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');

    return (
        <div
            className="text-gray-700 leading-relaxed space-y-2"
            dangerouslySetInnerHTML={{ __html: formattedResponse }}
        />
    );
};

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

const Footer = ({ onNavClick }) => (
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

const PageContainer = ({ title, icon, children }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-center mb-8">
            <div className="p-3 bg-teal/10 rounded-lg mr-4">
                {icon}
            </div>
            <h1 className="text-4xl font-bold font-display tracking-tight text-navy">{title}</h1>
        </div>
        {children}
    </div>
);

const HomePage = ({ onNavClick }) => {
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

const AboutPage = () => (
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

const ProjectsPage = ({ initialProjectId }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTags, setActiveTags] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (initialProjectId) {
            const projectToOpen = PROJECTS_DATA.find(p => p.id === initialProjectId);
            if (projectToOpen) {
                setSelectedProject(projectToOpen);
            }
        }
    }, [initialProjectId]);

    const toggleTag = (tag) => {
        setActiveTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const filteredProjects = useMemo(() => {
        return PROJECTS_DATA.filter(project => {
            const lowerSearch = searchTerm.toLowerCase();
            const titleMatch = project.title.toLowerCase().includes(lowerSearch);
            const descMatch = project.shortDescription.toLowerCase().includes(lowerSearch);
            const tagTextMatch = project.tags.some(tag => tag.toLowerCase().includes(lowerSearch));

            const tagFilterMatch = activeTags.length === 0 || activeTags.every(tag => project.tags.includes(tag));

            return (titleMatch || descMatch || tagTextMatch) && tagFilterMatch;
        });
    }, [searchTerm, activeTags]);

    return (
        <>
            <PageContainer title="Club Projects" icon={<LayersIcon className="w-8 h-8 text-teal" />}>
                {/* Filter Bar */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Search Projects
                            </label>
                            <input
                                type="text"
                                id="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="e.g., 'Aqua Guardian', 'sensors', or 'cellular'"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Filter by Tag
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {ALL_TAGS.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeTags.includes(tag)
                                            ? 'bg-navy text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                        ))
                    ) : (
                        <p className="text-gray-600 md:col-span-3 text-center">
                            No projects match your search criteria.
                        </p>
                    )}
                </div>
            </PageContainer>

            {/* Project Modal */}
            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && <ProjectModalContent project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </Modal>
        </>
    );
};

const EventsPage = () => (
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

const ResourcesPage = () => {
    const [conceptQuery, setConceptQuery] = useState('');
    const [geminiResponse, setGeminiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGeminiExplainer = async (e) => {
        e.preventDefault();
        if (!conceptQuery.trim()) return;

        setIsLoading(true);
        setError(null);
        setGeminiResponse('');

        const systemPrompt = `You are a friendly and knowledgeable electronics tutor for a high school student. Explain the following concept clearly and concisely in one or two paragraphs. Use simple analogies if possible and avoid overly technical jargon. Format with simple markdown (bolding and newlines).`;

        const response = await callGeminiApi(systemPrompt, conceptQuery);

        if (response.startsWith('Error:')) {
            setError(response);
        } else {
            setGeminiResponse(response);
        }
        setIsLoading(false);
    };

    return (
        <PageContainer title="Learning Resources" icon={<BookOpenIcon className="w-8 h-8 text-teal" />}>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl">
                A collection of tutorials, cheatsheets, recommended kits, and club documentation to help you build.
            </p>

            {/* --- AI Tech Explainer --- */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12 border-2 border-teal/30">
                <div className="flex items-center mb-4">
                    <SparklesIcon className="w-8 h-8 text-orange mr-3" />
                    <h2 className="text-2xl font-bold font-display text-navy">✨ AI Tech Explainer</h2>
                </div>
                <p className="text-gray-600 mb-6">
                    Have a question about a concept or component? Ask our AI tutor!
                </p>
                <form onSubmit={handleGeminiExplainer} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={conceptQuery}
                        onChange={(e) => setConceptQuery(e.target.value)}
                        placeholder="e.g., 'What is a turbidity sensor?' or 'Explain I2C'"
                        className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                        disabled={isLoading}
                    />
                    <Button type="submit" variant="primary" className="!py-3" disabled={isLoading}>
                        {isLoading ? 'Thinking...' : 'Explain'}
                    </Button>
                </form>
                <div className="mt-6 min-h-[50px]">
                    <GeminiResponseDisplay
                        isLoading={isLoading}
                        error={error}
                        response={geminiResponse}
                    />
                </div>
            </div>
            {/* --- End AI Tech Explainer --- */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RESOURCES_DATA.map(resource => (
                    <a
                        key={resource.id}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
                    >
                        <h3 className="text-lg font-bold font-display text-navy mb-2">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                        <span className="inline-block bg-orange/10 text-orange text-xs font-bold px-3 py-1 rounded-full capitalize">
                            {resource.type}
                        </span>
                    </a>
                ))}
            </div>

            {/* Code Playground / Snippet Viewer */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold font-display text-navy mb-4">Code Snippet Example</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Here's a sample of the code from our <strong className="text-navy">Aqua Guardian</strong> project. You can find the full repository on our <a href="#" onClick={() => alert('This would link to the projects page/repo')} className="text-teal underline hover:text-orange">Projects</a> page.
                </p>
                <CodeSnippet codeString={SAMPLE_CODE_SNIPPET} language="cpp" />
            </div>
        </PageContainer>
    );
};

const JoinAndContactPage = () => {
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



