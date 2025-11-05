export default ResourcesPage = () => {
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
