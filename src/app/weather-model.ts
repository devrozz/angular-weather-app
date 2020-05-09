export class WeatherModel {
    constructor(
        public city: string,
        public date: string,
        public temperature: string,
        public windchill: string,
        public humidity: string,
        public cloudiness: string
    ){}
}
