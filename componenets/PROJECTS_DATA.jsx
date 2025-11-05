export default PROJECTS_DATA = [
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
