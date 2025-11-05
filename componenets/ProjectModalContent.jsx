export default ProjectModalContent = ({ project, onClose }) => {
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
