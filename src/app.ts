import * as readline from 'readline';
import WeatherService from './services/weatherService';
import { OpenAIService } from './services/openAIService';
import { parseInput } from './utils/index';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// see data/weather.json for the mock data
const weatherService = new WeatherService('https://mp6c02dee9ef0803dfc7.free.beeceptor.com');


const llmApiKey = process.env.OPENAI_API_KEY;
if (!llmApiKey) {
    console.error('Error: OPENAI_API_KEY is not set in the environment variables.');
    process.exit(1);
}   

const openAIService = new OpenAIService(llmApiKey, 'gpt-3.5-turbo');

const askQuestion = () => {
    rl.question('\n\nHello! Tell me where you are located? ', async (input) => {
        //const { zip, city } = parseInput(input);
        
        try {
            const zipCodeParsed = await openAIService.parseZipCode(input);
            console.log(`Parsed Zip Code: ${zipCodeParsed}`);
            if (zipCodeParsed === 'NO_ZIP') {
                console.error('No valid zip code found in the input. Please try again.');
                askQuestion();
                return;
            }

            const weatherData = await weatherService.getWeatherByZip(zipCodeParsed);
            if (weatherData === 'NO_WEATHER_DATA_FOR_ZIP') {
                console.error('\nWEATHER IN YOUR AREA: No weather data found for the provided zip code. Please try again.');
                askQuestion();
                return;
            } 

            const aiResponse = await openAIService.makeAFriendlyWeatherMessage(weatherData);
            console.log(`\nWEATHER IN YOUR AREA:\n${aiResponse}`);
        } catch (error) {
            console.error('Error:', (error as Error).message);
        } finally {
            askQuestion();
        }
    });
};

askQuestion();