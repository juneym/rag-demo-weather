class WeatherService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getWeatherByZip(zip: string): Promise<any> {
        try {
            const response = await fetch(`${this.apiUrl}/weather?zip=${zip}`);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch weather data');
        }
    }
}

export default WeatherService;