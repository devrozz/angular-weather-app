import { Component, OnInit } from '@angular/core';
import { WeatherModel } from '../weather-model';
import * as CanvasJS from '../../../canvasjs.min';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
 
  city: string;
  days: WeatherModel[] = [];
  chartShown: boolean;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  getCity($event) {
    this.city = $event;
  }

  getDays($event) {
    this.days = $event;
  }

  showChart($event) {
    if($event) {
      this.initChart();
    }
  }

  initChart() {
    if(this.days.length >= 2) {
      let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      backgroundColor: 'transparent',
      axisX: {
        labelFontColor: '#fff'
      },
      axisY: {
        labelFontColor: '#fff'
      },
      data: [{
        type: 'column',
        dataPoints: [
          { y: this.days[0].temperature, label: this.datePipe.transform(this.days[0].date, 'dd.M.')  },
          { y: this.days[1].temperature, label: this.datePipe.transform(this.days[1].date, 'dd.M.') },
          { y: this.days[2].temperature, label: this.datePipe.transform(this.days[2].date, 'dd.M.') },
          { y: this.days[3].temperature, label: this.datePipe.transform(this.days[3].date, 'dd.M.') },
          { y: this.days[4].temperature, label: this.datePipe.transform(this.days[4].date, 'dd.M.') }
        ]
      }]
    });
      chart.render();
    } else {
        let chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        backgroundColor: 'transparent',
        axisX: {
          labelFontColor: '#fff'
        },
        axisY: {
          labelFontColor: '#fff'
        },
        data: [{
          type: 'column',
          dataPoints: [
            { y: this.days[0].temperature, label: this.datePipe.transform(this.days[0].date, 'dd.M.')}
          ]
        }]
      });
      chart.render();
    }
  }    
}
