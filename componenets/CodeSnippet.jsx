export default CodeSnippet = ({ codeString, language = 'cpp' }) => {
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
