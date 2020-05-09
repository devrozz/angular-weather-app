export class WeatherModel {
    constructor(
        public date: string,
        public icon: string,
        public temperature: string,
        public feelsLike: string,
        public humidity: string,
        public cloudiness: string
    ){}
}
