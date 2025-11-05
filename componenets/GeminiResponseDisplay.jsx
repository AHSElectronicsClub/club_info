export default GeminiResponseDisplay = ({ isLoading, error, response }) => {
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
