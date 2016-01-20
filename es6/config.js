let {
  API_ID = '2de143494c0b295cca9337e1e96b00e0',
  HOST = '127.0.0.1',
  PORT = 8080,
  NODE_ENV = 'development',
  USERNAME = 'default'
  } = process.env;

const IS_PROD = NODE_ENV === 'production';

const UNITS = {
  STANDARD: 'standard',
  METRIC: 'metric',
  IMPERIAL: 'imperial'
};

const LANG = {
  PL: 'pl',
  EN: 'en'
};

const WEATHER_API = {
  API_ID,
  API_URL: 'http://api.openweathermap.org/data/2.5/weather',
  LANG: LANG.PL,
  UNITS: UNITS.METRIC
};

export default {
  HOST,
  IS_PROD,
  PORT,
  WEATHER_API
};
