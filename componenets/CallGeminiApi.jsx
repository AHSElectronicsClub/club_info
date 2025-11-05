export default callGeminiApi = async (systemPrompt, userQuery, maxRetries = 3) => {
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
