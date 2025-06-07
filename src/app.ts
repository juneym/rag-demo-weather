import * as readline from 'readline';
import WeatherService from './services/weatherService';
import { OpenAIService } from './services/openAIService';
import { parseInput } from './utils/index';
import * as fs from 'fs';
import * as path from 'path';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const weatherService = new WeatherService('https://mp6c02dee9ef0803dfc7.free.beeceptor.com');

const apiKeyPath = path.resolve(__dirname, '/openapi.apikey');
if (!fs.existsSync(apiKeyPath)) {
    console.error('API key file not found. Please create openapi.apikey with your OpenAI API key.');
    process.exit(1);
}
const llmApiKey = fs.readFileSync(apiKeyPath, 'utf-8').trim();

const openAIService = new OpenAIService(llmApiKey, 'gpt-3.5-turbo');

const askQuestion = () => {
    rl.question('Please enter a zip code and city/state (e.g., 90210, Beverly Hills, CA): ', async (input) => {
        const { zip, city } = parseInput(input);
        
        try {
            const weatherData = await weatherService.getWeatherByZip(zip);
            const aiResponse = await openAIService.sendToOpenAI(weatherData);
            console.log(`AI Response: ${aiResponse}`);
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            askQuestion();
        }
    });
};

askQuestion();