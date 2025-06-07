# Weather CLI Application

This is a command line interface (CLI) application that allows users to ask questions about the weather in a specific zip code and city/state. The application fetches weather data from a specified URL and sends it to an OpenAI language model to generate responses.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/weather-cli-app.git
   ```

2. Navigate to the project directory:
   ```
   cd weather-cli-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application, use the following command in your terminal:

```
ts-node src/app.ts 
```

### Example

```

rmartinez@BIBOYGPDLINUX:~/codes/rag-demo-weather/weather-cli-app$ ts-node src/app.ts 


Hello! Tell me where you are located? Hello there! I am from Beverly Hills 90210 California.
Parsed Zip Code: 90210
[DEBUG] Fetching weather data from: https://mp6c02dee9ef0803dfc7.free.beeceptor.com/get-weather?zip=90210
AI Response: Today in Beverly Hills, CA, the current temperature is 78°F with clear skies and a light breeze. Enjoy the warm and clear weather throughout the day!


Hello! Tell me where you are located? I from Torrance CA
Parsed Zip Code: NO_ZIP
No valid zip code found in the input. Please try again.


Hello! Tell me where you are located? I am from Torrance 90503 CA
Parsed Zip Code: 90503
[DEBUG] Fetching weather data from: https://mp6c02dee9ef0803dfc7.free.beeceptor.com/get-weather?zip=90503
No weather data found for the provided zip code. Please try again.


Hello! Tell me where you are located? I from Montery Park, CAlifornia 91754
Parsed Zip Code: 91754
[DEBUG] Fetching weather data from: https://mp6c02dee9ef0803dfc7.free.beeceptor.com/get-weather?zip=91754
AI Response: Good morning from Monterey Park, CA! Today's weather is partly cloudy with a high of 80°F and a low of 60°F. Don't forget your sunglasses for the afternoon sun! ☀️


```


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.