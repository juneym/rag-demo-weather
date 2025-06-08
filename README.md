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
   git clone https://github.com/juneym/rag-demo-weather.git
   ```

2. Navigate to the project directory:
   ```
   cd rag-demo-weather
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage


Note: Ensure that `.env` is created with your own personal OpenAPI API secret

```
   echo 'OPENAI_API_KEY=<your OpenAPI Key>' > .env
```

The `.env` is in the `.gitignore` file to prevent accidental commit.


To run the application, use the following command in your terminal:

```
ts-node src/app.ts 
```

### Example

```

rmartinez@BIBOYGPDLINUX:~/codes/ai-engineering/rag-demo-weather$ ts-node src/app.ts 


Hello! Tell me where you are located? Hello there! I am from Beverly Hills 90210 California.
Parsed Zip Code: 90210
[DEBUG] Fetching weather data from: https://mp6c02dee9ef0803dfc7.free.beeceptor.com/get-weather?zip=90210

WEATHER IN YOUR AREA:
Today in Beverly Hills, CA, the current temperature is 78°F with clear skies and a light breeze. Enjoy the warm and clear weather throughout the day!


Hello! Tell me where you are located? I from Torrance CA
Parsed Zip Code: NO_ZIP
No valid zip code found in the input. Please try again.


Hello! Tell me where you are located? I am from Torrance 90503 CA
Parsed Zip Code: 90503
[DEBUG] Fetching weather data from: https://mp6c02dee9ef0803dfc7.free.beeceptor.com/get-weather?zip=90503

WEATHER IN YOUR AREA:
No weather data found for the provided zip code. Please try again.


Hello! Tell me where you are located? I from Montery Park, CAlifornia 91754
Parsed Zip Code: 91754
[DEBUG] Fetching weather data from: https://mp6c02dee9ef0803dfc7.free.beeceptor.com/get-weather?zip=91754

WEATHER IN YOUR AREA: 
Good morning! Today in Monterey Park, CA, the current temperature is 75°F with partly cloudy skies. It's a great day to get outside and enjoy the weather. Have a wonderful day!


```


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.