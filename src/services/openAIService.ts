import axios from 'axios';

export class OpenAIService {
    private apiKey: string;
    private apiUrl: string;
    private modelName: string;

    constructor(apiKey: string, modelName: string) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://api.openai.com/v1/chat/completions'; // Example endpoint
        this.modelName = modelName;
    }

    public async sendToOpenAI(data: any): Promise<string> {
        try {
            const response = await axios.post(this.apiUrl, {
                model: this.modelName, 
                messages: [{ role: 'user', content: JSON.stringify(data) }],
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data.choices[0].message.content;
        } catch (error) {
            throw new Error(`Error communicating with OpenAI: ${error.message}`);
        }
    }
}