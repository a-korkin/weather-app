export interface WeatherResponse {
    name: string;
    weather: IWeather[];
    main: IMain;
    wind: IWind;
    sys: ISys;
}

interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface IMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface IWind {
    speed: number;
    deg: number;
    gust: number;
}

interface ISys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}
